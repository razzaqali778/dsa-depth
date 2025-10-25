using System.Collections.Generic;

namespace BinaryTreeSolutions;

public static class PathFinder
{
    public static IList<int>? Solve(TreeNode? root, int target)
    {
        var path = BuildPath(root, target);
        if (path is null)
        {
            return null;
        }
        path.Reverse();
        return path;
    }

    private static List<int>? BuildPath(TreeNode? node, int target)
    {
        if (node is null)
        {
            return null;
        }

        if (node.Val == target)
        {
            return new List<int> { node.Val };
        }

        var left = BuildPath(node.Left, target);
        if (left is not null)
        {
            left.Add(node.Val);
            return left;
        }

        var right = BuildPath(node.Right, target);
        if (right is not null)
        {
            right.Add(node.Val);
            return right;
        }

        return null;
    }
}
