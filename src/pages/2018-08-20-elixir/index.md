---
title: How Learning Elixir Made Me a Better Programmer
date: '2018-08-20T22:12:03.284Z'
path: '/elixir-better-programmer/'
---

insert cover photo of the elixir programming lang

The benefits of learning a programming language which has been developed recently is that it's built to correct the mistakes others have made in the past.

Last year, a peer invited me to a bookclub he was starting, "lets learn this new language". "Sure thing!", we would take a couple of hours every month to go over a chapter in the book, ["Elixir in Action"](https://www.amazon.ca/gp/product/161729201X/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=161729201X&linkCode=as2&tag=coffeedrive09-20&linkId=97d40dff77b7869475d6ee283c6501d2). This would be our guide to learning this new programing language. It was intimediating to say yes to this when everyone in the group was much more senior than me but I said yes anyways. What's the worst that could happen? Out of that came lots of great discussions and insight which were apart of the group that I never really got exposed to before. I am appreciating my former self for saying yes as Elixir brought a lot of new concepts to my thinking and design patterns I haven't really thought about before. It helped me through Flipp's adoption of Event Driven Systems (Kafka) by introducing me to good practices when managing state between processes. Keeping processes small, pure and functional is just good-sound engineering practice and Elixir is built that standard by default. I didn't need anything to build immediately or an assignment to finish, I learned for the joy of learning and got a lot out of it. I was lucky as I didn't know much about Elixir going into it. All I knew about it was that it's the new hotness. Do I believe this will overtake other web programming frameworks? (Think Rails, Django). For a lot of use cases yes, but slowly, it will take years for this popularity to grow but I do believe in it whole-heartadly. As we scale our machines to more and more users, us programmers, reach for other types of languages and tech to support this. Elixir covers you in so many factors it would be ill-advised to use something else in most cases.

After getting comfortable with a couple programming technologies, developers usually stop there; Your job and the systems you maintain may all be in one or two languages, Ruby or Javascript, for example. You start using similar patterns over and over again and solve the same problems over and over again. Learning a new programming language can introduce you to techniques you never would have came across using the other technologies. Elixir for example was built by developers who saw the productivity of the Ruby syntax, the maintainability of functional programming and the scalability of Erlang. Learning Elixir for me, improved my skills in languages I've already learned before I even wrote a line of Elixir code.

After learning programming languages for years (school, contract-work, co-ops, etc), it's refreshing to step away from a mindset focused on speed and agility. No timelines telling you what velocity you have to learn at and no peers depending on you to finish what your working on. I find that in this setting, its easier to digest larger cognitive loadds, and as Elixir was so different in many ways, I can't imagine learning it any other way.

Beam and Erlang

"But it hasn't been true and tested"

Its built on an existing VM which has been around for more that twenty years, invented and uses heavily by telecoms even today. Elixir is simply syntax on top to be able to use this beautiful VM.

"But the syntax is cryptic and hard to learn"

Nope, a lot of it is similar to Ruby so learning syntax is easy.

"But I don't like functional programming, it's hard to read and parse"

So you like when people inherit from a class which inherits from a class which inherits from a class which inherits from a class? You must also enjoy your unit test suite which takes 3 seconds per test to just set up objects into a correct state for assertion.

Pure, functional programming imo (important to see, only my opinion) is worth the investment cognitively. Elixir is built to be used functionally and from this code snippet you can see the power.

"We are microservices oriented at my company, Elixir seems heavy"

This is where I don't have an answer yet and through my learnings and eventual development of the language I hope to have more insight on this later in a post. Elixir (and the BEAM) is meant to be a large monotholic system which is totally against the micro architecture of recent years. Erlang scales horizontally extremely well so it may be a case of code bloat or organization that kills you in super-duper large projects in Elixir.

"I don't want to learn this and my team is gonna have a hard time learning this"

Once you start building things that have to scale or need to handle millions of requests, your out-of-office tickets increase. The reason for this is usually you can't predict traffic at that scale, push notifications go out for a new feature and everyone starts hitting your API. How do you handle this currently, with something like node or ruby? You just increase your box numbers and then decrease them after the load is done. This gets expensive and developers should not just be throwing money at something to solve a problem. This is sort of backwards in a lot of ways, comp sci is not a practice which puts money into its variable sheet. The solution? Erlang VM processes are a fixed size, this is mega. This essentially solves this problem to a degree. Knowing how much memory processes are gives you god-like abilities, the VM can tell the box how much potential memory it has, which results in a graph like this:

Compared to something you may have in node like this:

You will never reach more than the allotted amount of memory on a box. No unexpected memory loads at 1AM waking up developers.

"Okay, this is dope, how are errors handled?"

Errors are a first class citizen in Elixir. Processes are isolated so when an error is thrown, the entire app process doesn't have to restart, just the isolated process. When errors do happen, they are easier to debug as the process state should be easily traceable and the backtrace looks like this:

Compared to this:

- how does this article solve a problem?

- how does this article solve actionable?

- how does this article sharable?

- where will this article be shared after its finished?

- reddit, medum, what publications or publishers can I submit this to?

references:

- please consider sharing this with a developer you know :) sharing is caring

reach out to me via Twitter or Email for any feedback, good or bad

- sharing links
