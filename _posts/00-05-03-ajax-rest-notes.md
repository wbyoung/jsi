---
layout: notes
title: AJAX &amp; REST Notes
class: ajax+rest
date: 2014-06-11 00:00:00
---

## History

We'll talk about Gmail and the _Web 2.0_ revolution. This was the start of
AJAX.

AJAX is the term that's been used to describe the technology that came along
that has allowed web pages to do things on users behalf without actually
navigating to a new page.


### `$.ajax`

The progression of jQuery has left many options for creating AJAX requests and
how to handle the result. This progression should help show that.

The last version with `then` should be preferred as it's the closest to the A+
promises that will come to JavaScript in ES6.

{% highlight javascript %}
var url = 'https://raw.githubusercontent.com/wbyoung/jsi-gamelib/master/package.json';

// version 1.0
$.ajax({
  url: url,
  dataType: 'json',
  success: function(data, status, xhr) {
    console.log('success (options.url): ' + data.name);
  },
  error: function(xhr, status, error) {
    console.log('failed (options.url): ' + error);
  }
});

// version 1.5
$.ajax(url, {
  dataType: 'json',
  success: function(data, status, xhr) {
    console.log('success (options): ' + data.name);
  },
  error: function(xhr, status, error) {
    console.log('failed (options): ' + error);
  }
});

// version 1.5
$.ajax(url, { dataType: 'json' })
  .done(function(data, status, xhr) {
      console.log('success (deferred): ' + data.name);
  })
  .fail(function(xhr, status, error) {
      console.log('failed (deferred): ' + error);
  });

// version 1.8
$.ajax(url, { dataType: 'json' })
  .then(function(data, status, xhr) {
      console.log('success (promises): ' + data.name);
  }, function(xhr, status, error) {
      console.log('failed (promises): ' + error);
  });
{% endhighlight %}

## Flickr

* [Flickr API interestingness][flickr-api-interestingness]
* [Flickr API explorer][flickr-api-explorer]
* [Flickr image URL format][flickr-api-url]

Example request:

    http://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=yourapikey&format=json


[flickr-api-url]: https://www.flickr.com/services/api/misc.urls.html
[flickr-api-explorer]: https://www.flickr.com/services/api/explore/flickr.interestingness.getList
[flickr-api-interestingness]: https://www.flickr.com/services/api/flickr.interestingness.getList.html

## REST

We're not actually going to hit on REST during this class's challenges, but
hopefully one of the next classes will use a service with REST.
