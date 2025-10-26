<?php

declare(strict_types=1);

function decompressBraces(string $s): string
{
    $stack = [];
    foreach (str_split($s) as $ch) {
        if (ctype_digit($ch)) {
            $stack[] = (int) $ch;
        } elseif ($ch === '{') {
            continue;
        } elseif ($ch === '}') {
            $segment = '';
            while ($stack && is_string($stack[array_key_last($stack)])) {
                $segment = array_pop($stack) . $segment;
            }
            $count = array_pop($stack);
            $stack[] = str_repeat($segment, $count);
        } else {
            $stack[] = $ch;
        }
    }

    return implode('', $stack);
}
