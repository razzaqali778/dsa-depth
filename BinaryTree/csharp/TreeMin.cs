using System;

namespace BinaryTreeSolutions;

public static class TreeMin
{
    public static int Solve(TreeNode? root)
    {
        if (root is null)
        {
            return int.MaxValue;
        }

        return Math.Min(root.Val, Math.Min(Solve(root.Left), Solve(root.Right)));
    }
}
