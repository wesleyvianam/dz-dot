<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyWorkload extends Model
{
    use HasFactory;

    protected $fillable = [
        'work_setting_id',
        'day',
        'start',
        'back',
        'launch',
        'end',
    ];
}
