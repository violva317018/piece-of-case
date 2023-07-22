<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // 註冊
    public function signup(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        $email = $validatedData['email'];

        // 信箱是否存在
        $emailExists = DB::select("SELECT COUNT(*) AS count FROM users WHERE email = ?", [$email])[0]->count;

        if ($emailExists) {
            return response()->json(['result' => '帳號重複'], 400);
        }

        // 新增使用者
        $userName = $validatedData['name'];
        // 將使用者的密碼以安全的方式存儲在資料庫中
        $hashPassword = bcrypt($validatedData['password']);

        DB::insert("INSERT INTO users (userName, email, hashpassword) VALUES (?, ?, ?)", [$userName, $email, $hashPassword]);

        return response()->json(['result' => '註冊成功'], 201);
    }

    // 登錄
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $email = $fields['email'];
        $password = $fields['password'];

        // 查詢資料庫以獲取已雜湊的密碼
        $user = DB::selectOne("SELECT hashpassword FROM users WHERE email = ?", [$email]);

        if ($user) {
            $hashPassword = $user->hashpassword;

            // 使用 Hash::check 方法比對密碼
            if (Hash::check($password, $hashPassword)) {
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
        } else {
            $response = [
                'result' => '帳號不存在',
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

        DB::select("CALL logout(?, @result)", [$token->id]);

        $result = DB::select("SELECT @result AS result")[0]->result;

        return [
            'message' => $result
        ];
    }

    
}