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
        return response()->json(['result' => $result, 'state' => '200']);
    }

    // 登錄
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        // 轉成變數
        $email = $validatedData['email'];
        $password = $validatedData['password'];

        // get hash password
        $hashPassword = DB::select("call getHashPassword(?)",[$email])[0]->hashpassword;
        // $result = DB::select("call login('$email','$password')");
        // return gettype($hashPassword);
        // return Hash::check('1234', $hashPassword);
        // $result = DB::select("CALL login(?, ?, @mytoken)", [$email, $password]);
        if (Hash::check($password, $hashPassword)){
            $result = DB::select("CALL login('$email', '$hashPassword')");
            return $result;
        } else {
            return '帳號或密碼錯誤';
        }

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
