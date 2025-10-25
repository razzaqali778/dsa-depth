<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function bottomRightValue(TreeNode $root): int
{
    $queue = [$root];
    $current = $root;

    while ($queue) {
        $current = array_shift($queue);
        if ($current->left !== null) {
            $queue[] = $current->left;
        }
        if ($current->right !== null) {
            $queue[] = $current->right;
        }
    }

    return $current->val;
}
