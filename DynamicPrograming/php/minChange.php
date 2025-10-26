<?php

declare(strict_types=1);

/** @param int[] $coins */
function minChange(int $amount, array $coins): int
{
    $memo = [];

    $dfs = function (int $remaining) use (&$dfs, &$memo, $coins): int {
        if ($remaining < 0) {
            return INF;
        }
        if ($remaining === 0) {
            return 0;
        }
        if (array_key_exists($remaining, $memo)) {
            return $memo[$remaining];
        }
        $best = INF;
        foreach ($coins as $coin) {
            $best = min($best, 1 + $dfs($remaining - $coin));
        }
        return $memo[$remaining] = $best;
    };

    $answer = $dfs($amount);
    return is_infinite($answer) ? -1 : (int) $answer;
}
