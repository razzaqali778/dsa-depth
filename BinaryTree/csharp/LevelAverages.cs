using System.Collections.Generic;

namespace BinaryTreeSolutions;

public static class LevelAverages
{
    public static IList<double> Solve(TreeNode? root)
    {
        var result = new List<double>();
        if (root is null)
        {
            return result;
        }

        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        while (queue.Count > 0)
        {
            var levelSize = queue.Count;
            double sum = 0;
            for (var i = 0; i < levelSize; i++)
            {
                var current = queue.Dequeue();
                sum += current.Val;
                if (current.Left is not null) queue.Enqueue(current.Left);
                if (current.Right is not null) queue.Enqueue(current.Right);
            }
            result.Add(sum / levelSize);
        }

        return result;
    }
}
