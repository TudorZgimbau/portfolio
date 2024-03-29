---
layout: "../../layouts/Content.astro"
title: "Who am I?"
description: "The career of Tudor Zgîmbău, from joining the founding team of a startup at 16 to launching 3 products by the age of 19. About passions, skills, contests, and lessons learned, including teaching young developers and writing."
keywords: "career, story, professional experience, work, projects, contests"
---

_This blog post will be regularly updated to keep up with my career changes_
_- Tudor, September 20, 2023_

My name is Tudor Zgîmbău. I'm a developer and business enthusiast from Romania. I've been part of a startup founding team, launched my own product, and collaborated on technical and business aspects for other projects.

If you want the whole story, continue reading.

I'll focus on the big picture and provide links to every project's page if you want to learn more or have a better understanding of the context.

# Early days

I started coding in my first year of high school and almost instantly felt like I'd found my biggest passion. Learned the basics, started C++ in school, and found an amazing mentor (thank you, Cosmin) to get started in more practical coding: at that time, it was web development.

After trying both front-end and back-end development in JavaScript, I decided to focus on the server side and picked up Node and Express.js. Fast forward some months, I realized I wanted to be able to finish a project without having to partner with someone to do the front layer, so I decided it was time to learn React too.

Trying to learn by building projects that interested me and focusing on solo learning turned out to be both challenging and fulfilling: I was able to relatively quick "ingest" large amounts of data, but I also faced some unknowns that proved to be very hard, if not impossible, to understand for someone with my experience.

# The first breakthrough

Remember my initiative to learn React? It's what got me my first startup position.

I had the amazing opportunity to join the founding team of [**DataZard**](../projects/datazard) as a front-end developer, which turned into a full-stack role I tried my best to master during the year we worked on our product.

This was a **huge** chance to learn:

- at a basic level, how a company or team operates
- how a startup works
- the business side of a tech product
- domain knowledge regarding brand analytics

# A new project

The business side of DataZard didn't work, and we shut down our operations. It was a very sad period, but I had to move on.

So I started searching for new things to build. After quite some time, I decided to build a code-sharing platform and launched [**Bytecrowds**](../projects/bytecrowds) after months of research and hard work. I consider it my R&D signature and it is, by far, the hardest thing I've ever built.

I've also won a national web olympiad presenting the project and participating in an additional 24-hour hackathon, although my imposter syndrome still bugs me from time to time 😅.

# Developing new skills

## Teaching

Something I also wanted to do is mentor other young programmers trying to get started in this challenging yet exciting field. I believe in the importance of the personal aspect in the field of education: a mentor helped me kickstart my career, which made things far easier than simply reading tutorials and trying to figure things out myself.

While I had plans to do it in college, I heard about a group of passionate young guys who were trying to learn various crafts such as web and game development. A teacher suggested I should talk with them so I gave it a shot and tried to mentor them by finding a common interest, which, at that time, was React.

I tried preparing materials, guiding them live, leveling up my own skill set, and giving them general guidance for getting started in the field. Honestly, I'm still not sure I did a great job, but their feedback and my self-evaluation helped me improve my teaching & communication methods **a lot**.

## Building a brand

Along with 3 of my colleagues, I participated and won the Junior section of [**PoliHack**](https://polihack.osut.org) 2023. [**Project Cloud4**](../projects/projectcloud4) was created to reflect our team identity.

By winning the hackathon, our team qualified for a fast-track bootcamp, where product experts came to teach the art of prototyping and selling a business idea. Although it was the natural step for us after polishing our idea and technical plan, it was also quite different than my previous experience with building in tech: more about the user persona and less about the tech stack, more about the business and less about the technical implementation and, finally, more about pitching and marketing the idea properly than worrying about the lack of concrete plans.

Quite a perspective shift, isn't it? Well, it turned out to be a real-life lesson about getting ideas to market and understanding how the **user** fits in a multitude of technical details.

For me, it meant learning about how people with different backgrounds and passions (our team had designers, marketers, and front-end developers, among others) can team up to create wonderful **user experiences**. It wasn't easy, especially since "coordinating" different crafts was something we had to learn on the go, but it definitely was a valuable lesson that anyone planning to get involved in decision-making could benefit from.

Wanna see me wearing a suit? [**Here it is the LinkedIn post**](https://www.linkedin.com/feed/update/urn:li:activity:7051248063037718528/)

## Writing

A.T.R.I.S. also gave me the chance to start content writing with an emphasis on technical implementations. That's when I started my collaboration with [**Upstash**](https://upstash.com) and brought my first piece of content on their blog: [**Building a realtime emergency response system**](https://upstash.com/blog/realtime-emergency-response).

I enjoyed the combination of technical and creative work, which led me to also write about the underlying benefits the serverless pattern brings to Bytecrowds: [**Realtime Code Sharing with Upstash Redis**](https://upstash.com/blog/realtime-code-sharing)

# Back to coding

Time passed by and I was craving to work on a project again. While I was exploring ways to add value to the developer community, I stumbled upon an idea: What if the idea of serverless Redis (which I greatly benefited from when building Bytecrowds) could also benefit Python developers?

Not waiting for too long, I contacted someone at Upstash and talked about creating a Python SDK for their Redis-compatible offering. At that time, there were some notable challenges:

- I had some Python experience from DataZard (mainly back-end with Django and Flask), but it clearly wasn't enough to build such a thing from scratch;
- The demand wasn't clearly known beforehand: what I was personally counting on was the importance of the language in different areas (especially all the things related to data);
- The project was, in a way, a greenfield one. Almost all of the things, including the planning, the roadmap, and even some technical aspects changed while moving forward.

And, as discouraging as that might sound, we made it through 🥳. A lot of hard work and an increasing adoption of AI technologies encouraged the project to continue and, after some very tough months, here's the announcement post: [**Announcing Python Serverless Redis and Ratelimiting SDKs**](https://upstash.com/blog/announcing-ratelimit-python).

Notice the **Ratelimiting** stuff? Thinking about limiting the requests-per-second of your serverless functions or long-running servers? The famous [**upstash-ratelimit**](https://github.com/upstash/ratelimit) now also comes in a Python version 😎.

Authoring these two projects in the context of being in my last year of high school and preparing for the national exams wasn't easy. I made a few mistakes, refactored a faulty implementation, and overthink at times. What I find important, however, is the stuff I learned from this, including:

- How to approach developer tooling
- How to work on adaptive scheduling and make accurate estimates
- Python at a fairly advanced level and the current state of its ecosystem

I want to thank everyone involved in the project: without everyone's help, these releases wouldn't be the same or wouldn't have happened at all! At some point recently, I had to quit my hands-on involvement in the projects, mainly because of my exams. The reason you are able to use the SDKs today is the amazing guys who took over!

# Future plans

At the moment of writing this, I am not actively working on any project, besides doing some refactoring and improvements for Bytecrowds. I learned a lot in the last few years and decided to do an in-depth analysis of my career path, including the skills I should focus on and the way my experience fits in.

I've decided to pursue a degree in Management because I want to learn how to operate a business. My goal is to stay in the tech industry, but develop a career in business functions and use my technical knowledge to help growth and promote efficiency in the teams I'll work with.

Feel free to contact me at any time to have a chat. If you're interested in my job status, I am not planning to work full-time until I finish my degree, but would be open to some freelance or part-time projects.

# Bonus

Some potentially interesting facts about me:

- When I was younger, I took public speaking classes.
- I like working out and swimming.
- I wrote a literature review essay (in Romanian) and am interested in this area.
- I like spicy food, with some exceptions.
