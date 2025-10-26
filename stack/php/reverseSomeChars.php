<?php

declare(strict_types=1);

function reverseSomeChars(string $s, array $chars): string
{
    $set = array_flip($chars);
    $stack = [];
    foreach (str_split($s) as $ch) {
        if (isset($set[$ch])) {
            $stack[] = $ch;
        }
    }

    $result = [];
    foreach (str_split($s) as $ch) {
        if (isset($set[$ch])) {
            $result[] = array_pop($stack);
        } else {
            $result[] = $ch;
        }
    }

    return implode('', $result);
}
