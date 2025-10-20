import java.util.List;
import java.util.ArrayList;
import java.util.Stack;

class Node<T> {
  T val;
  Node<T> left;
  Node<T> right;
  
  public Node(T val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Source {
  public static <T> List<T> leafList(Node<T> root) {
    if (root == null) {
      return List.of();
    }
    List<T> leaves = new ArrayList<>();
    Stack<Node<T>> stack = new Stack<>();
    stack.push(root);
    while (!stack.isEmpty()) {
      Node<T> node = stack.pop();
      if (node.left == null && node.right == null) {
        leaves.add(node.val);
      }
      if (node.right != null) {
        stack.push(node.right);
      }
      if (node.left != null) {
        stack.push(node.left);
      }
    }
    return leaves;
  }

  public static void run() {
    // this function behaves as `main()` for the 'run' command
    // you may sandbox in this function , but should not remove it
  }
}
