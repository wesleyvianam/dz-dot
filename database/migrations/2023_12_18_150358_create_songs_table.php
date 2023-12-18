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
        Schema::create('songs', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 60);
            $table->string('interpreter', 60);
            $table->integer('times')->nullable();
            $table->date('last_data');
            $table->string('description', 255)->nullable();

            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('category_id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('birthdays');
    }
};
