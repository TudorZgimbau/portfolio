---
layout: "../../layouts/Post.astro"
title: "Building developer tools"
---

# DevTools 1o1

Developer experience is, nowadays, one of the top priorities for many startups and medium-sized companies. With developer-focused roles even bridging the gap between juniors and large corporations, DX can be considered one of the most profitable areas of a business.

In tech, almost all products have a **developer-focused** component, whether that is a public API, an SDK, or the product itself. Even if your company doesn't have any of these, you probably have at least one internal tool that qualifies.

# The basics

So how do you build developer tools?

**First of all**, you assemble a team the same way you'd do for any other type of product: you need at least a product manager, an engineering manager, a scrum master, etc.. The fact that you're writing developer-oriented code doesn't mean your engineers should take all the responsibility: after all, it's part of your business. And, if anyone is thinking about this, I do have first-hand experience with how things work for a startup and how "roles" are not always what they seem, but that's not an excuse to lower the quality bar for your products. You can't expect your customers to trust you in the future if your engineering was bad in the very beginning.

Say you have a team: what's next? Your people's expertise comes to play, but something you might want to remember is the area you're operating in. Developer products can pose different problems and have different needs, which forces you to deeply think about the specifics of your disciplines (business, engineering, marketing, etc.).

It's my opinion that most of these things should be treated as a whole (with team members still mastering their craft), so I'm going to address them this way: I hope that, whether you are a PO, an EM, an engineer or anything else, you can still take something from these notes.

# Prototyping and early decisions

One of the earliest things you should do while prototyping is ask questions. Ask yourself, ask your teammates, ask your clients: ask everyone that can give you and your team the necessary feedback to start building.

With DevTools in particular, some of these questions can be:

