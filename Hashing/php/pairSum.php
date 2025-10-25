<?php

declare(strict_types=1);

function pairSum(array $numbers, int $targetSum): array
{
    $indices = [];
    foreach ($numbers as $idx => $value) {
        $complement = $targetSum - $value;
        if (array_key_exists($complement, $indices)) {
            return [$indices[$complement], $idx];
        }
        if (!array_key_exists($value, $indices)) {
            $indices[$value] = $idx;
        }
    }

    throw new InvalidArgumentException('Pair not found');
}
