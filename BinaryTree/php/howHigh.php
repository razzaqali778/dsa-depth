<?php

declare(strict_types=1);

require_once __DIR__ . '/TreeNode.php';

function howHigh(?TreeNode $root): int
{
    if ($root === null) {
        return -1;
    }

    return 1 + max(howHigh($root->left), howHigh($root->right));
}
