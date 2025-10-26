<?php

declare(strict_types=1);

function fib(int $n, array &$memo = []): int
{
    if ($n === 0 || $n === 1) {
        return $n;
    }
    if (array_key_exists($n, $memo)) {
        return $memo[$n];
    }
    return $memo[$n] = fib($n - 1, $memo) + fib($n - 2, $memo);
}
