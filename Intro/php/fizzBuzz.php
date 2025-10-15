<?php

declare(strict_types=1);


function fizzBuzz(int $n): array {
    $result = [];
    for ($i = 1; $i <= $n; $i++) {
        if ($i % 15 === 0) {
            $result[] = 'fizzbuzz';
        } elseif ($i % 3 === 0) {
            $result[] = 'fizz';
        } elseif ($i % 5 === 0) {
            $result[] = 'buzz';
        } else {
            $result[] = $i;
        }
    }
    return $result;
}

