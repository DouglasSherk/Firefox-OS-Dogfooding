---
layout: post
title: Pin the Web - Now Enabled by Default
type: update
author: Ben Francis (:bfrancis)
---

*Note: this was cross-posted from a [dev-fxos mailing list post](https://groups.google.com/forum/#!topic/mozilla.dev.fxos/lO4vj4cTFvU).*

Hello all,

tl;dr: If you checkout the latest master branch you might notice that as well as the new homescreen, Pin the Web is now turned on by default. Thank you to everyone who has worked hard to make this happen, and especially to Alberto, Guillaume, Chris and Michael who worked over the weekend to help push it over the finishing line.

One of the most powerful features of the web is the ability to link directly to any web page of any website and use it instantly, no installation required. With around a billion websites and a trillion hyperlinks the web is by far the biggest digital content ecosystem that exists. The ability to deep link to any part of a web app is something proprietary app platforms are still trying to catch up with.

Pin the Web aims to leverage this unique advantage and as of yesterday the basic MVP features enabling you to a pin any web page or website to your device were completed. You can access this via the "Pin" option in the browser overflow menu. Pinned pages are represented as cards on the homescreen and if you pin a whole website it is represented as an icon. Pinned sites have a special pinned browser chrome (like pinned tabs in Firefox) which gets out of the way for a more app-like experience, but is always there if you need it. You can deep link into any page of a pinned site and get the same streamlined experience.

This is just the beginning. Pinned pages are really just nice looking bookmarks, but we now have the platform support we need to extract metadata from web pages to generate a much richer representation of a page. Web pages are not just documents, they represent news articles, photos, videos, songs, recipes... and with the new Gaia architecture even the content of built-in apps like contacts, events and messages will be pinnable. Smart pinned pages will provide a richer representation of this content and could even associate actions with it, using existing open standards.

Pin the Web also brings basic support for the W3C web app manifest which provides metadata about a web app. This means that you can instantly use any one of thousands of standards-based web apps in the browser, then optionally pin it to your device if you want to re-use it. We plan to build on this to provide support for more manifest features and start to make web app discovery a built-in part of the experience of the OS rather than just a separate Marketplace app.

Pin the Web has recently gone through initial usability testing and we've already identified some opportunities to make improvements, but we now want to put it in the hands of Foxfooders to find out what it's like to live with on a daily basis. Please test it out and provide us with feedback, either by sharing your thoughts here, by filing bugs or by reaching out to any member of the Systems Front End team.

Pin the Web requires the new homescreen in order to work and we've already received feedback from a few early adopters to say that with the new homescreen something they really miss is the app grouping feature. We hear you loud and clear and it's a top priority for us to create a new way to organise content on the homescreen in the next release, UX are already working on this.

Making Firefox OS more web-centric and content-centric is a big part of the new Alopex UI being explored for the next phase of the project, Pin the Web is a small step towards that same vision.

So please go ahead and test out the new features which should be arriving on your Foxfooding device with the next OTA update, and do provide us with feedback.

Keep on pinning the open web!
