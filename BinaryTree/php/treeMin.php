<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function treeMin(?TreeNode $root): int
{
    if ($root === null) {
        return PHP_INT_MAX;
    }

    return min($root->val, treeMin($root->left), treeMin($root->right));
}
