---
layout: notes
title: User Input & Serialization Notes
class: serialization
date: 2014-05-20 00:00:00
---

## Class Flow

- Run through the user input example
- Discuss `stdin` and `stdout`. You can mention that they're streams which
  we'll come back to, but don't actually discuss streams.
- We're somewhat deliberately providing just the example code from Node and
  requesting that the students ask questions. Some example questions would be:
    * Can we see the documentation for `createInterface`, `question` and
      `close`?
    * What does `close` do? Or what happens if you don't use it?
    * Why is `createInterface` taking an object as its argument rather than
      just two parameters?
    * What other options can `createInterface` take?
    * Do `input` and `output` of `createInterface` default to `stdin` and
      `stdout`?
  They should ask something. Try to engage them. If not, go ahead and ask
  them some questions that might get them thinking of more.
