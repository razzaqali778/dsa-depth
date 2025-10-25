using System.Collections.Generic;

namespace BinaryTreeSolutions;

public static class DepthFirstValues
{
    public static IList<int> Solve(TreeNode? root)
    {
        var values = new List<int>();
        if (root is null)
        {
            return values;
        }

        var stack = new Stack<TreeNode>();
        stack.Push(root);
        while (stack.Count > 0)
        {
            var current = stack.Pop();
            values.Add(current.Val);
            if (current.Right is not null) stack.Push(current.Right);
            if (current.Left is not null) stack.Push(current.Left);
        }

        return values;
    }
}
