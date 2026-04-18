<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\Portfolio;
use App\Models\UserCareer;
use App\Models\ProjectsFinished;
use App\Models\User;

class PortfolioController extends Controller
{
    public function Create(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'fullname' => "string|required",
            'education' => "string|required",
            'hobbies' => "string|required",
            'experience' => "string|required",
            'about_me' => "string|required",
            'email' => "email|required",
            'phone_number' => "string|required",
            'address' => "string|required",
            'linkedin_link' => "nullable|url",
            'instagram_link' => "nullable|url",
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                // 'career_id' => "integer|exists:user_careers,id|required",
                // 'project_finished_id' => "integer|exists:projects_finished,id|required"
        ], [
            'fullname.required' => "Fullname wajib diisi!",
            'education.required' => "Education wajib diisi!",
            'hobbies.required' => "Hobbies wajib diisi!",
            'experience.required' => "Experience wajib diisi!",
            'about_me.required' => "About me wajib diisi!",
            'email.required' => "Email wajib diisi!",
            'email.email' => "Format email tidak valid!",
            'phone_number.required' => "Phone number wajib diisi!",
            'address.required' => "Address wajib diisi!",
            'linkedin_link.url' => "LinkedIn link harus berupa URL yang valid!",
            'instagram_link.url' => "Instagram link harus berupa URL yang valid!",
            'photo.image' => "Photo harus berupa gambar!",
            'photo.mimes' => "Photo harus berupa file dengan ekstensi jpeg, png, jpg, atau gif!",
            'photo.max' => "Photo tidak boleh lebih dari 2MB!",
            // 'career_id.required' => "Career ID wajib diisi!",
            // 'career_id.integer' => "Career ID harus berupa integer!",
            // 'career_id.exists' => "Career ID tidak ditemukan!",
            // 'project_finished_id.required' => "Project finished ID wajib diisi!",
            // 'project_finished_id.integer' => "Project finished ID harus berupa integer!",
            // 'project_finished_id.exists' => "Project finished ID tidak ditemukan!"
        ]);

        if ($validate->fails()) {
            return response()->json([
                'message' => $validate->errors()
            ], 422);
        }

        try {
            // Handle photo upload
            $photoPath = null;
            if ($request->hasFile('photo')) {
                $photoPath = $request->file('photo')->store('photos', 'public');
            }

            $portfolioId = $request->fullname;

            $userCareer = UserCareer::where('user_id', Auth::id())->first();
            $projectFinished = ProjectsFinished::where('user_id', Auth::id())->first();

            $portfolio = Portfolio::create([
                'portfolio_id' => $portfolioId,
                'user_id' => Auth::id(),
                'career_id' => $userCareer ? $userCareer->id : null,
                'project_finished_id' => $projectFinished ? $projectFinished->id : null,
                'fullname' => $request->fullname,
                'education' => $request->education,
                'hobbies' => $request->hobbies,
                'experience' => $request->experience,
                'about_me' => $request->about_me,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'linkedin_link' => $request->linkedin_link,
                'instagram_link' => $request->instagram_link,
                'address' => $request->address,
                'photo' => $photoPath
            ]);

            return response()->json([
                'message' => "Portfolio berhasil dibuat!",
                'data' => $portfolio
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Gagal membuat portfolio: " . $e->getMessage()
            ], 500);
        }
    }

    // public function GetPortfolio(string $id)
    // {
    //     $getPortfolio = Portfolio::where('user_id', $id)->first();

    //     if (!$getPortfolio) {
    //         return response()->json([
    //             'message' => "Portfolio tidak ditemukan!"
    //         ], 404);
    //     }

    //     $projectFinished = ProjectsFinished::where('user_id', $id)->get();
    //     $career = UserCareer::where('user_id', $id)->first();
        
    //     $projects = $projectFinished->map(function ($project) {
    //         return [
    //             'project_title' => $project->project_title,
    //             'project_description' => $project->project_description,
    //             'project_output' => $project->project_output,
    //             'tools_used' => $project->tools_used
    //         ];
    //     });

    //     $portfolio = [
    //         'portfolio_id' => $getPortfolio->portfolio_id,
    //         'fullname' => $getPortfolio->fullname,
    //         'education' => $getPortfolio->education,
    //         'hobbies' => $getPortfolio->hobbies,
    //         'experience' => $getPortfolio->experience,
    //         'about_me' => $getPortfolio->about_me,
    //         'email' => $getPortfolio->email,
    //         'phone_number' => $getPortfolio->phone_number,
    //         'linkedin_link' => $getPortfolio->linkedin_link,
    //         'instagram_link' => $getPortfolio->instagram_link,
    //         'photo' => $getPortfolio->photo ? asset('storage/' . $getPortfolio->photo) : null,
    //         'address' => $getPortfolio->address,
    //         'career_name' => $career ? $career->career_name : null,
    //         'skills_mastery' => $career ? $career->skills_mastery : null,
    //         'level' => $career ? $career->level : null,
    //         'projects' => $projects,
    //     ];

    //     return response()->json([
    //         'message' => "Portfolio berhasil diambil!",
    //         'data' => $portfolio,
    //     ], 200);
    // }

    public function GetPortfolio(string $username)
    {
        // Cari user berdasarkan username
        $user = User::where('username', $username)->first();

        if (!$user) {
            return response()->json([
                'message' => "User tidak ditemukan!"
            ], 404);
        }

        // Cari portfolio berdasarkan user_id
        $getPortfolio = Portfolio::where('user_id', $user->id)->first();

        if (!$getPortfolio) {
            return response()->json([
                'message' => "Portfolio tidak ditemukan!"
            ], 404);
        }

        $projectFinished = ProjectsFinished::where('user_id', $user->id)->get();
        $career = UserCareer::where('user_id', $user->id)->first();
        
        $projects = $projectFinished->map(function ($project) {
            return [
                'project_title' => $project->project_title,
                'project_description' => $project->project_description,
                'project_output' => $project->project_output,
                'tools_used' => $project->tools_used
            ];
        });

        $portfolio = [
            'portfolio_id' => $getPortfolio->portfolio_id,
            'fullname' => $getPortfolio->fullname,
            'education' => $getPortfolio->education,
            'hobbies' => $getPortfolio->hobbies,
            'experience' => $getPortfolio->experience,
            'about_me' => $getPortfolio->about_me,
            'email' => $getPortfolio->email,
            'phone_number' => $getPortfolio->phone_number,
            'linkedin_link' => $getPortfolio->linkedin_link,
            'instagram_link' => $getPortfolio->instagram_link,
            'photo' => $getPortfolio->photo ? asset('storage/' . $getPortfolio->photo) : null,
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

    public function Update(Request $request, $id)
    {
        $portfolio = Portfolio::find($id);

        if (!$portfolio) {
            return response()->json([
                'message' => "Portfolio tidak ditemukan!"
            ], 404);
        }

        $validate = Validator::make($request->all(), [
            'fullname' => "string|required",
            'about_me' => "string|required",
            'email' => "email|required",
            'phone_number' => "string|required",
            'address' => "string|required",
            'linkedin_link' => "nullable|url",
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'career_id' => "integer|exists:user_careers,id|required",
            'project_finished_id' => "integer|exists:projects_finished,id|required"
        ]);

        if ($validate->fails()) {
            return response()->json([
                'message' => $validate->errors()
            ], 422);
        }

        try {
            // Handle photo update
            if ($request->hasFile('photo')) {
                // Hapus foto lama
                if ($portfolio->photo && Storage::disk('public')->exists($portfolio->photo)) {
                    Storage::disk('public')->delete($portfolio->photo);
                }
                $photoPath = $request->file('photo')->store('photos', 'public');
            } else {
                $photoPath = $portfolio->photo;
            }

            $portfolio->update([
                'fullname' => $request->fullname,
                'about_me' => $request->about_me,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'linkedin_link' => $request->linkedin_link,
                'address' => $request->address,
                'career_id' => $request->career_id,
                'project_finished_id' => $request->project_finished_id,
                'photo' => $photoPath
            ]);

            return response()->json([
                'message' => "Portfolio berhasil diupdate!",
                'data' => $portfolio
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Gagal update portfolio: " . $e->getMessage()
            ], 500);
        }
    }

    public function Delete($id)
    {
        $portfolio = Portfolio::find($id);

        if (!$portfolio) {
            return response()->json([
                'message' => "Portfolio tidak ditemukan!"
            ], 404);
        }

        try {
            // Hapus foto jika ada
            if ($portfolio->photo && Storage::disk('public')->exists($portfolio->photo)) {
                Storage::disk('public')->delete($portfolio->photo);
            }

            $portfolio->delete();

            return response()->json([
                'message' => "Portfolio berhasil dihapus!"
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Gagal menghapus portfolio: " . $e->getMessage()
            ], 500);
        }
    }
}
