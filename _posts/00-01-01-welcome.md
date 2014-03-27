---
layout: post
title: Welcome
class: welcome
date: 2014-05-12 00:00:00
---

Welcome to PCS!

Each class will have its own page and may have one or more sets of slides. Think
of the class pages as actionable material that you'll be doing. The slides are
more to guide discussion.

I've tried to organize this site so things are easy for you to find and reference when
you need to. You'll find the classes and slides listed on the [home page]({{ site.baseurl }}/).
You'll also find a [reference page]({{ site.baseurl }}/reference/) that collects all the links
for the course.

Today we'll start with slides and then come back to this page.

## Setting up your computer

It's quite annoying, and you don't have to do it frequently, but learning how
to install the tools you use will help you significantly going forward.

### Install SublimeText

Install the [latest SublimeText](http://www.sublimetext.com/3).

Create a link to the `subl` command:

{% highlight bash %}
mkdir -p /usr/local/bin
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
{% endhighlight %}


### Install Homebrew

{% highlight bash %}
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
{% endhighlight %}

### Install Git and Node

{% highlight bash %}
brew install git node
{% endhighlight %}

### Configure Git

{% highlight bash %}
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.st 'status -s'
git config --global core.editor "subl -w"
git config --global core.excludesfile '~/.gitignore_global'
git config --global push.default simple
git config --global diff.renames true
git config --global color.ui true
echo ".DS_Store" >> ~/.gitignore_global
{% endhighlight %}


### Improve your Terminal

{% highlight bash %}
subl ~/.bash_profile
{% endhighlight %}

Add the following:

{% highlight bash %}
export PS1="\e[1;35m\u\e[0;39m:\e[1;32m\H\e[0;39m:\e[1;36m\w\e[0;39m\n\\$ "
export PATH="/usr/local/bin:/usr/local/sbin:$PATH"
export CLICOLOR=1
export LSCOLORS=ExFxCxDxBxegedabagacad
export PAGER="less"
export EDITOR="/usr/local/bin/subl -w"
{% endhighlight %}

Someone, please interrupt and ask the following question:  
<q>Can you please explain tab completion?</q>

<aside>
  <strong>
    This is the first side content on this site. These sections will frequently explain the details of things that
    aren't important to understand in order to continue. It's for when you're curious, but don't get caught up on
    them.
  </strong>
  What does this do? It sets up `bash`, the main program that runs inside of `Termainal.app`, to handle a few things differently:
  <ul>
    <li>PS1 &ndash; Improves the standard prompt you see</li>
    <li>PATH &ndash; Tells `bash` to search for local applications first</li>
    <li>CLICOLOR &ndash; Use colors more frequently (for instance when doing `ls`)</li>
    <li>PAGER &ndash; Some apps may use this when showing multiple pages of content</li>
    <li>EDITOR &ndash; Some apps (such as `git`) use this when they need you to edit files</li>
  </ul>
</aside>

## Project

To come&hellip;

## Reference

[Arithmetic][js-arithmetic]  
[Assignment][js-assignment]  
[Comparison][js-comparison]  
[Logic][js-logic]  
[Strings][js-strings]  


## For later

- Think of a domain name for a portfolio site
- Thing of a web application you'd like to build

[js-arithmetic]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
[js-assignment]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators
[js-comparison]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
[js-logic]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
[js-strings]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/String_Operators
