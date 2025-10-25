namespace LinkedListSolutions;

public static class SumList
{
    public static int Solve(ListNode? head)
    {
        var total = 0;
        var current = head;
        while (current is not null)
        {
            total += current.Value;
            current = current.Next;
        }

        return total;
    }

    public static int SolveRecursive(ListNode? head)
    {
        return head is null ? 0 : head.Value + SolveRecursive(head.Next);
    }
}
