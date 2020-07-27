---
title: "HEY app review: Changing how you feel about Email"
author: Alec Brunelle
hero: ./images/photo1.jpg
date: "2020-08-23T22:12:03.284Z"
canonical_url: "https://medium.com/@yourboybigal/a-better-way-to-use-graphql-fragments-in-react-4f54bf862062"
excerpt: A new email service by the folks at Basecamp.
slug: "/hey-app-review-changing-how-you-feel-about-email/"
---

> Disclaimer: I tried HEY email for two weeks, I did this by just forwarding all emails I received on my old provider to my new @hey.com address. Whenever I needed to reply, I used my old provider. 

You might have seen Basecamp making headlines last month when [they took on Apple to fight for fair app-store monetization policies](https://www.theverge.com/2020/6/18/21296180/apple-hey-email-app-basecamp-rejection-response-controversy-antitrust-regulation). HEY is a new email service which, you guessed it, sends and receives email. Going up against competitors with huge head starts, HEY sets out to fundamentally change the flavour of email as opposed to just adding a little spice. After trying it for two weeks, HEY made my email experience a more calm, private and healthy experience with little to complain about.

HEY targets email users which are tired with the existing solutions, the ones who see email as a chore and not what it should be, a delightful, curated experience. HEY gives you complete control over where email should go, who is allowed to give you a push notification and so on. Shifting away from automated filters and into a more "your in control" experience is a tough transition at first, it takes some getting used to.

I switched from Gmail to [Fastmail](https://www.fastmail.com) a few years ago for enhanced privacy and that feeling you get for spending money on a small business versus one which [cares about its ad revenue more than its users](https://techcrunch.com/2020/01/23/squint-and-youll-click-it/). HEY is a big step forward in the same direction as Fastmail. 

## Email Hygiene

Basecamp is looking at email from the ground up. Jason Fried, founder and CEO of Basecamp, says it well [in his walkthrough of the product:](https://youtu.be/UCeYTysLyGI?t=44)

> One of the problems with email is that everybody can email you, which is also one of the great things about email

I consider myself a hygienic email user, using filters and labels as much as I can, and try my best to combat the fact that anyone has access to my inbox. A few custom rules to put emails to certain folders, rules to make my inbox feel a more clear and less cluttered with junk. For example, I have a newsletter rule where emails I don't care about go (sorry to the marketers who are reading this) and a rule for receipts. This happened to map 1-1 with [HEY's "The Feed"  and "The Paper Trail"](https://hey.com/how-it-works). This meant that using HEY was already familiar to me. It made my workflow for creating these rules much easier with ["The Screener"](https://hey.com/how-it-works) which buckets sender's into these categories with unmatched speed. I can confidently say that these buckets were enough. Uncategorized senders turned out to be important and kept going into my ["Imbox"](https://hey.com/features/the-imbox/). If they abused the fact they had this un-filtered access, I would screen them out, banished to the shadow-realm, my spam folder.

When all of the filters are at full steam, checking email is a calming and less stressful experience, something I never thought it would make me feel. One reason for this is that no notifications are sent to you for new emails by default, you need to choose who is able to notify you. This falls in line with how much control HEY gives you, it lets you decide what is important.

![HEY email app screenshot](./images/hey-preview-imbox.jpg.jpg)

The Imbox

When all of the filters start working for you, checking email was a calm experience, something I never thought it would make me feel. Basecamp considers itself [a "calm" company](https://www.balancethegrind.com.au/work-life-balance/inside-basecamps-calm-work-life-balance-culture/), and you can see extending to the products they build. One reason for this is that there are no notifications for new emails on by default, you need to choose who is able to notify you.

## Ultimate privacy

Okay, get this, every email that is sent to you has a tracker inside it, it can tell **when you opened it, where you opened it and how many times you opened it**. Well, not every single one, but every email you get might have it because you wouldn't be able to tell the difference. Senders put a 1x1 HTML image element inside an email (hidden from view), when you open it this image gets loaded from the sender's server. This is how a bunch of information like I described earlier is then sent back to the email sender. Blocking this behaviour is as easy as not loading images when you open an email, which no email client does by default, it needs to be set by the user. The other problem is that if you turn that on, you can hardly read emails because usually, the content depends on images being loaded. [HEY brings a feature](https://hey.com/features/spy-pixel-blocker/) that honestly surprises me no one else is doing yet, filtering out those pixel trackers. 

Filtering out pixel trackers is akin to a DNS server that has ad-blocking enabled. I already use one of these called [NextDNS](https://nextdns.io/). It works well and makes it so I don't have to do ad-blocking client-side, for example with a browser extension. How HEY does this differently is that it loads images within your email on a server within their network. This makes the sender think the email was opened by you (but it was opened by HEY). HEY then shows you these pre-loaded images from their server, along with the email it was placed in. Being the privacy-oriented person I am, honestly, the price tag for HEY is almost worth it just for this.

## The horror, vendor lock-in

To do all of this magic, Basecamp decided to not let users integrate using traditional email protocols such as [IMAP, POP3 and SMTP](https://www.emailaddressmanager.com/tips/protocol.html). This means you can't use HEY with any other client than their own. Mail for MacOS, Thunderbird, yup, all out of the question. This is a legitimate con of the service, many of these other email clients have been in development for eons and come with useful features, too many to mention here. HEY comes with native apps for every device you use but it stills feels wrong to just not talk about it. I get it why they don't want to support it, most of HEYs features like screening senders, merging threads, and others wouldn't make sense on a traditional email client.

If you decide to switch off of HEY, exporting all of your emails in a format that most other services will support is possible so don't have to worry about your history being lost. A cool thing HEY does do is that they promise to forward your emails sent to your old HEY address to a new address if you do decide to switch (that is if you paid for HEY in the first place).

## Yet another thing to "learn"

The problem with all of these cool, flashy software products is that the learning curve usually is steep. New product fatigue is hard on users and this is why new products that come out try to steal features from existing solutions for easy adoption. HEY suffers from this, you will need to learn how to use it fully or you will get lost and won't feel comfortable switching. An onboarding experience and tutorials which prompt you to test out HEY's features help but I felt like this could have been improved. I felt sad when the tutorials stopped coming, like being left alone in a beautiful metropolis I've never stepped foot in before and been told "okay, now find your way home". Nuances still exist after learning how to use HEY like when moving emails around to different folders and not knowing if future emails will go there. Little things like this exist but shouldn't stop anyone from enjoying what Basecamp has built.

## Conclusion

Getting to this point took some strong-willed people willing to take a risk, to go up against well-established players in the game. HEY isn't a perfect email app but it pushes the boundaries of how email **should** work. This alone is commendable and should be celebrated, most companies don't have the gusto to do this. I decided not to pay for now as they don't support custom domains and switching email addresses was extremely painful the last time I did. I only have the energy, time and motivation to do this once a decade. Conveniently [they have a form to stay up to date](https://hey.com/custom-domains/) and get notified when this feature ships as they know it's the reason a lot of people are waiting to pay.
