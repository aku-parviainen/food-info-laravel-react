<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Food;

class FoodApiController extends Controller
{
    /**
     * Get all foods paginated
     *
     * @return JSON
     */
    public function getFoods()
    {
        return Food::paginate(30)->toJson();
    }

    /**
     * Get food by ID
     *
     * @return JSON
     */
    public function getFoodByID($id)
    {
        return Food::where('id', $id)->first()->toJson();
    }

}
