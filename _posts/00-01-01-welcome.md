---
layout: post
title: Welcome
class: welcome
date: 2014-05-12 00:00:00
---

Welcome to PCS!

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

## For later

- Think of a domain name for a portfolio site
- Thing of a web application you'd like to build
