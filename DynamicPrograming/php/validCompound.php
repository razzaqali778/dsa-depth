<?php

declare(strict_types=1);

/** @param string[] $elements */
function validCompound(string $compound, array $elements): bool
{
    $lowerCompound = strtolower($compound);
    $lowerElements = array_map('strtolower', $elements);
    $memo = [];

    $dfs = function (int $index) use (&$dfs, &$memo, $lowerCompound, $lowerElements): bool {
        if ($index === strlen($lowerCompound)) {
            return true;
        }
        if (array_key_exists($index, $memo)) {
            return $memo[$index];
        }

        foreach ($lowerElements as $element) {
            $length = strlen($element);
            if (substr($lowerCompound, $index, $length) === $element && $dfs($index + $length)) {
                return $memo[$index] = true;
            }
        }

        return $memo[$index] = false;
    };

    return $dfs(0);
}
