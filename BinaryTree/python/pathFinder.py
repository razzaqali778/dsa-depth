from typing import List, Optional

from node import Node


def path_finder(root: Optional[Node], target: int) -> Optional[List[int]]:
    path = _build_path(root, target)
    if path is None:
        return None
    path.reverse()
    return path


def _build_path(node: Optional[Node], target: int) -> Optional[List[int]]:
    if node is None:
        return None
    if node.val == target:
        return [node.val]

    left_path = _build_path(node.left, target)
    if left_path is not None:
        left_path.append(node.val)
        return left_path

    right_path = _build_path(node.right, target)
    if right_path is not None:
        right_path.append(node.val)
        return right_path

    return None
