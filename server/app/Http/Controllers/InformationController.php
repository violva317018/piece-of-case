<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class InformationController extends Controller
{
    //進入我的帳戶
    public function enterProfile($token)
    {
        // $token = $request->token;
        $result = DB::select("CALL enterProfile(?)", [$token]);
        // return $result[0]->profilePhoto;
        if ($result[0]->profilePhoto){
            $file = $result[0]->profilePhoto;
            $Photo = Storage::get($file);
            $result[0]->profilePhoto = base64_encode($Photo);
        } else {
            $Photo = Storage::get('upload/images.jpeg');
            $result[0]->profilePhoto = base64_encode($Photo);
        }

        return [
            'message' => $result
        ];
    }

    //修改大頭照
    public function uploadPhoto(Request $request)
    {
        if ($request->hasFile('photo')) {
            $image = $request->file('photo');
            $filename = $image->store('documents');
        } else {
            // 使用默認圖片，路徑 public/upload/images.jpg
            $filename = 'upload/images.jpeg';
        }

        $userID = $request->userID;
        $file = DB::select("CALL newPhoto(?, ?)", [$userID, $filename])[0]->profilePhoto;
        $newPhoto = Storage::get($file);
        return response()->json(['profilePhoto' => base64_encode($newPhoto)]);
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

    //修改密碼
    public function checkOldPassword(Request $request)
    {
        // return gettype($request['myOldPassword']);

        $myUserID = $request['myUserID'];
        $myNewPassword = $request['myNewPassword'];
        $myOldPassword = (string)$request['myOldPassword'];
        $newHashpassword = Hash::make($myNewPassword);
        // return $newHashpassword;
        $oldHashPassword = DB::select("select hashpassword from users where userID = '$myUserID'")[0]->hashpassword;
        // return $hashPassword;
        // return Hash::check($myOldPassword, $oldHashPassword);
        if (Hash::check($myOldPassword, $oldHashPassword)) {
            // return '123';
            return DB::select("call newHashpassword('$myUserID', '$newHashpassword')")[0]->result;
        } else {
            return '原密碼錯誤';
        }




    }

    //修改電話
    public function updatePhone(Request $request)
    {
        $myuserID = $request['myUserID'];
        $myphone = $request['myPhone'];
        // return $myphone;
        $result = DB::select("CALL newPhone(?, ?)", [$myuserID, $myphone]);
        return response()->json(['result' => $result, 'phone' => $myphone]);
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

    //修改學經歷
    public function updateExperience(Request $request)
    {
        // return '123';
        $myuserID = $request['myUserID'];
        $myEucation = $request['myExperience'];
        $result = DB::select("CALL newEducation(?, ?)", [$myuserID, $myEucation]);
        return response()->json(['result' => $result, 'experience' => $myEucation]);
    }

    //修改作品集
    public function updatePortfolio(Request $request)
    {
        // return count($request->file('myPortfolio'));
        $file = $request->file('myPortfolio');
        $userID = $request->myUserID;
        $allFileName = '"';
        for($i = 0; $i < count($file); $i++){
            $fileName = $file[$i]->getClientOriginalName();
            $file[$i]->storeAs('files', $fileName);
            $allFileName .= (string)$fileName . ",";
        }
        $allFileName = substr($allFileName, 0, -1) . '"';
        $result = DB::select("CALL newPortfolio($userID, $allFileName)");
        return $result;
    }

    // 更新作品集
    // public function updatePortfolio($myuserID, $myportfolio)
    // {
    //     try {
    //         $result = DB::select("CALL newPortfolio(?, ?)", [$myuserID, $myportfolio]);
    //         $resultMessage = $result[0]->result;
    //         return response()->json(['result' => $resultMessage]);
    //     } catch (\Exception $e) {
    //         return response()->json(['result' => '更新作品集失败']);
    //     }
    // }


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







    // 提案紀錄
    public function getProposeCase(Request $request)
    {
        $userID = (int)$request['userID'];
        $caseStatus = $request['caseStatus'];
        $page = (int)$request['page'];
        $results = DB::select("CALL proposeCase(?, ?,?)", [$userID, $caseStatus,$page]);
        return $results;
    }

    // 接案紀錄
    public function getBidderCase(Request $request)
    {
        $userID = (int)$request['userID'];
        $caseStatus = $request['caseStatus'];
        $results = DB::select("CALL enterBidderCase(?, ?)", [$userID, $caseStatus]);
        return $results;
    }

    // 刪除案件
    public function deleteCase(Request $request)
    {
        $caseID = (int)$request['caseID'];
        $results = DB::select("CALL delCase(?)", [$caseID]);
        return $results;
    }

    // 下架案件
    public function cancelCase(Request $request)
    {
        $caseID = (int)$request['caseID'];
        $results = DB::select("CALL cancelCase(?)", [$caseID]);
        return $results;
    }

    // 修改案件
    public function caseRevise(Request $request)
    {
        $caseID = (int)$request['caseID'];
        $results = DB::select("CALL caseRevise(?)", [$caseID]);
        return $results;
    }
}