<?php

declare(strict_types=1);

require_once __DIR__ . '/GraphUtils.php';

function islandCount(array $grid): int
{
    $visited = [];
    $count = 0;

    for ($r = 0; $r < count($grid); $r++) {
        for ($c = 0; $c < count($grid[0]); $c++) {
            if (exploreIsland($grid, $r, $c, $visited)) {
                $count++;
            }
        }
    }

    return $count;
}

function exploreIsland(array $grid, int $r, int $c, array &$visited): bool
{
    if (!gridInBounds($grid, $r, $c) || $grid[$r][$c] === 'W') {
        return false;
    }

    $key = gridPosKey($r, $c);
    if (isset($visited[$key])) {
        return false;
    }
    $visited[$key] = true;

    exploreIsland($grid, $r - 1, $c, $visited);
    exploreIsland($grid, $r + 1, $c, $visited);
    exploreIsland($grid, $r, $c - 1, $visited);
    exploreIsland($grid, $r, $c + 1, $visited);
    return true;
}
