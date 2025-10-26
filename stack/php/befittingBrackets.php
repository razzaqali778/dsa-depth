<?php

declare(strict_types=1);

function befittingBrackets(string $s): bool
{
    $stack = [];
    $matching = [')' => '(', ']' => '[', '}' => '{'];

    foreach (str_split($s) as $ch) {
        if ($ch === '(' || $ch === '[' || $ch === '{') {
            $stack[] = $ch;
            continue;
        }

        if (isset($matching[$ch])) {
            $top = array_pop($stack);
            if ($top !== $matching[$ch]) {
                return false;
            }
        }
    }

    return count($stack) === 0;
}
