---
title: 'Meet Penpot, An Open-Source Design Platform Made For Designers And Developers Alike'
slug: meet-penpot-open-source-design-platform-designers-developers
author: mikolaj-dobrucki
image: >-
  https://files.smashing.media/articles/meet-penpot-open-source-design-platform-designers-developers/meta-meet-penpot-open-source-design-platform-designers-developers.jpg
date: 2023-02-28T08:00:00.000Z
summary: >-
  In the ever-evolving design tools landscape, it can be difficult to keep up with the latest and greatest. In this article, we’ll take a closer look at Penpot, the first design and prototyping tool that’s fully open-source and based on open web standards, making it an ideal choice for both designers and developers.
description: >-
  In the ever-evolving design tools landscape, it can be difficult to keep up with the latest and greatest. In this article, we’ll take a closer look at Penpot, the first design and prototyping tool that’s fully open-source and based on open web standards, making it an ideal choice for both designers and developers.
categories:
  - Workflow
  - Graphics
  - Tools
  - Apps
  - UI
disable_ads: true
disable_panels: true
disable_newsletterbox: true
sponsor:
  title: Penpot
  link: https://penpot.app/?mtm_campaign=penpotlaunch&mtm_keyword=sponsored&mtm_source=newssmashingmag
  image: https://files.smashing.media/articles/meet-penpot-open-source-design-platform-designers-developers/penpot-logo.svg
  description: >-
    This article has been kindly supported by our dear friends at <a href="https://penpot.app/?mtm_campaign=penpotlaunch&mtm_keyword=sponsored&mtm_source=newssmashingmag">Penpot</a> whose mission is to provide an open-source and open-standards platform to bring collaboration between designers and developers to the next level. <em>Thank you!</em>
---

The world of developer tools lives and breathes open-source. Open, free programming languages, frameworks, or even code editors everyone can contribute to &mdash; lay at the heart of the premise of the free, open web. Yet, with the design tools, it’s always been a much different story. For our design processes, most are sticking to a palette of paid, commercial tools &mdash; the majority of them were either created or later acquired by big tech companies. Fortunately, also in this space, we’re starting to see some alternatives. 

One such alternative is Penpot, an open-source design app that recently started to boom in popularity. With over 250k signups and 20k GitHub stars, Penpot has already made a name for itself, and it’s growing as a viable alternative to other design tools out there.

However, being open-source is not the only thing that makes Penpot unique. It also has a few killer features up its sleeve that make it a really great match for a good collaboration between designers and developers. Curious to learn more? Let’s take a closer look together.

## A Design Tool Done Right

If you’ve ever done a fair share of designing and coding, I bet you also had your moments of confusion and frustration. One thing I never managed to understand: Why are the apps used primarily for designing user interfaces that are later built with web technologies often so bad at matching the standards of these exact technologies?

For example, they offer fancy layout tools that follow a completely different logic than how layouts are built on the web. Or they offer drawing tools that work differently than graphics on the web, so once you export your work, you get weird, unexpected results. Why?

The answer is actually quite simple. For most of the design tools, hand-off and developer-focused features were an afterthought. Based on different patterns and standards, they often prove to be confusing and frustrating for developers.

This is where Penpot is different. Created by a team of designers and developers working very closely together, great design-development collaboration was their priority from the start.

Same as other web apps, Penpot can be run on any operating system or web browser. But to make access to it truly open and democratic, it is also based on Open Web Standards. For example, Penpot’s design files are saved in SVG format &mdash; the same standard as the most popular image format for vector graphics on the web.

What it means in practice is not only better compatibility with web technologies but a natural parity between designs and code. With Penpot, you don’t have to _export to SVG_, your graphics _are SVG_, by definition.

Same works with translating styles from designs into code. Penpot doesn’t have to generate any CSS values. It can just read and cater CSS values directly from designs.

A great example of that in practice is Flex Layout, i.e. Penpot’s layouting feature that not only works exactly like CSS Flexbox. It simply is CSS Flexbox. We’ll give it a shot together in the later part of the article!

## Open Source And Why Should You Care

Before we take a deeper dive into the tool itself, let’s talk about Open Source for a bit. But why is it so important, and what does it mean for you?

### It Means It’s Free

In the programming world, Open Source usually means that the source code of the tool, app, or framework is available for anyone to view, modify, and distribute. But why would that be important for you and your choice of a design tool?

First and foremost, the code of the app´ is 100% free and available for commercial use. Every part and feature of the app that is free today will remain as such. Personally, out of all the design tools I have ever tried, I’ve never seen an equally featured and solidly built design app that is completely free, even for a big team. In this field, Penpot is far ahead of any competition. 

### It Means Better Security And Control

But open source is so much more. It also means greater transparency, control, and security. Anyone can audit the app’s code for potential security vulnerabilities or add new features to the tool that meet specific needs. Additionally, open source means that code cannot be controlled by a single entity or corporation, and users are not locked into a particular vendor’s ecosystem.

That all is true also for Penpot. It might not sound particularly significant or sexy at first glance, but if your company would ever have to worry about maintaining full control over its toolkit’s security standards or if you’d like to avoid vendor lock-in, choosing an app that is Open Source might be a big deal.

