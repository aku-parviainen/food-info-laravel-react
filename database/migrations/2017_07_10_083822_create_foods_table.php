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
            $table->decimal('energy_kj', 9, 2)->nullable();
            $table->decimal('carbs', 9, 2)->nullable();
            $table->decimal('fat', 9, 2)->nullable();
            $table->decimal('protein', 9, 2)->nullable();
            $table->decimal('alcohol', 9, 2)->nullable();
            $table->decimal('fibre', 9, 2)->nullable();
            $table->decimal('sugar_alcohol', 9, 2)->nullable();
            $table->decimal('starch', 9, 2)->nullable();
            $table->decimal('sugars', 9, 2)->nullable();
            $table->decimal('fructose', 9, 2)->nullable();
            $table->decimal('galactose', 9, 2)->nullable();
            $table->decimal('glucose', 9, 2)->nullable();
            $table->decimal('lactose', 9, 2)->nullable(); 
            $table->decimal('maltose', 9, 2)->nullable();
            $table->decimal('sucrose', 9, 2)->nullable();
            $table->decimal('polysaccharide', 9, 2)->nullable();
            $table->decimal('fatty_acids_total', 9, 2)->nullable();
            $table->decimal('polyunsaturated_fatty_acids', 9, 2)->nullable();
            $table->decimal('monounsaturated_cis_fatty_acids', 9, 2)->nullable();
            $table->decimal('saturated_fatty_acids', 9, 2)->nullable();
            $table->decimal('n_3_polyunsaturated_fatty_acids', 9, 2)->nullable();
            $table->decimal('n_6_polyunsaturated_fatty_acids', 9, 2)->nullable();
           
            //$table->decimal('linoleic_acid', 12, 2)->nullable();
            //$table->decimal('alpha_linolenic_acid', 12, 2)->nullable();
            //$table->decimal('epa_fatty_acids', 12, 2)->nullable();
            //$table->decimal('dha_fatty_acids', 12, 2)->nullable();
            //$table->decimal('cholesterol', 12, 2)->nullable();
            //$table->decimal('sterols', 12, 2)->nullable();
            //$table->decimal('calcium', 12, 2)->nullable();
            //$table->decimal('iron', 12, 2)->nullable();
            //$table->decimal('iodide', 12, 2)->nullable();
            //$table->decimal('potassium', 12, 2)->nullable();
            //$table->decimal('magnesium', 12, 2)->nullable();
            //$table->decimal('sodium', 12, 2)->nullable();
            //$table->decimal('salt', 12, 2)->nullable();
            //$table->decimal('phosphorus', 12, 2)->nullable();
            //$table->decimal('selenium', 12, 2)->nullable();
            //$table->decimal('zinc', 12, 2)->nullable();
            //$table->decimal('tryptophan', 12, 2)->nullable();
            //$table->decimal('folate', 12, 2)->nullable();
            //$table->decimal('niacin_equivalents', 12, 2)->nullable();
            //$table->decimal('niacin_preformed', 12, 2)->nullable();
            //$table->decimal('vitamers_pyridoxine', 12, 2)->nullable();
            //$table->decimal('riboflavine', 12, 2)->nullable();
            //$table->decimal('vitamin_b1', 12, 2)->nullable();
            //$table->decimal('vitamin_b12', 12, 2)->nullable();
            //$table->decimal('vitamin_c', 12, 2)->nullable();
            //$table->decimal('vitamin_a', 12, 2)->nullable();
            //$table->decimal('carotenoids', 12, 2)->nullable();
            //$table->decimal('vitamin_d', 12, 2)->nullable();
            //$table->decimal('vitamin_e', 12, 2)->nullable();
            //$table->decimal('vitamin_k', 12, 2)->nullable();
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
