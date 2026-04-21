<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserCareerController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProgressController;


Route::prefix('v1')->group(function () {
    Route::post('/register', [UserController::class, 'Register']);
    Route::post('/login', [UserController::class, 'Login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/user', [UserController::class, 'GetUser']);
        Route::post('/logout', [UserController::class, 'Logout']);

        Route::post('/career', [UserCareerController::class, 'InputCareer']);
        Route::get('/career', [UserCareerController::class, 'GetCareer']);
        Route::put('/career/{id}', [UserCareerController::class, 'UpdateCareer']);

        Route::post('/portfolio', [PortfolioController::class, 'Create']);

        Route::get('/progress', [ProgressController::class, 'index']);
        Route::post('/progress', [ProgressController::class, 'store']);
    });

    Route::get('/portfolio/{username}', [PortfolioController::class, 'GetPortfolio']);
});
