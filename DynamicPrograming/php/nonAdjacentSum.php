<?php

declare(strict_types=1);

/** @param int[] $nums */
function nonAdjacentSum(array $nums): int
{
    $memo = [];
    $length = count($nums);

    $dfs = function (int $i) use (&$dfs, &$memo, $nums, $length): int {
        if ($i >= $length) {
            return 0;
        }
        if (array_key_exists($i, $memo)) {
            return $memo[$i];
        }

        $include = $nums[$i] + $dfs($i + 2);
        $exclude = $dfs($i + 1);
        return $memo[$i] = max($include, $exclude);
    };

    return $dfs(0);
}
