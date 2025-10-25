using System.Collections.Generic;

namespace BinaryTreeSolutions;

public static class BreadthFirstValues
{
    public static IList<int> Solve(TreeNode? root)
    {
        var values = new List<int>();
        if (root is null)
        {
            return values;
        }

        var queue = new Queue<TreeNode?>();
        queue.Enqueue(root);
        while (queue.Count > 0)
        {
            var current = queue.Dequeue();
            if (current is null)
            {
                continue;
            }

            values.Add(current.Val);
            if (current.Left is not null) queue.Enqueue(current.Left);
            if (current.Right is not null) queue.Enqueue(current.Right);
        }

        return values;
    }
}
