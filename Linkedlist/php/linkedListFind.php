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

function linkedListFind(?ListNode $head, int $target): bool
{
    $current = $head;
    while ($current !== null) {
        if ($current->value === $target) {
            return true;
        }
        $current = $current->next;
    }
    return false;
}
