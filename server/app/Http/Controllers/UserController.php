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
        $hashPassword = bcrypt($password);

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
return $email;
        // get hash password
        $hashPassword = DB::select("call getHashPassword('?')",[$email]);

        // $ishash = Hash::check($password, $hashedPassword->hashedpassword);
        // $ishash = Hash::check($password, '$2y$10$m5a.ZE402p5DZj/0ZOczleGZsda.TNkhRBDbwOtU5X/MBikDmbfM.');
        // return $ishash;


        // $result = DB::select("CALL your_procedure_name(?, ?, @mytoken)", [$email, $password]);
        $result = DB::select("call login('$email','$password')");
        // return $result;
        if (Hash::check($password, $hashPassword)){
            $result = DB::select("CALL login(?, ?, @mytoken)", [$email, $password]);
            $tokenResult = DB::select("SELECT @mytoken AS token")[0]->token;
            if ($result[0]->result == '登入成功') {
                $response = [
                    'result' => $result[0]->result,
                    'token' => $tokenResult
                ];
            } else {
                $response = [
                    'result' => $result[0]->result,
                    'token' => null
                ];
            }
            return response($response, 201);
        } else {
            $response = [
                'result' => '帳號或密碼錯誤',
                'token' => null
            ];
            return response($response, 401);
        }

    }


    // 登出
    public function logout(Request $request)
    {
        $user = $request->user();
        $token = $user->currentAccessToken();

        // 調用儲存過程
        DB::select("CALL logout(?, @result)", [$token->id]);

        // 獲取儲存結果資料
        $result = DB::select("SELECT @result AS result")[0]->result;

        return [
            'message' => $result
        ];
    }
}
