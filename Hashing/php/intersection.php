<?php

declare(strict_types=1);

function intersection(array $first, array $second): array
{
    $lookup = [];
    foreach ($second as $item) {
        $lookup[serialize($item)] = $item;
    }

    $added = [];
    $result = [];

    foreach ($first as $item) {
        $key = serialize($item);
        if (isset($lookup[$key]) && !isset($added[$key])) {
            $result[] = $item;
            $added[$key] = true;
        }
    }

    return $result;
}
