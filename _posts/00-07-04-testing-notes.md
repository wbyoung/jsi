---
layout: notes
title: Ember Testing Notes
class: testing
date: 2014-06-26 00:00:00
---

Originally, I thought that this day would focus mostly on testing the front-end
and the back-end together. I think this is a bit ambitious, but some groups may
be ahead. If so, they should try to learn about this.


## Sharing Fixtures for Front-End and Back-End Tests

A good way to do this is to actually share request/response data via fixtures.
Server tests expect that they can process requests exactly as they come from
the client. And they can test that they send responses that match exactly with
what the client will receive. The client can do the same and test that all
requests that are sent to the server exactly match the expected request. And
those tests can load responses from the fixture data as well.

This allows testing each separately, but ensuring that the data format matches
exactly between the two. It also (in part) avoids the need to have end-to-end
or integration tests.
