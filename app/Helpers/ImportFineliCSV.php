<?php

namespace App\Helpers;

use App\Food;

ini_set('max_execution_time', 180); // More execution time to handle larger files

class ImportFineliCSV
{
    private $csvPath;

    function __construct()
    {
        $this->csvPath = storage_path('import-data') . '/fineli.csv';
    }

    public function importFineliCSV()
    {
        $row = 1;
        if (($handle = fopen($this->csvPath, "r")) !== false) {
            while (($data = fgetcsv($handle, 2000, ";")) !== false) {
                // Skip header row
                if ($row++ == 1) {
                    continue;
                }

                // Check if food already exists in database ...
                $food = Food::where('external_id', '=', $data[0])->first();
                
                // ... and if not, create a new one. Otherwise update existing food info.
                if ($food === null) {
                    $food = Food::create();
                }

                $food->external_id = $data[0];
                $food->name = $data[1];
                
                // Map CSV to food model. Values stored in grams (convert if necessary)
                $food->energy_kj = $this->setNumericValue($data[2]);
                $food->carbs = $this->setNumericValue($data[3]);
                $food->fat = $this->setNumericValue($data[4]);
                $food->protein = $this->setNumericValue($data[5]);
                $food->alcohol = $this->setNumericValue($data[6]);
                $food->fibre = $this->setNumericValue($data[7]);
                // $data[8]
                $food->sugar_alcohol = $this->setNumericValue($data[8]);
                $food->starch = $this->setNumericValue($data[9]);
                $food->sugars = $this->setNumericValue($data[10]);
                $food->fructose = $this->setNumericValue($data[11]);
                $food->galactose = $this->setNumericValue($data[12]);
                $food->glucose = $this->setNumericValue($data[13]);
                $food->lactose = $this->setNumericValue($data[14]);
                $food->maltose = $this->setNumericValue($data[15]);
                $food->sucrose = $this->setNumericValue($data[16]);
                $food->polysaccharide = $this->setNumericValue($data[17]);
                // $data[19]
                $food->fatty_acids_total = $this->setNumericValue($data[20]);
                $food->polyunsaturated_fatty_acids = $this->setNumericValue($data[21]);
                $food->monounsaturated_cis_fatty_acids = $this->setNumericValue($data[22]);
                $food->saturated_fatty_acids = $this->setNumericValue($data[23]);
                $food->n_3_polyunsaturated_fatty_acids = $this->setNumericValue($data[24]);
                $food->n_6_polyunsaturated_fatty_acids = $this->setNumericValue($data[25]);
                
                //$food->linoleic_acid = $this->setNumericValue($data[26], 1000);
                //$food->alpha_linolenic_acid = $this->setNumericValue($data[27], 1000);
                //$food->epa_fatty_acids = $this->setNumericValue($data[28], 1000);
                //$food->dha_fatty_acids = $this->setNumericValue($data[29], 1000);
                //$food->cholesterol = $this->setNumericValue($data[30], 1000);
                //$food->sterols = $this->setNumericValue($data[31], 1000);
                //$food->calcium = $this->setNumericValue($data[32], 1000);
                //$food->iron = $this->setNumericValue($data[33], 1000);
                //$food->iodide = $this->setNumericValue($data[34], 1000000);
                //$food->potassium = $this->setNumericValue($data[35], 1000);
                //$food->magnesium =  $this->setNumericValue($data[36], 1000);
                //$food->sodium = $this->setNumericValue($data[37], 1000);
                //$food->salt = $this->setNumericValue($data[38], 1000);
                //$food->phosphorus = $this->setNumericValue($data[39], 1000);
                //$food->selenium = $this->setNumericValue($data[40], 1000000);
                //$food->zinc = $this->setNumericValue($data[41], 1000);
                //$food->tryptophan = $this->setNumericValue($data[42], 1000);
                //$food->folate = $this->setNumericValue($data[43], 1000000);
                //$food->niacin_equivalents = $this->setNumericValue($data[44], 1000);
                //$food->niacin_preformed = $this->setNumericValue($data[45], 1000);
                //$food->vitamers_pyridoxine = $this->setNumericValue($data[46], 1000);
                //$food->riboflavine = $this->setNumericValue($data[47], 1000);
                //$food->vitamin_b1 = $this->setNumericValue($data[48], 1000);
                //$food->vitamin_b12 = $this->setNumericValue($data[49], 1000000);
                //$food->vitamin_c = $this->setNumericValue($data[50], 1000);
                //$food->vitamin_a = $this->setNumericValue($data[51], 1000000);
                //$food->carotenoids = $this->setNumericValue($data[52], 1000000);
                //$food->vitamin_d = $this->setNumericValue($data[53], 1000000);
                //$food->vitamin_e = $this->setNumericValue($data[54], 1000);
                //$food->vitamin_k = $this->setNumericValue($data[55], 1000000);

                // Save food
                $food->save();
            }
            fclose($handle);
        }
    }
    
    /**
     * Set numeric value, if missing set to null. Use Divider to convert data to grams.
     */
    private function setNumericValue($value, $divider = 1)
    {
        return (is_numeric($value) ? ($value / $divider) : null);
    }
}
