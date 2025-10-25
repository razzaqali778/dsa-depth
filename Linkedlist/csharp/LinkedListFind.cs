namespace LinkedListSolutions;

public static class LinkedListFind
{
    public static bool Solve(ListNode? head, int target)
    {
        var current = head;
        while (current is not null)
        {
            if (current.Value == target)
            {
                return true;
            }

            current = current.Next;
        }

        return false;
    }
}
