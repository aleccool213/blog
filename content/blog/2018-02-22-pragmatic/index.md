---
title: The Best Parts of The Pragmatic Programmer 📚
date: '2018-03-11T22:12:03.284Z'
path: '/pragmatic-programmer-book-highlights/'
logoUrl: '2018-02-22-pragmatic/cover.jpg'
devLink:
  'https://dev.to/aleccool213/the-best-parts-of-the-pragmatic-programmer---1om5'
---

<table class="image">
    <caption align="bottom"><strong>In all it's glory! (Amazon Affiliate Link)</strong></caption>
    <tr>
        <td style="text-align: center;">
            <a target="_blank" href="https://www.amazon.ca/gp/product/020161622X/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=020161622X&linkCode=as2&tag=coffeedrive09-20&linkId=7d93b4fe087d6b41ddae8e27d323abea"><img src="https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg" alt="book-cover"/></a><img src="//ir-ca.amazon-adsystem.com/e/ir?t=coffeedrive09-20&l=am2&o=15&a=B003GCTQAE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>
        </td>
    </tr>
</table>

The Pragmatic Programmer remains relevant since its 1999 release, even though the software space is evolving at a Nascar-like pace. Standing as a definitive guide for software developers for many years, I am excited and glad I get to share this with you.

Being published quite a while ago, I was initially surprised when I saw The Pragmatic Programmer on book lists, listing it as a must-read for aspiring software developers. I believe this book will stand the test of time, unlike many other books I've read before it.

When I was getting out of the junior developer phase, I felt my soft skills related to development could be improved. This book turned out to have a ton of good advice, from unconventional soft skills to classical hard skills. Lots of great advice in here which I would deem as fundamental to any developer or q/a who is serious about their career.

So without further adieu, here are some highlights as I read this book. After reading this, I hope it encourages you to give the book a read yourself.

### Communication

> ...if the bug is the result of someone's wrong assumption, discuss the problem with the whole team: if one person misunderstands, then it's possible many people do.

I love this one, it really harps the fact that tight communication reduces the bugs your team produces.

### Take a deep breath

> Don't be a slave to history. Don't let existing code dictate future code. All code can be replaced if it is no longer appropriate. Even within one program, don't let what you've already done constrain what you do next—be ready to refactor. This decision may impact the project schedule. The assumption is that the impact will be less than the cost of not making the change.

It’s a common misconception for early programmers to pigeon-hole themselves to a projects conventions, whether stylistically or architecturally. One strategy that I have had success with is not being afraid to address code smells. This shows you are willing to go the extra mile in terms of maintaining a code base. It shows ownership of the product you work with every day. Encourage people to challenge old code, either your own or your peers.

### In The Weeds

> Rather than construction, software is more like gardening—it is more organic than concrete.

This is similar to the last quote, never be afraid to figure out better ways to do things, even in the middle of working on something. Half of the project being readable and covered by unit tests is better than none at all.

### Rebuilding

> At its heart, refactoring is redesign. Anything that you or others on your team designed can be redesigned in light of new facts, deeper understandings, changing requirements, and so on. But if you proceed to rip up vast quantities of code with wild abandon, you may find yourself in a worse position than when you started.

I would say refactoring without unit-tests is like driving at night without headlights, you have zero visibility. How do you know if your refactoring is doing any harm? From my experience, a business usually doesn't want to invest in regression testing when it comes to large, growing systems. Writing great unit-tests for an existing system gives the developer a blank slate to work with, you can rip up weeds and know your entire garden will still look great.

### Test placement

> By making the test code readily accessible, you are providing developers who may use your code with two invaluable resources: Examples of how to use all the functionality of your module and a means to build regression tests to validate any future changes to the code.

I've worked on projects which have tests in a separate root folder and I have also seen them nested right beside the code itself. Having them right beside the code makes them readily available and easily accessible. I think this benefit is worth the extra clutter
incurred. Now, developers get examples of how usage beside the actual code itself.

### Straight Wizardry

> But if you do use a wizard (framework), and you don't understand all the code that it produces, you won't be in control of your own application. You won't be able to maintain it, and you'll be struggling when it comes time to debug.

Through my experience, it’s a lot better if you take the time to get an intermediate understanding of the language at the beginning. Your first iterations will be slow to develop but it will be worth it in the long run. This is especially true when it comes to frameworks, don't start a large scale Rails project
and think that you can learn the fundamentals of Ruby on-the-go. Accept feedback from your peers on project-specific styling, and inquire about best practices to prevent language missteps. This saves everyone time.

Debugging is also a mess when you need to dive deeper into the framework you are using.
Without knowing the language, the parts you are using will remain a mystery to you, thus you won’t know how to take them apart and put them back again. Looking into a framework’s code often can be the difference between novice and guru status.

### Thinking emoji

> No matter how well thought out it is, and regardless of which "best practices" it includes, no method can replace thinking.

I've seen this happen with beginners, product managers will ask for a feature and they will build it the "Rails" way or the "React" way. Leveraging best practices will usually help you write good code efficiently, however, frameworks are not designed to do everything. Feel free to get creative and find the solution that works best for your project.

### Documentation?

> If it's on the Web, the programmers may even read it.

Documentation must be published on the web and linked to from the README.md, that's it, No opinions or debates, just do it.

### The Team

> There is also a tendency to fall back into us versus them mentality of designers against coders. We prefer to understand the whole of the system we're working on.

Having an open line of communication with designers (either style or architecture wise) is extremely underrated. These people can be valuable resources, they have a wealth of knowledge about the system as a whole. They do a lot of research into why system A talks to system Z.

### :D

> Many teams develop elaborate test plans for their projects. Sometimes they will even use them.

(+\_+)

### References

<a target="_blank" href="https://www.amazon.ca/gp/product/020161622X/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=020161622X&linkCode=as2&tag=coffeedrive09-20&linkId=7d93b4fe087d6b41ddae8e27d323abea">The Pragmatic Programmer: From Journeyman to Master (Amazon Affiliate Link)</a><img src="//ir-ca.amazon-adsystem.com/e/ir?t=coffeedrive09-20&l=am2&o=15&a=B003GCTQAE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
