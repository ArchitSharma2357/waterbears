---
date: '2025-02-04T03:33:00+05:30'
draft: false
title: 'PyTorch 05: Zeros and Ones'
subtitle: 'Using torch.zeros() and torch.ones()'
courses:
  - pyTorch
math: true
tags:
  - tensors
  - attributes
editor_options: 
  markdown: 
    wrap: 72
---

PyTorch provides two useful functions, [`torch.zeros`](https://pytorch.org/docs/stable/generated/torch.zeros.html) and [`torch.ones`](https://pytorch.org/docs/stable/generated/torch.ones.html), to create tensors filled entirely with zeros or ones, respectively. These functions are commonly used for initializing tensors in machine learning and deep learning tasks.

Zero initialization is primarily utilized for defining biases or placeholders in machine learning models, providing a neutral starting point that does not affect initial computations. Conversely, ones initialization is valuable in scaling operations or additive computations, offering consistency and ensuring predictable behavior during the process.

Let's create a tensor full of zeros using `torch.zeros()` :
```c
# create a tensor of all zeros
zeros = torch.zeros(size = (3, 3))
zeros, zeros.dtype, zeros.ndim
```
```c
(tensor([[0., 0., 0.],
         [0., 0., 0.],
         [0., 0., 0.]]),
 torch.float32,
 2)
```

Similarly, we can create a tensor of all ones using `torch.ones()`

```c
# create a tensor of all ones
ones = torch.ones(size = (3, 3))
ones, ones.dtype, ones.ndim
```
```c
(tensor([[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]]),
 torch.float32,
 2)
```