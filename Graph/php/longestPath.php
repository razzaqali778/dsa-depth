<?php

declare(strict_types=1);

function longestPath(array $graph): int
{
    $distance = [];
    foreach ($graph as $node => $neighbors) {
        if (!$neighbors) {
            $distance[$node] = 0;
        }
    }

    $maxLength = 0;
    foreach ($graph as $node => $_) {
        $value = traverseDistance($graph, (string) $node, $distance);
        if ($value > $maxLength) {
            $maxLength = $value;
        }
    }

    return $maxLength;
}

function traverseDistance(array $graph, string $node, array &$distance): int
{
    if (isset($distance[$node])) {
        return $distance[$node];
    }

    $maxNeighbor = 0;
    foreach ($graph[$node] ?? [] as $neighbor) {
        $candidate = traverseDistance($graph, (string) $neighbor, $distance);
        if ($candidate > $maxNeighbor) {
            $maxNeighbor = $candidate;
        }
    }

    $distance[$node] = $maxNeighbor + 1;
    return $distance[$node];
}
