<?php

declare(strict_types=1);

function connectedComponentsCount(array $graph): int
{
    $visited = [];
    $count = 0;

    foreach ($graph as $node => $_) {
        if (exploreComponent($graph, (string) $node, $visited)) {
            $count++;
        }
    }

    return $count;
}

function exploreComponent(array $graph, string $node, array &$visited): bool
{
    if (isset($visited[$node])) {
        return false;
    }
    $visited[$node] = true;

    foreach ($graph[$node] ?? [] as $neighbor) {
        exploreComponent($graph, (string) $neighbor, $visited);
    }

    return true;
}
