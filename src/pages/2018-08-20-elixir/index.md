---
title: How Learning Elixir Made Me a Better Programmer 🥃
date: '2018-08-20T22:12:03.284Z'
path: '/elixir-better-programmer/'
logoUrl: 'hi'
---

<table class="image">
   <caption align="bottom"></caption>
   <tr><td><img src="./cover_2.jpeg" alt="cover"/></td></tr>
</table>

After getting comfortable with a couple programming technologies, developers usually stop there; your job and the systems you maintain may all be in one or two languages. You start using similar patterns again and again to solve the same problems. Elixir, a relatively new programming language, opened my eyes to new techniques which broke this stagnant thinking. Learning a new programming language can introduce you to techniques you never would've come across using your existing technologies. It expands your toolbox when it comes to designing new systems. Imagine a carpenter being stuck to a certain set of tools for years, they would be limited in what they could build. After learning programming languages for years (school, contract-work, co-ops, etc), it was refreshing to step away from a mindset focused on getting it done as fast as I could. No timelines telling you what velocity to learn at and no peers depending on you to finish what you were working on. I find that in this relaxed setting, it's easier to digest larger cognitive loads.

### Beautiful Design

<table class="image">
   <caption align="bottom">E.g. of pattern matching. This and many other features of the language make it expressive and easy to read.</caption>
   <tr><td><img src="./pattern.png" alt="pattern-matching-example"/></td></tr>
</table>

### Quick Facts for the T.L.D.R. in you

- Elixir is simply syntax on top of the battle-tested VM and language, Erlang

- The syntax is similar to Ruby so learning the syntax is easy and quick

- Did I mention it's FUNCTIONAL! (Pure, functional programming IMO is worth the investment cognitively, <a href="https://medium.com/making-internets/functional-programming-elixir-pt-1-the-basics-bd3ce8d68f1b" target="_blank" >hit this link</a> for how Elixir utilizes it)

One of the benefits of learning a recently-created programming language is that it's built on top of existing best practices. This happens when the creators spend time thinking about what problems other developers face regularly. "State management is hard", "it's hard to have zero time deployments of new code", "it's hard to maintain my systems", something every developer thinks. Elixir wants to make these problems less hairy and does so using functional methodologies wrapped around a VM which puts distributed/concurrent programming as a first-class citizen. It does this through implementing the <a href="https://en.wikipedia.org/wiki/Open_Telecom_Platform" target="_blank" >OTP</a> protocol. Elixir for example was built by developers who saw the productivity of the Ruby syntax, the maintainability of functional programming and the scalability of Erlang. These features of the language make it a compelling showcase of what a language recently built can be, as showcased in the pattern matching example above.

<table class="image">
   <caption align="bottom">OTP in the anime-flesh</caption>
   <tr><td><img src="./telephone_pole.jpg" alt="pattern-matching-example"/></td></tr>
</table>

The critic inside you will say the potential downfalls of using such a new language is that it isn't battle-tested. Usually this is a valid criticism, such is not the case for Elixir. The VM Elixir it's built on top of is hella old. The initial open-source release of Erlang was in 1998, and Ericsson was using it in-house for a long time before that. Used by telecom networks, these were critical services which could not afford to have downtime. For example, that's how the very cool <a href="https://github.com/edeliver/edeliver" target="_blank" >hot-code-release</a> feature came to be which enabled developers to release new Erlang/Elixir code without taking down servers.

### My Experience

<table class="image">
   <caption align="bottom" style="font-style:italic;">A candid photo of me reading Elixir in Action</caption>
   <tr><td><img src="./bill_reading.jpg" alt="pattern-matching-example"/></td></tr>
</table>

Last year, a coworker invited me to join his book club. "Lets learn this new language." I had heard it was the new hotness so I said, "sure!". We would take a couple of hours every month to go over a chapter in the book, <a href="https://www.amazon.ca/gp/product/161729201X/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=161729201X&linkCode=as2&tag=coffeedrive09-20&linkId=97d40dff77b7869475d6ee283c6501d2" target="_blank" style="font-style:italic;">Elixir in Action</a>. Initially, it was intimidating to join as I was vastly junior compared to the other members of the group but I gave it a shot. What followed was lots of great discussions and insight into topics I haven't dove into before. I am appreciating my former self for agreeing to join as not only did I learn a lot, I connected with coworkers in the company I would have never connected with otherwise. It helped me through Flipp's adoption of Event Driven Systems (think Kafka) by exposing me to good practices when managing state between processes. Keeping processes small, pure and functional is good-sound engineering practice and are the pillars of how Elixir works. I didn't need anything to build immediately or an assignment to finish, I learned for the joy of learning and got a lot out of it.

