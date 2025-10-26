<?php

declare(strict_types=1);

require_once __DIR__ . '/GraphUtils.php';

function bestBridge(array $grid): int
{
    $firstIsland = [];

    for ($r = 0; $r < count($grid); $r++) {
        for ($c = 0; $c < count($grid[0]); $c++) {
            if ($grid[$r][$c] === 'L') {
                collectIsland($grid, $r, $c, $firstIsland);
                if ($firstIsland) {
                    break 2;
                }
            }
        }
    }

    if (!$firstIsland) {
        return 0;
    }

    $queue = [];
    $visited = $firstIsland;
    foreach (array_keys($firstIsland) as $key) {
        [$row, $col] = array_map('intval', explode(',', $key));
        $queue[] = [$row, $col, 0];
    }

    $deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while ($queue) {
        [$row, $col, $dist] = array_shift($queue);
        $key = gridPosKey($row, $col);
        if ($grid[$row][$col] === 'L' && !isset($firstIsland[$key])) {
            return $dist - 1;
        }

        foreach ($deltas as [$dr, $dc]) {
            $nr = $row + $dr;
            $nc = $col + $dc;
            $neighborKey = gridPosKey($nr, $nc);
            if (!gridInBounds($grid, $nr, $nc) || isset($visited[$neighborKey])) {
                continue;
            }
            $visited[$neighborKey] = true;
            $queue[] = [$nr, $nc, $dist + 1];
        }
    }

    return -1;
}

function collectIsland(array $grid, int $r, int $c, array &$island): void
{
    if (!gridInBounds($grid, $r, $c) || $grid[$r][$c] === 'W') {
        return;
    }

    $key = gridPosKey($r, $c);
    if (isset($island[$key])) {
        return;
    }
    $island[$key] = true;

    collectIsland($grid, $r - 1, $c, $island);
    collectIsland($grid, $r + 1, $c, $island);
    collectIsland($grid, $r, $c - 1, $island);
    collectIsland($grid, $r, $c + 1, $island);
}
