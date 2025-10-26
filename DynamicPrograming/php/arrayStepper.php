<?php

declare(strict_types=1);

function arrayStepper(array $numbers): bool
{
    $memo = [];
    $length = count($numbers);

    $dfs = function (int $index) use (&$dfs, &$memo, $numbers, $length): bool {
        if ($index >= $length - 1) {
            return true;
        }
        if (array_key_exists($index, $memo)) {
            return $memo[$index];
        }

        $maxStep = $numbers[$index];
        for ($step = 1; $step <= $maxStep; $step++) {
            if ($dfs($index + $step)) {
                return $memo[$index] = true;
            }
        }

        return $memo[$index] = false;
    };

    if ($length === 0) {
        return true;
    }

    return $dfs(0);
}
