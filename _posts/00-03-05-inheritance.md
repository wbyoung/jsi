---
layout: post
title: Inheritance
class: inheritance
date: 2014-05-31 00:00:00
---



## Abuse of Inheritance

Let's say you have a class, `Page`. This class defines methods like:

* `Page.prototype.words()`
* `Page.prototype.margins()`
* `Page.prototype.font()`
* `Page.prototype.pageNumber()`

You now have a building block with which you can build some cool stuff.

So how about a newspaper article? We'll that's just a page, right?

{% highlight javascript %}
function Article() { Page.apply(this, arguments); }
Article.prototype = Object.create(Page.prototype);
Article.prototype.constructor = Article;
{% endhighlight %}

And a book is really just one really long page, right?

{% highlight javascript %}
function Book() { Page.apply(this, arguments); }
Book.prototype = Object.create(Page.prototype);
Book.prototype.constructor = Book;
{% endhighlight %}

_Wrong!_

Why is this wrong? Well because you're using the wrong tool for the job. Just
because you have a hammer does not make everything a nail.

### _Is a_ vs _has a_

A book certainly isn't just a page. It's a collection of many pages. It
_has many_ pages. You wouldn't go home and tell your mom that what you learned
in school today was that a book _is a_ page. You'd sound like a fool. But
a book does _have a_ page.

This is pretty simple, but the newspaper article gets a little more tricky.

A newspaper article could be a single page. It could span multiple pages. In
fact, it could be one of many articles on a page. When you really think about
it, though, it doesn't make sense for a page to _have an_ article. The page
object we already have is trying to represent a really basic bit of prose.
Perhaps it's a way of breaking up a long flow of text into multiple sections
based on how it fits within the confines of the margins. It's certainly not
representing complex newspaper layouts with articles, ads, etc.

Therefore, the following code better represents our article scenario:

{% highlight javascript %}
function Article() {
  this._pages = []; // an array of Page objects
}

function Layout() {
  this._articles = []; // an array of Article objects
  this._advertisements = []; // an array of Advertisement objects
  this._arrangment = {}; // something to represent arrangement of everything
}

function NewspaperPage() {
  this._layout; // a Layout object, how to lay out the page
  this._pageNumber; // page number
}
{% endhighlight %}

This example is slightly far-fetched. This is not the _right_ representation
of the relationship between these objects. There is no right representation.
Depending on the application and how these objects will be used, you could come
up with hundreds of configurations.

It should help you understand, however, that there are cases in which
inheritance is not the right choice. Instead, you can build complex
relationships between objects by _composition_ as illustrated above.

Crafting the proper set of objects to represent objects in the real world can
quickly become complicated and confusing. Using objects to model abstract
processes and concepts is even more difficult. It's a skill you'll continue to
develop throughout your development career.


<aside>
**Object Oriented Design**

You'll hear this term a lot. Programmers use the term a lot. You need to know
it. Technically, its a design pattern that prescribes the use of objects to
model systems and create applications. In practice, it has many different
meanings. The nuance between the meaning will depend on the context and the
conversation.

Some people just mean defining an object here or there. Our `Person` example
would suffice. That was object oriented design.

Some people will use it and be talking about building complex applications
using object oriented principles and pushing those principles to the limits.
They'll potentially over-use inheritance and build classes with crazy names
that do funny things. They'll throw a bunch of other design patterns on top
&mdash; factories, abstract base classes, builders, bridges, adapters, etc.

This is not wrong. It's usually the language that dictates to what extent these
principles and patterns enter a programmers arsenal and vocabulary. Java and
C++ programmers tend to use these ideas far more heavily. The language
facilitates it, and the community embraces it. JavaScript doesn't need to rely
heavily on objects to get things done. Some frameworks use objects far more
than others, though. This is either to make them easier to use or to make them
more approachable.

Obviously, don't take this as gospel and repeat it everywhere. No one way of
approaching problems is right. JavaScript isn't better than C++. They're
different. Using object oriented principles to solve problems in JavaScript is
not wrong, it's just not required. Just solve the problem and write clear code.

Bottom line: you need to know about object oriented design, but the truth is,
you won't use it in JavaScript as much as you might think. And many programmers
over-use object oriented concepts (don't tell them that, though).
</aside>
