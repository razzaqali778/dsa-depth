from functools import lru_cache


@lru_cache(maxsize=None)
def fibonacci(n: int) -> int:
    if n < 0:
        raise ValueError("n must be non-negative")
    if n in (0, 1):
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
