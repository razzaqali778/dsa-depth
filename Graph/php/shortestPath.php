<?php

declare(strict_types=1);

require_once __DIR__ . '/GraphUtils.php';

function shortestPath(array $edges, string $nodeA, string $nodeB): int
{
    $graph = buildUndirectedGraph($edges);
    $queue = [[$nodeA, 0]];
    $visited = [$nodeA => true];

    while ($queue) {
        [$node, $distance] = array_shift($queue);
        if ($node === $nodeB) {
            return $distance;
        }

        foreach ($graph[$node] ?? [] as $neighbor) {
            if (isset($visited[$neighbor])) {
                continue;
            }
            $visited[$neighbor] = true;
            $queue[] = [$neighbor, $distance + 1];
        }
    }

    return -1;
}
