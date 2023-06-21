---
title: 'Code Documentation, Streamlined'
slug: swimm-code-documentation-streamlined
author: atila-fassina
image: >-
  https://files.smashing.media/articles/code-documentation-streamlined/swimm-code-documentation-streamlined.jpg
date: 2023-01-17T14:00:00.000Z
summary: >-
  Writing code documentation can be overwhelming when there’s no smooth process in place. Streamlining best practices and setting automation in your favor works a long way toward getting permanently up-to-date content that reflects the important pieces of your codebase.
description: >-
  Writing code documentation can be overwhelming when there’s no smooth process in place. Streamlining best practices and setting automation in your favor works a long way toward getting permanently up-to-date content that reflects the important pieces of your codebase.
categories:
  - Tools
  - Coding
  - Techniques
disable_ads: true
disable_panels: true
disable_newsletterbox: true
sponsor:
  title: Swimm
  link: https://swimm.io?utm_source=smashing_mag&utm_medium=paid_pubication&utm_campaign=launch_jan&utm_content=smashing_mag_launch
  image: https://files.smashing.media/articles/code-documentation-streamlined/swimm-logo.svg
  description: >-
    This article has been kindly supported by our dear friends at <a href="https://swimm.io?utm_source=smashing_mag&utm_medium=paid_pubication&utm_campaign=launch_jan&utm_content=smashing_mag_launch">Swimm</a> who have built the first code knowledge management tool that helps developers easily understand code. <em>Thank you!</em>
---

Everything surrounding software documentation is tough &mdash; from allocating time to do it to keeping it up to date. Documentation success is tricky to achieve, and often there isn’t enough time to measure impact. That’s because they don’t bring a tangible impact to the end-user experience. We are incapable of putting value on great documentation. Because of that, not rarely do the efforts to create and maintain delightful documentation overweight the time investment and proper planning.

## Penny Or Dime

Software Developers are in the business of writing code and content (well, most of us 😉). We can easily justify our salaries when benchmarked versus the features we ship and the revenue coming in through them. So when it comes to writing and educating our peers about those features so they become more capable of interacting with their code, we often question the value of those minutes in opposition to shipping the next feature or fixing that nasty bug right there. There’s so much technical debt, so why are we writing about code that we need to refactor?

We save those minutes immediately &mdash; it’s an obvious choice. Right back to code. And we just saved ourselves a few pennies of time. Fast forward a bit; a colleague needs to jump into it and implement a change. You’re out (working on the next big thing, in a meeting, on vacation, or maybe you left the company!), and there are no docs. Those pennies start to accumulate interest now. Luckily, there are a few comments in the code. Good to know that `src` actually means `source`, and `function sort(a, b)` takes two integers. But the reasoning is not really there, so let’s keep digging. The pull request has no description, `git blame` doesn’t help because who wrote the code isn’t around. I guess it’s time to play detective and reverse engineer stuff. Those pennies are dimes now. Describing has a much smaller cognitive overload than investigating. So the cost to develop our app is rising with developer time, task by task.

Documentation is a hygiene task. We do it to keep things tidy, comfortable, and ergonomic. They are a direct catalyzer of Developer Experience, for better or for worse. And Developer Experience determines how much focus developers can put on the code that really matters instead of working their way out through the weeds.

## Brushing Teeth

Hopefully, we all can agree that brushing our teeth is something important to be done every day. It is not the kind of habit that we can do it all on Friday and compensate for days skipped. And in this case, documentation is kind of similar. Of course, we can write it all by the end of the quarter, but it will be way harder and more time-consuming. For instance: do you remember what (or why!) you coded three months ago?

The cognitive overload of documenting things grows from the time you ship the code. Ideally, documentation is like writing tests (which we all do!), and every time we change something, we update the docs.

## Remove Obstacles

Unfortunately, most of us fail to create the habit of writing documentation &mdash; this is because the workflow is often full of friction. We finish the code, close the file (or the IDE, or the project), and jump onto a Markdown editor (or Jira, or a Wiki, etc.), and now we need to find the right place to put the knowledge we have just created, submit it to review &mdash; others will tell us if we picked the best spot, if we wrote it clearly enough, etc. Meanwhile, the code can’t wait &mdash; our users are already getting that shiny new feature. (*If that’s you, tough! Been there, done that. You have my sympathy.*)

As the process proceeds, the decisions raise questions. And yes, practice makes perfect &mdash; but ideally, we wouldn’t need to spend such big amounts of time (and energy!) to effectuate due diligence. This friction is working against us in maintaining the habit, and the time we spent finding the spot to put the code has drained our motivation.

## Connect the Moving Pieces

As usual, the developer's solution to a friction problem is **automation**. Elude the tedious and repetitive work by making them derivative. [Swimm](https://swimm.io?utm_source=smashing_mag&utm_medium=paid_pubication&utm_campaign=launch_jan&utm_content=smashing_mag_launch) accomplishes that by making a few of those many decisions for you in what they call a "documentation ecosystem" &mdash; a very appropriate naming.

1. Where to put the documentation? Right there, with the code.
2. When to write the documentation? As you implement it. Or when you open the PR (at the latest!).

In summary, you write a method; you explain the method right then and there. The “magical” part comes when, because they’re collocated, it is possible to directly document the parameters and variables _in the code_ to the text in the docs. That way, when the code changes, the documentation is aware it is now outdated and can flag your whole team about it.

All this neat automation requires a little setup and possibly a few changes to your coding interfaces and related processes.

### Code to Docs

If you use either VS Code or one of JetBrains' IDEs, it is possible to have an extension/plugin integrated. Once writing the code,  a “Swimm wave” will show up next to the code that’s already documented, so you can follow the link and edit the code in an enhanced Markdown editor. This editor has some interesting auto-completion inspected from your code (start typing a variable name, and you’ll see it autocomplete); use it as much as possible since this is the mechanism to link your code to your documentation. 

### Versioning To Docs

With GitHub, once documentation is coupled with the code, reviewing also happens in the same PR. The integration bot is capable of identifying **Smart Tokens** across the code changed and flags either adjustments already made (prompting to review right then and there) or untouched ones (also prompting to review). With individual comments that look more like PR prompts, your PR reviewers can approve each comment section one by one, depending on how comfortable they are with them.

{{< rimg breakout="true" href="https://swimm.io?utm_source=smashing_mag&utm_medium=paid_pubication&utm_campaign=launch_jan&utm_content=smashing_mag_launch" src="https://files.smashing.media/articles/code-documentation-streamlined/swimm-github-PR-reviews.png" width="800" height="422" sizes="100vw" caption="" alt="Swimm’s PR reviews on GitHub" >}}

Additionally, with automatic checks (Swimm’s patented Auto-sync), it is also possible to set automatic approvals and notification triggers, or mute them completely. So your team can avoid notification overload and tune how they are made aware of changes in a way it suits them best.

## Take It From Here

I hope this glimpse at the problem of writing documentation has resonated with you in a way and that the ideas around here made sense. Please reach out in the comments below or reply to me at [@AtilaFassina ](https://atila.io/twitter) if there’s anything you’d like to add or just chat about great documentation. I love a good success story!

{{< signature "vf, il" >}}
