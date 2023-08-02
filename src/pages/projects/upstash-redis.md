---
layout: "../../layouts/Project.astro"
title: "upstash-redis"
---

# Metadata

Period: March 2023 - June 2023

Role: Software Engineer

Tech stack: Python, Redis

Links:

- [GitHub](https://github.com/upstash/redis-python)
- [Announcement post](https://upstash.com/blog/announcing-ratelimit-python)

# Project description

upstash-redis is a connectionless, HTTP-based Redis client for Python, designed to be used in serverless and serverful environments such as:

- AWS Lambda;
- Vercel Serverless;
- Google Cloud Functions;
- and other environments where HTTP is preferred over TCP.

# My role

I initially authored `upstash-redis` and was responsible for all of the early design decisions. I also advised on specific issues after handing off the project.

# Challenges

Building a Redis client came with various technical and non-technical challenges. The project was, in a way, a greenfield one. Almost all of the things, including the planning, the roadmap, and even some technical aspects changed while moving forward.

Some of the trouble-causing aspects were:

- the compatibility (the latest Python version supported, synchronous and asynchronous variants - and the platforms to support them );
- the namings and the signatures: we had to decide when to follow the Redis API and when to go with a DX(developer experience)-optimized version;
- the typings and the code structure: passing type checking in the context of `Union` returns, even with generics, was a hard thing to accomplish. This might depend on the structure and methodology used, but having to deal with lots of false positives was very problematic.

# The value I provided

Prototyping and launching the SDKs quickly came in response to the increasing usage and development of AI-based applications, helping the Python developers adopt Redis in synergy with their existing and future stack.

Whether we talk about the infrastructure or community libraries of choice for your users, providing specialized support for their language can drastically improve your image and adoption.
