---
layout: post
title: JavasScript Fundamentals
class: js-fundamentals
date: 2014-05-13 00:00:00
---

This class will cover some of the fundamentals of JavaScript. We will discuss
conditionals, objects, arrays and functions.


## Objects

For quick reference, here's an example of creating and using objects:

{% highlight javascript %}
var person = {
  name: "Whitney",
  age: 4,
  favoriteColor: "blue",
  hobby: "cooking"
};
person.age = 12;
person['favoriteColor'] = "orange";
console.log(person.name);
{% endhighlight %}

We'll be exploring objects in a lot more detail in the future, but for now we'll
start using them to get comfortable with the syntax.

## Learning to Speak

### Functions

Functions are chunks of code that can be reused. Functions are just
expressions just like `2 + 2` or `"hello world"`.
A function expression looks like: `function() { /* code */ }`.
Usually, you'll assign functions to variables to use them. Here's a basic function
that takes no _arguments_ that we've named `greet` by assigning
it to a variable:

{% highlight javascript %}
var greet = function() {
  console.log("Whitney says \"Hello!\"");
};
{% endhighlight %}

We can then have this chunk of code run anywhere by _calling_ the function.
This is done by adding `()` after the name we gave it:

{% highlight javascript %}
greet();
{% endhighlight %}

Functions can also be thought of as the building blocks of programs.
Soon we'll start combining functions to make cool things happen.


### Arguments

Since greeting is something that many people can do, we can make
our function more general by providing it with some information.

Here are some examples:

{% highlight javascript %}
var greet = function(personName) {
  console.log(personName + " says 'Hello!'");
};
var personName = "Whitney";
greet(personName);
greet("Sara");
{% endhighlight %}


You could also pass objects to functions:

{% highlight javascript %}
var greet = function(person) {
  console.log(person.name + " says 'Hello!'");
};
var person = { name: "Whitney" };
greet(person);
greet({ name: "Sara" });
{% endhighlight %}

<aside>
**Confused by parenthesis?**

When you're new to functions, the syntax can feel confusing, specifically the
parenthesis. You use them both when you're defining your function, but also when
calling the function. This really boils down to the syntax of programming languages.
Generally it's best just to accept it and move on.

If you're still having trouble, and you're not in the mood to just accept it, this
may help: the parenthesis don't mean just one thing. When parenthesis come after the
keyword `function`, they are being used to define arguments. When they come after a
variable name, they mean call the function. So `function(a, b, c)` means define the
arguments `a`, `b`, and `c` for a new function. But `learnJavascript(x, y, z)` means
that you want to call the function that's been assigned to `learnJavascript` with
whatever values are in `x`, `y`, and `z`.
</aside>

### Challenges

- Write a function that takes two arguments, both numbers, and logs the sum. For instance,
  `sum(7, 5)` should log `The sum of 7 and 5 is 12`.
- Write a function that subtracts two numbers. For instance, `difference(7, 5)` should log
  `The difference between 7 and 5 is 2`.
- Write a function that takes two people objects and logs a message about them meeting
  each other for the first time. For instance, `introduce(john, sara)` would log something
  like `John met Sara and said the color is green is awesome`.
- Bonus: Change `difference` so that it never shows negative numbers. For instance,
  `difference(5, 7)` should log `The difference between 5 and 7 is 2`.


## Learning to Count
