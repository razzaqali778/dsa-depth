<?php

declare(strict_types=1);

function tribonacci(int $n, array &$memo = []): int
{
    if ($n === 0) {
        return 0;
    }
    if ($n === 1 || $n === 2) {
        return 1;
    }
    if (array_key_exists($n, $memo)) {
        return $memo[$n];
    }
    return $memo[$n] = tribonacci($n - 1, $memo) + tribonacci($n - 2, $memo) + tribonacci($n - 3, $memo);
}
