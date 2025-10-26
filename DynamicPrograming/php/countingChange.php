<?php

declare(strict_types=1);

/** @param int[] $coins */
function countingChange(int $amount, array $coins): int
{
    $memo = [];

    $dfs = function (int $remaining, int $index) use (&$dfs, &$memo, $coins): int {
        $key = $remaining . ',' . $index;
        if (array_key_exists($key, $memo)) {
            return $memo[$key];
        }
        if ($remaining === 0) {
            return 1;
        }
        if ($index === count($coins)) {
            return 0;
        }

        $coin = $coins[$index];
        $ways = 0;
        for ($qty = 0; $qty * $coin <= $remaining; $qty++) {
            $ways += $dfs($remaining - $qty * $coin, $index + 1);
        }

        return $memo[$key] = $ways;
    };

    return $dfs($amount, 0);
}
