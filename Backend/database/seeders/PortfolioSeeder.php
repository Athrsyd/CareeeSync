<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Portfolio;
use App\Models\User;
use App\Models\UserCareer;
use App\Models\ProjectsFinished;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Pastikan user dengan ID 1 ada
        $user = User::firstOrCreate(
            ['id' => 1],
            [
                'username' => 'John Developer',
                'email' => 'john@example.com',
                'password' => bcrypt('password123'),
            ]
        );

        // Pastikan career dengan ID 1 ada
        $career = UserCareer::firstOrCreate(
            ['id' => 1],
            [
                'user_id' => $user->id,
                'career_name' => 'Full Stack Developer',
                'skills_mastery' => ['html', 'css', 'git_basic', 'responsive'],
                'level' => 'Intermediate'
            ]
        );

        // Pastikan project_finished dengan ID 1 ada
        $project = ProjectsFinished::firstOrCreate(
            ['id' => 1],
            [
                'user_id' => $user->id,
                'project_title' => 'E-Commerce Platform',
                'project_description' => 'Membuat platform e-commerce lengkap dengan fitur checkout dan payment gateway',
                'project_output' => 'https://example-ecommerce.com',
                'tools_used' => ['React', 'Node.js', 'PostgreSQL', 'Stripe']
            ]
        );

        // Buat 1 record portfolio
        Portfolio::firstOrCreate(
            ['portfolio_id' => 'PORT-1-' . time()],
            [
                'user_id' => $user->id,
                'career_id' => $career->id,
                'project_finished_id' => $project->id,
                'fullname' => 'John Developer',
                'education' => 'S1 Teknik Informatika - Universitas Indonesia, 2020',
                'hobbies' => 'Coding, Membaca Dokumentasi Teknologi, Gaming, Menulis Blog',
                'experience' => '5+ Years in Web Development - PT Tech Solutions Indonesia, PT Digital Innovation',
                'about_me' => 'Saya adalah seorang Full Stack Developer yang passionate dalam menciptakan solusi teknologi inovatif. Dengan pengalaman lebih dari 5 tahun, saya telah membantu berbagai startup dan perusahaan membangun aplikasi web yang scalable dan user-friendly. Saya selalu tertarik untuk belajar teknologi terbaru dan berbagi pengetahuan dengan komunitas developer.',
                'email' => 'john@example.com',
                'phone_number' => '+62812345678',
                'address' => 'Jakarta Selatan, Indonesia',
                'linkedin_link' => 'https://linkedin.com/in/johndeveloper',
                'instagram_link' => 'https://instagram.com/johndeveloper',
                'photo' => null // Bisa ditambahkan nanti saat upload
            ]
        );

        $this->command->info('Portfolio seeder berhasil dibuat!');
    }
}
