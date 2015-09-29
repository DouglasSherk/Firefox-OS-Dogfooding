---
layout: post
title: Interview with Firefox OS engineer Doug Sherk
type: news
author: Jean Gong (:jeangong)
---

Hello, Mozillians! We interviewed Firefox OS engineer <a href="https://sherk.me">Doug Sherk</a>, known on IRC and Bugzilla as "drs". He told us about some of the stuff happening in Firefox OS land, such as what they've been working on lately, and features and bug fixes that we can expect in the coming releases of Firefox OS.

<b>jeangong</b>: Hi Doug, how's it going?

<b>drs</b>: Well, yourself?

<b>jeangong</b>: Very well. I heard that there have been changes lately within the Firefox OS product and team.

<b>drs</b>: Yes, we decided to step back and make changes to focus more on our core contributors, and what made other Mozilla products successful. Some of the changes are in code, others in process, and others still in organization. For instance, sites like this one and the feature/bug dashboard were built as part of this shifting focus.

<b>jeangong</b>: Interesting. How would you say that things have changed for contributors?

<b>drs</b>: We've been thinking really hard about how we can maximize our exposure to the general public, and knock down barriers to contribution. We have people working on great new products and technologies so that we can expand our reach.  One of the most common pieces of feedback that we got was that it was very hard for contributors to get started with Firefox OS. They had to buy, or somehow come across, a Flame device, then jump through many more hoops to get their development environments set up.

We listened to this feedback and kicked off several new programs to tackle these challenges. One is the Foxfooding program, the purpose of which is to make sure that everyone who wants a phone actually has one. Another is B2GDroid, a cool new launcher app for Android which is actually Firefox for Android preloaded with Gaia and the Gaia apps. B2GDroid also allows Android apps to be run alongside Firefox OS (web) apps. Further still, we're kicking off a new Android ports program to get more ports of Firefox OS done. That means that you'll be able to install Firefox OS on more devices that currently support Android. Lastly, we're working on our community infrastructure by building new tools like this site, possibly a forum, and other tools to enable communication.

<b>jeangong</b>: Wow, that's a lot! How about the actual Firefox OS product? How has it changed, and how is it going to change?

<b>drs</b>: We've been investing in bug fixes and features that matter to us as users of the product, and for our core contributors. The product is much more polished now, and we’ve had a chance to step back and solve some problems that we’ve had for a very long time. A lot of the benefits of this work won’t be felt until later, when the R&D pays off.

<blockquote><p>The add-ons API is incredibly powerful and can do just about anything that you can imagine.</p></blockquote>

There are some very big new features for 2.5, though. In my opinion, the most important one is the add-ons API. This API allows developers to inject code anywhere in the OS. That means that they can add new features to existing apps, modify the core OS, and many more things. The add-ons API is incredibly powerful and can do just about anything that you can imagine. Another nice feature is that it’s going to be the same add-ons API as the new one that we’re introducing for Firefox desktop. While we don’t yet know why you would want to write the same code to target both, we imagine that this will be useful in the future, if only because then you won’t have to learn two different API’s to work on both. If you want some examples of add-ons that developers have already made, check out the Hackerplace app.

A lot of 2.5 has been focused on back-end improvements, such as NGA (“New Gaia Architecture”). NGA is, as it sounds, a new architecture for Gaia apps. It relies very heavily on ServiceWorkers and the benefits that they bring. The back-end improvements are mostly little experiments that at this point just give us benefits like better offline support here, and 300 ms reduced load time there. But as we convert more apps over to NGA and other better back-end technologies, the benefits will snowball as they’ll become easier and easier to implement since we’ve already completed the research.

There are also some improvements to performance, security, privacy, and localization, and some new user-facing features. We’re going to publish a full changelog once the release is shipped.

<b>jeangong</b>: We've heard a lot of terminology thrown around lately. Ignite, Spark, Foxfooding, 2.5, 3.0... could you clear up what each of these mean for us?

<b>drs</b>: Sure. For starters, we've been doing a lot of rapid prototyping internally, and even some employees are confused about the terms. The dust has settled a bit, and I think it's safe to define them for you.

Ignite is the umbrella term for our new approach to Firefox OS. I've already mostly covered what this means in my previous answer. Ignite isn't an actual product, or really even something tangible. It's a collection of products, and a general approach and way of doing things.

