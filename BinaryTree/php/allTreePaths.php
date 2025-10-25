<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function allTreePaths(?TreeNode $root): array
{
    if ($root === null) {
        return [];
    }

    if ($root->left === null && $root->right === null) {
        return [[ $root->val ]];
    }

    $paths = [];
    foreach (allTreePaths($root->left) as $path) {
        $newPath = $path;
        array_unshift($newPath, $root->val);
        $paths[] = $newPath;
    }
    foreach (allTreePaths($root->right) as $path) {
        $newPath = $path;
        array_unshift($newPath, $root->val);
        $paths[] = $newPath;
    }

    return $paths;
}

