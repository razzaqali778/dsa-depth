using System.Collections.Generic;

namespace BinaryTreeSolutions;

public static class AllTreePaths
{
    public static IList<IList<int>> Solve(TreeNode? root)
    {
        var paths = new List<IList<int>>();
        Traverse(root, new List<int>(), paths);
        return paths;
    }

    private static void Traverse(TreeNode? node, IList<int> current, IList<IList<int>> paths)
    {
        if (node is null)
        {
            return;
        }

        current.Add(node.Val);
        if (node.Left is null && node.Right is null)
        {
            paths.Add(new List<int>(current));
        }
        else
        {
            Traverse(node.Left, current, paths);
            Traverse(node.Right, current, paths);
        }
        current.RemoveAt(current.Count - 1);
    }
}
