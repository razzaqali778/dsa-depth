<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function treeIncludes(?TreeNode $root, int $target): bool
{
    if ($root === null) {
        return false;
    }

    $queue = [$root];
    while ($queue) {
        /** @var TreeNode $current */
        $current = array_shift($queue);
        if ($current->val === $target) {
            return true;
        }
        if ($current->left !== null) {
            $queue[] = $current->left;
        }
        if ($current->right !== null) {
            $queue[] = $current->right;
        }
    }

    return false;
}
