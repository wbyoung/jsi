---
layout: post
title: Abstractions, Git & TDD
class: abstractions+git+tdd
date: 2014-05-14 00:00:00
---

This lesson will cover a few more basics, but first we're going to add Git and
Test Driven Development to our workflow.

[JavaScript `typeof`][js-typeof]  

## Git & GitHub

Here's a typical workflow with GitHub:

1. Create a fork (GitHub)
1. Clone the fork (`git`)
1. Create a branch (`git`)
1. Review changes (`git`)
1. Commit changes (`git`)
1. Push changes (`git`)
1. Create pull request (GitHub)

As you can see, we start and end on GitHub, but much of the time you'll be
using `git` on your computer. Let's take a look at this workflow.

{% highlight bash %}
git clone git@github.com:github_username/repo_name.git
cd repo_name

git checkout -b branch-name master

git status
git diff

git add .
git commit -m 'My commit message.'

git push origin branch-name
{% endhighlight %}

Let's practice using Git and GitHub with [this repository][github-jsi-members].

### Merging & Conflicts

When collaborating, you'll sometimes end up editing the same code as someone
else. The best way to understand this is to experience it in action.

Assuming you still are on a branch, the following will be pretty close do what
you'll want to do:

1. Fetch and merge changes from upstream (`pull`)
1. Manually merge any conflicting files
1. Review changes
1. Commit
1. Push

{% highlight bash %}
git pull origin master

git diff --ours
git diff --theirs
git add path/to/file/that/was/merged
git commit -m 'Merged changes from wherever.'
git push origin branch-name
{% endhighlight %}

[This answer on StackOverflow][so-git-merge] may also provide some guidance
if you get stuck merging.

## More Fun With Functions

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

[js-typeof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
[so-git-merge]: http://stackoverflow.com/a/3407920/98069
[github-jsi-members]: https://github.com/portlandcodeschool/jsi-members