---
layout: post
title: Abstractions, Git, & TDD
class: abstractions+git+tdd
date: 2014-05-14 00:00:00
---

This lesson will cover a few more basics, and we'll start using 

# In Progress

{% highlight javascript %}
var continueIterating = function(array, n, fn) {
  if (n < array.length) {
    fn(array[n]);
    continueIterating(array, n+1, fn);
  }
};

var startIterating = function(array, fn) {
  continueIterating(array, 0, fn);
};

startIterating(fruits, indicateFruitThatNeedsPurchasing);
startIterating(fruits, indicateFruitPurchased);
{% endhighlight %}


{% highlight javascript %}
var each = function(array, fn) {
  var next = function(array, n, fn) {
    if (n < array.length) {
      fn(array[n]);
      next(array, n+1, fn);
    }
  };
  next(array, 0, fn);
};

each(fruits, indicateFruitThatNeedsPurchasing);
each(fruits, indicateFruitPurchased);
{% endhighlight %}