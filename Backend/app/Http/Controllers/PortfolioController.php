<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Portfolio;
use App\Models\UserCareer;
use App\Models\ProjectsFinished;

class PortfolioController extends Controller
{
    public function Create(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'fullname' => "string|required",
            'about_me' => "string|required",
            'email' => "email|required",
            'phone_number' => "string|required",
            'address' => "string|required",
            'career_id' => "integer|exists:user_careers,id|required",
            'project_finished_id' => "integer|exists:projects_finished,id|required"
        ], [
            'fullname.required' => "Fullname wajib diisi!",
            'about_me.required' => "About me wajib diisi!",
            'email.required' => "Email wajib diisi!",
            'email.email' => "Format email tidak valid!",
            'phone_number.required' => "Phone number wajib diisi!",
            'address.required' => "Address wajib diisi!",
            'career_id.required' => "Career ID wajib diisi!",
            'career_id.integer' => "Career ID harus berupa integer!",
            'career_id.exists' => "Career ID tidak ditemukan!",
            'project_finished_id.required' => "Project finished ID wajib diisi!",
            'project_finished_id.integer' => "Project finished ID harus berupa integer!",
            'project_finished_id.exists' => "Project finished ID tidak ditemukan!"
        ]);

        if ($validate->fails()) {
            return response()->json([
                'message' => $validate->errors()
            ], 422);
        }

        $portfolio = Portfolio::create([
            'user_id' => Auth::id(),
            'career_id' => $request->career_id,
            'project_finished_id' => $request->project_finished_id,
            'fullname' => $request->fullname,
            'about_me' => $request->about_me,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'address' => $request->address
        ]);

        return response()->json([
            'message' => "Portfolio berhasil dibuat!",
            'data' => $portfolio
        ], 201);
    }
    public function GetPortfolio(string $id)
    {
        $getPortfolio = Portfolio::where('user_id', $id)->first();

        if (!$getPortfolio) {
            return response()->json([
                'message' => "Portfolio tidak ditemukan!"
            ], 404);
        }

        $projectFinished = ProjectsFinished::where('user_id', $id)->get();
        $career = UserCareer::where('user_id', $id)->first();
        
        $projects = $projectFinished->map(function ($project) {
            return [
                'project_title' => $project->project_title,
                'project_description' => $project->project_description,
                'project_output' => $project->project_output,
                'tools_used' => $project->tools_used
            ];
        });
        $portfolio = [
            'fullname' => $getPortfolio->fullname,
            'about_me' => $getPortfolio->about_me,
            'email' => $getPortfolio->email,
            'phone_number' => $getPortfolio->phone_number,
            'address' => $getPortfolio->address,
            'career_name' => $career ? $career->career_name : null,
            'skills_mastery' => $career ? $career->skills_mastery : null,
            'level' => $career ? $career->level : null,
            'projects' => $projects,
        ];

        return response()->json([
            'message' => "Portfolio berhasil diambil!",
            'data' => $portfolio,
        ], 200);
    }
}
