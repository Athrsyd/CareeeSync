<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Progress;
use Illuminate\Support\Facades\Validator;

class ProgressController extends Controller
{
    public function index(Request $request)
    {
        $progress = Progress::with('user')
            ->where('user_id', $request->user()
                ->id)
            ->orderBy('progress_date', 'desc')
            ->get();
        return response()->json($progress);
    }
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'readiness_point' => 'required|integer|min:0|max:100',
            'progress_date' => 'required|date|before_or_equal:today',
        ], [
            'readiness_point.required' => "Readiness point wajib diisi!",
            'readiness_point.integer' => "Readiness point harus berupa angka!",
            'readiness_point.min' => "Readiness point minimal 0!",
            'readiness_point.max' => "Readiness point maksimal 100!",
            'progress_date.required' => "Progress date wajib diisi!",
            'progress_date.date' => "Progress date harus berupa tanggal!",
            'progress_date.before_or_equal' => "Progress date tidak boleh di masa depan!"
        ]);

        if ($validate->fails()) {
            return response()->json([
                "message" => "Pastikan semua input di isi dengan benar!",
                'errors' => $validate->errors()
            ], 422);
        }

    $progress = Progress::create([
        'user_id' => $request->user()->id,
        'readiness_point' => $request->readiness_point,
        'progress_date' => $request->progress_date,
    ]);
        return response()->json([
            "message" => "Progress berhasil ditambahkan!",
            "data" => $progress
        ]);
    }
}