### Common comments and questions

<table class="image">
   <tr><td><img src="./fork_road.jpg" alt="pattern-matching-example"/></td></tr>
</table>

> We are heading towards the micro-services mindset at my company, does Elixir fit into this?

This is where I don't have an answer yet and through my learnings and eventual development of the language I hope to have gain more insight into this. Some of the features in Elixir are best used when in a large system. Splitting processes across different nodes, which can be spread among different machines, is one way Erlang scales horizontally extremely well. This doesn't necessarily go against the micro-service paradigm but at that point, you are doing different things on different machines from the same codebase.

> My team is not going to be happy that after learning 3 Javascript frameworks in the past week, they have to learn this.

Once you start building things that have to scale or need to handle millions of requests, your on-call tickets increase. The reason for this is usually you can't predict traffic at that scale, push notifications go out for a new feature and everyone starts hitting your API. How do you handle this currently, with something like Node or Ruby? You just increase your box numbers and then decrease them after the load is done. This gets expensive and developers should not just be throwing money at something to solve a problem. Erlang VM processes (different than the traditional process) are a fixed size, this is **mega**. To a degree, this essentially solves this problem. Knowing how much memory processes are, gives you god-like abilities. The VM can tell the server precisely how much memory it may potentially use. Instead of falling over and the box restarting, you could respond to the client with HTTP Status Code 429 for example. No more unexpected memory loads at 1AM waking up developers!

> Okay, this is dope, how are errors handled?

Errors are a first class citizen in Elixir. Processes are small and isolated so when an error is thrown, the entire app process doesn't have to dump it's stack, just the isolated process. When errors do happen, they are easier to debug as the process code is small (by Elixir convention). Processes are so small that every process gets a monitor (another OTP blessing), which can run some code when a process dies. An example monitor could restart the process for example so that it could accept more messages.

<table class="image" >
   <caption align="bottom">Everyone gets a monitor</caption>
   <tr><td style="text-align:center;"><img style="margin-bottom:0px;" src="./everyone_gets.gif" alt="pattern-matching-example"/></td></tr>
</table>

Also, it's very neat that there is a proposal for pattern matching in Javascipt. Obvious proof that everyone is drinking the ... wait for it ... Elixir.

<table class="image">
   <caption align="bottom">🚒</caption>
   <tr><td><img src="./javascript_pattern_matching.png" alt="pattern-matching-example"/></td></tr>
</table>

#### The road forward

I hope this introduction to some of the powers of Elixir encourages you to learn more. I just scratched the service of what is possible with the BEAM VM. I leave you with this graph showing Elixir's popularity on Stackoverflow compared to other popular languages:

<table class="image">
   <caption align="bottom">Perspective</caption>
   <tr><td><img src="./trends.png" alt="pattern-matching-example"/></td></tr>
</table>

The trend is upwards but it still has a long way to go for becoming somewhat mainstream.

Moving forward, I plan is just to write more and more Elixir code and get more comfortable with it. HackerRank has Elixir as an environment so it has been a great resource to practice the syntax. One of the next things I want to do is start creating something in [Phoenix](https://github.com/phoenixframework/phoenix).

Another resource I used in my learning journey was the <a href="https://www.meetup.com/TorontoElixir/" target="_blank">Elixir Toronto Meetup Group on Meetup</a>.

## Reading resources

The book we read during the book club was called Elixir In Action. A very good book which goes through the entire language and its features, in detail. The beginning is quite slow but as you start to wrap your brain around syntax, it soon becomes super interesting.

<a target="_blank" href="https://amzn.to/2Lt7BCP">
 <table class="image">
     <caption align="bottom" style="text-decoration:underline;">Elixir In Action (Amazon Affiliate Link)</caption>
     <tr><td><img src="./elixir_in_action.jpg" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></td></tr>
 </table>
</a>

<a target="_blank" href="https://amzn.to/2BWNsWC">
 <table class="image">
     <caption align="bottom" style="text-decoration:underline;">The Little Elixir & OTP Guidebook (Amazon Affiliate Link)</caption>
     <tr><td><img src="./opt_guidebook.jpg" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></td></tr>
 </table>
</a>
