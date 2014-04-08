---
layout: post
title: Bind, Call &amp; Apply
class: bind+call+apply
date: 2014-05-29 00:00:00
---

Come back to the memoize example and discuss how to use apply to accept any arguments.

Today we're going to revisit some of the functions we wrote while discussing
functional programming topics. We'll make each of these functions work a little
better.

## Functions

### Arguments

What happens with this code?

{% highlight javascript %}
var fn = function() {
  
};
fn('hello', 'world');
{% endhighlight %}

What about this code?

{% highlight javascript %}
var fn = function(arg1, arg2) {
  console.log('%s %s', arg1, arg2);
};
fn();
{% endhighlight %}

Any function can take any number of arguments. What good is that if you can't
access the arguments? It's not, so JavaScript provides a hidden variable
called `arguments`.

Let's take a look.

TODO: write notes for looking at this

### Functions Are Objects

Remember when we said JavaScript treats functions just like any other object?
Well it treats them that way because they are objects!

Arrays have important methods like `forEach`, `map`, and `reduce` that we use
all the time. Strings have functions like `toUpperCase` and `toLowerCase`.
Functions have a few methods that are extremely important as well.

We'll see important uses for each of these methods shortly, but here are those
that we'll discuss today with a quick example of each.

#### Call

Allows you to call a function specifying what the value of `this` should be.

{% highlight javascript %}
fn.call(obj, 1, 2, 3)
{% endhighlight %}

#### Apply

Allows you to call a function specifying what the value of `this` should be,
and the arguments are provided as an array.

{% highlight javascript %}
fn.apply(obj, [1, 2, 3])
{% endhighlight %}

#### Bind

Lock in a value for `this` on a function by creating and returning a new
function.

{% highlight javascript %}
var bound = fn.bind(obj);
bound(1, 2, 3);
{% endhighlight %}



## Memoize

TODO: write this


## Partial

Let's use our knowledge of `call`, and `apply` to update our `partial` function
so that it works for any number of arguments.

We're going to start from the code we implemented last week.

### Challenge

Create another function, `partialRight` that partially applies arguments
right to left instead of left to right.

<aside class="objective">
{% highlight javascript %}
var greet = function(greeting, name) { return greeting + ' ' + name; };
var greetFred = partialRight(greet, 'fred');
greetFred('hi'); //=> 'hi fred'
{% endhighlight %}
</aside>


## Currying

Here's a short implementation of a [`curry` function][allonge-curry] taken from
[JavaScript Allongé][allonge]:

{% highlight javascript %}
var __slice = Array.prototype.slice;

function curry (fn) {
  var arity = fn.length;

  return given([]);

  function given (argsSoFar) {
    return function helper () {
      var updatedArgsSoFar = argsSoFar.concat(__slice.call(arguments, 0));

      if (updatedArgsSoFar.length >= arity) {
        return fn.apply(this, updatedArgsSoFar)
      }
      else return given(updatedArgsSoFar)
    }
  }

}

function sumOfFour (a, b, c, d) { return a + b + c + d }

var curried = curry(sumOfFour);

curried(1)(2)(3)(4) //=> 10

curried(1,2)(3,4) //=> 10

curried(1,2,3,4) //=> 10
{% endhighlight %}

### Challenge

* Determine how this function works.
* Pretend that you've now been given ownership of this code at your job.
  Prepare to explain how it works to a co-worker.
* Think of questions you'd ask a co-worker who wrote this code in order to
  fully understand it. Does anything stand out that's weird?

## Using Bind

TODO: write this

[allonge]: https://leanpub.com/javascript-allonge
[allonge-curry]: https://leanpub.com/javascript-allonge/read#leanpub-auto-currying-1
