<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\UserCareer;
use App\Models\ProjectsFinished;

class Portfolio extends Model
{
    protected $fillable = [
        'user_id',
        'career_id',
        'project_finished_id',
        'fullname',
        'about_me',
        'email',
        'phone_number',
        'address',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function career()
    {
        return $this->belongsTo(UserCareer::class, 'career_id');
    }

    public function projectFinished()
    {
        return $this->belongsTo(ProjectsFinished::class, 'project_finished_id');
    }
}
