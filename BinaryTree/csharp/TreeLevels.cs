using System.Collections.Generic;

namespace BinaryTreeSolutions;

public static class TreeLevels
{
    public static IList<IList<int>> Solve(TreeNode? root)
    {
        var levels = new List<IList<int>>();
        if (root is null)
        {
            return levels;
        }

        var queue = new Queue<(TreeNode Node, int Level)>();
        queue.Enqueue((root, 0));
        while (queue.Count > 0)
        {
            var (node, level) = queue.Dequeue();
            if (levels.Count == level)
            {
                levels.Add(new List<int>());
            }
            levels[level].Add(node.Val);
            if (node.Left is not null) queue.Enqueue((node.Left, level + 1));
            if (node.Right is not null) queue.Enqueue((node.Right, level + 1));
        }

        return levels;
    }
}
