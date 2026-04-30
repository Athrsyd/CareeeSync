<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\UserCareer;

class UserCareerController extends Controller
{
    public function InputCareer(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'career_name' => "string|required",
            'skills_mastery' => "array",
            'level' => "string|required"
        ], [
            'career_name.required' => "Career name wajib diisi!",
            'skills_mastery.required' => "Skills mastery wajib diisi!",
            'level.required' => "Level wajib diisi!"
        ]);

        if ($validate->fails()) {
            return response()->json([
                'message' => $validate->errors()
            ], 422);
        }

        $userCareer = UserCareer::create([
            'user_id' => Auth::id(),
            'career_name' => $request->career_name,
            'skills_mastery' => $request->skills_mastery,
            'level' => $request->level
        ]);

        return response()->json([
            'message' => "Career berhasil ditambahkan!",
            'data' => $userCareer
        ], 201);
    }
    public function GetCareer()
    {
        $userCareers = UserCareer::where('user_id', Auth::id())->get();

        return response()->json([
            'message' => "Career berhasil diambil!",
            'data' => $userCareers
        ], 200);
    }
    public function UpdateCareer(Request $request, string $id)
    {
        $validasi = Validator::make($request->all(), [
            'skills_mastery' => "array|required",
            'level' => "string|required"
        ], [
            'skills_mastery.required' => "Skills mastery wajib diisi!",
            'level.required' => "Level wajib diisi!"
        ]);

        if ($validasi->fails()) {
            return response()->json([
                'message' => $validasi->errors()
            ], 422);
        }

        $userCareer = UserCareer::find($id);
        if (!$userCareer) {
            return response()->json([
                'message' => "Career tidak ditemukan!"
            ], 404);
        }

        $userCareer->update([
            'skills_mastery' => $request->skills_mastery,
            'level' => $request->level
        ]);

        return response()->json([
            'message' => "Career berhasil diperbarui!",
            'data' => $userCareer
        ], 200);
    }
    public function StartAnalysis(string $id, Request $request)
    {
        $userCareer = UserCareer::find($id);
        if (!$userCareer) {
            return response()->json([
                'message' => "Career tidak ditemukan!"
            ], 404);
        }

        $userCareer->ever_analyzed = true;
        $userCareer->ai_feedback = $request->ai_feedback;
        $userCareer->save();

        return response()->json([
            'message' => "Analisis career berhasil dimulai!",
            'data' => $userCareer
        ], 200);
    }
    public function UpdateFeedback(Request $request, string $id)
    {
        $validasi = Validator::make($request->all(), [
            'ai_feedback' => "string|required"
        ], [
            'ai_feedback.required' => "AI feedback wajib diisi!"
        ]);

        if ($validasi->fails()) {
            return response()->json([
                'message' => $validasi->errors()
            ], 422);
        }

        $userCareer = UserCareer::find($id);
        if (!$userCareer) {
            return response()->json([
                'message' => "Career tidak ditemukan!"
            ], 404);
        }

        $userCareer->ai_feedback = $request->ai_feedback;
        $userCareer->save();

        return response()->json([
            'message' => "AI feedback berhasil diperbarui!",
            'data' => $userCareer
        ], 200);
    }


    public function getAiFeedback(string $id)
    {

        $userCareer = UserCareer::find($id);
        if (!$userCareer) {
            return response()->json([
                'message' => "Career tidak ditemukan!"
            ], 404);
        }

        return response()->json([
            'message' => "AI feedback berhasil diambil!",
            'data' => [
                'ai_feedback' => $userCareer->ai_feedback, 
                'ever_analyzed' => $userCareer->ever_analyzed 
                ]
        ], 200);
    }
}
