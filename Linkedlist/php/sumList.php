<?php

declare(strict_types=1);

if (!class_exists('ListNode')) {
    class ListNode
    {
        public int $value;
        public ?ListNode $next;

        public function __construct(int $value, ?ListNode $next = null)
        {
            $this->value = $value;
            $this->next = $next;
        }
    }
}

function sumList(?ListNode $head): int
{
    $sum = 0;
    $current = $head;
    while ($current !== null) {
        $sum += $current->value;
        $current = $current->next;
    }
    return $sum;
}

function sumListRecursive(?ListNode $head): int
{
    if ($head === null) {
        return 0;
    }
    return $head->value + sumListRecursive($head->next);
}
