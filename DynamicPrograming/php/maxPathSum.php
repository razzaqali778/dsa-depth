<?php

declare(strict_types=1);

/** @param int[][] $grid */
function maxPathSum(array $grid): int
{
    $rows = count($grid);
    $cols = $rows ? count($grid[0]) : 0;
    $memo = [];

    $dfs = function (int $r, int $c) use (&$dfs, &$memo, $grid, $rows, $cols): int {
        if ($r === $rows || $c === $cols) {
            return PHP_INT_MIN;
        }
        if ($r === $rows - 1 && $c === $cols - 1) {
            return $grid[$r][$c];
        }
        $key = $r . ',' . $c;
        if (array_key_exists($key, $memo)) {
            return $memo[$key];
        }
        return $memo[$key] = $grid[$r][$c] + max($dfs($r + 1, $c), $dfs($r, $c + 1));
    };

    return $dfs(0, 0);
}
