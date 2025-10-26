<?php

declare(strict_types=1);

/** @param string[] $words */
function quickestConcat(string $s, array $words): int
{
    $memo = [];

    $dfs = function (int $i) use (&$dfs, &$memo, $s, $words): float {
        if ($i === strlen($s)) {
            return 0;
        }
        if (array_key_exists($i, $memo)) {
            return $memo[$i];
        }
        $best = INF;
        foreach ($words as $word) {
            $length = strlen($word);
            if (substr($s, $i, $length) === $word) {
                $best = min($best, 1 + $dfs($i + $length));
            }
        }
        return $memo[$i] = $best;
    };

    $result = $dfs(0);
    return is_infinite($result) ? -1 : (int) $result;
}
