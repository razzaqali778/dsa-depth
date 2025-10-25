<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function treeLevels(?TreeNode $root): array
{
    if ($root === null) {
        return [];
    }

    $queue = [[ $root, 0 ]];
    $levels = [];

    while ($queue) {
        [$node, $level] = array_shift($queue);
        if (!array_key_exists($level, $levels)) {
            $levels[$level] = [];
        }
        $levels[$level][] = $node->val;
        if ($node->left !== null) {
            $queue[] = [$node->left, $level + 1];
        }
        if ($node->right !== null) {
            $queue[] = [$node->right, $level + 1];
        }
    }

    ksort($levels);
    return array_values($levels);
}
