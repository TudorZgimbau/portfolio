---
layout: "../../layouts/Post.astro"
title: "Building developer tools"
description: "This blog post walks you through the challenges and solutions to building developer tools (DevTools) from prototyping to production, covering multiple areas of interest such as product, engineering, and project management. It represents a comprehensive guide to maximizing the developer experience quality of products for startups and not only."
keywords: "developer experience, devtools, prototyping, releasing, tech, business"
---

# DevTools 1o1

Developer experience is, nowadays, one of the top priorities for many startups and medium-sized companies. With developer-focused roles even bridging the gap between juniors and large corporations, DX can be considered one of the most profitable areas of a business.

In tech, almost all products have a **developer-focused** component, whether that is a public API, an SDK, or the product itself. Even if your company doesn't have any of these, you probably have at least one internal tool that qualifies.

# Prototyping and early decisions

One of the earliest things you should do while prototyping is ask questions. Ask yourself, ask your teammates, ask your clients: ask everyone who gives you and your team the necessary feedback to start building.

With DevTools in particular, some of these questions can be:

- What programming languages are our clients using? If that is already decided (say, you're building a Java SDK), what versions are they using?
- What interfaces do our users need? For example, :
  - Do they need both a synchronous and an asynchronous API?
  - Do they need specific platform support?
  - If optional because of the language design, is being type-safe a requirement?
- What compliance requirements do they have? Would they be able to use a hosted API?
- What other legal doubts or questions might come up in the process, such as code licensing and other copyright-related decisions.

Should you support an older version of the programming languages in case you'll have an enterprise client that uses it? Should you drop using the latest paradigms to make it easier to integrate with existing code? Should you care about compatibility at all if most of your users are?

These are all common concerns when building a new DevTool, even if your team is more of a one-man show and the only developer has to address them (and might do it without explicitly thinking about them).

So what should you do? The short is answer: **If required, talk to your users**.
Create polls, join community or individual calls and, if necessary, pay your users for their time. Try to maximize the time you're spending collecting early feedback because it will help you make informed decisions. Intentionally experimenting at times is ok, but be careful about how much black-boxing your decisions actually permit!

It's very easy to make assumptions and quick calls that can later harm your adoption, such as defaulting to a soon-to-be-deprecated version of your programming language of choice and later becoming one of the compatibility problems you're trying to help your clients with, in the first place. One key thing to remember, however, is your limitations: sometimes you might not be able to do anything about specific problems and it's not your fault. Focus on the things that you **can** influence and try to remember that every DevTool belongs to a community, whether that's internal or external, which makes it a good thing for you to try and help it.

# Experts

This is especially (or only) relevant to products that are programming language agnostic. Even though your user base might be 99% TypeScript users, you shouldn't forget about the 1% potential PHP customers.

Do a cost-benefit analysis of expanding your support to more languages/platforms/etc. and decide if any of the forecasted ROIs motivates you to expand in that area. Should you have at least one opportunity for growth, find people who are able to spread your message in that community. Show them how your product can positively impact the community and invest time and resources to train them to become the **experts** your users go to when trying to adopt or use your product.

# Do's and don'ts while building

## Testing

**Do**: Test things

Whether manually or, where appropriate, automatically, make sure to test every possible piece of your code. I've worked with time-sensitive code that also depended on an HTTP API and know how hard it is to produce viable tests in some particular cases, but I also know how incredibly helpful they are. Even if you can't hit 100% accuracy, double-think whether investing time in optimizing your QA process can improve the quality of your product and the time needed to progress later on.

**Don't**: Rush recklessly when writing tests

Unit-testing (or, in some particular cases, a combination of unit and integration testing) some functionality by using another and using random IDs in places that might impact the result are some of the mistakes a developer might step into while quickly trying to write tests.
Another one is ignoring the signatures of the functions they're testing: while it's true that the upward business logic might change for some particular cases (say, you're sending calls to an HTTP API), if your code's logic doesn't => you shouldn't test those because you would essentially verify a broader scope. Just imagine having 2 tests fail instead of 1 if a bug is there.

## Best practices

**Do**: Write scalable code

Unless you have the explicit intention to do a sketch, try to ensure you're using the best practices while writing your code. Getting stuff done is exciting and releasing earlier might help you get feedback faster, but you don't want to punish the developers who will have to work with your code later. Even more important, you don't want your users to have to wait too long for you to do cleanups in order to progress and deliver new features.

I need to make a very important point here though: don't be afraid to actually **write** code. It's ok to refactor at some point and you might not have all the details available in the first place, the point is to try to maintain a healthy balance between writing top-of-the-industry code and delivering results.

**Don't**: Neglect your own DX

Unnecessary classes, generics for everything, functionalities with common code split into different files or folders: sounds familiar? Writing "scalable" code also means taking the cognitive factor into account and ignoring your team's needs for the sake of "long-term improvements" that you'll never use can only cause more harm and slowness in the end.

If your team constantly refactors big portions of the projects, it might be time to evaluate whether unnecessary complexity or poor practices are continuously adopted in the development process.

Another misconception you might have is that the public API must be your primary focus: it doesn't. Your focus should be the quality of your product and, if you think that doing sketchy workarounds to achieve "2-line integration" is worth it, please consider long-term breaking changes if you haven't already.

## Scheduling, project management, and delivery

**Do**: Set healthy boundaries and principles

At any point in the development of a product, a new developer might need to be onboarded. Depending on how you treat a potentially new perspective, it might be the fresh rescue your team needed or the worst impediment in launching the tool, potentially delaying the release by months.

Almost anything that strictly comes down to personal taste, potentially including the number of features that need to be ready for a first release, should be voted and written down at the beginning of the project. No matter the level of seniority a new developer brings to the project, any opinionated change to the initial plan should be critically debated.

# Closing thoughts

Focus on the positives, and remember that, by improving the DX of your product, you can get:

- a better representation of your company in developer communities;
- insights and analytics about how your product is used;
- happy engineers, motivated business teams, etc. :).

```javascript
console.log("Good luck!");
```
