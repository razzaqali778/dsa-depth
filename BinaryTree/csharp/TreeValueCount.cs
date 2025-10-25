namespace BinaryTreeSolutions;

public static class TreeValueCount
{
    public static int Solve(TreeNode? root, int target)
    {
        if (root is null)
        {
            return 0;
        }

        var match = root.Val == target ? 1 : 0;
        return match + Solve(root.Left, target) + Solve(root.Right, target);
    }
}
