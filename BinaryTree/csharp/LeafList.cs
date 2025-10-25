using System.Collections.Generic;

namespace BinaryTreeSolutions;

public static class LeafList
{
    public static IList<int> Solve(TreeNode? root)
    {
        var leaves = new List<int>();
        Collect(root, leaves);
        return leaves;
    }

    private static void Collect(TreeNode? node, ICollection<int> leaves)
    {
        if (node is null)
        {
            return;
        }

        if (node.Left is null && node.Right is null)
        {
            leaves.Add(node.Val);
            return;
        }

        Collect(node.Left, leaves);
        Collect(node.Right, leaves);
    }
}
