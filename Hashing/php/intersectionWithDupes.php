<?php

declare(strict_types=1);

function intersectionWithDupes(array $first, array $second): array
{
    $counts = [];
    foreach ($first as $item) {
        $key = serialize($item);
        $counts[$key] = ($counts[$key] ?? 0) + 1;
    }

    $result = [];
    foreach ($second as $item) {
        $key = serialize($item);
        if (($counts[$key] ?? 0) > 0) {
            $result[] = $item;
            $counts[$key]--;
        }
    }

    return $result;
}
