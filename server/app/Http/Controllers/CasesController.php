<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CasesController extends Controller
{
    // 提案
    public function insertCase(Request $request)
    {
    
        $caseID = (int)$request['caseID'];
        $userID = (int)$request['userID'];
        $name = $request['name'];
        $category = $request['category'];
        $subCategory = $request['subCategory'];
        $budget = (int)$request['budget'];
        $deadline = $request['deadline'];
        $city = $request['city'];
        $subCity = $request['subCity'];
        $description = $request['description'];
        $contactName = $request['contactName'];
        $contactAble = (int)$request['contactAble'];
        $contactPhone = $request['contactPhone'];
        $contactTime = $request['contactTime'];
        $status = $request['status'];
        $imageA = $request['imageA'];
        $imageB = $request['imageB'];
        $imageC = $request['imageC'];
        $imageD = $request['imageD'];
        $imageE = $request['imageE'];
        $Files = $request->file('allFiles');

        // 處理檔案附檔名及轉碼問題
        $allFileName = '"files/'; // 初始設定標頭【files/】
        $filesNameArray = []; // 存放所有的檔案包括檔名.副檔名
        // return [$userID,$filesNameArray,$allFileName];

        for($i = 0; $i < count($Files); $i++){
            $fileName = $Files[$i]->getClientOriginalName(); // 檔案名稱
            $Files[$i]->storeAs('files', $fileName); // storage 資料夾名稱
            $allFileName .= (string)$fileName . ",files/"; // 將 加上逗號
            array_push($filesNameArray, $fileName); // 將 【$fileName】 push to 【$filesNameArray】
        }
        
        $allFileName = substr($allFileName, 0, -7) . '"';
        return [$userID,$filesNameArray,$allFileName];
        $result = DB::select("CALL newPortfolio($userID, $allFileName)")[0]->result;
        $filesName = DB::select("select portfolio from myresume where userID = $userID")[0]->portfolio;
        $filesArray = explode(',', $filesName);
        // return $filesArray;
        // return base64_encode(Storage::get($filesArray[0]));
        $filesObject = [];
        
        for($i = 0; $i < count($file); $i++) {
            array_push($filesObject, base64_encode(Storage::get($filesArray[$i])));
        }
        // return response()->json(['result' => $result, 'files' => $filesObject, 'fileName' => $filesNameArray]);


        // return [$caseID,$userID, $name, $category, $subCategory, $budget, $deadline, $city,$subCity, $description, $contactName,$contactAble, $contactPhone, $contactTime, $status, $imageA, $imageB, $imageC, $imageD, $imageE];
        try {
            $results = DB::select("CALL addMyCase(?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)", [$caseID,$userID, $name, $category, $subCategory, $budget, $deadline, $city,$subCity, $description, $contactName,$contactAble, $contactPhone, $contactTime, $status, $imageA, $imageB, $imageC, $imageD, $imageE]);
            return $results;
        } catch (\Exception $e) {
            return response()->json(['result' => '插入案件失败']);
        }
        // CALL addMyCase(0,26,'組裝娃娃','B','B02','20000','2025/12/23','g','g09','幫忙組裝娃娃','娃娃女王',1,'0915758668','0110','刊登中','null','null','null','null','null');
    }

    // 獲取母、子類別
    public function getCategorys()
    {
        $results = DB::select('CALL caseListBigClass()');
        return response()->json($results);
    }
    public function getSubCategorys()
    {
        $results = DB::select('CALL caseClass()');
        return response()->json($results);
    }

    // 獲得母、子地區
    public function getCitys()
    {
        $results = DB::select('CALL caseListCity()');
        return $results;
    }
    public function getSubCitys()
    {
        $results = DB::select('CALL caseDistrict()');
        return $results;
    }


    // 搜尋並返回特定條件的案例
    public function getCases(Request $request)
    {
        $bigClassID = $request->input('bigClassID');
        $classID = $request->input('classID');
        $cityID = $request->input('cityID');
        $districtID = $request->input('districtID');
        $page = $request->input('page');

        $results = DB::select('CALL caseFilter(?,?,?,?,?)', [$bigClassID,$classID,$cityID,$districtID,$page]);

        return response()->json($results);
    }

    // 取得當前被點擊案件資訊
    public function getCaseInfo(Request $request)
    {
        $caseID =  (int)$request['caseID'];
        $userID =  (int)$request['userID'];
        $results = DB::select('CALL enterCase(?,?)',[$caseID, $userID]);
        return $results;
    }

    // 取得當前被點擊案件的類似案件
    public function getSimilarCase(Request $request)
    {
        $classID =  $request['classID'];
        // return $classID;
        $results = DB::select('CALL similarCase(?)',[$classID]);
        return $results;
    }

    // 新增報價人員
    public function newBidder(Request $request)
    {
        $caseID =  (int)$request['caseID'];
        $userID =  (int)$request['userID'];
        $quotation =  (int)$request['quotation'];
        $win =  $request['win']; // 前端為甚麼要傳這個，還有tinyint 是甚麼型別
        $selfRecommended =  $request['selfRecommended'];
        $results = DB::select('CALL newBidder(?,?,?,?,?)',[$caseID,$userID,$quotation,$win,$selfRecommended]);
        return $results;
    }

    // 取得當前被點擊案件的報價人員
    public function getBidder(Request $request)
    {
        $caseID =  (int)$request['caseID'];
        $results = DB::select('CALL getBidder(?)',[$caseID]);
        return $results;
    }


}