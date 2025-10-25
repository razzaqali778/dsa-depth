<?php

declare(strict_types=1);

function pairProduct(array $numbers, int $targetProduct): array
{
    $indices = [];

    foreach ($numbers as $index => $value) {
        if ($value === 0) {
            if ($targetProduct === 0 && array_key_exists(0, $indices)) {
                return [$indices[0], $index];
            }
            if (!array_key_exists(0, $indices)) {
                $indices[0] = $index;
            }
            continue;
        }

        if ($targetProduct % $value !== 0) {
            if (!array_key_exists($value, $indices)) {
                $indices[$value] = $index;
            }
            continue;
        }

        $complement = intdiv($targetProduct, $value);
        if (array_key_exists($complement, $indices)) {
            return [$indices[$complement], $index];
        }
        if (!array_key_exists($value, $indices)) {
            $indices[$value] = $index;
        }
    }

    throw new InvalidArgumentException('Pair not found');
}
