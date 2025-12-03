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
        Schema::create('booking_dog', function (Blueprint $table) {
            $table->foreignId('booking_id')->constrained('bookings')->onDelete('cascade');
            $table->foreignId('dog_id')->constrained('dogs')->onDelete('cascade');
            $table->primary(['booking_id', 'dog_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_dog');
    }
};
