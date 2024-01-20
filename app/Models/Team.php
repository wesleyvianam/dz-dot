<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Team extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'company_id',
        'manager_id',
    ];

    public function members(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Companies::class);
    }

    public function manager(): BelongsTo
    {
        return $this->belongsTo(User::class, 'manager_id');
    }
}
