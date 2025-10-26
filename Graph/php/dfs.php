<?php

declare(strict_types=1);

require_once __DIR__ . '/GraphUtils.php';

function depthFirstTraversal(array $graph, string $source): array
{
    if ($source === '') {
        return [];
    }

    $order = [];
    $stack = [$source];
    $visited = [];

    while ($stack) {
        $node = array_pop($stack);
        if (isset($visited[$node])) {
            continue;
        }
        $visited[$node] = true;
        $order[] = $node;

        $neighbors = $graph[$node] ?? [];
        for ($i = count($neighbors) - 1; $i >= 0; $i--) {
            $stack[] = $neighbors[$i];
        }
    }

    return $order;
}
