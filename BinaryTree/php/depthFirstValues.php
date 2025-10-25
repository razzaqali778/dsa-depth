<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function depthFirstValues(?TreeNode $root): array
{
    if ($root === null) {
        return [];
    }

    $stack = [$root];
    $values = [];

    while ($stack) {
        /** @var TreeNode $current */
        $current = array_pop($stack);
        $values[] = $current->val;
        if ($current->right !== null) {
            $stack[] = $current->right;
        }
        if ($current->left !== null) {
            $stack[] = $current->left;
        }
    }

    return $values;
}
