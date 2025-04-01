+++
date = 2025-03-19T20:55:35+01:00

[extra.like_of]
url = "https://stackoverflow.com/a/71774640/20547839"
name = "an answer to „How to Merge when you get error \"Hint: You have divergent branches and need to specify how to reconcile them.\"“"

content = """
Not everyone wants Git to do merges. Suppose you have made one or two new commits, which we'll call `I` and `J`, and your `git fetch` from `origin` brings in two new commits that they made since you started, which we will call `K` and `L`. That gives you a set of commits that, if you were to draw them, might look like this:

```
          I--J   <-- your-branch
         /
...--G--H   <-- main
         \
          K--L   <-- origin/main
```

You can <i>fast-forward</i> your `main` to match their `origin/main`:

```
          I--J   <-- your-branch
         /
...--G--H
         \
          K--L   <-- main, origin/main
```
"""
+++

very very very good answer. <!-- more -->
