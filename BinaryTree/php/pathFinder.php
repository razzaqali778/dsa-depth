<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function pathFinder(?TreeNode $root, int $target): ?array
{
    $path = buildPath($root, $target);
    if ($path === null) {
        return null;
    }
    return array_reverse($path);
}

function buildPath(?TreeNode $node, int $target): ?array
{
    if ($node === null) {
        return null;
    }

    if ($node->val === $target) {
        return [$node->val];
    }

    $left = buildPath($node->left, $target);
    if ($left !== null) {
        $left[] = $node->val;
        return $left;
    }

    $right = buildPath($node->right, $target);
    if ($right !== null) {
        $right[] = $node->val;
        return $right;
    }

    return null;
}
