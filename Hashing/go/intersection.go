package main

import (
	"fmt"
)


func Intersection[T comparable](a,b []T)[]T{
	setB := make(map[T]struct{}, len(b))

	for _, x :=range b{
		setB[x] = struct{}
	}
	added := make(map[T]struct{})
	out := make([]T,0)

	for _, x := range a {
		if _, seen := added[x]; seen {
			continue
		}
		if _, ok := setB[x]; ok {
			added[x] = struct{}{}
			out = append(out, x)
		}
	}
	return out
}