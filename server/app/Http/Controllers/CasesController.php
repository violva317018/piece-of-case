<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CasesController extends Controller
{
    // 提案
    public function insertCase(Request $request)
    {
    
        $userID = $request['userID'];
        $name = $request['name'];
        $category = $request['category'];
        $subCategory = $request['subCategory'];
        $budget = $request['budget'];
        $deadline = $request['deadline'];
        $city = $request['city'];
        $subCity = $request['subCity'];
        $description = $request['description'];
        $contactName = $request['contactName'];
        $contactAble = $request['contactAble'];
        $contactPhone = $request['contactPhone'];
        $contactTime = $request['contactTime'];
        $status = $request['status'];
        $imageA = $request['imageA'];
        $imageB = $request['imageB'];
        $imageC = $request['imageC'];
        $imageD = $request['imageD'];
        $imageE = $request['imageE'];
        try {
            DB::select("CALL addMyCase(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [$userID, $name, $category, $subCategory, $budget, $deadline, $city,$subCity, $description, $contactName,$contactAble, $contactPhone, $contactTime, $status, $imageA, $imageB, $imageC, $imageD, $imageE]);
            // DB::select("CALL addMyCase($userID,'$name','$category','$subCategory','$budget','$deadline','$city','$subCity','$description','$contactName','$contactPhone','$contactTime','$status','$imageA','$imageB','$imageC','$imageD','$imageE')");
            if ($status == '草稿') {
            $result = '案件已儲存至草稿';
        } elseif ($status == '刊登中') {
            $result = '案件已刊登';
        }
        return response()->json(['result' => $result]);
        } catch (\Exception $e) {
            return response()->json(['result' => '插入案件失败']);
        }
        // CALL addMyCase('17','test10','B','B03','20000','2000/12/23','台南市','東區','good','test','true','0110','發布案件','null','null','null','null','null');
        // return $result;
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