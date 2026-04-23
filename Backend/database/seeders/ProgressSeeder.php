<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProgressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $progressData = [
            [
                'user_id' => 1,
                'readiness_point' => 25,
                'progress_date' => Carbon::now()->subDays(20),
            ],
            [
                'user_id' => 1,
                'readiness_point' => 35,
                'progress_date' => Carbon::now()->subDays(15),
            ],
            [
                'user_id' => 1,
                'readiness_point' => 50,
                'progress_date' => Carbon::now()->subDays(10),
            ],
            [
                'user_id' => 1,
                'readiness_point' => 65,
                'progress_date' => Carbon::now()->subDays(5),
            ],
            [
                'user_id' => 1,
                'readiness_point' => 75,
                'progress_date' => Carbon::now(),
            ],
            // [
            //     'user_id' => 2,
            //     'readiness_point' => 30,
            //     'progress_date' => Carbon::now()->subDays(18),
            // ],
            // [
            //     'user_id' => 2,
            //     'readiness_point' => 45,
            //     'progress_date' => Carbon::now()->subDays(12),
            // ],
            // [
            //     'user_id' => 2,
            //     'readiness_point' => 60,
            //     'progress_date' => Carbon::now()->subDays(6),
            // ],
            // [
            //     'user_id' => 2,
            //     'readiness_point' => 70,
            //     'progress_date' => Carbon::now(),
            // ],
        ];

        DB::table('progress')->insert($progressData);
    }
}
