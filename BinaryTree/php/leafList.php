<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function leafList(?TreeNode $root): array
{
    $leaves = [];
    collectLeaves($root, $leaves);
    return $leaves;
}

function collectLeaves(?TreeNode $node, array &$leaves): void
{
    if ($node === null) {
        return;
    }

    if ($node->left === null && $node->right === null) {
        $leaves[] = $node->val;
        return;
    }

    collectLeaves($node->left, $leaves);
    collectLeaves($node->right, $leaves);
}
