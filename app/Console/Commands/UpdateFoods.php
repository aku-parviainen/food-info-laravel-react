<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Helpers\ImportFineliCSV;

class UpdateFoods extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'foods:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update foods';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $fineliImport = new importFineliCSV();

        $fineliImport->importFineliCSV();

        $this->info('Foods Updated!');
    }
}
