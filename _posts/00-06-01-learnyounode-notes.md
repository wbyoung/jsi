---
layout: notes
title: Node.js Notes
class: learnyounode
date: 2014-06-16 00:00:00
---

## Class Flow


- Do the `learnyounode` tutorial, get as far as possible before lunch. The
  following exercises should be repeats `hello world`, `baby steps`,
  `my first i/o!`, `my first async i/o!`, `filtered ls`, and `make it modular`.
  It'll be best for them to pick 2 or three of those, then skip over to the
  HTTP stuff.
  - `http client` should be relatively straight forward.
  - `http collect` introduces event emitters.
  - `juggling async` will probably be difficult.
  - `time server` starts to introduce network servers.
  - `http file server` will be something we build off of.
  - `http uppercaserer` and `http json api server` are good network exercises
    as well.

- After lunch, start building up a server. The students can (and should) try to
  do this on their own, but it will likely be something where we do a little
  together, then they do a little repeating on their own. The server will
  handle the following things that `express` does well:
  - Routing, GET, POST, DELETE, PUT (and parameters in routes, `req.params`)
  - Return proper content type: HTML, JSON
  - Parsing GET queries (`req.query`),  & POST body (`req.body`)
  - Simple lookup of all input (`req.param()`)
  - Redirects
