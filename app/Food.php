<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'external_id', 
        'name', 
        'energy_kj',
        'carbs', 
        'fat', 
        'protein', 
        'alcohol',
        'fibre',
        'sugar_alcohol',
        'starch',
        'sugars',
        'fructose',
        'galactose',
        'glucose',
        'lactose',
        'maltose',
        'sucrose',
        'polysaccharide',
        'fatty_acids_total',
        'polyunsaturated_fatty_acids',
        'monounsaturated_cis_fatty_acids',
        'saturated_fatty_acids',
        'n_3_polyunsaturated_fatty_acids',
        'n_6_polyunsaturated_fatty_acids',
        /*'linoleic_acid',
        'alpha_linolenic_acid',
        'epa_fatty_acids',
        'dha_fatty_acids',
        'cholesterol',
        'sterols',
        'calcium',
        'iron',
        'iodide',
        'potassium',
        'magnesium',
        'sodium',
        'salt',
        'phosphorus',
        'selenium',
        'zinc',
        'tryptophan',
        'folate',
        'niacin_equivalents',
        'niacin_preformed',
        'vitamers_pyridoxine',
        'riboflavine',
        'vitamin_b1',
        'vitamin_b12',
        'vitamin_c',
        'vitamin_a',
        'carotenoids',
        'vitamin_d',
        'vitamin_e',
        'vitamin_k', */
        'created_at', 
        'updated_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'external_id', 'created_at', 'updated_at'
    ];
    
}
