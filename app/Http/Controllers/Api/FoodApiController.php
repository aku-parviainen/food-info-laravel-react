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
        return Food::paginate(15)->toJson();
    }

    /**
     * Get food by ID
     *
     * @return JSON
     */
    public function getFoodByID($id)
    {
        $food = Food::where('id', $id)->first();

        if ($food === null) {
            return response()->json([
                'message' => 'Item not found',
            ], 404);
        }

        return $food->toJson();
    }

    /**
     * Get food by query string
     *
     * @return JSON
     */
    public function getFoodBySearch()
    {   
        $query = $_GET['q'];
        $food = Food::where('name', 'LIKE', '%' . $query . '%')->paginate(15);


        if ($food === null) {
            return response()->json([
                'message' => 'Item not found',
            ], 404);
        }

        return $food->toJson();
    }


}
