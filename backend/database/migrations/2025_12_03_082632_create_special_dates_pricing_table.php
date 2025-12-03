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
        Schema::create('special_dates_pricing', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->foreignId('price_plan_id')->constrained('price_plans')->onDelete('cascade');
            $table->decimal('extra_cost_for_day', 8, 2)->default(0);
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('special_dates_pricing');
    }
};
