<?php

declare(strict_types=1);

/** @param string[] $elements */
function countCompounds(string $compound, array $elements): int
{
    $lowerCompound = strtolower($compound);
    $lowerElements = array_map('strtolower', $elements);
    $memo = [];

    $dfs = function (int $index) use (&$dfs, &$memo, $lowerCompound, $lowerElements): int {
        if ($index === strlen($lowerCompound)) {
            return 1;
        }
        if (array_key_exists($index, $memo)) {
            return $memo[$index];
        }

        $count = 0;
        foreach ($lowerElements as $element) {
            $length = strlen($element);
            if (substr($lowerCompound, $index, $length) === $element) {
                $count += $dfs($index + $length);
            }
        }

        return $memo[$index] = $count;
    };

    return $dfs(0);
}
