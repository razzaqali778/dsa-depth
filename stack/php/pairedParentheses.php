<?php

declare(strict_types=1);

function pairedParentheses(string $s): bool
{
    $balance = 0;
    foreach (str_split($s) as $ch) {
        if ($ch === '(') {
            $balance++;
        } elseif ($ch === ')') {
            $balance--;
            if ($balance < 0) {
                return false;
            }
        }
    }
    return $balance === 0;
}
