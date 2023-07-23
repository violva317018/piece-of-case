<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CasesController extends Controller
{
    // 提案
    public function insertCase(Request $request)
    {
        $userID = $request->input('userID');
        $name = $request->input('name');
        $category = $request->input('category');
        $subCategory = $request->input('subCategory');
        $budget = $request->input('budget');
        $deadline = $request->input('deadline');
        $city = $request->input('city');
        // $subCity = $request->input('subCity'); 先用假資料 前端還沒弄好
        $description = $request->input('description');
        $contactName = $request->input('contactName');
        $contactPhone = $request->input('contactPhone');
        $contactTime = $request->input('contactTime');
        $status = $request->input('status');
        $imageA = $request->input('imageA');
        $imageB = $request->input('imageB');
        $imageC = $request->input('imageC');
        $imageD = $request->input('imageD');
        $imageE = $request->input('imageE');
        return $userID;
        try {
            DB::select("CALL addMyCase(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [$userID, $name, $category, $subCategory, $budget, $deadline, $city,'A02', $description, $contactName, $contactPhone, $contactTime, $status, $imageA, $imageB, $imageC, $imageD, $imageE]);
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

    // 獲得地區
    public function getCitys()
    {
        $results = DB::select('CALL caseListCity()');
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
        $caseID =  (int)$request['caseID'];
        $userID =  (int)$request['userID'];
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





    // 用id查詢特定案件   get
    public function getCaseBYID(Request $request)
    {
        // 獲取mycaseID和myuserID
        $mycaseID = $request->input('mycaseID');
        $myuserID = $request->input('myuserID');

        // 執行存儲過程
        $result = DB::select("CALL enterCase(?, ?)", [$mycaseID, $myuserID]);

        // 將結果返回
        return response()->json($result);
    }

    // 刊登中案例列表，每頁顯示30筆
    public function selectCases(Request $request)
    {
        $page = $request->input('page');
        $pagehead = ($page - 1) * 30;

        $results = DB::select('CALL enterCasePage(?)', [$pagehead]);

        return response()->json($results);
    }

    // 檢查紀錄
    public function insertBidder(Request $request)
    {
        // 獲取傳遞的參數
        $mycaseID = $request->input('mycaseID');
        $myuserID = $request->input('myuserID');
        $myquotation = $request->input('myquotation');
        $mywin = $request->input('mywin');
        $myselfRecommended = $request->input('myselfRecommended');

        // 執行存儲過程
        DB::select("CALL newBidder(?, ?, ?, ?, ?)", [$mycaseID, $myuserID, $myquotation, $mywin, $myselfRecommended]);

        // 返回成功消息
        return response()->json(['result' => '報價成功']);
    }





    // 提供bidder案件提供案件詳細訊息
    public function checkStatus(Request $request)
    {
        $mycaseID = $request->input('mycaseID');
        $myuserID = $request->input('myuserID');

        try {
            DB::select('CALL checkBidStatus(?, ?, @result)', [$mycaseID, $myuserID]);

            $statusResult = DB::select('SELECT @result AS result')[0]->result;

            if ($statusResult == '已報價') {
                $caseResult = DB::select('SELECT "已報價" as result, users.userID, profilePhoto, caseID, caseName, deadline, description, contactName, contactPhone, contactTime, budget, city, updateTime, imageA, imageB, imageC, imageD, imageE
                                         FROM mycase, users
                                         WHERE mycase.userID = users.userID AND mycase.caseID = ?', [$mycaseID]);
            } else {
                $caseResult = DB::select('SELECT "未報價" as result, users.userID, profilePhoto, caseID, caseName, deadline, description, contactName, contactPhone, contactTime, budget, city, updateTime, imageA, imageB, imageC, imageD, imageE
                                         FROM mycase, users
                                         WHERE mycase.userID = users.userID AND mycase.caseID = ?', [$mycaseID]);
            }

            return response()->json($caseResult);
        } catch (\Exception $e) {
            return response()->json(['error' => '呼叫存儲過程失敗']);
        }
    }



}