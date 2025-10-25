<?php

declare(strict_types=1);

function mostFrequentChar(string $input): string
{
    $counts = [];
    $bestChar = '';
    $bestCount = -1;

    $characters = preg_split('//u', $input, -1, PREG_SPLIT_NO_EMPTY);
    foreach ($characters as $char) {
        $counts[$char] = ($counts[$char] ?? 0) + 1;
    }

    foreach ($characters as $char) {
        $current = $counts[$char];
        if ($current > $bestCount) {
            $bestChar = $char;
            $bestCount = $current;
        }
    }

    return $bestChar;
}
