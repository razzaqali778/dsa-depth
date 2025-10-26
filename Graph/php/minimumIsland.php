<?php

declare(strict_types=1);

require_once __DIR__ . '/GraphUtils.php';

function minimumIsland(array $grid): int
{
    $visited = [];
    $minSize = PHP_INT_MAX;

    for ($r = 0; $r < count($grid); $r++) {
        for ($c = 0; $c < count($grid[0]); $c++) {
            $size = measureIsland($grid, $r, $c, $visited);
            if ($size > 0 && $size < $minSize) {
                $minSize = $size;
            }
        }
    }

    return $minSize === PHP_INT_MAX ? 0 : $minSize;
}

function measureIsland(array $grid, int $r, int $c, array &$visited): int
{
    if (!gridInBounds($grid, $r, $c) || $grid[$r][$c] === 'W') {
        return 0;
    }

    $key = gridPosKey($r, $c);
    if (isset($visited[$key])) {
        return 0;
    }
    $visited[$key] = true;

    $size = 1;
    $size += measureIsland($grid, $r - 1, $c, $visited);
    $size += measureIsland($grid, $r + 1, $c, $visited);
    $size += measureIsland($grid, $r, $c - 1, $visited);
    $size += measureIsland($grid, $r, $c + 1, $visited);
    return $size;
}
