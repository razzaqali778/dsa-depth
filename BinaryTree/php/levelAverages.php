<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function levelAverages(?TreeNode $root): array
{
    if ($root === null) {
        return [];
    }

    $queue = [$root];
    $averages = [];

    while ($queue) {
        $levelSize = count($queue);
        $sum = 0.0;
        for ($i = 0; $i < $levelSize; $i++) {
            /** @var TreeNode $current */
            $current = array_shift($queue);
            $sum += $current->val;
            if ($current->left !== null) {
                $queue[] = $current->left;
            }
            if ($current->right !== null) {
                $queue[] = $current->right;
            }
        }
        $averages[] = $sum / $levelSize;
    }

    return $averages;
}
