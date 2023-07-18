<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'no',
        'paid_at',
        'closed',
        'total_amount',
    ];

    protected $casts = [
        'paid_at' => 'datetime',
        'closed' => 'boolean',
        'total_amount' => 'decimal:2',
    ];
}