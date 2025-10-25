namespace LinkedListSolutions;

public sealed class ListNode
{
    public int Value { get; }
    public ListNode? Next { get; set; }

    public ListNode(int value, ListNode? next = null)
    {
        Value = value;
        Next = next;
    }
}
