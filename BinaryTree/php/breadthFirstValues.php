<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function breadthFirstValues(?TreeNode $root): array
{
    if ($root === null) {
        return [];
    }

    $queue = [$root];
    $values = [];

    while ($queue) {
        /** @var TreeNode $current */
        $current = array_shift($queue);
        $values[] = $current->val;
        if ($current->left !== null) {
            $queue[] = $current->left;
        }
        if ($current->right !== null) {
            $queue[] = $current->right;
        }
    }

    return $values;
}
