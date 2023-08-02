---
layout: "../../layouts/Project.astro"
title: "upstash-ratelimit"
---

# Metadata

Period: May 2023 - June 2023

Role: Software Engineer

Tech stack: Python, Redis, Lua

Links:

- [GitHub](https://github.com/upstash/ratelimit-python)
- [Announcement post](https://upstash.com/blog/announcing-ratelimit-python)

# Project description

upstash-ratelimit is a connectionless rate limiting library for Python, designed to be used in serverless and serverful environments such as:

- AWS Lambda;
- Vercel Serverless;
- Google Cloud Functions;
- and other environments where HTTP is preferred over TCP.

Featuring 3 different algorithms and many utility functions, the library aims to provide you a comprehensive, easy-to-integrate solution to rate-limit your servers and functions.

# My role

I was responsible for creating an MVP port of the famous [upstash-ratelimit](https://github.com/upstash/ratelimit) TypeScript library, also bringing:

- contributions to the Lua scripts the libraries depend on;
- a new code design that made it easier to add new utility functions;
- a feature called non-incremental metadata methods, based on [this issue](https://github.com/upstash/ratelimit/issues/17).

# Challenges

I believe the big picture is more important here: aside from the usual technicalities, an interesting area of development was understanding both codebases and language differences in order to cleverly reuse or change some parts. This way, we could benefit from each language's best practices while still having common areas and roughly the same common API parts.

# The value I provided

I quickly managed to start prototyping, understanding the existing codebase, and contributing to the common implementations, the code architecture, and the library's roadmap.
