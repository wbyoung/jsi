---
layout: notes
title: Fundamentals Notes
date: 2014-05-13 00:00:00
---

## Counting

Here's a final version of the counting code:

{% highlight javascript %}
var sayNumber = function(person, n) {
  console.log(person.name + " says '" + n.toString() + "'");
};

var continueCounting = function(person, n) {
  if (person.age <= 3 && n > 10) {
    console.log(person.name + " can't count past 10 at age " + person.age + ".");
  }
  else if (person.age <= 4 && n > 20) {
    console.log(person.name + " can't count past 20 at age " + person.age + ".");
  }
  else if (n > 100) {
    console.log(person.name + " got bored and stopped counting.");
  }
  else {
    sayNumber(person, n);
    continueCounting(person, n+1);
  }
};

var startCounting = function(person) {
  // a previous version of this function was:
  //   sayNumber(person, 0);
  //   continueCounting(person, 1);
  // but it can be simplified because starting
  // to count is really just continuing from 0.
  continueCounting(person, 0);
};

startCounting({
  name: "Whitney",
  age: 4
});
{% endhighlight %}


## Fruits

Here's the full fruits code:


{% highlight javascript %}
var indicateFruitThatNeedsPurchasing = function(fruit) {
  console.log("I need to purchase " + fruit + ".");
};

var continueIndicatingFruitThatNeedsPurchasing = function(array, n) {
  if (n < array.length) {
    indicateFruitThatNeedsPurchasing(array[n]);
    continueIndicatingFruitThatNeedsPurchasing(array, n+1);
  }
};

var startIndicatingFruitThatNeedsPurchasing = function(array) {
  continueIndicatingFruitThatNeedsPurchasing(array, 0);
};

var indicateFruitPurchased = function(fruit) {
  console.log("I purchased " + fruit + " today.");
};

var continueIndicatingFruitPurchased = function(array, n) {
  if (n < array.length) {
    indicateFruitPurchased(array[n]);
    continueIndicatingFruitPurchased(array, n+1);
  }
};

var startIndicatingFruitPurchased = function(array, n) {
  continueIndicatingFruitPurchased(array, 0);
};

var fruits = ['apples', 'oranges', 'bananas'];
startIndicatingFruitThatNeedsPurchasing(fruits, 0);
startIndicatingFruitPurchased(fruits, 0);
{% endhighlight %}
