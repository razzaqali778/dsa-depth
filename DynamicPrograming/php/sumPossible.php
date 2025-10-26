<?php

declare(strict_types=1);

/** @param int[] $numbers */
function sumPossible(int $amount, array $numbers, array &$memo = []): bool
{
    if ($amount === 0) {
        return true;
    }
    if ($amount < 0) {
        return false;
    }
    if (array_key_exists($amount, $memo)) {
        return $memo[$amount];
    }

    foreach ($numbers as $num) {
        if (sumPossible($amount - $num, $numbers, $memo)) {
            return $memo[$amount] = true;
        }
    }

    return $memo[$amount] = false;
}