- What programming languages are our clients using? If that is already decided (say, you're building a Java SDK), what versions are they using?
- What interfaces do our users need? For example, :
  - Do they need both a synchronous and an asynchronous API?
  - Do they need specific platform support?
  - If optional because of the language design, is being type-safe a requirement?
- What compliance requirements do they have? Would they be able to use a hosted API?
- What other legal doubts or questions might come up in the process, such as code licensing and other copyright-related decision

And while there is no definitive answer to any of these, you should deeply assess each one of them and consult with **every** team before concluding.

Should we support an older version of the programming languages in case we'll have an enterprise client that uses it? Should we drop using the latest paradigms to make it easier to integrate with existing code? Should we care about compatibility at all if most of our users are early adopters?

These are all common concerns when building a new DevTool, even if your team is more of a one-man show and the only developer has to address them (and might do it without explicitly thinking about them).

So what should you do? The short is answer: **if required, talk to your users**.
Create polls, join community or individual calls and, if appropriate, pay your users for their time. Try to maximize the time you're spending collecting early feedback because it will help you make _informed_ decisions. Intentionally experimenting at times is ok, but be careful about how much black-boxing your decisions actually require!

It's very easy to make assumptions and quick calls that can later harm your adoption, such as defaulting to a soon-to-be-deprecated version of your programming language of choice and later becoming one of the compatibility problems you're trying to help your clients with, in the first place. One key thing to remember, however, is your limitations: sometimes you might not be able to do anything about specific problems and it's not your fault. Focus on the things that you **can** influence and try to remember that every DevTool belongs to a community, whether that's internal or external, which makes it a good thing for you to try and help it.

# Do's and don'ts while building

## Testing

**Do**: Test things

Whether manually or, where appropriate, automatically, make sure to test every possible piece of your code. I've worked with time-sensitive code that also depended on an HTTP API and know how hard it is to produce viable tests in some particular cases, but I also know how incredibly helpful they are. Even if you can't hit 100% accuracy, double-think whether investing time in optimizing your QA process can improve the quality of your product and the time needed to progress later on.

**Don't**: Rush recklessly when writing tests

Unit-testing (or, in some particular cases, a combination of unit and integration testing) some functionality by using another, using random IDs in places they might impact the result, and forgetting to test failures are some of the mistakes a developer might step into while quickly trying to write tests.
Another one is ignoring the signatures of the functions they're testing: while it's true that the upward business logic might change for some particular cases (say, you're sending calls to an HTTP API for a serverless database) if your code's logic doesn't => you shouldn't test those because you would essentially verify a broader scope. Just imagine having 2 tests fail instead of 1 if a bug is there.

Remember why you're testing in the first place: to help you build faster and ensure your users are getting a quality product. Breaking unit-atomicity and ignoring the separation of principles in places you have a choice can only stay in your way of achieving those goals.

## Best practices

**Do**: Write scalable code

Unless you have the explicit intention to do a sketch, try to ensure you're using the best practices while writing your code. Getting stuff done is exciting and releasing earlier might help you get feedback faster, but you don't want to punish the developers who will have to work with your code later. Even more important, you don't want your users to have to wait too long for you to do cleanups in order to progress and deliver new features.

I need to make a very important point here though: don't be afraid to actually **write** code. It's ok to refactor at some point and you might not have all the details available in the first place, the point is to try to maintain a healthy balance between writing top-of-the-industry code and delivering results.

**Don't**: Neglect your own DX

Unnecessary classes, generics for everything, functionalities with common code split into different files or folders: sounds familiar? Writing "scalable" code also means taking the cognitive factor into account and ignoring your team's needs for the sake of "long-term improvements" that you'll never use can only cause more harm and slowness in the end.

If your team constantly refactors big portions of the projects, it might be time to evaluate whether unnecessary complexity or poor practices are continuously adopted in the development process.

Another misconception you might have is that the public API must be your primary focus: it doesn't. Your focus should be the quality of your product and, if you think that doing sketchy workarounds to achieve "2-line integration" is worth it, you might want to consider long-term breaking changes.

## Scheduling, project management, and delivery

**Do**: Set healthy boundaries and principles

At any point in the development of a product, a new developer might need to be onboarded. Depending on how you treat a potentially new perspective, it might be the fresh rescue your team needed or the worst impediment in launching the tool, potentially delaying the release by months.

Almost anything that strictly comes down to personal taste, potentially including the number of features that need to be ready for a first release, should be voted and written down at the beginning of the project. No matter the level of seniority a new developer brings to the project, any opinionated change to the initial plan should be critically debated.

**Don't**: Sacrifice quality for the sake of quantity

While this is general advice, I feel the need to highlight the fact that you should never overwork your employees or under-fund your DevTools, even if they're simply a "nice addition" to your core product: "nice addition" assumes they're working.

# Long-term objectives

Say you've had your first release and things are going great. First of all, congrats 🥳!

The above advice stands: you should talk to your users, you should keep up with your target community's preferences and you shouldn't take anything for granted. What else?

## Never stop thinking about relevance

Your product might be the hottest topic on Hacker News today, but will things be the same after a month? A year? Will your tool still even exist in 10 years?

All these questions can have an impact on the number of resources you allocate to your project. Don't rush to conclusions based on temporary trends, whether positive or negative and continuously re-evaluate its relevance in the market. You don't want to lie to yourself, your team, or your users: if a tool needs to be deprecated for any reason, do it before more users are adopting it. Also, make sure to stay updated regarding your software supply chain's security: a security incident is one of the last things you or your users want to experience!

## Search for experts and bring them to your team

This is especially (or only) relevant to products that are programming language agnostic. Even though your user base might be 99% TypeScript users, you shouldn't forget about the 1% potentially PHP customers.

Find people who are able to spread your message in their communities. Show them how your product can positively impact the community and invest time and resources to train them into becoming the **experts** your users go to when trying to adopt or use your product.

## Conflicts

Don't ignore early warnings and don't respond to messages only when they become a public image issue! Also, even if you have good intentions, think carefully about what matters you chose to resolve privately and publicly: what you are trying to say and what gets interpreted might be two separate things.

# Closing thoughts

Building DevTools is hard, especially if your top priority is ROI. And, at the same time, it's not an excuse to lower the quality standards for your product.

Focus on the positives, and remember that, by improving the DX of your product, you can get:

- a better representation of your company in developer communities;
- free, valuable feedback for both your core product (if applicable) and your developer-oriented tooling;
- insights and analytics about how your product is used;
- happy engineers, motivated business teams, etc. :).

It's not all black-and-white so make sure to maintain healthy boundaries and balance every single decision your teams are making.

```javascript
console.log("Good luck!");
```
