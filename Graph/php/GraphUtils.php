<?php

declare(strict_types=1);

function buildUndirectedGraph(array $edges): array
{
    $graph = [];
    foreach ($edges as [$a, $b]) {
        $graph[$a] ??= [];
        $graph[$b] ??= [];
        $graph[$a][] = $b;
        $graph[$b][] = $a;
    }
    return $graph;
}

function gridInBounds(array $grid, int $row, int $col): bool
{
    return $row >= 0 && $row < count($grid) && $col >= 0 && $col < count($grid[0]);
}

function gridPosKey(int $row, int $col): string
{
    return $row . ',' . $col;
}
