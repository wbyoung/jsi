---
layout: notes
title: Persistence Notes
class: persistence
date: 2014-06-18 00:00:00
---

## Class Flow

- While there's a ton of information on SQL and we can really go deep into
this, the material is mostly written for them to be able to come back to. We
want to get through this part of the material relatively quickly and move on
to using PostgreSQL via Node.js.
- The idea is to walk through each SQL example having the students following
along.
- Have the students do at least the first two SQL challenges. The others should
be left as advanced exercises.
- Move into Bookshelf in the early afternoon.

## PostgreSQL

Do we need to?

{% highlight bash %}
initdb /usr/local/var/postgres -E utf8
{% endhighlight %}

Try to get the students to figure out how to use `psql` on their own:

{% highlight bash %}
psql # psql: FATAL:  database "wbyoung" does not exist
psql --help
psql -l
psql postgres
{% endhighlight %}

Once they have it going, they should be able to get help via `\h` and `\?`. We
want to work our way to `create database test;` and `\c test`.

## Solution to Relationships

{% highlight sql %}
create table people (id serial primary key, name varchar(255), gender varchar(255));
create table relations (person_id int references people(id),  parent_id int references people(id));
insert into people (id, name, gender) values (1, 'Tim', 'male'), (2, 'Lucy', 'female'), (3, 'Walter', 'male'), (4, 'Susan', 'female'), (5, 'Debroah', 'female'), (6, 'Thomas', 'male'), (7, 'William', 'male'), (8, 'Catherine', 'female'), (9, 'Doug', 'female'), (10, 'Jane', 'female'), (11, 'Sally', 'female'), (12, 'Barb', 'female'), (13, 'Larry', 'male'), (14, 'Katy', 'female'), (25, 'Matt', 'male'), (15, 'Rachel', 'female'), (16, 'Michelle', 'female'), (17, 'Ashley', 'female'), (18, 'Jessica', 'female'), (19, 'Peter', 'male'), (20, 'Joe', 'male'), (21, 'Andrew', 'male'), (22, 'Melissa', 'female'), (23, 'Jake', 'male'), (24, 'Tiffany', 'female');
insert into relations values (1, 3), (1, 4), (2, 3), (2, 4), (3, 7), (3, 8), (4, 5), (4, 6), (9, 7), (9, 8), (10, 7), (10, 8), (11, 7), (11, 8), (12, 5), (12, 6), (13, 5), (13, 6), (14, 12), (15, 12), (25, 12), (16, 13), (17, 13), (18, 9), (19, 9), (20, 10), (21, 10), (22, 11), (23, 11), (24, 11);

-- get all parents for a person with a given id
select parents.*
from people
left join relations on people.id = relations.person_id
left join people parents on parents.id = relations.parent_id
where people.id = 1;

-- get mother for a person with a given id
select parents.*
from people
left join relations on people.id = relations.person_id
left join people parents on parents.id = relations.parent_id
where people.id = 1 and parents.gender = 'female';

-- get all children for a person with a given id
select children.*
from people
left join relations children_relations on people.id = children_relations.parent_id
left join people children on children.id = children_relations.person_id
where people.id = 3;

-- get all siblings for a person with a given id
select distinct siblings.*
from people
left join relations on relations.person_id = people.id
left join relations sibling_relations on sibling_relations.parent_id = relations.parent_id
left join people siblings on siblings.id = sibling_relations.person_id
where people.id != siblings.id and people.id = 1;

-- get all grandparents for a person with a given id
select grandparents.*
from people
left join relations on relations.person_id = people.id
left join relations parent_relations on relations.parent_id = parent_relations.person_id
left join people grandparents on grandparents.id = parent_relations.parent_id
where people.id = 1;

-- get maternal grandmother for a person with a given id
select grandparents.*
from people
left join relations on relations.person_id = people.id
left join relations parent_relations on relations.parent_id = parent_relations.person_id
left join people parents on parents.id = parent_relations.person_id
left join people grandparents on grandparents.id = parent_relations.parent_id
where parents.gender = 'female' and grandparents.gender = 'female' and people.id = 1;


-- get all grandchildren for a person with a given id
select grandchildren.*
from people
left join relations children_relations on people.id = children_relations.parent_id
left join relations grandchildren_relations on children_relations.person_id = grandchildren_relations.parent_id
left join people grandchildren on grandchildren.id = grandchildren_relations.person_id
where people.id = 7;
{% endhighlight %}

## Bookshelf

Node.js won't exit when using Bookshelf.js unless you close all open database
connections:

{% highlight javascript %}
Country.forge({ name: 'Canada' }).save().then(function(country) {
  // do something with the new country
})
.done(function() {
  DB.knex.client.pool.destroy();
});
{% endhighlight %}


Empty collection containers can be created like so:

{% highlight javascript %}
var Countries = DB.Collection.extend({
  model: Country
});
var countries = new Countries(); // or Country.collection();

var Cities = DB.Collection.extend({
  model: City
});
var cities = new Cities(); // or City.collection();
{% endhighlight %}


## Testing: Spies & Mocks

These were discussed a bit yesterday.
