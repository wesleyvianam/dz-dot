<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'overtime',
        'workload',
        'company_id',
        'team_id',
    ];

}
