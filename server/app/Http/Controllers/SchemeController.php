<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class SchemeController extends Controller
{

    // 傳入排程狀態 => 【SchemeProgress】
    public function newCaseStep(Request $request)
    {
        $schemeJson =  $request['schemeJson'];
        $bidderID =  (int)$request['bidderID'];
        $results = DB::select('CALL newCaseStep(?,?)',[$schemeJson,$bidderID]);
        return $results;
    }
}