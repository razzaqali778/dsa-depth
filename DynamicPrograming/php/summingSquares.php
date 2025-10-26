<?php

declare(strict_types=1);

function summingSquares(int $n): int
{
    $memo = [];

    $dfs = function (int $value) use (&$dfs, &$memo): float {
        if ($value === 0) {
            return 0;
        }
        if (array_key_exists($value, $memo)) {
            return $memo[$value];
        }
        $best = INF;
        for ($i = 1; $i * $i <= $value; $i++) {
            $best = min($best, 1 + $dfs($value - $i * $i));
        }
        return $memo[$value] = $best;
    };

    return (int) $dfs($n);
}
