def reverse_string(value: str) -> str:
    if value == "":
        return ""
    return reverse_string(value[1:]) + value[0]
