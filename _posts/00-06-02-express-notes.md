---
layout: notes
title: Express Notes
class: express
date: 2014-06-17 00:00:00
---

## Class Flow

Walk through a little bit of Express. If we're ahead of schedule or the group
feels like they're energized for the afternoon, then do this somewhat quickly.
Don't have them follow along, and they can then spend a bit of time later
re-creating an Express app. Additional examples for them to build are below.

If we're behind schedule, do this as a group a bit more slowly. Possibly skip
the isolation of testable components and make sure they have a decent API app
built up for the persistence day tomorrow.


## Isolating Testable Components

The testing example will bring up `sinon` and spies and stubs. It also uses
promises and the `request` module. Promises will be completely new at this
point. Expect confusion.

The discussion should lead us to realizing that there's not much to gain when
testing an Express app by splitting up the routing and the handlers.


## New Library or Concept Discovery

Ask the students what to do when they're working in code and confused about
something they've never seen before. The way to handle this is to research it
decently. They don't need to understand it 100%, but they should have a decent
idea of how it works. In the case of promises, a simple example of seeing
`then` calls chained together on someone's blog should suffice.

The idea should be to ensure that they understand that they're using it
properly, but not to let it slow them down.

Have them explain to each other or to the group what they learn. What are they
still unsure about?


## Extra

They should work on building up their own API using Express. They could, for
instance build an API for a blogging engine (just creating articles). They
could build a photo album, schedule, recipe list, todo list, etc.
