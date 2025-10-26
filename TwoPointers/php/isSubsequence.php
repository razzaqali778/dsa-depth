<?php

declare(strict_types=1);

function isSubsequence(string $target, string $source): bool
{
    $i = 0;
    $j = 0;

    while ($i < strlen($target) && $j < strlen($source)) {
        if ($target[$i] === $source[$j]) {
            $i++;
        }
        $j++;
    }

    return $i === strlen($target);
}
