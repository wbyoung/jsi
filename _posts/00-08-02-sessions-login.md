---
layout: post
title: Sessions
class: sessions
date: 2014-07-01 00:00:00
---

Allowing uses to sign up and log into your website is a complicated process.
It's gotten more complicated recently for developers as many sites are allowing
people to log in using Google, Twitter, Facebook, etc.

## Problems

HTTP wasn't designed with authentication in mind. It was designed to allow
hundreds of thousands of requests to be made to a server without overloading
the server.

What's that mean?

It means they designed it to be [_stateless_][stateless]. By state, we mean
that each request is independent of another. If I make a request to a web
server, the web server will handle the HTTP request and give me a response. It
will immediately forget that ever happened. When I make another request, it
will handle that as well, but won't have any knowledge of prior requests.

Obviously, this is only a limitation of HTTP &mdash; We're able to work around
this (otherwise you wouldn't be able to log into any sites).


## Solutions

There are a few things we can use to our advantage to remember users as they
continue to make requests to our web applications. We'll be solving these
problems at the application level, above HTTP. We'll use features of HTTP to
achieve this, but it wouldn't be possible without the application handling some
of the work.

### Cookies

Cookie explanation coming soon&hellip;

<aside>
**HTTP Only Cookies**

HTTP only cookies cannot be read by JavaScript. They're transmitted to the,
browser, the browser stores them, and will send them back in future requests to
the server, but the browser will not make them available to your client side
JavaScript.

This helps prevent cookie theft and session hijacking via cross site scripting
attacks.

Most browsers support this feature, but older browsers did not have it. On
these older browsers, HTTP only cookies will still be accessible to JavaScript.

**Secure Cookies**

It's possible for servers to send _secure_ cookies. Most of the time, that
doesn't mean that they can't be read by users on the client end. Even if you
look at them and you don't think they seem readable, they could simply be
encoded (base64 is a common choice here).

Never store sensitive data in cookies. If you need to store sensitive data
that and associate it with someone using your site, use database backed
sessions and store the data on the server.
</aside>


### HTTP Headers

HTTP header explanation coming soon&hellip;


## Security

Security is a serious concern when dealing with authentication. As a web
developer, you should arm yourself with as much security knowledge as you can.
We'll get to more later, but for now we'll hit some basics.

### SSL/TLS

Requests sent via HTTP are not secure. It means that everything is plain text.
Try this:

{% highlight bash %}
$ nc -l 9000
{% endhighlight %}

Now login here (don't use a real password):

<form class="auth" action="http://localhost:9000" method="post">
<input name="username" placeholder="Username">
<input name="password" placeholder="Password">
<button type="submit">Login</button>
</form>

Go back to your terminal and see what shows up. See what happens when
you <a id="secure-form" href="#">make it secure</a>.

<script>
$(function() {
  $('a#secure-form').click(function() {
    $('form.auth').attr('action', 'https://localhost:9000');
    $('form.auth button').text('Secure Login');
    $(this).remove();
    return false;
  });
});
</script>

Attackers can eavesdrop on HTTP traffic that isn't secured by TLS/SSL. We can't
transmit passwords, authentication tokens, credit card, bank account, or other
confidential information over a connection that isn't secure.


<aside>
We'll touch on security a little more in the future, but be aware that you
won't get everything right if you try to implement login on your own. You just
don't know enough. And that won't change. This isn't something you want to take
a risk on doing on your own. You want to trust the modules that others have
built, been peer reviewed, and been vetted over time.
</aside>


## Middleware

Much of what we've discussed is very easy to do with Express. Express is built
to easily include _middleware_, pre-packaged modules that can run before (or
after) your application code and reduce the work you need to do. Here are some
useful middleware modules:

- [`cookie-parser`][middleware-cookie-parser] for basic cookie handling
- [`express-session`][middleware-session] for sessions persisted server side
- [`cookie-session`][middleware-cookie-session] for sessions persisted in cookies


## Authentication Example

The [`node-basic-auth-examples`][node-basic-auth-examples] project
[demonstrates][node-basic-auth-heroku] cookie based authentication as well as
token based authentication via HTTP headers.

### Challenge

**Advanced:** Update the authentication example to persist users and sessions.

[stateless]: http://en.wikipedia.org/wiki/Stateless_protocol
[node-basic-auth-examples]: https://github.com/wbyoung/node-basic-auth-examples
[node-basic-auth-heroku]: http://node-basic-auth-examples.herokuapp.com
[middleware-cookie-parser]: https://github.com/expressjs/cookie-parser
[middleware-session]: https://github.com/expressjs/session
[middleware-cookie-session]: https://github.com/expressjs/cookie-session
