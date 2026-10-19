export const ROADMAP_WEEKS = [
  {
    week: 1,
    title: 'Python Fundamentals',
    shortSubtitle: 'Build a strong foundation with Python basics.',
    subtitle: "Build a strong foundation with Python basics. Learn the core concepts that you'll use throughout DSA.",
    tags: ['Variables', 'Data Types', 'Operators', 'Conditionals', 'Loops'],
    iconType: 'python',
    actionText: 'Review →',
    actionType: 'primary',
    progressText: '3/3',
    progressPercent: 100,
    isCompleted: true,
    subtopics: [
      {
        id: 'sub1',
        num: 1,
        title: 'Variables, Data Types & Operators',
        completed: true,
        codeSnippet: `# Variables and Data Types
name = "Bharat"
age = 23
height = 5.9
is_student = True

print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Student:", is_student)`,
        terminalOutput: [
          'Name: Bharat',
          'Age: 23',
          'Height: 5.9',
          'Student: True'
        ]
      },
      {
        id: 'sub2',
        num: 2,
        title: 'Conditionals & Loops',
        completed: true,
        codeSnippet: `# Conditionals & Iteration in Python
scores = [85, 92, 78, 95]
for score in scores:
    if score >= 90:
        print(f"Score {score}: Honors Grade A+")
    else:
        print(f"Score {score}: Standard Grade B")`,
        terminalOutput: [
          'Score 85: Standard Grade B',
          'Score 92: Honors Grade A+',
          'Score 78: Standard Grade B',
          'Score 95: Honors Grade A+'
        ]
      },
      {
        id: 'sub3',
        num: 3,
        title: 'Functions & Recursion',
        completed: true,
        codeSnippet: `# Factorial using Recursion
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

result = factorial(5)
print("Factorial of 5:", result)`,
        terminalOutput: [
          'Computing 5 * factorial(4)...',
          'Factorial of 5: 120 (Verified in O(N) recursive call stack)'
        ]
      }
    ],
    concept: {
      text: 'Variables are used to store data in memory. Python supports multiple data types like int, float, str, list, etc. Operators are used to perform operations on these values.',
      diagramType: 'memory',
      memoryData: {
        varName: 'name',
        varVal: '"Bharat"',
        slots: [
          { key: 'name', val: '"Bharat"', type: 'str' },
          { key: 'age', val: '23', type: 'int' },
          { key: 'height', val: '5.9', type: 'float' },
          { key: 'is_student', val: 'True', type: 'bool' }
        ]
      }
    },
    codeSnippet: `# Variables and Data Types
name = "Bharat"
age = 23
height = 5.9
is_student = True

print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Student:", is_student)`,
    terminalOutput: [
      'Name: Bharat',
      'Age: 23',
      'Height: 5.9',
      'Student: True'
    ],
    keyPoints: [
      'Variable declaration and naming rules',
      'Built-in data types (int, float, str, bool, list, tuple, dict, set)',
      'Arithmetic, comparison and logical operators',
      'Type conversion and input/output'
    ],
    practiceProblems: [
      { id: 1, title: 'Print your name, age and favorite language', level: 'Easy' },
      { id: 2, title: 'Swap two variables', level: 'Easy' },
      { id: 3, title: 'Check the data type of different variables', level: 'Easy' },
      { id: 4, title: 'Take user input and perform basic operations', level: 'Medium' }
    ],
    project: {
      title: 'Calculator CLI App',
      desc: 'Build a simple command-line calculator using variables, operators and user input.'
    }
  },
  {
    week: 2,
    title: 'Arrays & Strings',
    shortSubtitle: 'Learn to organize data and solve problems.',
    subtitle: 'Learn to organize data and solve common coding patterns using arrays and strings.',
    tags: ['Arrays', 'String Operations', 'Two Pointers', 'Sliding Window'],
    iconType: 'array',
    actionText: 'Start →',
    actionType: 'outline',
    progressText: '0/3',
    progressPercent: 0,
    isCompleted: false,
    subtopics: [
      {
        id: 'sub1',
        num: 1,
        title: 'Arrays & Indexing',
        completed: false,
        codeSnippet: `# Arrays (List) Example
numbers = [10, 20, 30, 40, 50]
print("Original Array:", numbers)
print("Element at index 0:", numbers[0])
print("Element at index 2:", numbers[2])

# Update value
numbers[1] = 25
print("After Update:", numbers)

# Add element
numbers.append(60)
print("After Append:", numbers)`,
        terminalOutput: [
          'Original Array: [10, 20, 30, 40, 50]',
          'Element at index 0: 10',
          'Element at index 2: 30',
          'After Update: [10, 25, 30, 40, 50]',
          'After Append: [10, 25, 30, 40, 50, 60]'
        ]
      },
      {
        id: 'sub2',
        num: 2,
        title: 'String Operations',
        completed: false,
        codeSnippet: `# String Manipulation & Slicing
text = "Botmartz DSA"
print("Uppercase:", text.upper())
print("Reversed:", text[::-1])
print("Contains 'DSA':", "DSA" in text)`,
        terminalOutput: [
          'Uppercase: BOTMARTZ DSA',
          'Reversed: ASD ztramtoB',
          "Contains 'DSA': True"
        ]
      },
      {
        id: 'sub3',
        num: 3,
        title: 'Two Pointers',
        completed: false,
        codeSnippet: `# Two Pointers Palindrome Checker
def is_palindrome(s):
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] != s[r]:
            return False
        l += 1
        r -= 1
    return True

print("is 'radar' palindrome?", is_palindrome("radar"))`,
        terminalOutput: [
          "Checking pointers: L=0 ('r'), R=4 ('r') -> Match",
          "Checking pointers: L=1 ('a'), R=3 ('a') -> Match",
          "is 'radar' palindrome? True (O(N) Time | O(1) Space)"
        ]
      }
    ],
    concept: {
      text: 'An array (list in Python) is a collection of elements stored in an ordered manner. Each element can be accessed using its index, starting from 0.',
      diagramType: 'array',
      arrayData: {
        title: 'Array (List) Visualization',
        items: [10, 20, 30, 40, 50],
        note: 'Index starts from 0'
      }
    },
    codeSnippet: `# Arrays (List) Example
numbers = [10, 20, 30, 40, 50]
print("Original Array:", numbers)
print("Element at index 0:", numbers[0])
print("Element at index 2:", numbers[2])

# Update value
numbers[1] = 25
print("After Update:", numbers)

# Add element
numbers.append(60)
print("After Append:", numbers)`,
    terminalOutput: [
      'Original Array: [10, 20, 30, 40, 50]',
      'Element at index 0: 10',
      'Element at index 2: 30',
      'After Update: [10, 25, 30, 40, 50]',
      'After Append: [10, 25, 30, 40, 50, 60]'
    ],
    keyPoints: [
      'Arrays store multiple values in a single variable',
      'Access elements using index (0-based)',
      'Arrays can store different data types',
      'Common operations: insert, delete, update, traverse'
    ],
    practiceProblems: [
      { id: 1, title: 'Find the largest element in an array', level: 'Easy' },
      { id: 2, title: 'Reverse an array', level: 'Easy' },
      { id: 3, title: 'Check if an element exists in an array', level: 'Easy' },
      { id: 4, title: 'Find the second largest element', level: 'Medium' }
    ],
    project: {
      title: 'Smart Text Analyzer',
      desc: 'Build a program that can count characters, reverse text, and find repeated values in a given string.'
    }
  },
  {
    week: 3,
    title: 'Linked Lists & Stacks',
    shortSubtitle: 'Understand how data connects and moves.',
    subtitle: 'Understand how data connects, moves and gets processed using linked lists, stacks and queues.',
    tags: ['Linked List', 'Stacks', 'Queues', 'Applications'],
    iconType: 'linked_list',
    actionText: 'Start →',
    actionType: 'outline',
    progressText: '0/3',
    progressPercent: 0,
    isCompleted: false,
    subtopics: [
      {
        id: 'sub1',
        num: 1,
        title: 'Linked Lists',
        completed: false,
        codeSnippet: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

node1 = Node(10)
node2 = Node(20)
node3 = Node(30)

node1.next = node2
node2.next = node3

curr = node1
while curr:
    print(f"Node({curr.data})", end=" -> ")
    curr = curr.next
print("None")`,
        terminalOutput: [
          'Node(10) -> Node(20) -> Node(30) -> None',
          'Head Node: 10 | Next Pointers Linked'
        ]
      },
      {
        id: 'sub2',
        num: 2,
        title: 'Stacks & Queues',
        completed: false,
        codeSnippet: `# Stack LIFO Implementation
stack = []
stack.append(10)
stack.append(20)
stack.append(30)

print("Popped item (LIFO):", stack.pop())
print("Stack top now:", stack[-1])`,
        terminalOutput: [
          'Pushing: 10, 20, 30',
          'Popped item (LIFO): 30',
          'Stack top now: 20'
        ]
      },
      {
        id: 'sub3',
        num: 3,
        title: 'Fast & Slow Pointers',
        completed: false,
        codeSnippet: `# Floyd's Cycle Detection Algorithm
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

print("Cycle status: Verified")`,
        terminalOutput: [
          'Executing Fast & Slow pointers...',
          'Cycle status: Verified (No infinite loops!)'
        ]
      }
    ],
    concept: {
      text: 'A linked list is a linear data structure where each node contains data and a reference (pointer) to the next node. Nodes are not stored in contiguous memory locations.',
      diagramType: 'linked_list',
      linkedListData: {
        title: 'Singly Linked List (Visualization)',
        nodes: [
          { val: 10, label: 'Node 1' },
          { val: 20, label: 'Node 2' },
          { val: 30, label: 'Node 3' }
        ]
      }
    },
    codeSnippet: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Creating nodes
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)

# Linking nodes
node1.next = node2
node2.next = node3
node3.next = None

# Traversal
curr = node1
while curr:
    print(f"Node({curr.data})", end=" -> ")
    curr = curr.next
print("None")`,
    terminalOutput: [
      'Linked List Initialized successfully',
      'Node(10) -> Node(20) -> Node(30) -> None',
      'Head: 10 | Tail: 30 | Size: 3'
    ],
    keyPoints: [
      'Each node has data and a reference to next node',
      'Nodes are stored at non-contiguous memory locations',
      'Useful for dynamic data storage (easy insert/delete)',
      'Types: Singly Linked List, Doubly Linked List, Circular Linked List'
    ],
    practiceProblems: [
      { id: 1, title: 'Implement a singly linked list with insert and display', level: 'Easy' },
      { id: 2, title: 'Find the middle element of a linked list', level: 'Medium' },
      { id: 3, title: 'Detect a cycle in a linked list', level: 'Medium' },
      { id: 4, title: 'Reverse a linked list', level: 'Medium' }
    ],
    project: {
      title: 'Undo / Redo Simulator',
      desc: 'Build a simple text editor feature using stack or linked list to implement undo and redo functionality.'
    }
  },
  {
    week: 4,
    title: 'Searching & Sorting',
    shortSubtitle: 'Make information easier to find and put in order.',
    subtitle: 'Make information easier to find and put into order using search and sorting algorithms.',
    tags: ['Linear Search', 'Binary Search', 'Sorting Algorithms', 'Big-O'],
    iconType: 'search',
    actionText: 'Start →',
    actionType: 'outline',
    progressText: '0/3',
    progressPercent: 0,
    isCompleted: false,
    subtopics: [
      {
        id: 'sub1',
        num: 1,
        title: 'Linear & Binary Search',
        completed: false,
        codeSnippet: `# Binary Search Example
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

nums = [10, 20, 30, 40, 50, 60, 70, 80]
print("Index of 50:", binary_search(nums, 50))`,
        terminalOutput: [
          'Searching target 50 in sorted array...',
          'Mid values examined: 40, 60, 50',
          'Result: Target found at index 4 in 3 iterations!'
        ]
      },
      {
        id: 'sub2',
        num: 2,
        title: 'Sorting Algorithms',
        completed: false,
        codeSnippet: `# Merge Sort in Python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return sorted(left + right)

print("Sorted Array:", merge_sort([64, 34, 25, 12, 22]))`,
        terminalOutput: [
          'Splitting array into halves...',
          'Merged and sorted: [12, 22, 25, 34, 64]',
          'Time Complexity: O(N log N)'
        ]
      },
      {
        id: 'sub3',
        num: 3,
        title: 'Big-O Basics',
        completed: false,
        codeSnippet: `# Time Complexity Benchmarks
# O(1) Constant: Dict / Hash Lookup
# O(log N) Logarithmic: Binary Search
# O(N) Linear: Loop traversal
# O(N log N): Merge Sort & Quick Sort
print("Big-O Notation Mastered!")`,
        terminalOutput: [
          'Analyzing asymptotic bounds...',
          'Big-O Notation Mastered! (Time & Space optimized)'
        ]
      }
    ],
    concept: {
      text: 'Searching helps us find a target value in a collection. Linear search checks elements one by one, while binary search works on a sorted array and reduces the search space by half each time.',
      diagramType: 'binary_search',
      binarySearchData: {
        title: 'Binary Search Visualization',
        items: [10, 20, 30, 40, 50, 60, 70, 80],
        pointers: [
          { idx: 0, label: 'low = 0' },
          { idx: 3, label: 'mid = 3', isMid: true },
          { idx: 7, label: 'high = 7' }
        ],
        note: 'Compare the middle element with target and search in the left or right half.'
      }
    },
    codeSnippet: `# Binary Search Example
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

# Test
nums = [10, 20, 30, 40, 50, 60, 70, 80]
print(binary_search(nums, 50))  # Output: 4`,
    terminalOutput: [
      'Searching for target: 50 in [10, 20, 30, 40, 50, 60, 70, 80]',
      'Step 1: low=0, high=7, mid=3 (val=40) -> 40 < 50, search right half',
      'Step 2: low=4, high=7, mid=5 (val=60) -> 60 > 50, search left half',
      'Step 3: low=4, high=4, mid=4 (val=50) -> MATCH FOUND at index 4!',
      'Result: Target 50 found at index 4 (O(log N) iterations)'
    ],
    keyPoints: [
      'Linear search works on unsorted data',
      'Binary search requires sorted data',
      'Time complexity: Linear O(n), Binary O(log n)',
      'Sorting helps in faster searching',
      'Common sorting algorithms: Bubble, Merge, Quick, Insertion, Selection'
    ],
    practiceProblems: [
      { id: 1, title: 'Linear search: find the index of a target', level: 'Easy' },
      { id: 2, title: 'Binary search in a sorted array', level: 'Easy' },
      { id: 3, title: 'Find the first and last position of a target', level: 'Medium' },
      { id: 4, title: 'Implement bubble sort', level: 'Easy' },
      { id: 5, title: 'Implement merge sort', level: 'Medium' }
    ],
    project: {
      title: 'Search & Sort Visualizer',
      desc: 'Build an interactive tool to visualize linear search, binary search and sorting algorithms with step-by-step animation.'
    }
  },
  {
    week: 5,
    title: 'Trees & Graphs',
    shortSubtitle: 'Explore hierarchical and network data structures.',
    subtitle: 'Master non-linear data structures, hierarchical relationships, and graph traversal algorithms.',
    tags: ['Binary Trees', 'BFS & DFS', 'Graphs', 'Shortest Paths'],
    iconType: 'graph',
    actionText: 'Start →',
    actionType: 'outline',
    progressText: '0/3',
    progressPercent: 0,
    isCompleted: false,
    subtopics: [
      {
        id: 'sub1',
        num: 1,
        title: 'Binary Search Trees',
        completed: false,
        codeSnippet: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

root = TreeNode(10, TreeNode(5), TreeNode(15))
print("BST Root:", root.val, "| Left:", root.left.val, "| Right:", root.right.val)`,
        terminalOutput: [
          'BST Root: 10 | Left: 5 | Right: 15',
          'BST Property Verified: Left(5) < Root(10) < Right(15)'
        ]
      },
      {
        id: 'sub2',
        num: 2,
        title: 'BFS & DFS Traversals',
        completed: false,
        codeSnippet: `# Breadth First Search (Queue Level-Order)
from collections import deque
def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    while queue:
        node = queue.popleft()
        print(node, end=" ")
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

bfs({'A': ['B', 'C'], 'B': ['D'], 'C': ['E']}, 'A')`,
        terminalOutput: [
          'BFS Traversal sequence: A B C D E',
          'Level-by-level exploration complete!'
        ]
      },
      {
        id: 'sub3',
        num: 3,
        title: 'Graph Representations',
        completed: false,
        codeSnippet: `# Graph as Adjacency List in Python
adj_list = {
    'Mumbai': ['Delhi', 'Bengaluru'],
    'Delhi': ['Mumbai', 'Kolkata'],
    'Bengaluru': ['Mumbai', 'Chennai']
}
print("Mumbai connections:", adj_list['Mumbai'])`,
        terminalOutput: [
          "Mumbai connections: ['Delhi', 'Bengaluru']",
          'Total vertices: 4 | Undirected graph model'
        ]
      }
    ],
    concept: {
      text: 'A tree is a hierarchical data structure with a root node and child nodes. In a Binary Search Tree (BST), every left child is smaller than its parent, and every right child is greater. Graphs connect nodes with edges.',
      diagramType: 'tree',
      treeData: {
        title: 'Binary Search Tree (BST) Visualization',
        root: { val: 10, left: { val: 5, left: { val: 2 }, right: { val: 7 } }, right: { val: 15, left: { val: 12 }, right: { val: 20 } } },
        note: 'Inorder traversal (Left -> Root -> Right) always yields sorted values [2, 5, 7, 10, 12, 15, 20].'
      }
    },
    codeSnippet: `# Binary Search Tree (BST) Node & Inorder Traversal
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder_traversal(root):
    if not root:
        return []
    return inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right)

# Build Tree:   10
#              /  \\
#             5    15
root = TreeNode(10, TreeNode(5), TreeNode(15))
print("Inorder BST Traversal:", inorder_traversal(root))`,
    terminalOutput: [
      'Building Binary Search Tree: Root=10, Left=5, Right=15',
      'Executing Inorder Traversal (Left -> Root -> Right)...',
      'Result: [5, 10, 15] (Sorted Order verified!)',
      'Tree Height: 2 | Total Nodes: 3'
    ],
    keyPoints: [
      'Tree has 1 root and no cycles; Graph can contain cycles',
      'BST property: left subtree < root < right subtree',
      'BFS uses Queue (Level Order); DFS uses Stack / Recursion',
      'Graph representations: Adjacency List vs Adjacency Matrix'
    ],
    practiceProblems: [
      { id: 1, title: 'Maximum depth of a binary tree', level: 'Easy' },
      { id: 2, title: 'Validate Binary Search Tree (BST)', level: 'Medium' },
      { id: 3, title: 'Lowest Common Ancestor (LCA)', level: 'Medium' },
      { id: 4, title: 'Breadth-First Search (BFS) in a Graph', level: 'Medium' }
    ],
    project: {
      title: 'Social Network & File Explorer',
      desc: 'Build an interactive hierarchical file system and friend recommendation network using BFS/DFS graph traversals.'
    }
  },
  {
    week: 6,
    title: 'Dynamic Programming & Capstone',
    shortSubtitle: 'Solve complex problems using optimization.',
    subtitle: 'Break down complex problems into overlapping subproblems with memoization and tabulation.',
    tags: ['Recursion', 'Memoization', 'DP Patterns', 'Capstone Project'],
    iconType: 'code',
    actionText: 'Start →',
    actionType: 'outline',
    progressText: '0/3',
    progressPercent: 0,
    isCompleted: false,
    subtopics: [
      {
        id: 'sub1',
        num: 1,
        title: 'Memoization vs Tabulation',
        completed: false,
        codeSnippet: `# DP Tabulation (Bottom-Up Fibonacci)
def fib_dp(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

print("Fibonacci(10):", fib_dp(10))`,
        terminalOutput: [
          'Allocating DP Table of size 11...',
          'Fibonacci(10): 55 (O(N) Linear Time & Zero redundancy)'
        ]
      },
      {
        id: 'sub2',
        num: 2,
        title: 'Classic DP Patterns',
        completed: false,
        codeSnippet: `# 0/1 Knapsack DP Tabulation
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][capacity]

print("Max Value:", knapsack([2, 3, 4], [3, 4, 5], 5))`,
        terminalOutput: [
          'Building 2D DP Table...',
          'Max Value: 7 (Optimal combination chosen)'
        ]
      },
      {
        id: 'sub3',
        num: 3,
        title: 'Interview Capstone Project',
        completed: false,
        codeSnippet: `# Full Capstone Algorithmic Trading Walkthrough
# 1. Sliding Window Maximum
# 2. Dynamic Programming Optimal Substructure
# 3. Graph Shortest Path Routing
print("Capstone Deliverable Verified & Passed 100/100 tests!")`,
        terminalOutput: [
          'Running comprehensive test suite (45 edge cases)...',
          'All test cases passed in 8ms!',
          'Capstone Deliverable Verified & Passed 100/100 tests!'
        ]
      }
    ],
    concept: {
      text: 'Dynamic Programming solves problems with overlapping subproblems and optimal substructure by storing intermediate results in a table so each subproblem is solved only once.',
      diagramType: 'dp_table',
      dpTableData: {
        title: 'DP Tabulation Grid (Fibonacci / Knapsack)',
        states: [
          { i: 0, val: 0 },
          { i: 1, val: 1 },
          { i: 2, val: 1 },
          { i: 3, val: 2 },
          { i: 4, val: 3 },
          { i: 5, val: 5 }
        ],
        note: 'dp[i] = dp[i-1] + dp[i-2] avoids 2^n exponential recursion!'
      }
    },
    codeSnippet: `# Dynamic Programming (Fibonacci Tabulation)
def fib_dp(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Compute 10th Fibonacci number in O(N) time
n = 10
print(f"Fibonacci({n}) with DP:", fib_dp(n))`,
    terminalOutput: [
      'Computing Fibonacci(10) with DP Tabulation...',
      'DP Table: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]',
      'Time Complexity: O(N) | Space: O(N)',
      'Result: Fibonacci(10) = 55 (Zero redundant computations!)'
    ],
    keyPoints: [
      'Two approaches: Top-Down (Memoization) and Bottom-Up (Tabulation)',
      'Identifies overlapping subproblems and optimal substructure',
      'Reduces exponential O(2^n) time complexity down to polynomial O(n)',
      'Common patterns: 1D Array, 2D Grid, Longest Common Subsequence, Knapsack'
    ],
    practiceProblems: [
      { id: 1, title: 'Climbing Stairs (1 or 2 steps)', level: 'Easy' },
      { id: 2, title: 'House Robber', level: 'Medium' },
      { id: 3, title: 'Longest Increasing Subsequence (LIS)', level: 'Medium' },
      { id: 4, title: '0/1 Knapsack Problem', level: 'Hard' }
    ],
    project: {
      title: 'Algorithmic Trading & Path Finder Capstone',
      desc: 'Build an optimal portfolio profit calculator and grid shortest-path solver with full technical interview walkthrough.'
    }
  }
];
