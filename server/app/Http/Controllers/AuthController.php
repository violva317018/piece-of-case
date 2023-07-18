<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    // authentication
    function handleRegister(Request $request)
    {
        // get 前端輸入的資訊
        $email = $request->input('email');
        $userName = $request->input('userName');
        $password = $request->input('password');

        // call signUp (email, userName, pwd)
        $result = DB::select("call signUp('$userName', '$email', '$password')");

        // return 給前端
        return  $result ;
    }

    function handleLogin(Request $request)
    {
        // get 前端輸入的資訊
        $email = $request->input('email');
        $userName = $request->input('userName');
        $password = $request->input('password');

        // call signUp (email, userName, pwd)
        $result = DB::select("call signUp('$userName', '$email', '$password')");

        // return 給前端
        return  $result ;
    }

    // /api/getUserInfo
    // 取得個人資料
    function handleGetUserInfo($email)
    {
        // call getUserInfo (email)
        $result = DB::select("call getUserInfo('$email')");

        // return 給前端
        return $result;
    }
}
