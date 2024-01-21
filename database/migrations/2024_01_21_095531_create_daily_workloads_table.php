<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('daily_workloads', function (Blueprint $table) {
            $table->id();
            $table->date('day');
            $table->date('start');
            $table->date('launch');
            $table->date('back');
            $table->date('end');

            $table->foreignId('work_setting_id')->constrained()->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('daily_workloads');
    }
};
