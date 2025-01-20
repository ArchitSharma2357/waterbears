---
date: '2025-01-20T04:18:00+05:30'
draft: false
title: 'Pytorch 06: a range and tensors like'
subtitle: 'Using torch.arange(), torch.zeros_like() and torch.ones_like() '
courses:
  - pyTorch Fundamentals
math: true
tags:
  - tensors
editor_options: 
  markdown: 
    wrap: 72
---

Sometimes you might want **a range of numbers** and for that you can use [`torch.arange(start, end, step`)](https://pytorch.org/docs/stable/generated/torch.arange.html):

```c
# Create a range of numbers from 1 to 9 with a step of 1
range = torch.arange(start = 1, end = 10, step = 1)
range
```
```c
tensor([1, 2, 3, 4, 5, 6, 7, 8, 9])
```
```c
# You can simplify the call by omitting parameter names
torch.arange(1, 10, 1)
```

Let's move on to another concept called **tensor like**. 

Sometimes you might want a tensor full of zeros or ones with the same shape as some other tensor and to do so you can make use of [`torch.zeros_like(input)`](https://pytorch.org/docs/stable/generated/torch.zeros_like.html) or [`torch.ones_like(output)`](https://pytorch.org/docs/stable/generated/torch.zeros_like.html).

```c
# Create a tensor of zeros with the same shape as 'range'
like_tensor_zeros = torch.zeros_like(range)

# Create a tensor of ones with the same shape as 'range'
like_tensor_ones = torch.ones_like(range)

# Display tensors of zeros and ones
like_tensor_zeros, like_tensor_ones
```
```c
(tensor([0, 0, 0, 0, 0, 0, 0, 0, 0]), tensor([1, 1, 1, 1, 1, 1, 1, 1, 1]))
```