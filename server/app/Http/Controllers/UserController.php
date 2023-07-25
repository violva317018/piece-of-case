<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    // 註冊
    public function signup(Request $request)
    {
        // return $request;
        // get 前端輸入的資訊
        $validatedData = $request->validate([
            'userName' => 'required|string',
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        // 轉成變數
        $userName = $validatedData['userName'];
        $email = $validatedData['email'];
        $password = $validatedData['password'];
        
        // Check if email already exists
        $emailExists = DB::select("SELECT COUNT(*) AS count FROM users WHERE email = ?", [$email])[0]->count;
        if ($emailExists) {
            return response()->json(['message' => 'Email has already registered', 'state' => '400']);
        }
        
        // 將使用者的密碼以安全的方式存儲在資料庫中
        $hashPassword = Hash::make($password);
        
        $result = DB::select("call signUp('$userName', '$email', '$hashPassword')");
        // return $result;
        return response()->json(['result' => $result, 'state' => '200']);
    }

    // 登錄
    public function login(Request $request)
    {
        // return $request;
        $validatedData = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        // 轉成變數
        $email = $validatedData['email'];
        $password = $validatedData['password'];

        // get hash password
        $hashPassword = DB::select("call getHashPassword(?)",[$email])[0]->hashpassword;;
        // 假如密碼匹配成功就登入
        if (Hash::check($password, $hashPassword)){
            $result = DB::select("CALL login('$email', '$hashPassword')");
            return $result;
        }else{
            return '帳號或密碼錯誤';
        }

//         // 查詢資料庫以獲取已雜湊的密碼
//         $user = DB::selectOne("SELECT hashpassword FROM users WHERE email = ?", [$email]);

//         if ($user) {
//             $hashPassword = $user->hashpassword;

//             // 使用 Hash::check 方法比對密碼
//             if (Hash::check($password, $hashPassword)) {
//                 $result = DB::select("CALL login(?, ?, @mytoken)", [$email, $password]);
//                 $tokenResult = DB::select("SELECT @mytoken AS token")[0]->token;
//                 if ($result[0]->result == '登入成功') {
//                     $response = [
//                         'result' => $result[0]->result,
//                         'token' => $tokenResult
//                     ];
//                 } else {
//                     $response = [
//                         'result' => $result[0]->result,
//                         'token' => null
//                     ];
//                 }
//                 return response($response, 201);
// >>>>>>> 02c247eb00d2f7d4304bcacdcaedec1bbdf90f07
//             } else {
//                 $response = [
//                     'result' => '帳號或密碼錯誤',
//                     'token' => null
//                 ];
//                 return response($response, 401);
//             }
//         } else {
//             $response = [
//                 'result' => '帳號不存在',
//                 'token' => null
//             ];
//             return response($response, 401);
//         }

    }


    // 登出
    public function logout(Request $request)
    {
        $token = $request->token;

        // 調用儲存過程
        $result = DB::select("CALL logout(?)", [$token]);

        // 獲取儲存結果資料
        // DB::select("SELECT @result AS result")[0]->result;

        return [
            'message' => $result
        ];
    }
}
