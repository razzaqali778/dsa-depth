<?php

declare(strict_types=1);

/** @param string[] $words */
function canConcat(string $s, array $words): bool
{
    $memo = [];

    $dfs = function (int $index) use (&$dfs, &$memo, $s, $words): bool {
        if ($index === strlen($s)) {
            return true;
        }
        if (array_key_exists($index, $memo)) {
            return $memo[$index];
        }

        foreach ($words as $word) {
            $length = strlen($word);
            if (substr($s, $index, $length) === $word && $dfs($index + $length)) {
                return $memo[$index] = true;
            }
        }

        return $memo[$index] = false;
    };

    return $dfs(0);
}
