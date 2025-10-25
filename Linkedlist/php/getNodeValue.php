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

function getNodeValue(?ListNode $head, int $index): ?int
{
    $position = 0;
    $current = $head;

    while ($current !== null) {
        if ($position === $index) {
            return $current->value;
        }
        $position++;
        $current = $current->next;
    }

    return null;
}

