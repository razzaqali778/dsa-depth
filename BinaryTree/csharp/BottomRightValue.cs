using System;
using System.Collections.Generic;

namespace BinaryTreeSolutions;

public static class BottomRightValue
{
    public static int Solve(TreeNode root)
    {
        if (root is null)
        {
            throw new ArgumentNullException(nameof(root));
        }

        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        var current = root;

        while (queue.Count > 0)
        {
            current = queue.Dequeue();
            if (current.Left is not null) queue.Enqueue(current.Left);
            if (current.Right is not null) queue.Enqueue(current.Right);
        }

        return current.Val;
    }
}
