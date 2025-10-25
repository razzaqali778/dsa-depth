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

function reverseList(?ListNode $head): ?ListNode
{
    $prev = null;
    $current = $head;

    while ($current !== null) {
        $next = $current->next;
        $current->next = $prev;
        $prev = $current;
        $current = $next;
    }

    return $prev;
}
