<?php

declare(strict_types=1);

function sumOfLengths(array $words): int
{
    if ($words === []) {
        return 0;
    }

    $word = array_shift($words);
    return strlen($word) + sumOfLengths($words);
}
