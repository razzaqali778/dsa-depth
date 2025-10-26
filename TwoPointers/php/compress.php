<?php

declare(strict_types=1);

function compress(string $s): string
{
    $result = [];
    $i = 0;
    $len = strlen($s);

    while ($i < $len) {
        $j = $i + 1;
        while ($j < $len && $s[$j] === $s[$i]) {
            $j++;
        }
        $count = $j - $i;
        if ($count === 1) {
            $result[] = $s[$i];
        } else {
            $result[] = (string) $count;
            $result[] = $s[$i];
        }
        $i = $j;
    }

    return implode('', $result);
}
