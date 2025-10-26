<?php

declare(strict_types=1);

function isPalindrome(string $s): bool
{
    $i = 0;
    $j = strlen($s) - 1;

    while ($i < $j) {
        if ($s[$i] !== $s[$j]) {
            return false;
        }
        $i++;
        $j--;
    }

    return true;
}
