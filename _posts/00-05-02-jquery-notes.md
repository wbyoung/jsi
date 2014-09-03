---
layout: notes
title: jQuery Notes
class: jquery
date: 2014-09-30 00:00:00
---

We're continuing ideas of learning how to learn in this class. Students will be
asked to basically learn jQuery on their own. This is obviously going to feel
impractical and impossible. Be understanding and respectful of this.

The actual goal is to very slowly guide them through the process. In doing so,
we should continue to take things very slowly.

Students should present their findings after each challenge. There should be
a good amount of discussion.

One thing that's not pointed out to the students is that they shouldn't just
read the documentation, they should start building things themselves. They
should try out the examples. They should push and try doing something bigger.

## Finding Tutorials

Some thoughts here:

* Popularity is good because it lends credibility. It also allows you to better
  find help based on the tutorial.
* Without code examples, you're not really going to learn to write the code
  since you haven't seen it. Examples should be short, though. They should be
  easily digestible.
* If you start a tutorial, and you're feeling confused, it's not going to teb
  better. They need to explain simple stuff clearly.
* If the author doesn't move on to advanced topics, the tutorial could still be
  good. But if they do, they're probably an expert who understands the basics
  well.


## CoffeeScript

People who tackle the code reading example will be surprised to find
CoffeeScript. Remind them that code is an attempt to express solutions to
problems clearly.

If they don't focus on syntax, they can probably figure out what's going on.

`validateCardCVC` and `restrictCVC` are decent functions for them to look at.
They probably won't understand `$.fn.payment` and what `$.fn` is or how that
function is dispatching to `$.payment.fn`.

## Date Handling

They'll have to look up docs on [creating a plugin][jquery-create-plugin].

They should figure out that they need to use something like
[Globalize][globalize] or [Moment.js][moment].

[jquery-create-plugin]: http://learn.jquery.com/plugins/basic-plugin-creation/
[globalize]: https://github.com/jquery/globalize
[moment]: https://github.com/moment/moment/
