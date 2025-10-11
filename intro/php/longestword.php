<?php

declare(strict_types=1);

function longestWord(string $sentence): string {
    $words = explode(' ', $sentence);
    $longest = '';
    foreach ($words as $word) {
        if (strlen($word) >= strlen($longest)) {
            $longest = $word;
        }
    }
    return $longest;
}