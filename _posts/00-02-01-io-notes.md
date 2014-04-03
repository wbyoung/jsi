---
layout: notes
title: Callbacks &amp; I/O Notes
date: 2014-05-19 00:00:00
---

## Class Flow

- Start right into callbacks
- Implement the functions for baking a cake while the students help gude the
  implementations (see below for full solutions).
- Explain the two bad options for cake baking.
- Have students do some of the challenges. There are solutions below to each
  of the challenges.  
  Present the JavaScript that's wrong below for the `setReminder` challenge.
  Introduce Lo-Dash through this example, but also ask students to share what's
  wrong with the code.


## Callbacks

### Baking A Cake

This example illustrates that we have two bad options.

1. We set the timer then take the cake out immediately. We never actually
   notice when the timer goes off.
1. We can do nothing while the cake bakes. We 'sleep' during that time and
   aren't productive.

The take one gets to the point of illustrating the two bad options. Take two
tries to clearly illustrate callbacks by making separate functions instead of
anonymous functions as arguments, but you should move the code around to show
what the anonymous function version looks like. The slides will show that.


#### Code Take 1

{% highlight javascript %}
var sleep = require('sleep').sleep;

var preheatOven = function(temp) {
  console.log('Preheating the oven to %s.', temp);
};

var mix = function(ingredients) {
  var formatted = ingredients;
  if (ingredients.length > 1) {
    formatted = ingredients.slice(0); // copy
    formatted[ingredients.length - 1] =
      'and ' + formatted[ingredients.length - 1];
  }
  console.log('Mixing %s.', formatted.join(', '));
  return { mixture: ingredients };
};

var pour = function(cookware, liquid) {
  console.log('Pouring %j into %j.', liquid, cookware);
  return { cookware: cookware, containing: liquid };
};

var ovenAddItem = function(item) {
  console.log('Putting %j in the oven.', item);
};

var ovenSetTimer = function(duration) {
  console.log('Setting oven timer to %s', duration);
  console.log('We will wait %ss to simulate %s.', parseInt(duration), duration);
  sleep(parseInt(duration));
  console.log('The timer is going off!');
};

var ovenRemoveItem = function(item) {
  console.log('Removing %j from the oven.', item);
};

var decorate = function(item, decoration) {
  console.log('Decorating %j with %j', item, decoration);
};

// prep work
preheatOven('350deg');

// make the cake batter
var batter = mix(['flour', 'eggs', 'butter']);
var pan = {
  type: 'pan',
  diameter: '9in',
  shape: 'round'
};
var cake = pour(pan, batter);

// bake the cake
ovenAddItem(cake);
ovenSetTimer('30min');
ovenRemoveItem(cake);

// frost the cake
var frosting = mix(['sugar', 'butter', 'cocoa powder']);
decorate(cake, frosting);
{% endhighlight %}

#### Code Take 2

{% highlight javascript %}
var preheatOven = function(temp) {
  console.log('Preheating the oven to %s.', temp);
};

var mix = function(ingredients) {
  var formatted;
  if (ingredients.length <= 1) { formatted = ingredients[0]; }
  else {
    formatted = ingredients.slice(0, ingredients.length - 1).join(', ') + ' and ' + ingredients[ingredients.length - 1];
  }
  console.log('Mixing %s.', formatted);
  return { mixture: ingredients };
};

var pour = function(cookware, liquid) {
  console.log('Pouring %j into %j.', liquid, cookware);
  return { cookware: cookware, containing: liquid };
};

var ovenAddItem = function(item) {
  console.log('Putting %j in the oven.', item);
};

var ovenSetTimer = function(duration, callback) {
  console.log('Setting oven timer to %s', duration);
  console.log('We will wait %ss to simulate %s.', parseInt(duration), duration);
  setTimeout(function() {
    console.log('The timer is going off!');
    callback();
  }, parseInt(duration) * 1000);
};

var ovenRemoveItem = function(item) {
  console.log('Removing %j from the oven.', item);
};

var decorate = function(item, decoration) {
  console.log('Decorating %j with %j', item, decoration);
};

// prep work
preheatOven('350deg');

// make the cake batter
var batter = mix(['flour', 'eggs', 'butter']);
var pan = {
  type: 'pan',
  diameter: '9in',
  shape: 'round'
};
var cake = pour(pan, batter);
var frosting = null;

var whenTimerGoesOff = function() {
  ovenRemoveItem(cake);
  decorate(cake, frosting);
};

var beforeTimerGoesOff = function() {
  // frost the cake
  frosting =  mix(['sugar', 'butter', 'cocoa powder']);
};

// bake the cake
ovenAddItem(cake);
ovenSetTimer('30min', whenTimerGoesOff);
beforeTimerGoesOff();
{% endhighlight %}

#### Test Driven Code

This also includes a test for making the callback optional.

{% highlight javascript %}
describe('ovenSetTimer()', function() {
  it('calls the callback', function(done) {
    ovenSetTimer('0s', done);
  });
  it('works with no callback', function(done) {
    ovenSetTimer('0s');
    setTimeout(done, 0);
  });
});
{% endhighlight %}


### Challenges

{% highlight javascript %}
var setReminder = function(date, callback) {
  setTimeout(callback, date.getTime() - Date.now());
};
{% endhighlight %}

{% highlight javascript %}
var start = Date.now();
_.each(_.range(10), function(i) {
  setReminder(new Date(start + i * 1000), function() {
    console.log(i + 1);
  });
});
{% endhighlight %}

{% highlight javascript %}
_.each(_.range(10), function(i) {
  setTimeout(function() {
    console.log(i + 1);
  }, i * 1000);
});
{% endhighlight %}

Also, for students who tried the stopwatch with `setReminder`, ask them to
identify what's wrong with this code:

{% highlight javascript %}
_.each(_.range(2000), function(i) {
  setReminder(new Date(Date.now() + i * 1000), function() {
    console.log(i + 1);
  });
});
{% endhighlight %}

The problem is that numbers later in the list will not be scheduled relative to
the first number. They're scheduled relative to the time that the code executes
that iteration of the loop. It took my computer scheduling about 200,000 items
before this caused a skew of roughly 1 second.

Natural language processing:

{% highlight javascript %}
var chrono = require('chrono-node');
var setReminder = function(date, callback) {
  if (!(date instanceof Date)) {
    date = chrono.parseDate(date);
  }
  setTimeout(callback, date.getTime() - Date.now());
};
setReminder('3:10pm', function() { console.log('done!'); });
{% endhighlight %}
