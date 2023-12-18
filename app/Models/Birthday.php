<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Birthday extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'idade',
        'birthday',
        'description',
        'relative_id',
        'user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function relative(): BelongsTo
    {
        return $this->belongsTo(Relative::class);
    }
}
