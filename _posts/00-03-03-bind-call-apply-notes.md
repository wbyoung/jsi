---
layout: notes
title: Bind, Call &amp; Apply Notes
class: bind+call+apply
date: 2014-05-29 00:00:00
---

## Class Flow

## Memoize

{% highlight javascript %}
var memoize = function(fn) {
  var cache = {};
  var slice = Array.prototype.slice;
  return function () {
    var args = slice.call(arguments, 0);
    var key = JSON.stringify(args);
    return cache[key] ||
      (cache[key] = fn.apply(this, args));
  };
};
{% endhighlight %}


## Partials

We're starting from this:

{% highlight javascript %}
var partial = function(fn, arg1) {
  return function(arg2, arg3) {
    return fn(arg1, arg2, arg3);
  };
};

var greet = function(greeting, firstName, lastName) {
  return greeting + ' ' + firstName + ' ' + lastName;
};

var hi = partial(greet, 'hi');

console.log(hi('Whitney', 'Young'));
{% endhighlight %}


Next step:

{% highlight javascript %}
var partial = function(fn, arg1) {
  return function(arg2, arg3) {
    var args = Array.prototype.slice.call(arguments);
    var all = [arg1].concat(args)
    return fn.apply(null, all);
  };
};
{% endhighlight %}

Finally:

{% highlight javascript %}
var partial = function(fn) {
  var slice = Array.prototype.slice;
  var args = slice.call(arguments, 1);
  return function() {
    return fn.apply(null, args.concat(slice.call(arguments)));
  };
};
{% endhighlight %}


## Curry Code Reading Challenge

Have one group of students present their explanation of the `curry` function.
The other groups should ask questions as if they're co-workers.

Remind the students that it's important to understand the question being asked
before they answer. No one should try to trick anyone. It's a discussion, not
a boxing match.

Here are some questions to throw in the mix:

* Why did you name the function `helper` (instead of leaving it anonymous)?
* What is the point of creating a variable called `__slice`?
* Why two underscores on `__slice`?  
  _Answer: probably just convention to indicate a constant._
* What does `arity` mean? I've never heard that word before.  
  _Answer: number of arguments of a function. Math term used in programming
  sometimes._
