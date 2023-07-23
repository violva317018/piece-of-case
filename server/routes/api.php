<?php
// 引入所有 Controller
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// 處理登入、註冊、登出
Route::post('/auth/signup', [UserController::class, 'signup']);
Route::post('/auth/login', [UserController::class, 'login']);
Route::post('/auth/logout', [UserController::class, 'logout']);


//InformationController
// prefix是前綴，域名/api/upload-photo
// Route::group(['prefix' => 'api'], function () {
// 上傳圖片
Route::post('uploadphoto', [InformationController::class, 'uploadPhoto']);
Route::post('update-user/{myUserName}/{myUserID}', [InformationController::class, 'updateUser']);
Route::post('update-phone/{myuserID}/{myphone}', [InformationController::class, 'updatePhone']);
Route::post('update-email/{myuserID}/{myemail}', [InformationController::class, 'updateEmail']);
Route::post('update-portfolio/{myuserID}/{myportfolio}', [InformationController::class, 'updatePortfolio']);
Route::post('update-skills', [InformationController::class, 'updateSkills']);

// 軟新增
Route::get('enterprofile/{token}',[InformationController::class, 'enterProfile']);
Route::post('upload-photo', [InformationController::class, 'uploadPhoto']);
Route::post('update-user/{myUserID}/{myUserName}', [InformationController::class, 'updateUser']);


// 上傳頭像
Route::post('/upload-photo', 'App\Http\Controllers\InformationController@uploadPhoto');

Route::get('/user/{userID}', 'InformationController@uploadPhoto');

// 顯示頭像
Route::get('/show-photo/{userID}', 'App\Http\Controllers\InformationController@showPhoto');
// 更新頭像
Route::put('/update-photo/{userID}', 'App\Http\Controllers\InformationController@updatePhoto');

// 新增案件、取的案件、地區篩選、類別篩選
Route::post('cases/addCase', [CasesController::class, 'insertCase']); // 新增案件
Route::get('cases/search', [CasesController::class, 'selectCases']);
Route::post('cases', [CasesController::class, 'getCases']); // 取得所有案件
Route::get('cases/getCitys', [CasesController::class, 'getCitys']); // 取得地區類別
Route::get('cases/getCategorys', [CasesController::class, 'getCategorys']); // 取得母類別
Route::get('cases/getSubCategorys', [CasesController::class, 'getSubCategorys']); // 取得子類別
Route::post('cases/checkstatus', [CasesController::class, 'checkStatus']);
Route::get('cases/getCaseInfo', [CasesController::class, 'getCaseInfo']); // 取得當前被點擊案件資訊
Route::get('cases/getSimilarCase', [CasesController::class, 'getSimilarCase']); // 取得當前被點擊案件的類似案件
Route::get('cases/getBidder', [CasesController::class, 'getBidder']); // 取得當前被點擊案件的報價人員
Route::post('cases/newBidder', [CasesController::class, 'newBidder']); // 新增報價人員

// 綠界
// Route::post('/payment/pay', [PaymentController::class, 'payByECPay']);
Route::post('payment/pay', [PaymentController::class, 'payByECPay']);


// 這兩個功能？
// Route::get('/showInfo',['middleware' => 'auth', 'uses' => 'InformationController@showInfo']);
// Route::post('postInfo',['middleware' => 'auth', 'uses' => 'InformationController@postInfo']);

