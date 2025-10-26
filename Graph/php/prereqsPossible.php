<?php

declare(strict_types=1);

function prereqsPossible(int $numCourses, array $prereqs): bool
{
    $graph = [];
    for ($i = 0; $i < $numCourses; $i++) {
        $graph[$i] = [];
    }
    foreach ($prereqs as [$a, $b]) {
        $graph[$a][] = $b;
    }

    $visiting = [];
    $visited = [];

    for ($i = 0; $i < $numCourses; $i++) {
        if (prereqCycle($graph, $i, $visiting, $visited)) {
            return false;
        }
    }

    return true;
}

function prereqCycle(array $graph, int $node, array &$visiting, array &$visited): bool
{
    if (isset($visited[$node])) {
        return false;
    }
    if (isset($visiting[$node])) {
        return true;
    }

    $visiting[$node] = true;
    foreach ($graph[$node] as $neighbor) {
        if (prereqCycle($graph, (int) $neighbor, $visiting, $visited)) {
            return true;
        }
    }

    unset($visiting[$node]);
    $visited[$node] = true;
    return false;
}
