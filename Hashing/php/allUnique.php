<?php

declare(strict_types=1);

function allUnique(array $items): bool
{
    $seen = [];
    foreach ($items as $item) {
        $key = serialize($item);
        if (isset($seen[$key])) {
            return false;
        }
        $seen[$key] = true;
    }

    return true;
}
