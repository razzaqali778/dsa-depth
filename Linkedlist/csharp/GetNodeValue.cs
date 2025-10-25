namespace LinkedListSolutions;

public static class GetNodeValue
{
    public static int? Solve(ListNode? head, int index)
    {
        var current = head;
        var position = 0;
        while (current is not null)
        {
            if (position == index)
            {
                return current.Value;
            }

            position++;
            current = current.Next;
        }

        return null;
    }
}
