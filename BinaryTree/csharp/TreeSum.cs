namespace BinaryTreeSolutions;

public static class TreeSum
{
    public static int Solve(TreeNode? root)
    {
        return root is null ? 0 : root.Val + Solve(root.Left) + Solve(root.Right);
    }
}
