<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Portfolio;


class ProjectsFinished extends Model
{
    protected $fillable = [
        'user_id',
        'project_title',
        'project_description',
        'project_output',
        'tools_used',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function portfolios()
    {
        return $this->hasMany(Portfolio::class, 'project_finished_id');
    }
}
