<?php

declare(strict_types=1);

function anagrams(string $first, string $second): bool
{
    if (strlen($first) !== strlen($second)) {
        return false;
    }

    $counts = [];
    foreach (str_split($first) as $char) {
        $counts[$char] = ($counts[$char] ?? 0) + 1;
    }

    foreach (str_split($second) as $char) {
        if (!isset($counts[$char]) || $counts[$char] === 0) {
            return false;
        }
        $counts[$char]--;
    }

    return true;
}
