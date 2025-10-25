using System;

namespace BinaryTreeSolutions;

public static class MaxPathSum
{
    public static int Solve(TreeNode? root)
    {
        if (root is null)
        {
            return int.MinValue;
        }

        if (root.Left is null && root.Right is null)
        {
            return root.Val;
        }

        return root.Val + Math.Max(Solve(root.Left), Solve(root.Right));
    }
}
