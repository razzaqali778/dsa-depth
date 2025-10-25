from __future__ import annotations
from dataclasses import dataclass
from typing import Optional


@dataclass
class Node:
    val: int
    next: Optional["Node"] = None


def get_node_value(head: Optional[Node], index: int) -> Optional[int]:
    current = head
    position = 0
    while current is not None:
        if position == index:
            return current.val
        position += 1
        current = current.next
    return None
