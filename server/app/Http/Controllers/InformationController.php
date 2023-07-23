<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class InformationController extends Controller
{
    //進入我的帳戶
    public function enterProfile($token)
    {
        // return $token;
        // $token = $request->token;
        $result = DB::select("CALL enterProfile(?)", [$token]);
        return [
            'message' => $result
        ];
    }

    //修改大頭照
    public function uploadPhoto(Request $request)
    {
        // return $request->userID;
        if ($request->hasFile('photo')) {
            // return getimagesize($request->file('photo'));
            // 處理上傳圖片
            $image = $request->file('photo');
            $filename = $image->store('documents');
            $uploadPic = Storage::disk('public')->put($filename, file_get_contents($image->getRealPath()));
            $photoURL = Storage::disk('public')->url($filename);
            // return $photoURL;
            // $imageData = base64_encode(file_get_contents($image->getRealPath()));
            // return $imageData;
        } else {
            // 使用默認圖片，路徑 public/upload/images.jpg
            $filename = '/uploads/images.jpeg';
            $photoURL = Storage::disk('public')->url($filename);
        }

        $userID = $request->userID;
        // return DB::select("CALL newPhoto(?, ?)", [$userID, $photoURL])[0]->profilePhoto;
        // DB::statement("CALL newPhoto(?, ?)", [$userID, $photoURL]);

        $file = DB::select("CALL newPhoto(?, ?)", [$userID, $filename])[0]->profilePhoto;
        $newPhoto = Storage::get($file);
        return response()->json(['profilePhoto' => base64_encode($newPhoto)]);
        function base64EncodeImage($image_file)
        {
            $base64_image = '';
            $image_info = getimagesize($image_file);
            $image_data = fread(fopen($image_file, 'r'), filesize($image_file));
            $base64_image = 'data:' . $image_info['mime'] . ';base64,' . chunk_split(base64_encode($image_data));
            return $base64_image;
        };
        return base64EncodeImage($newPhoto);
        // return response()->file(storage_path('http://localhost/storage/123.jpg'));
    }


    // 修改姓名
    public function updateUser($myUserID, $myUserName)
    {
        // return $myUserName;
        try {
            $result = DB::select('CALL newUserName(?, ?)', [$myUserID, $myUserName]);
            return response()->json(['result' => '修改姓名成功']);
        } catch (\Exception $e) {
            return response()->json(['result' => '修改姓名失败']);
        }
    }

    //修改電話
    public function updatePhone($myuserID, $myphone)
    {
        try {
            DB::select("CALL newPhone(?, ?)", [$myuserID, $myphone]);

            return response()->json(['result' => '修改電話成功']);
        } catch (\Exception $e) {
            return response()->json(['result' => '修改電話失败']);
        }
    }


    // 修改信箱
    public function updateEmail($myuserID, $myemail)
    {
        try {
            DB::select("CALL newEmail(?, ?)", [$myuserID, $myemail]);

            return response()->json(['result' => '修改信箱成功']);
        } catch (\Exception $e) {
            return response()->json(['result' => '修改信箱失败']);
        }
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


    // 更新擅長工具
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


    // 更新專長
}