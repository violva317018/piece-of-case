<?php

namespace App\Http\Controllers;

use Auth;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class InformationController extends Controller {

    // 上傳圖片
    public function uploadPhoto(Request $request)
    {
        $userID = $request->userID;

        if (!$userID) {
            return response()->json(['message' => '請先登入'], 400);
        }

        $user = User::find($userID);
        // $user = \App\Models\User::find(1); // 使用 "userID" 查詢 ID 為 1 的用戶

        if (!$user) {
            return response()->json(['message' => '請先登入'], 400);
        }

        if ($request->hasFile('photo')) {
            // 處理上傳圖片
            $image = $request->file('photo');
            $filename = $image->getClientOriginalName();
            $uploadPic = Storage::disk('public')->put($filename, file_get_contents($image->getRealPath()));

            // 將圖片資料進行 base64 編碼
            $imageData = base64_encode(file_get_contents($image->getRealPath()));

            // 將圖片資料存儲到 users 資料表的 profilePhoto 欄位
            $user->profilePhoto = $imageData;
            $user->save();
        } else {
            // 使用默認圖片，路徑 public/upload/images.jpg
            $filename = '/uploads/images.jpg';
            // $imageData = base64_encode(file_get_contents(public_path($filename)));
        }

        // 回傳 userID 給前端
        return response()->json(['userID' => $userID], 200);
    }

    // 顯示圖片
    public function showPhoto($userID)
    {
        $user = User::find($userID);

        if (!$user || !$user->profilePhoto) {
            // 如果使用者不存在或頭像資料為空，返回預設圖片或其他錯誤處理
            return response()->json(['message' => '找不到頭像'], 404);
        }

        // 將編碼後的圖片資料返回給前端
        return response($user->profilePhoto)->header('Content-Type', 'image');
    }

    // 修改圖片
    public function updatePhoto($userID, $newProfilePhoto)
    {
        // 查詢使用者是否存在
        $user = User::find($userID);

        if (!$user) {
            return response()->json(['message' => '找不到使用者'], 404);
        }

        // 更新使用者的頭像
        DB::statement("CALL updateProfilePhoto(?, ?)", [$userID, $newProfilePhoto]);

        return response()->json(['message' => '更新頭像成功'], 200);
    }








    // 修改姓名
    public function updateUser($myUserName, $myUserID)
    {
        try {
            $result = DB::select('CALL newUserName(?, ?)', [$myUserName, $myUserID]);

            return response()->json(['result' => '修改姓名成功']);
        } catch (\Exception $e) {
            return response()->json(['result' => '修改姓名失败']);
        }
    }

    //修改電話 
    public function updatePhone($myuserID, $myphone)
    {
        try {
            DB::select("CALL newphone(?, ?)", [$myuserID, $myphone]);

            return response()->json(['result' => '修改電話成功']);
        } catch (\Exception $e) {
            return response()->json(['result' => '修改電話失败']);
        }
    }


    // 修改信箱
    public function updateEmail($myuserID, $myemail)
    {
        try {
            DB::select("CALL changeEmail(?, ?)", [$myuserID, $myemail]);

            return response()->json(['result' => '修改信箱成功']);
        } catch (\Exception $e) {
            return response()->json(['result' => '修改信箱失败']);
        }
    }

    // 更新自介
    public function updateEducation($myuserID, $myeducation)
    {
        DB::select("CALL newEducation(?,?)", [$myuserID, $myeducation]);
    }



    // 更新作品集
    public function updatePortfolio($myuserID, $myportfolio)
    {
        try {
            $result = DB::select("CALL newPortfolio(?, ?)", [$myuserID, $myportfolio]);

            $resultMessage = $result[0]->result;

            return response()->json(['result' => $resultMessage]);
        } catch (\Exception $e) {
            return response()->json(['result' => '更新作品集失败']);
        }
    }
    // newMajor
    // public function addMajor(Request $request)
    // {
    //     $myresumeID = request->input('myresumeID');
    //     $mybigClassID = request->input('mybigClassID');
    //     $myclassID = request->input('myclassID');
    //     $result = DB::select("call newMajor(?, ?, ?)", [$myresumeID, $mybigClassID, $myclassID]);

    //     $message = null;
    //     if (!empty($result)) {
    //         $message = $result[0]->result;
    //     }

    //     return response()->json(['result' => $message], 200);
    // }


    // 更新擅長
    public function updateSkills(Request $request)
    {
        $myuserID = $request->input('myuserID');
        $mysoftwore = $request->input('mysoftwore');

        DB::select("CALL newSoftwore(?, ?)", [$myuserID, $mysoftwore]);

        $result = DB::select("SELECT CASE
                                WHEN (SELECT COUNT(*) FROM myresume WHERE userID = ?) = 1 THEN '更新擅長工具成功'
                                ELSE '新增擅長工具成功'
                              END AS result", [$myuserID])[0]->result;

        return response()->json(['result' => $result]);
    }



}