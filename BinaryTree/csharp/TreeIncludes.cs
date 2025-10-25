using System.Collections.Generic;

namespace BinaryTreeSolutions;

public static class TreeIncludes
{
    public static bool Solve(TreeNode? root, int target)
    {
        if (root is null)
        {
            return false;
        }

        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        while (queue.Count > 0)
        {
            var current = queue.Dequeue();
            if (current.Val == target)
            {
                return true;
            }

            if (current.Left is not null) queue.Enqueue(current.Left);
            if (current.Right is not null) queue.Enqueue(current.Right);
        }

        return false;
    }
}
