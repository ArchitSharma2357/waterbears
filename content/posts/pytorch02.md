---
date: '2025-01-19T01:39:23+05:30'
draft: false
title: 'PyTorch 02: Matrices'
subtitle: 'Implementing matrix, and using size()'
categories:
  - pyTorch
math: true
tags:
  - fundamentals
  - matrices
editor_options: 
  markdown: 
    wrap: 72
---
A **matrix** has two dimensions, which means... yep, you guessed it, two square brackets!

Now, Let's start by creating a matrix.

```c
MATRIX = torch.tensor([[3, 4],[4, 5]]) 
MATRIX
```
```c
tensor([[3, 4],
        [4, 5]])
```

Let's check its the `size` :

```c
MATRIX.size()
```
```c
torch.Size([2, 2])
```

The output `torch.Size([2, 2])` indicates that the matrix is two elements deep and two elements wide.
