<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function treeValueCount(?TreeNode $root, int $target): int
{
    if ($root === null) {
        return 0;
    }

    $match = $root->val === $target ? 1 : 0;
    return $match + treeValueCount($root->left, $target) + treeValueCount($root->right, $target);
}
