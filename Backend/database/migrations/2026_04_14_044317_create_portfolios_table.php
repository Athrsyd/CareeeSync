<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('portfolios', function (Blueprint $table) {
            $table->string('portfolio_id')->primary();
            $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');
            $table->foreignId('career_id')->constrained('user_careers', 'id')->onDelete('cascade');
            $table->foreignId('project_finished_id')->constrained('projects_finisheds', 'id')->onDelete('cascade');
            $table->string('fullname');
            $table->string('photo')->nullable();
            $table->string('education');
            $table->string('hobbies');
            $table->string('experience');
            $table->text('about_me');
            $table->string('email');
            $table->string('phone_number');
            $table->string('linkedin_link')->nullable();
            $table->string('instagram_link')->nullable();
            $table->string('address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('portfolios');
    }
};
