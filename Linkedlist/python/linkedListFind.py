from __future__ import annotations
from dataclasses import dataclass
from typing import Optional


@dataclass
class Node:
    val: int
    next: Optional["Node"] = None


def linked_list_find(head: Optional[Node], target: int) -> bool:
    current = head
    while current is not None:
        if current.val == target:
            return True
        current = current.next
    return False