2.5 and 3.0 are upcoming releases of Firefox OS. Obviously, 2.5 is going to be coming sooner. 2.5 is well on its way to being shipped, and should be out the door by November 6. We don’t really have a timeframe for 3.0, but it’s looking like it’ll be released something like a year and a half from now. The feature set hasn’t been finalized yet, either.

You may have heard of 3.0 being tossed around as the next release several months ago. When we started brainstorming ideas for our next release, people started associating 3.0 with a grandiose effort that was going to make Firefox OS ten times better than 2.2 was. Of course, product development doesn't happen that way. It's the little gains, experimenting, making mistakes, iterating; those are the things that matter. We decided to punt 3.0 off into the future so that it might possibly be able to meet the expectations that we had implicitly set for it.

Foxfooding is kind of a weird name, but it grew on me. You may or may not have heard of the term “dogfooding”. It was coined at Microsoft, where someone said, when referring to using their own products, that they were going to “eat their own dogfood”. Since then, “dogfooding” has come to mean exactly that. Foxfooding is our name for the same thing. The “fox” part of it comes from “Firefox”, in case that wasn’t obvious.

<blockquote><p>We really wish that we could get [Foxfooding devices] out to everyone, but there are a lot of hurdles for us before we can get there. We’re working hard to do exactly that.</p></blockquote>

Anyways, the purpose of the Foxfooding program is to get Firefox OS in the hands of users. To that end, it encapsulates the logistical problems in distribution, gathering data to better support the product team in making decisions, and interacting with the community. It’s currently targeting employees only with our “test driver devices”. We really wish that we could get it out to everyone, but there are a lot of hurdles for us before we can get there. We’re working hard to do exactly that. Our next batch of test devices will target a small group of core contributors.

<b>jeangong</b>: What happened to the Spark project?

<b>drs</b>: I actually actively worked on Spark since its inception. It started with a pretty simple idea: one of the main reasons that Firefox became popular was because of its hackability, so we should open up Firefox OS in the same way. After some thinking, we came up with a few core themes and features:
1. We should open up everything for hacking. That mostly means unlocking device API permissions so that non-certified apps can use the certified app permissions, and allowing code injection into apps and the core OS (hint: this is where add-ons came from!).
2. Users should be able to customize their experience on-device. This means an on-device code editor and theming tool.
3. We should aggregate everything that Mozilla is doing that we think that our users would want, and preload those things into the core OS.

We released Spark internally, with all 3 of these accomplished to a MVP (“Minimum Viable Product”) level. What we found is that add-ons (part of #1) and some of project aggregation (part of #3) stuck, but the rest didn’t. We knew this because we did a bunch of user research, and collected very inspecific data on what users were doing, such as what preloaded apps they were opening. We believe that what we missed is that hackability doesn’t require on-device code editing.

<blockquote><p>The parts [of Spark] that did work were spun off into their own projects
that are now being worked on by dedicated teams.</p></blockquote>

Still, despite big parts of Spark being killed off, it was still a tremendously valuable project. Almost no experimental project will see much greater success as a whole, and failures of parts are to be expected as we iterate and test things. The parts that did work were spun off into their own projects that are now being worked on by dedicated teams. The parts that didn’t work taught us some valuable lessons as we strive to reconcile Mozilla’s mission with where Firefox OS can go.

<b>jeangong</b>: I heard that there's a new reference device. Could you tell me about that?

<b>drs</b>: That’s sort of true. Before I go any further, I will state clearly that <i>we have no partner(s) that we’re working with for our internal test devices</i>. I’d also say that, at this point, it’s more accurate to say that we have a new test device. 

We realized that we were targeting the low end market too heavily with Firefox OS, and this was unappealing to people in developed markets. To bring performance and hardware features to the level that users in developed markets expected, we decided to search for a high-end device and do a very good Firefox OS port for it. We looked at several devices: the Nexus 5, Nexus 6, Amazon Fire, and others. We ended up picking the Sony Xperia Z3 Compact. Again, remember that we have no deal with Sony, or anything like that. We just picked up a bunch of Z3C’s, flashed them with Firefox OS, and handed them out internally.

We’re calling the Z3C our “test driver device” because it’s not truly our reference device. For the time being, we’re supporting the Flame and Z3C side-by-side. The Flame is still more or less our reference device.

<b>jeangong</b>: Thanks, Doug! This was very enlightening and informative. I’m sure our readers will be happy to read what you’ve told us.

<b>drs</b>: My pleasure.
