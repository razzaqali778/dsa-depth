from __future__ import annotations
from dataclasses import dataclass
from typing import Optional


@dataclass
class Node:
    val: int
    next: Optional["Node"] = None


def reverse_list(head: Optional[Node]) -> Optional[Node]:
    prev: Optional[Node] = None
    current = head
    while current is not None:
        nxt = current.next
        current.next = prev
        prev = current
        current = nxt
    return prev
