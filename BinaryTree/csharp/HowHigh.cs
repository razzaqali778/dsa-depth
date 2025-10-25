using System;
namespace BinaryTreeSolutions;  public static class HowHigh {     public static int Solve(TreeNode? root)     {         return root is null ? -1 : 1 + Math.Max(Solve(root.Left), Solve(root.Right));     } }
