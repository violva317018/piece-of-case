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
            // 'email' => 'required|string|unique:users|email',
            'email' => 'required|string|email',
            'password' => 'required|string'
            //  'password' => 'required|string|confirmed' 此範例沒有 confirmed 所以報422，前端有判斷所以可以省略
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

        // use hash password
        $hashPassword = bcrypt($password);
        // Insert new user
        // DB::insert("INSERT INTO users (userName, email, hashpassword) VALUES (?, ?, ?)", [$userName, $email, $hashPassword]);
        $result = DB::select("call signUp('$userName', '$email', '$password')");
        // return $result];
        return response()->json(['result' => $result, 'state' => '200']);

        // return response()->json(['result' => '註冊成功'], 201);
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
        $hashPassword = DB::select("call getHashPassword('$email')");
        $hashPassword = bcrypt($password);
        
        // $ishash = Hash::check($password, $hashedPassword->hashedpassword);
        // $ishash = Hash::check($password, '$2y$10$m5a.ZE402p5DZj/0ZOczleGZsda.TNkhRBDbwOtU5X/MBikDmbfM.');
        // return $ishash;


        // $result = DB::select("CALL your_procedure_name(?, ?, @mytoken)", [$email, $password]);
        $result = DB::select("call login('$email','$password')");
        return $result;

        if ($result->token !== null) {
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
        return $response;

        return response($response, 201);
    }


    // 登出
    public function logout(Request $request)
    {
        $user = $request->user();
        $token = $user->currentAccessToken();

        // 調用儲存過程
        DB::select("CALL your_procedure_name(?, @result)", [$token->id]);

        // 獲取儲存結果資料
        $result = DB::select("SELECT @result AS result")[0]->result;

        return [
            'message' => $result
        ];
    }
}
