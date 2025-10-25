
<?php

declare(strict_types=1);

function reverseString(string $input): string
{
    if ($input === '') {
        return '';
    }

    return reverseString(substr($input, 1)) . $input[0];
}
