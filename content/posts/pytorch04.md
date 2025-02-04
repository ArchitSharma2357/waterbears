---
date: '2025-02-03T02:50:00+05:30'
draft: false
title: 'PyTorch 04: Random Tensors'
subtitle: 'Using torch.rand() and passing size() parameter'
courses:
  - pyTorch
math: true
tags:
  - tensors
  - random tensors
  - attributes
editor_options: 
  markdown: 
    wrap: 72
---

[`torch.rand`](https://pytorch.org/docs/stable/generated/torch.rand.html) is a function in PyTorch used to generate a tensor filled with random numbers sampled from a uniform distribution over the interval [0, 1). It is useful when you need random values for initialization or stochastic processes *(discussed later)* in machine learning and deep learning applications.

Let's create a matrix using `size()` parameter.

```c
# creating a random tensor of size --> (3, 3)
random_matrix = torch.rand(size = (3, 3))
random_matrix, random_matrix.dtype, random_matrix.size()
```
```c
(tensor([[0.6532, 0.0823, 0.4880],
         [0.3133, 0.5036, 0.1455],
         [0.7320, 0.8213, 0.5246]]),
 torch.float32,
 torch.Size([3, 3]))
```
or we can create a tensor :

```c
# creating a random tensor of size --> (1, 3, 3)
random_tensor = torch.rand(size = (1, 3, 3))
random_tensor, random_tensor.dtype, random_tensor.size()
```

```c
(tensor([[[0.2552, 0.3850, 0.0569],
          [0.3506, 0.9072, 0.4009],
          [0.9173, 0.9203, 0.3054]]]),
 torch.float32,
 torch.Size([1, 3, 3]))
```

You can also generate a random tensor in the common image size of `(244, 244, 3) ([height, width, colour_channels])`.

and, `torch.float32` is just the default data type for tensors.