<?php

declare(strict_types=1);

require_once __DIR__ . '/GraphUtils.php';

function breadthFirstTraversal(array $graph, string $source): array
{
    if ($source === '') {
        return [];
    }

    $order = [];
    $queue = [$source];
    $visited = [$source => true];

    while ($queue) {
        $current = array_shift($queue);
        $order[] = $current;

        foreach ($graph[$current] ?? [] as $neighbor) {
            if (!isset($visited[$neighbor])) {
                $visited[$neighbor] = true;
                $queue[] = $neighbor;
            }
        }
    }

    return $order;
}
