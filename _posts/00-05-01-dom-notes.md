---
layout: notes
title: Front End Notes
class: dom
date: 2014-09-29 00:00:00
---

At this point, we're starting to dump documentation on the students instead of
going through each piece individually. These notes will point out the expected
progression that students will go through. If they're feeling lost, guide them
to the next step.

The class will be heavily focused on coding. After each challenge, the students
should present the solution they came up with. Even partial solutions should
be presented. Make sure people stop to listen and ask questions when their
peers present.


## Class Flow

- Discuss the DOM in an abstract manner. It will probably be best to draw out
  what the basic HTML from the challenge looks like as a tree on a white board.
  Identify terminology such as _parent_, _child_, _sibling_, _root_, _leaves_.
  Note that we draw trees from the root down & that you'd have to flip it over
  to make it look like a tree for real.
- Show how to include JavaScript in a basic HTML page.
- Discuss the Chrome Developer Tools. Show what `console.log` looks like.

## DOM

* _Problem:_ Students will probably be alarmed at the sheer volume of
  documentation that they'll have to sort through to find the thing that they
  want.  
  _Solution:_ Note that the method names are a very good indicator of what to
  expect. Narrowing down the methods to consider based on their names will
  help, but once you think you found the right thing, still read the docs.
* _Problem:_ Students will not understand details in the docs for advanced
  use.  
  _Solution:_ That will always happen, the basic cases are what you should
  start with, and keep a mental note that the method is more powerful.
* _Problem:_ Students don't understand live result sets.  
  _Solution:_ This will be good to investigate even if it doesn't come up. The
  documentation on [node lists][mdn-nodelist]. This will bite you when you do
  something like trying to iterate over a live result set to remove all items:
  {% highlight javascript %}
for (var i = 0; i < articles.length; i++) {
  articles[i].parentNode.removeChild(articles[i]);
}
  {% endhighlight %}


### Challenge

The first challenge solution:

{% highlight javascript %}
var title = document.createElement('title');
title.textContent = "My JavaScript Blog";
document.head.appendChild(title);

var articles = document.getElementsByTagName('article');
var article1 = articles[0];
var article1Title = document.createElement('h1');
article1Title.textContent = "My First Blog Post";
article1.insertBefore(article1Title, article1.childNodes[0]);

var article2 = document.createElement('article');
var article2Title = document.createElement('h1');
var article2Paragraph = document.createElement('p');
article2.appendChild(article2Title);
article2.appendChild(article2Paragraph);
article2Title.textContent = "My Second Blog Post";
article2Paragraph.textContent = "This is a blog post about really awesome stuff I've done in JavaScript.";
article1.parentNode.insertBefore(article2, article1);
{% endhighlight %}

## Events

* _Problem:_ The `addEventListener` documents `useCapture` pretty poorly.  
  _Solution:_ Google for an answer. There's a decent
  [response on Stack Overflow][so-usecapture] that leads to a great resource on
  [event order][qm-event-order].
* _Problem:_ How do I hide things?  
  _Solution:_ Write CSS for it first, then how do you make that CSS apply via
  JavaScript?
* _Problem:_ How do I get CSS applied?  
  _Solution:_ What attributes do you usually change to apply CSS?
* _Problem:_ Student finds `element.style` and uses that.  
  _Solution:_ Explain how that model eventually causes tons of problems. Styles
  should be applied in one place, the CSS, for consistency. JS should only
  add/remove classes. This is simply a best practice.


### Challenge #1

{% highlight css %}
@import url(http://fonts.googleapis.com/css?family=Open+Sans);
html, body { margin: 0px; padding: 0px; }
body { font-family: 'Open Sans', sans-serif; }
body > h1 {
  background: #333;
  color: #fff;
  padding: 1em 3em;
}
article {
  margin: 2em 3em 0em 3em;
}
article h1 {
  text-transform: uppercase;
  border-bottom: 1px solid #888;
}
article p {
  opacity: 0;
  -webkit-transform: scaleY(0);
  -moz-transform: scaleY(0);
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -webkit-transition-property: opaccity, -webkit-transform;
  -moz-transition-property: opaccity, -moz-transform;
}
article.expanded p {
  opacity: 1;
  -webkit-transform: scaleY(1);
  -moz-transform: scaleY(1);
}
article.highlighted {
  background: #efe;
}
{% endhighlight %}

{% highlight javascript %}
var articleTitles = Array.prototype.slice.call(articles).map(function(article) {
  return article.querySelector('h1');
});

articleTitles.forEach(function(title) {
  title.addEventListener('click', function() {
    var article = this.parentNode;
    var classes = article.getAttribute('class') || '';
    var found = false;
    classes = classes.replace(/\s*\bexpanded\b/, function() {
      found = true;
      return '';
    });
    if (!found) {
      classes = classes + ' expanded'
    }
    article.setAttribute('class', classes);
  }, false);
});
{% endhighlight %}


### Challenge #2

* _Problem:_ I can't get things to work on just one of the items, it's always
  happening for both.  
  _Solution:_ Get them to look into events enough to come up with a more
  concrete question. They should reach the point of having sufficient language
  to discuss what _could_ be the problem, but if the documentation is sparse
  or hard to understand, to ask again. Basically, they should be asking, how
  does _event propagation_ work, what is _bubbling_ or what is _capturing_?
* _Problem:_ I duplicated two bits of code.  
  _Solution:_ Abstract the common code (refactor).
* _Problem:_ Create regex from string.  
  _Solution:_ In code below.

{% highlight javascript %}
var toggleClass = function(element, className) {
  var classes = element.getAttribute('class') || '';
  var found = false;
  classes = classes.replace(new RegExp('\\s*\\b' + className + '\\b'), function() {
    found = true;
    return '';
  });
  if (!found) {
    classes = classes + ' ' + className;
  }
  element.setAttribute('class', classes);
};

articleTitles.forEach(function(title) {
  title.addEventListener('click', function(event) {
    toggleClass(this.parentNode, 'expanded');
    event.stopPropagation();
  }, false);
});

Array.prototype.slice.call(articles).forEach(function(article) {
  article.addEventListener('click', function() {
    toggleClass(this, 'highlighted');
  }, false);
});
{% endhighlight %}

### Challenge #3

Things that they should think about:

- HTML forms
- `event.preventDefault()`
- Regular expressions again
- Expiration could be MM/YYYY or MM/YY. It could be two boxes or one.
- What about credit card type? This can be calculated from the card number.
  Either request it or display what the type is.
- How to display errors?
- How to stack/align input
- I'm not a designer, what do I do? Look at something else for inspiration.
- Placeholders

[so-usecapture]: http://stackoverflow.com/a/13966355/98069
[qm-event-order]: http://www.quirksmode.org/js/events_order.html
[mdn-nodelist]: https://developer.mozilla.org/en-US/docs/Web/API/NodeList
