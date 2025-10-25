namespace LinkedListSolutions;

public static class ReverseList
{
    public static ListNode? Solve(ListNode? head)
    {
        ListNode? prev = null;
        var current = head;

        while (current is not null)
        {
            var next = current.Next;
            current.Next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }
}
