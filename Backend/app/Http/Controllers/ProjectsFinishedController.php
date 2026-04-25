<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\ProjectsFinished;

class ProjectsFinishedController extends Controller
{
    public function Create(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'project_title' => "string|required",
            'project_description' => "string|required",
            'project_output' => "string|required",
            'tools_used' => "required"
        ], [
            'project_title.required' => "Project title wajib diisi!",
            'project_description.required' => "Project description wajib diisi!",
            'project_output.required' => "Project output wajib diisi!",
            'tools_used.required' => "Tools used wajib diisi!"
        ]);

        if ($validate->fails()) {
            return response()->json([
                'message' => $validate->errors()
            ], 422);
        }

        // Convert tools_used string to array if it's comma-separated
        $toolsArray = is_array($request->tools_used) 
            ? $request->tools_used 
            : array_map('trim', explode(',', $request->tools_used));

        $projectsFinished = ProjectsFinished::create([
            'user_id' => Auth::id(),
            'project_title' => $request->project_title,
            'project_description' => $request->project_description,
            'project_output' => $request->project_output,
            'tools_used' => $toolsArray  // Laravel akan auto-encode ke JSON
        ]);

        return response()->json([
            'message' => "Project finished berhasil ditambahkan!",
            'data' => $projectsFinished
        ], 201);
    }

    public function GetProjectsFinished(string $id)
    {
        $projectsFinished = ProjectsFinished::where('user_id', $id)->get();

        if (!$projectsFinished) {
            return response()->json([
                'message' => "Projects finished tidak ditemukan!"
            ], 404);
        }
        return response()->json([
            'message' => "Projects finished berhasil diambil!",
            'data' => $projectsFinished
        ], 200);
    }
}
