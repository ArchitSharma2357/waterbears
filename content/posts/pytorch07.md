---
date: '2025-02-04T07:23:00+05:30'
draft: false
title: 'PyTorch 07: Workflow Fundamentals'
subtitle: 'Getting Data Ready'
courses:
  - pyTorch
math: true
tags:
  - tensors
editor_options: 
  markdown: 
    wrap: 72
---

The core principle of machine learning and deep learning lies in leveraging historical data to develop algorithms, such as neural networks, that identify underlying patterns within the data. These identified patterns are then utilized to make predictions about future outcomes.

Numerous approaches exist to accomplish this, and innovative methods are continually emerging in the field.

However, for the sake of simplicity, let us begin with a fundamental concept: a straight line.

We will explore how to construct a PyTorch model capable of learning the pattern of a straight line and replicating it effectively.

For now, we will focus on using this workflow to predict a simple straight line. However, the same workflow can be adapted and modified to suit different problems, allowing flexibility based on the specific requirements of the task at hand.

Specifically, we will cover the following:

1. **Getting Data Ready**  
   Data can come from various sources, but to start simple, we’ll create a straightforward dataset representing a straight line.

2. **Building a Model**  
   We will design a model in PyTorch to learn patterns from the data. This step will include:
   - Selecting a suitable **loss function**.
   - Choosing an **optimizer**.
   - Constructing a **training loop** to facilitate learning.

3. **Fitting the Model to the Data (Training)**  
   With both the data and the model in place, we’ll proceed to train the model, allowing it to identify patterns within the training dataset.

4. **Making Predictions and Evaluating the Model (Inference)**  
   After training, we’ll use the model to make predictions. We’ll then compare these predictions against actual testing data to evaluate the model’s performance.

5. **Saving and Loading the Model**  
   To enable future use or further fine-tuning, we’ll cover how to save the trained model and reload it whenever needed.

6. **Putting It All Together**  
   Finally, we’ll integrate all the steps above into a cohesive workflow, demonstrating how to build, train, evaluate, save, and reuse a PyTorch model.

## Importing Required Libraries  

Before building the model, we need to import the necessary libraries and packages.  

1. `torch`: The core library for PyTorch, which provides tools for tensor operations and machine learning models.
2. [`torch.nn`](https://pytorch.org/docs/stable/nn.html): A submodule of PyTorch that contains the foundational building blocks for constructing neural networks.
3. [`matplotlib.pyplot`](https://matplotlib.org/3.5.3/api/_as_gen/matplotlib.pyplot.html): A plotting library used for visualizing data and results.

We'll also check the installed version of PyTorch to ensure compatibility.

```PYTHON
# Import required libraries
import torch
from torch import nn  # nn contains all of PyTorch's building blocks for neural networks
import matplotlib.pyplot as plt

# Check PyTorch version
torch.__version__
```

```PYTHON  
# Output     
2.5.1+cu121
```
## Data (Preparing and Loading)

I want to stress that **"data"** in machine learning can be almost anything you can imagine. A table of numbers (like a big Excel spreadsheet), images of any kind, videos (YouTube has lots of data!), audio files like songs or podcasts, protein structures, text, and more.

### Machine Learning is a Game of Two Parts:

1. **Turn your data, whatever it is, into numbers (a representation).**
2. **Pick or build a model to learn the representation as best as possible.**

Sometimes one and two can be done at the same time.

#### What if You Don't Have Data?

Well, that's where we're at now—no data. But we can create some!  
Let's create our data as a straight line.  

We'll use **linear regression** to create the data with known parameters (things that can be learned by a model) and then use **PyTorch** to see if we can build a model to estimate these parameters using **gradient descent**.

> Don't worry if the terms above don't mean much now. We'll see them in action, and I'll provide extra resources below where you can learn more.

#### Create *Known* Parameters:

```python
# Create known parameters
weight = 0.7
bias = 0.3

# Create data
start = 0
end = 1
step = 0.02
X = torch.arange(start, end, step).unsqueeze(dim=1)
y = weight * X + bias

X[:10], y[:10]
```

```PYTHON
# Output
(tensor([[0.0000],
         [0.0200],
         [0.0400],
         [0.0600],
         [0.0800],
         [0.1000],
         [0.1200],
         [0.1400],
         [0.1600],
         [0.1800]]),
 tensor([[0.3000],
         [0.3140],
         [0.3280],
         [0.3420],
         [0.3560],
         [0.3700],
         [0.3840],
         [0.3980],
         [0.4120],
         [0.4260]]))

```

### Split Data into Training and Test Sets

We've got some data. But before we build a model, we need to split it up.

#### Why Split the Data?

One of the most important steps in a machine learning project is creating a **training** and **test set** (and, when required, a **validation set**).

Each split of the dataset serves a specific purpose. The **training set**, comprising approximately 60-80% of the total data, is used for the model to learn, similar to studying course materials. The **validation set**, which typically constitutes about 10-20% of the data, is employed to tune the model, much like practicing with a mock exam; it is often used but not always. Finally, the **testing set**, also around 10-20% of the data, evaluates the model's performance to test what it has learned, and it is always utilized.

For now, we'll just use a **training** and **test set**.  
This means we'll have a dataset for our model to **learn on** as well as **be evaluated on**.

> **Note:** When dealing with real-world data, this step is typically done right at the start of a project (the test set should always be kept separate from all other data).

Splitting the Data:
```python
# Create train/test split
train_split = int(0.8 * len(X)) # 80% training, 20% testing
X_train, y_train = X[:train_split], y[:train_split]
X_test, y_test = X[train_split:], y[train_split:]

len(X_train), len(y_train), len(X_test), len(y_test)

```
```python
# Output
(40, 40, 10, 10)
```
### Visualizing the Data
Right now, our data is just numbers. Let's create a function to visualize it.

Define Plotting Function:
```python
def plot_predictions(train_data=X_train, 
                     train_labels=y_train, 
                     test_data=X_test, 
                     test_labels=y_test, 
                     predictions=None):
    """
    Plots training data, test data, and compares predictions.
    """
    plt.figure(figsize=(10, 7))

    # Plot training data in blue
    plt.scatter(train_data, train_labels, c="b", s=4, label="Training data")
    
    # Plot test data in green
    plt.scatter(test_data, test_labels, c="g", s=4, label="Testing data")

    if predictions is not None:
        # Plot the predictions in red (made on the test data)
        plt.scatter(test_data, predictions, c="r", s=4, label="Predictions")

    # Show the legend
    plt.legend(prop={"size": 14});
```
Plot the Data:
```python
plot_predictions();
```
#### Result:
Instead of just being numbers on a page, our data is now a straight line. Machines love numbers, and we humans like numbers too—but we also like to look at things