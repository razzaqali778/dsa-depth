<?php

declare(strict_types=1);

function largestComponent(array $graph): int
{
    $visited = [];
    $largest = 0;

    foreach ($graph as $node => $_) {
        $size = componentSize($graph, (string) $node, $visited);
        if ($size > $largest) {
            $largest = $size;
        }
    }

    return $largest;
}

function componentSize(array $graph, string $node, array &$visited): int
{
    if (isset($visited[$node])) {
        return 0;
    }
    $visited[$node] = true;

    $size = 1;
    foreach ($graph[$node] ?? [] as $neighbor) {
        $size += componentSize($graph, (string) $neighbor, $visited);
    }
    return $size;
}
