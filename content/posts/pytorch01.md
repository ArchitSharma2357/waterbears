---
date: '2025-01-18T03:15:13+05:30'
title: 'PyTorch 01: Basics'
subtitle: 'Importing PyTorch, creating tensors, and using ndim, item(), and size()'
categories:
  - pyTorch
math: true
tags:
  - fundamentals
editor_options: 
  markdown: 
    wrap: 72
draft: false
---

## Importing PyTorch

Let's start by importing PyTorch and checking the version we're using.

```c         
import torch
torch.__version__
```

```c         
2.5.1+cu121
```

It looks like we've got PyTorch 2.5.1+.

## Introduction to Tensors

**Tensors** are multi-dimensional arrays with a uniform type. In machinelearning, the term tensor informally refers to two different concepts:
  1. a way of organizing data,
  2. a multilinear (tensor)
transformation. Data may be organized in a multidimensional array (M-way
array).

For example, you could represent an image as a tensor with shape
`[3, 224, 224]` which could mean `[colour_channels, height, width]`.
Thus, the tensor would have dimensions.

For a detailed explanation of tensors, you can refer to a video by Dan
Fleisch: [What's a
Tensor?](https://www.youtube.com/watch?v=f5liqUk0ZTw).

### Creating Tensors
There is a whole documentation page for the [`torch.Tensor`](https://pytorch.org/docs/stable/tensors.html) class.

Let's see a few of the data types which can be defined as :

* `torch.float32` or `torch.float` for 32-bit floating point,

* `torch.float64` or `torch.double` for 64-bit floating point, and

* `torch.complex64` or `torch.cfloat` for 64-bit complex point.


The first thing we're going to create is a **scalar**.

A scalar is a single number and in tensor-speak it's a zero dimension
tensor.

```c         
# Scalar
scalar = torch.tensor(7)
scalar
```

```c         
tensor(7)
```

That means although *scalar* is a single number, it's of type
[`torch.Tensor`](https://pytorch.org/docs/stable/tensors.html).

(Point to note that you can write `t` in `torch.tensor()` as `T` too!)

We can check the dimensions of a tensor using the [`ndim`](https://pytorch.org/docs/stable/generated/torch.Tensor.ndim.html) attribute.

```c         
scalar.ndim
```

```c         
0
```

 Now, what if we wanted to retrieve the number from the Tensor?
 
 To do that, we can use the the [`item()`](https://pytorch.org/docs/stable/generated/torch.Tensor.item.html) attribute.
 
 ```c
 # Get the Python number within a tensor (only works with one-element tensors)
 scalar.item()
 ```
 ```c
 7
 ```
 
 
 Now, let's see a **vector**.
 
 A vector is a single dimension tensor.
 
 ```c
 vector = torch.tensor([3, 4])
 vector
 ```
 ```c
 tensor([7, 7])
 ```
 
 You could have a *vector* `[5, 4]` to describe `[bedrooms, bathrooms]` in your house.
 
 Let's check the number of dimensions our vector has :
 
 ```c
 # Check the number of dimensions of vector
 vector.ndim
 ```
 ```c
 1
 ```
 
The number of dimensions of a tensor in PyTorch can be determined by counting the square brackets (`[` or `]`) on one side, as they correspond to the tensor's nesting levels.

Let's check that with another example :

```c
twoDim = torch.tensor([[3, 4]])
twoDim.ndim
```
```c
2
```
See, 2 dimensions!

Another important attribute is [`size()`](https://pytorch.org/docs/stable/generated/torch.Tensor.size.html), which used to retrieve the dimensions (shape) of a tensor. It provides the size of each dimension in the tensor, similar to [`numpy.ndarray.shape`](https://numpy.org/doc/2.1/reference/generated/numpy.ndarray.shape.html). This method is particularly useful when you want to know how many elements exist in each dimension of the tensor without modifying it.

```c
sizeDim0 = torch.tensor(3)
sizeDim1 = torch.tensor([3, 4])
sizeDim2_moreElements = torch.tensor([[3, 4], [4, 5]]) /* It is a matrix, focus on size() for now */
sizeDim2 = torch.tensor([[3, 4]])

sizeDim0.size(), sizeDim1.size(), sizeDim2_moreElements.size(), sizeDim2.size()

```
```c
(torch.Size([]), torch.Size([2]), torch.Size([2, 2]), torch.Size([1, 2]))

```