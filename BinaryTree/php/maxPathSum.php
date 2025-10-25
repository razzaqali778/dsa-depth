<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function maxPathSum(?TreeNode $root): int
{
    if ($root === null) {
        return PHP_INT_MIN;
    }
    if ($root->left === null && $root->right === null) {
        return $root->val;
    }

    return $root->val + max(maxPathSum($root->left), maxPathSum($root->right));
}
