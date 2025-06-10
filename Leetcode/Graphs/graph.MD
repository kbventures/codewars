Directed Graph

A graph is directed when its edges have directions (these edges are also called arcs). Suppose that v, w are vertices(nodes) in a directed graph. Let's get familiar with a few concepts.

in-edge - an edge pointing to or coming into the node
out-edge - an edge pointing away or going out from the node (we will refer those nodes on the other end of the out-edges of v to v's neighbors)
in-degree - the number of in-edges coming into the node
out-degree - the number of out-edges going out from the node
dependency - "v depends on w" / "v is dependent on w" means that there is a directed path from w to v where v, w are vertices in a directed graph. d

What is a topological order?
Topological sort or topological ordering of a directed graph is an ordering of nodes such that every node appears in the ordering before all the nodes it points to. Topological sort is not unique. For example, for a graph like this

Both [4, 5, 2] and [5, 4, 2] are valid topological sort.

And for the following graph:

Task 3 is completely independent of task 2 and 4, and it can be anywhere in the order as long as it is before task 1 which depends on it. All of the following ordering are valid topological orderings.

[4, 2, 3, 1], [4, 3, 2, 1], [3, 4, 2, 1]

Graphs with Cycles Do Not Have Topological Ordering
Cyclic graph
