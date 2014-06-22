---
layout: notes
title: Heroku Notes
class: heroku
date: 2014-06-20 00:00:00
---

TODO: Add information about `newrelic-node`.

To set a production environment on Heroku:

    heroku config:set NODE_ENV='production'

To migrate on Heroku:

    heroku run ./node_modules/.bin/knex migrate:latest

A Knex configuration:

{% highlight javascript %}
// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection: process.env.DATABASE_URL || {
      host     : process.env.APP_DB_HOST     || '127.0.0.1',
      user     : process.env.APP_DB_USER     || '',
      password : process.env.APP_DB_PASSWORD || '',
      database : process.env.APP_DB_NAME     || 'jsi-heroku-prodtest'
    }
  },

  staging: {
    client: 'postgres',
    connection: process.env.DATABASE_URL || {
      host     : process.env.APP_DB_HOST     || '127.0.0.1',
      user     : process.env.APP_DB_USER     || '',
      password : process.env.APP_DB_PASSWORD || '',
      database : process.env.APP_DB_NAME     || 'jsi-heroku-prodtest'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL || {
      host     : process.env.APP_DB_HOST     || '127.0.0.1',
      user     : process.env.APP_DB_USER     || '',
      password : process.env.APP_DB_PASSWORD || '',
      database : process.env.APP_DB_NAME     || 'jsi-heroku-prodtest'
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
{% endhighlight %}
