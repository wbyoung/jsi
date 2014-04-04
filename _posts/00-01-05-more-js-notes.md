---
layout: notes
title: Rounding Out The Basics Notes
class: more-js
date: 2014-05-16 00:00:00
---

## Class Flow

- Run through slides
- Discuss loops as you go, allow them to give them a try

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

[calpoly]: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html
[adriann]: http://adriann.github.io/programming_problems.html
[python-challenge]: http://www.pythonchallenge.com
[python-challenge-solutions]: http://holger.thoelking.name/python-challenge/all
