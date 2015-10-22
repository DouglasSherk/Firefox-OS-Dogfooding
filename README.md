Foxfooding
===

"Foxfooding" is the app and website for Mozilla's "Foxfooding" program, which aims to get Firefox OS in the hands of Mozillians.

# Contributing and Hacking

Want to contribute to the app? It's simple.

## Getting Started

1. Install [Jekyll](http://jekyllrb.com/). You may have to first install [RVM and Ruby](https://rvm.io/), and [Homebrew](http://brew.sh/) if you're on OS X.

2. Clone this repo.

3. Run ```jekyll serve --watch --baseurl=/```, then navigate to ```http://localhost:4000``` in your browser.

## Creating Posts

Posts all go into the ```_posts``` folder. They are named with the following structure: ```YYYY-MM-DD-title.md```

The ```YYYY-MM-DD``` part of this is important, as that's where the date of the post is pulled from for presentation purposes. The ```title``` part can be whatever you want, but should ideally be a shortened and hyphenated version of the user-visible title of the  article.

The body of the file must be in the following format:
```md
---
layout: post
title: %title%
type: %type%
author: %author%
---

%content%
```

* *%title%* is the title as it should appear to users.
* *%type%* is the type of the article, for the purposes of putting it into a section. It should be one of: *news*, *update*, *issue*
* *%author%* is the name of the author. We recommend a format of "First name Last name (:nick)", e.g. "Doug Sherk (:drs)"
* *%content%* is some markdown and/or HTML for the body text.

## Deploying

We're using GitHub Pages for deployment. To deploy, all you have to do is commit your changes and [make a pull request](https://help.github.com/articles/using-pull-requests/).

If you'd like to be a collaborator, please contact [Doug Sherk (:drs)](mailto:drs@mozilla.com).
