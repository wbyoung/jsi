---
layout: post
title: Modules
class: modules
date: 2014-05-15 00:00:00
---

In this class we'll continue to discuss abstractions. We'll create some common
abstractions and group them together into _modules_. Finally, we'll focus on
clearly expressing what functions do while documenting code.

## Modules

### Creating Modules

Modules are created by placing code in a separate file. You can put whatever
code you want to in that file, but you can _expose_ values and objects that
you want to through the `module.exports` object. All modules start with an
empty `module.exports` object, so you can add properties directly to that.

{% highlight javascript %}
/**
 * @file array-functions.js
 */

module.exports.each = function(array, fn) {
  // each function definition
};
{% endhighlight %}

Alternatively, you can directly set the `module.exports` object.

{% highlight javascript %}
/**
 * @file array-functions.js
 */

module.exports = {
  each: function(array, fn) {
    // each function definition
  }
};
{% endhighlight %}


These two methods for exposing the `each` function are identical.

#### Quick Status Check

- Create a new module that exports the `each` function that we wrote last class
- Expose a new function from this module called `sayHello` that simply logs
  `"hello world"`. (You'll probably choose to delete this later.)
- Expose a new property from this module called `version` that indicates the
  version of this module's code (call it 0.1.0 for now).
- Try switching to the other method of exposing information.

### Using Modules

In order to use a module, you use `require` to access the values that it has
exposed. You pass `require` one argument, a string that allows it to find the
module. For now we're going to be using a relative path, but we'll later see
other uses.

{% highlight javascript %}
/**
 * @file app.js
 */

var arrayFunctions = require('./array-functions');
var fruits = ['kiwi', 'strawberry', 'banana'];

arrayFunctions.each(fruits, function(fruit) {
  addFruitToSmoothie(fruit);
});
{% endhighlight %}


<aside>
**Isn't this just complicating things more?**

At this point, it may feel forced to be splitting up our code into two files.
We're trying to develop some good habits early, though. Soon you'll be writing
hundreds (and even thousands) of lines of code. Learning when and how to
modularize your code base is an extremely important skill to develop.

This is where programming becomes more of an art than a science. There's no
formula or recipe to follow to know how to break up large code bases. There are
common patterns that people follow, and we'll discuss those, but many projects
do things differently. Practice and observation will improve your ability to
figure out good places to modularize.
</aside>


## Documenting Code

What does this function do?

{% highlight javascript %}
module.exports.map = function(array, fn) {
  // map function definition
};
{% endhighlight %}

Well maybe if I saw it used, it would make more sense, right?

{% highlight javascript %}
console.log(arrayFunctions.map([1,2,4,5,6,7], function(a) {
  return a * a;
}));
{% endhighlight %}

You may be able to guess (especially if you've done some programming in other
languages before), but you also may not be able to. Knowing that the result may
help as well, but it's still a lot of work to try to figure things out this
way.

Even if you can guess from the code and the result, would you feel comfortable
writing code that used this `map` function? What if someone else wrote it and
decides to change how it works ever so slightly? They never told you how it
works, so why can't they change it?

When you write modules or any code that someone else will be building off of,
for that matter, you should document it.

An example:

{% highlight javascript %}
/**
 * Create a new array by applying `fn` to each element in `array`
 * and using each result as the items of the new array.
 *
 * @function
 * @param {array} array - Input array
 * @param {function} fn - Mapping function
 * @returns {function} A new array
 * @example
 *
 * // create an array of squares
 * map([1,2,3], function(n) {
 *   return n * n;
 * });
 * //=> [1, 4, 9]
 *
 * @example
 *
 * // make all words plural (simple logic)
 * var pluralize = function(word) {
 *   return word + 's';
 * }
 * map(['dog','cat'], pluralize);
 * //=> ['dogs', 'cats']
 *
 */
var map = function() {
  // map function definition
};
{% endhighlight %}

This specific format is used so that we can use [JSDoc][jsdoc] to create web
pages that we can share with others. Even if you don't plan on publishing the
documentation, it can't hurt to follow a rigid structure like this. It really
makes you think about how your functions should work. Running this code through
JSDoc makes it even easier to understand the function:

<iframe src="{{ baseurl }}/jsdoc-example/global.html" width="100%"></iframe>

A list of the types in JavaScript that you can use to document your parameter
types can be found in the [`typeof` documentation][js-typeof].

## Challenges

All of these challenges should be completed by writing code in a module. You
should use test driven development and git as well. Issue a pull request for
each challenge you complete on [this repo][github-jsi-modules].

- Implement a `map` function. Be sure to use test driven development.
- Alter the `each` function to give two arguments to the iteration function,
  the object (as was already done), and the index of the object. For instance:
  {% highlight javascript %}
each(['table', 'chair'], function(object, index) {
  console.log('The ' + object + ' is at index ' + index);
});
  {% endhighlight %}

- Implement a `times` function that simply calls a function a given number of
  times. For instance:
  {% highlight javascript %}
times(5, function(n) {
  console.log('This has been called ' + n + ' time(s).');
});
  {% endhighlight %}

[jsdoc]: http://usejsdoc.org
[js-typeof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
[github-jsi-modules]: https://github.com/portlandcodeschool/jsi-modules
