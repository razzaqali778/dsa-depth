<?php

declare(strict_types=1);

require_once __DIR__ . '/GraphUtils.php';

function closestCarrot(array $grid, int $startRow, int $startCol): int
{
    $queue = [[$startRow, $startCol, 0]];
    $visited = [gridPosKey($startRow, $startCol) => true];
    $deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while ($queue) {
        [$row, $col, $distance] = array_shift($queue);
        if ($grid[$row][$col] === 'C') {
            return $distance;
        }

        foreach ($deltas as [$dr, $dc]) {
            $nr = $row + $dr;
            $nc = $col + $dc;
            $key = gridPosKey($nr, $nc);
            if (!gridInBounds($grid, $nr, $nc) || $grid[$nr][$nc] === 'X' || isset($visited[$key])) {
                continue;
            }
            $visited[$key] = true;
            $queue[] = [$nr, $nc, $distance + 1];
        }
    }

    return -1;
}
