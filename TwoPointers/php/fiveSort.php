<?php

declare(strict_types=1);

/** @param int[] $nums */
function fiveSort(array $nums): array
{
    $i = 0;
    $j = count($nums) - 1;

    while ($i < $j) {
        if ($nums[$j] === 5) {
            $j--;
            continue;
        }
        if ($nums[$i] === 5) {
            [$nums[$i], $nums[$j]] = [$nums[$j], $nums[$i]];
            $i++;
            $j--;
        } else {
            $i++;
        }
    }

    return $nums;
}
