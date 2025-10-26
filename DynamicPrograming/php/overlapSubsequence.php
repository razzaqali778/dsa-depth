<?php

declare(strict_types=1);

function overlapSubsequence(string $str1, string $str2): int
{
    $memo = [];

    $dfs = function (int $i, int $j) use (&$dfs, &$memo, $str1, $str2): int {
        if ($i === strlen($str1) || $j === strlen($str2)) {
            return 0;
        }
        $key = $i . ',' . $j;
        if (array_key_exists($key, $memo)) {
            return $memo[$key];
        }
        if ($str1[$i] === $str2[$j]) {
            return $memo[$key] = 1 + $dfs($i + 1, $j + 1);
        }
        return $memo[$key] = max($dfs($i + 1, $j), $dfs($i, $j + 1));
    };

    return $dfs(0, 0);
}
