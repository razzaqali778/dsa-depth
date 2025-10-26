package binarytree

// TreeNode represents a node in a binary tree.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// NewTreeNode is a convenience helper for building small trees inline.
func NewTreeNode(val int, left, right *TreeNode) *TreeNode {
	return &TreeNode{Val: val, Left: left, Right: right}
}

const (
	maxInt = int(^uint(0) >> 1)
	minInt = -maxInt - 1
)
