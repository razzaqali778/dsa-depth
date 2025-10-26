<?php

declare(strict_types=1);

require_once __DIR__ . '/GraphUtils.php';

function undirectedPath(array $edges, string $src, string $dst): bool
{
    $graph = buildUndirectedGraph($edges);
    $visited = [];
    return undirectedPathDfs($graph, $src, $dst, $visited);
}

function undirectedPathDfs(array $graph, string $node, string $dst, array &$visited): bool
{
    if ($node === $dst) {
        return true;
    }
    if (isset($visited[$node])) {
        return false;
    }

    $visited[$node] = true;
    foreach ($graph[$node] ?? [] as $neighbor) {
        if (undirectedPathDfs($graph, $neighbor, $dst, $visited)) {
            return true;
        }
    }
    return false;
}
