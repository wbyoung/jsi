---
layout: notes
title: Rounding Out The Basics Notes
class: more-js
date: 2014-09-08 00:00:00
---

## Class Flow

- Run through slides
- Discuss loops as you go, allow them to give them a try
- Mention that what they've been doing is called recursion.
  Possibly explain what a base case is in recursion.

## More Problem Ideas

In case people need a challenge for the weekend, in case we decide to just go
with a few more problems, here are some ideas:

- Pig Latin translator & reverse translator

- Write a game like minesweeper.  
  Example interface:

        ./minesweep --board 1 --bombs 2 0,0

        +---+---+---+---+---+---+
        |   |   |   |   |   |   |
        +---+---+---+---+---+---+
        |   |   |   |   |   |   |
        +---+---+---+---+---+---+
        |   |   |   |   |   |   |
        +---+---+---+---+---+---+
        |   |   |   |   |   |   |
        +---+---+---+---+---+---+
        |   |   |   |   |   |   |
        +---+---+---+---+---+---+
        | 1 |   |   |   |   |   |
        +---+---+---+---+---+---+

        ./minesweep --board 1 --bombs 2 0,0 0,5

        +---+---+---+---+---+---+
        | 1 |   |   |   |   |   |
        +---+---+---+---+---+---+
        |   |   |   |   |   |   |
        +---+---+---+---+---+---+
        |   |   |   |   |   |   |
        +---+---+---+---+---+---+
        |   |   |   |   |   |   |
        +---+---+---+---+---+---+
        |   |   |   |   |   |   |
        +---+---+---+---+---+---+
        | 1 |   |   |   |   |   |
        +---+---+---+---+---+---+

        ./minesweep --board 1 --bombs 2 0,0 0,5 1,1


        +---+---+---+---+---+---+
        | 1 |   |   |   |   |   |
        +---+---+---+---+---+---+
        |   |   |   |   |   |   |
        +---+---+---+---+---+---+
        |   |   |   |   |   |   |
        +---+---+---+---+---+---+
        |   |   |   |   |   |   |
        +---+---+---+---+---+---+
        |   | 0 |   |   |   |   |
        +---+---+---+---+---+---+
        | 1 |   |   |   |   |   |
        +---+---+---+---+---+---+

- External Ideas
  - [CalPoly][calpoly]
  - [Adriann on GitHub][adriann]
  - [Python Challenge][python-challenge] and [solutions][python-challenge-solutions]

# Week 1 Quiz

1. Define an object representing a city that has the following properties:
   - `country`
   - `name`
   - `numberOfPeople`
1. Define that same object using an alternative syntax.
1. Write a function that adds two numbers and returns the result.
1. Write a function, `fullName` that takes a person object and returns their full name. Assume that the person object has the properties `firstName` and `lastName`.
1. Create an array of songs (like a playlist). Each song should have an
`artist`, `album`, and `title`.

[calpoly]: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html
[adriann]: http://adriann.github.io/programming_problems.html
[python-challenge]: http://www.pythonchallenge.com
[python-challenge-solutions]: http://holger.thoelking.name/python-challenge/all