### It Means Endless Customizability

Have you ever used plugins in a design tool? If so, you’d probably be pleased to hear that customizability is what Penpot brings to a whole new level. Open source means that users can modify the tool’s source code to meet any specific needs, customizing it as necessary.

You not only can extend the functionality of the app. You can literally edit it in any way you like to match your team’s processes and specific needs.

### It Means You Can Run It Yourself

Penpot being open source, also means the ability to host your own instance of the tool. This means that you can run Penpot on your servers, having full control over your data and the application itself.

### It Means A Peace Of Mind For The Future Of The Tool

Finally, open source provides peace of mind for the future of Penpot. With the tool being open source, users will always have control over the tool they work with, no matter what the future holds. Regardless of what happens next, you’ll always be able to use Penpot on your own terms. This means that people can invest in Penpot with confidence, knowing that they will always have access to the tool and their work (rather than being at the mercy of potential business shifts, acquisitions, pricing changes etc.)

I hope that by now, you’re left with no doubt about how many advantages it brings to work with Open Source tools. Now, let’s take a look at Penpot itself.

## Where Penpot Shines...

If you recently worked with any of the most popular design tools in Penpot, you’ll feel right at home. Its interface should be familiar and predictable, and also offer all the basic features you could be looking for.

{{< vimeo id="802905362" caption="" breakout="true" >}}

The user interface is unobtrusive, the perceived performance is good, and everything works as expected. But it’s the handoff-related features where Penpot really shines. 

I already mentioned Flex Layout, Penpot’s own layouting feature. If you have ever used the Flexbox model in CSS, it might look oddly familiar. In fact, it’s exactly that: CSS flexbox inside a design app. 

And that means not only better parity with code than other design apps (at least as long as you’re planning to use CSS flexbox in your code) but also a better scope of possibilities inside the design tool itself (e.g. you can wrap items of the automatic layout into multiple rows).

{{< vimeo id="802905800" caption="" breakout="true" >}}

More powerful layouts also mean much better possibilities when it comes to designing truly responsive designs. With what Penpot can do, there’s a high chance that, in many cases, you won’t have to create separate designs for different breakpoints ever again.

<figure><a href="https://files.smashing.media/articles/meet-penpot-open-source-design-platform-designers-developers/penpot-different-breakpoints-responsive.gif"><img src="https://files.smashing.media/articles/meet-penpot-open-source-design-platform-designers-developers/penpot-different-breakpoints-responsive.gif" width="800" height="623" alt="Penpot different breakpoints" /></a><figcaption>(<a href="https://files.smashing.media/articles/meet-penpot-open-source-design-platform-designers-developers/penpot-different-breakpoints-responsive.gif">Large preview</a>)</figcaption></figure>

All of that wouldn’t be as good if not for the great Inspect tab. Penpot gives you all the CSS you might need at hand, as well as the source SVG code of any component you select.

{{< vimeo id="802993478" caption="" breakout="true" >}}

Pretty neat!

## ...And Where It Doesn’t (Yet)

Regardless of all the praise, Penpot is not perfect either. Being a relatively young tool makes it a challenging task to compete against the giants dominating the design tools scene.

If you compare it closely to other popular design apps, you’ll definitely find a few features missing, as well as some of them not as complex as elsewhere. For example, Penpot’s components toolkit and prototyping features are still relatively simple and limited.

That being said, Penpot’s roadmap is very actively being worked on. You can check what the team is onto right now [on their website](https://tree.taiga.io/project/penpot/backlog).

What’s also important to keep in mind is that Penpot’s development potential as an Open Source tool couldn’t be underestimated. The tool’s community of contributors is already pretty strong, and I believe it will only keep growing. That’s a competitive advantage closed source tools will never be able to meet. 

Seeing what Penpot can do today, I personally can’t wait to see what’s next.

For example, looking at Penpot’s implementation of Flex Layout, think how cool it would be to have a similar tool for CSS Grid. Who’s in a better place to build it than Penpot? Spoiler alert: if you look at their [public roadmap](https://tree.taiga.io/project/penpot/taskboard/sprint-41-94&sa=D&source=docs&ust=1677068104731025&usg=AOvVaw20O6vwIn5J9gzyNmzYYA8w) closely enough, you’ll find out they’re already working on it.

## Final Thoughts

Even though Penpot is a relatively new tool, it stands as a solid choice for a design platform. It does a great job of narrowing the gap between designers and developers.

I believe it’s an open-source approach and a welcomed change that should only benefit our industry, as hopefully, others will follow. 

If you’d like to give Penpot a try, it’s now out of beta and available for you and your team &mdash; [completely for free](https://penpot.app/?mtm_campaign=penpotlaunch&mtm_keyword=sponsored&mtm_source=newssmashingmag) 


### Resources

- [Flex Layout presentation at FOSDEM 2023](https://www.youtube.com/watch?v=J-x04l4T98E) (video)
- [Unboxing Penpot official launch](https://www.youtube.com/watch?v=Q0tLukJmj_k) (live recording)
- [Join Penpot’s Community!](https://community.penpot.app/t/are-you-new-to-the-penpot-community-thats-how-you-can-get-started/1417)

{{< signature "il" >}}
