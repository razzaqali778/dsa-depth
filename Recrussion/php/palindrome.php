<?php

declare(strict_types=1);

function palindrome(string $input): bool
{
    $length = strlen($input);
    if ($length <= 1) {
        return true;
    }

    if ($input[0] !== $input[$length - 1]) {
        return false;
    }

    return palindrome(substr($input, 1, $length - 2));
}
