---
layout: post
title: User Input & Serialization
class: serialization
date: 2014-05-20 00:00:00
---

## User Input

Sometimes, you'll want to build a command line app that asks the user a
question.

Node makes this a little complicated, but it's not too difficult. Here's some
code taken directly from [Node's `readline` documentation][node-readline].

{% highlight javascript %}
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of node.js? ", function(answer) {
  // TODO: Log the answer in a database
  console.log("Thank you for your valuable feedback:", answer);

  rl.close();
});
{% endhighlight %}

The most cryptic part of this example code is `process.stdin` and
`process.stdout`. These are the _standard input_ and _standard output_ of your
app. The standard input is the input that the user provides to your app, and
the standard output is the information you provide back to the user (often by
using `console.log`).

Any questions?


[node-readline]: http://nodejs.org/api/readline.html