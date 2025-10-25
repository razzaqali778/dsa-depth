from __future__ import annotations
from dataclasses import dataclass
from typing import Optional


@dataclass
class Node:
    val: int
    next: Optional["Node"] = None


def sum_list(head: Optional[Node]) -> int:
    total = 0
    current = head
    while current is not None:
        total += current.val
        current = current.next
    return total


def sum_list_recursive(head: Optional[Node]) -> int:
    if head is None:
        return 0
    return head.val + sum_list_recursive(head.next)
