---
layout: "../../layouts/Project.astro"
title: "Bytecrowds"
---

# Metadata

Periods:

- December 2021 - January 2022
- July 2022 - present

Role: Full-stack developer, founder

Tech stack: Next.js, Ably, QStash, Redis, Auth.js

Links:

- [GitHub](https://github.com/Bytecrowds/bytecrowds)
- [Hosted](https://www.bytecrowds.com)

# Project description

[Bytecrowds](https://www.bytecrowds.com) is an easy to use serverless code sharing platform with minimalist design and its own analytics engine.

# My role

I have developed and maintained most of the Bytecrowds code, consulting with industry experts on niche cases.

# Challenges

Before settling on serverless, Bytecrowds's API was written in Go and the WebSockets server was a Node.js template from [Yjs](https://yjs.dev). From there, I have refactored the app to use serverless functions (Vercel serverless functions and Cloudflare Workers) and, with help from the wonderful team at [Ably](https://ably.com), managed to pull of an entirely serverless, auto-scaling, real-time CRDT-based text-sharing provider.

I also believe in the idea of using a Redis-compatible database as the primary one, which brought [Upstash](https://upstash.com?utm_source=tudor-zgimbau.dev) in the stack to support both the bytecrowds database and the analytics engine.

One of the most difficult problem I faced was the possible duplication of multiple clients text when trying to either pull the bytecrowd from the database or do a check on front-end to see if it was already fetched from other peers. After trying multiple ideas, I managed to introduce the following logic:

- When a request is made, it first goes through a Next.js API route which fetches the number of connected users from the Ably REST API.
- If there's no connected peer, the text will be inserted into the CodeMirror editor from the database. Otherwise, it will be fetched when syncing with the other peer or peers.

# The value I provided

I believe that such projects, especially when able to be kept add-free, provide the community with reliable tooling for possible everyday use cases and also encourage the adoption of new software currents such as serverless.
