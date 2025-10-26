<?php

declare(strict_types=1);

function maxPalinSubsequence(string $s): int
{
    if ($s === '') {
        return 0;
    }
    $memo = [];

    $dfs = function (int $i, int $j) use (&$dfs, &$memo, $s): int {
        if ($i == $j) {
            return 1;
        }
        if ($i > $j) {
            return 0;
        }
        $key = $i . ',' . $j;
        if (array_key_exists($key, $memo)) {
            return $memo[$key];
        }

        if ($s[$i] === $s[$j]) {
            return $memo[$key] = 2 + $dfs($i + 1, $j - 1);
        }

        return $memo[$key] = max($dfs($i + 1, $j), $dfs($i, $j - 1));
    };

    return $dfs(0, strlen($s) - 1);
}
