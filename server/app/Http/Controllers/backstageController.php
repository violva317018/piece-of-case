<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class backstageController extends Controller
{
public function rootCheckUser(Request $request)
{
    // $validatedData = $request->validate([
    //     'page' => 'required|int'
    // ]);
    $page = $request['page'];
    $results = DB::select('CALL rootCheckAllUser(?)' , [$page]);
    return response()->json($results);
}

}
