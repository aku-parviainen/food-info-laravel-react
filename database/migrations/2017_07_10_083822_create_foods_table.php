<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('foods', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('external_id')->unsigned()->nullable();
            $table->string('name')->default("");
            $table->integer('energy_kj')->nullable();
            $table->double('carbs')->nullable();
            $table->double('fat')->nullable();
            $table->double('protein')->nullable();
            $table->double('alcohol')->nullable();
            $table->double('fibre')->nullable();
            $table->double('sugar_alcohol')->nullable();
            $table->double('starch')->nullable();
            $table->double('sugars')->nullable();
            $table->double('fructose')->nullable();
            $table->double('galactose')->nullable();
            $table->double('glucose')->nullable();
            $table->double('lactose')->nullable(); 
            $table->double('maltose')->nullable();
            $table->double('sucrose')->nullable();
            $table->double('polysaccharide')->nullable();
            $table->double('fatty_acids_total')->nullable();
            $table->double('polyunsaturated_fatty_acids')->nullable();
            $table->double('monounsaturated_cis_fatty_acids')->nullable();
            $table->double('saturated_fatty_acids')->nullable();
            $table->double('n_3_polyunsaturated_fatty_acids')->nullable();
            $table->double('n_6_polyunsaturated_fatty_acids')->nullable();
            $table->double('linoleic_acid')->nullable();
            $table->double('alpha_linolenic_acid')->nullable();
            $table->double('epa_fatty_acids')->nullable();
            $table->double('dha_fatty_acids')->nullable();
            $table->double('cholesterol')->nullable();
            $table->double('sterols')->nullable();
            $table->double('calcium')->nullable();
            $table->double('iron')->nullable();
            $table->double('iodide')->nullable();
            $table->double('potassium')->nullable();
            $table->double('magnesium')->nullable();
            $table->double('sodium')->nullable();
            $table->double('salt')->nullable();
            $table->double('phosphorus')->nullable();
            $table->double('selenium')->nullable();
            $table->double('zinc')->nullable();
            $table->double('tryptophan')->nullable();
            $table->double('folate')->nullable();
            $table->double('niacin_equivalents')->nullable();
            $table->double('niacin_preformed')->nullable();
            $table->double('vitamers_pyridoxine')->nullable();
            $table->double('riboflavine')->nullable();
            $table->double('vitamin_b1')->nullable();
            $table->double('vitamin_b12')->nullable();
            $table->double('vitamin_c')->nullable();
            $table->double('vitamin_a')->nullable();
            $table->double('carotenoids')->nullable();
            $table->double('vitamin_d')->nullable();
            $table->double('vitamin_e')->nullable();
            $table->double('vitamin_k')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('foods');
    }
}
