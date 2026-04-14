<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;   

class UserCareer extends Model
{
    protected $fillable = [
        'user_id',
        'career_name',
        'skills_mastery',
        'level',
    ];

    protected $casts = [
        'skills_mastery' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function portfolios()
    {
        return $this->hasMany(Portfolio::class, 'career_id');
    }
}
