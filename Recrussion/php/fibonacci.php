<?php

declare(strict_types=1);

function fibonacci(int $n, array &$memo = []): int
{
    if ($n < 0) {
        throw new InvalidArgumentException('n must be non-negative');
    }

    if ($n === 0 || $n === 1) {
        return $n;
    }

    if (isset($memo[$n])) {
        return $memo[$n];
    }

    $memo[$n] = fibonacci($n - 1, $memo) + fibonacci($n - 2, $memo);
    return $memo[$n];
}
