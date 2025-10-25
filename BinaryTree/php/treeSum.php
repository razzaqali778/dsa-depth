<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function treeSum(?TreeNode $root): int
{
    if ($root === null) {
        return 0;
    }

    return $root->val + treeSum($root->left) + treeSum($root->right);
}
