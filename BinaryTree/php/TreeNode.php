<?php

declare(strict_types=1);

if (!class_exists('TreeNode')) {
    class TreeNode
    {
        public int $val;
        public ?TreeNode $left;
        public ?TreeNode $right;

        public function __construct(int $val, ?TreeNode $left = null, ?TreeNode $right = null)
        {
            $this->val = $val;
            $this->left = $left;
            $this->right = $right;
        }
    }
}
