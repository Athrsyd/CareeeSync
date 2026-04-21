<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Progress extends Model
{
    protected $table = 'progress';

    protected $fillable = [
        'user_id',
        'readiness_point',
        'progress_date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
