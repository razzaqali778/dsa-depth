<?php

declare(strict_types=1);

require_once __DIR__ . '/GraphUtils.php';

function hasPath(array $graph, string $src, string $dst): bool
{
    if ($src === $dst) {
        return true;
    }

    $visited = [];
    return hasPathDfs($graph, $src, $dst, $visited);
}

function hasPathDfs(array $graph, string $node, string $dst, array &$visited): bool
{
    if ($node === $dst) {
        return true;
    }
    if (isset($visited[$node])) {
        return false;
    }

    $visited[$node] = true;
    foreach ($graph[$node] ?? [] as $neighbor) {
        if (hasPathDfs($graph, $neighbor, $dst, $visited)) {
            return true;
        }
    }

    return false;
}
