<?php

declare(strict_types=1);

function sumNumbersRecursive(array $numbers): int
{
    if ($numbers === []) {
        return 0;
    }

    $head = array_shift($numbers);
    return $head + sumNumbersRecursive($numbers);
}
