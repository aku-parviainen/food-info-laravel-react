<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Food;

class FoodApiController extends Controller
{
    /**
     * Get foods
     *
     * @return JSON
     */
    public function getFoods(Request $request)
    {
        if ($request->has('q')) {
            return $this->getFoodBySearch($request);
        }
        else { // Get all foods paginateds
            return Food::paginate(15)->toJson();
        }
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
    private function getFoodBySearch()
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
