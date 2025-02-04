---
date: '2025-02-02T04:02:45+05:30'
draft: false
title: 'Pytorch 03: Introduction to Tensors'
subtitle: 'Implementing tensors (finally!)'
courses:
  - pyTorch
math: true
tags:
  - tensors
  - attributes
  - parameters
editor_options: 
  markdown: 
    wrap: 72
---

How about we create a **tensor**?

```c
TENSOR = torch.tensor([[1, 2, 3
                        3, 6, 9
                        5, 4, 5]])
TENSOR
```

```c
tensor([[[1, 2, 3],
         [3, 6, 9],
         [2, 4, 5]]])
```

That's nice! Tensors can be used to represent almost anything.

What do you think `ndim` will give?

```c
TENSOR.ndim
```

```c
3
```
And, what about `size()`?
```c
TENSOR.size()
```
```c
torch.Size([1, 3, 3])
```