<?php

declare(strict_types=1);


function maxValue(array $numbers): float {
    $max = -INF;
    foreach ($numbers as $num) {
        if ($num > $max) {
            $max = $num;
        }
    }
    return $max;
}


if (basename(__FILE__) === basename($_SERVER['SCRIPT_FILENAME'] ?? '')) {
    echo maxValue([1.2, 5.6, 3.4]) . PHP_EOL; // 5.6
    echo maxValue([]) . PHP_EOL;              // -INF
}