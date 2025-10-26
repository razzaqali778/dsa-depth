<?php

declare(strict_types=1);

function hasCycle(array $graph): bool
{
    $visiting = [];
    $visited = [];

    foreach ($graph as $node => $_) {
        if (detectCycle($graph, (string) $node, $visiting, $visited)) {
            return true;
        }
    }

    return false;
}

function detectCycle(array $graph, string $node, array &$visiting, array &$visited): bool
{
    if (isset($visited[$node])) {
        return false;
    }
    if (isset($visiting[$node])) {
        return true;
    }

    $visiting[$node] = true;
    foreach ($graph[$node] ?? [] as $neighbor) {
        if (detectCycle($graph, (string) $neighbor, $visiting, $visited)) {
            return true;
        }
    }

    unset($visiting[$node]);
    $visited[$node] = true;
    return false;
}
