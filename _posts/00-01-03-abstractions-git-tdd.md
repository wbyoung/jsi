---
layout: post
title: Abstractions, Git & TDD
class: abstractions+git+tdd
date: 2014-05-14 00:00:00
---

This lesson will cover a few more basics, but first we're going to add Git and
Test Driven Development to our workflow.

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

<aside>
**Whitespace**

Whitespace, that is line breaks, spaces, and tabs, can cause headaches when
merging changes. You should make sure that when you commit changes that you
(or your text editor) hasn't changed whitespace in parts of the code that you
didn't intend to edit.

Also, it's a good idea to ensure that every file ends with a line break
(newline). Why? Many (command line) tools don't work quite as nicely when you
don't have that final newline. Git, for instance, will show you a weird
representation of changes that affect the addition/removal of content at the
end of a file if you don't have a trailing newline.
</aside>

### Updating Course Contents

Now that you know the typical Git workflow, you can actually make changes to
[this course][github-jsi] if you find any mistakes.


## Test Driven Development

Let's use TDD to write an interest calculator.

<aside class="objective">
**Interest Calculator Objective**
Write an continuous compounding interest calculator following the test driven
development workflow. The function should return just the interest, not the
amount owed.
</aside>

Start with a test:

{% highlight javascript %}
describe('calculateInterest()', function() {
  it('fill me in', function() {
    // fill me in
  });
});
{% endhighlight %}

Let's come up with some more tests. Remember:

 - Test expected usage
 - Test corner cases


### Challenge

Fork the repository [here][github-jsi-gravity], follow the directions in the
[README][github-jsi-gravity-readme], use TDD to create a solution, then create
a pull request with the solution.

The project uses [npm][npm] to install [Mocha][mocha] and [Chai][chai], so when
you first clone it, you should run `npm install`. You should run the tests you
write with `npm test` instead of using `node`.

<aside>
**`npm install` and `npm test`**

We're skipping over a few details here on how things are set up. Don't worry,
we'll be discussing this shortly when we introduce modules.
</aside>


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

[so-git-merge]: http://stackoverflow.com/a/3407920/98069
[github-jsi]: https://github.com/portlandcodeschool/jsi
[github-jsi-members]: https://github.com/portlandcodeschool/jsi-members
[github-jsi-gravity]: https://github.com/portlandcodeschool/jsi-gravity
[github-jsi-gravity-readme]: https://github.com/portlandcodeschool/jsi-gravity/blob/master/README.md
[npm]: https://www.npmjs.org
[mocha]: http://visionmedia.github.io/mocha/
[chai]: http://chaijs.com
