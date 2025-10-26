<?php

declare(strict_types=1);

function uncompress(string $s): string
{
    $result = [];
    $i = 0;
    $len = strlen($s);

    while ($i < $len) {
        $j = $i;
        while ($j < $len && ctype_digit($s[$j])) {
            $j++;
        }
        $count = intval(substr($s, $i, $j - $i));
        $char = $s[$j];
        $result[] = str_repeat($char, $count);
        $i = $j + 1;
    }

    return implode('', $result);
}
