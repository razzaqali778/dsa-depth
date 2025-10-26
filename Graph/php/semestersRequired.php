<?php

declare(strict_types=1);

function semestersRequired(int $numCourses, array $prereqs): int
{
    $graph = [];
    for ($i = 0; $i < $numCourses; $i++) {
        $graph[$i] = [];
    }
    foreach ($prereqs as [$a, $b]) {
        $graph[$a][] = $b;
    }

    $distance = [];
    foreach ($graph as $node => $neighbors) {
        if (!$neighbors) {
            $distance[$node] = 1;
        }
    }

    $maxSemesters = 0;
    for ($i = 0; $i < $numCourses; $i++) {
        $value = traverseSemesters($graph, $i, $distance);
        if ($value > $maxSemesters) {
            $maxSemesters = $value;
        }
    }

    return $maxSemesters;
}

function traverseSemesters(array $graph, int $node, array &$distance): int
{
    if (isset($distance[$node])) {
        return $distance[$node];
    }

    $maxChild = 0;
    foreach ($graph[$node] as $neighbor) {
        $candidate = traverseSemesters($graph, (int) $neighbor, $distance);
        if ($candidate > $maxChild) {
            $maxChild = $candidate;
        }
    }

    $distance[$node] = $maxChild + 1;
    return $distance[$node];
}
