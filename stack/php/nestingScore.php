<?php

declare(strict_types=1);

function nestingScore(string $brackets): int
{
    $stack = [0];
    foreach (str_split($brackets) as $ch) {
        if ($ch === '[') {
            $stack[] = 0;
        } else {
            $top = array_pop($stack);
            if ($top === 0) {
                $stack[array_key_last($stack)] += 1;
            } else {
                $stack[array_key_last($stack)] += 2 * $top;
            }
        }
    }

    return $stack[0];
}
