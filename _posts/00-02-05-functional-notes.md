---
layout: notes
title: Functional Programming Notes
class: functional
date: 2014-05-23 00:00:00
---

## Class Flow


Here's a tracing program for the Fibonacci sequence:

{% highlight javascript %}
var fibonacci = function(n, indent) {
  var pad = function(n) {
    var res = '';
    for (var i = 0; i < n; i++) {
      res += ' ';
    }
    return res;
  };
  if (n > 1) {
    console.log('%sfibonacci(%d) -> fibonacci(%d) + fibonacci(%d)', pad(indent), n, n-1, n-2);
    return fibonacci(n - 1, indent + 1) + fibonacci(n - 2, indent + 1);
  }
  else {
    return n;
  }
};
console.log(fibonacci(Number(process.argv[2]), 0));
{% endhighlight %}

Show how the tracing program works by showing it with a low number:

{% highlight bash %}
node fibonacci.js 3
node fibonacci.js 4
node fibonacci.js 5

node fibonacci.js 20
node fibonacci.js 20 | grep "fibonacci\(8\) ->"
node fibonacci.js 20 | grep "fibonacci\(8\) ->" | wc -l
{% endhighlight %}


Here's the goal that we want to build toward before we move over to abstracting
the memoize function.

{% highlight javascript %}
var fibonacci = (function() {
  var cache = {};
  return function(n) {
    if (!cache[n]) {
      cache[n] = n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : n;
    }
    return cache[n];
  };
})();
{% endhighlight %}

Factorial doesn't have the same performance problem, but let's imagine that it
did for the sake of simplicity. Here's what a version with caching might look
like:

{% highlight javascript %}
var factorial = (function() {
  var cache = {};
  return function(n) {
    if (!cache[n]) {
      cache[n] = n === 0 ? 1 : n * factorial(n - 1);
    }
    return cache[n];
  };
})();
{% endhighlight %}

The memoize function should look like this (for a single argument):

{% highlight javascript %}
var memoize = function(fn) {
  var cache = {};
  return function(arg) {
    return cache[arg] || (cache[arg] = fn(arg));
  };
};
{% endhighlight %}

For reference, eventually, we'll get it to this, but for now we aren't going to
talk about `apply`:

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

## Partial

We won't get all the way through partial applications

{% highlight javascript %}
var partial = function(fn, arg1) {
  return function(arg2) {
    return fn(arg1, arg2);
  };
};

var greet = function(greeting, name) {
  return greeting + ' ' + name;
};

var hi = partial(greet, 'hi');

console.log(hi('Whitney'));
{% endhighlight %}

Show an example of what it would mean to handle 3 arguments (below), and note
that it only handles the case where one argument is provided to the `partial`
call and the other two are provided to the resulting function. This isn't very
flexible.

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

## Reduce

This is the solution to the reduce/fold challenge:

{% highlight javascript %}
_.reduce(pairs, function(obj, pair) { obj[pair[0]] = pair[1]; return obj; }, {});

var zipObject = _.partialRight(_.reduce, function(obj, pair) {
  obj[pair[0]] = pair[1];
  return obj;
}, {});
{% endhighlight %}
