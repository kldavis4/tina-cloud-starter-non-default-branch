---
title: 'Making Your Collaboration Problems Go Away By Sharing Components'
slug: sharing-components-designers-developers-collaboration-problems
author: shane-hudson
image: >-
  https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/a1b69818-14c4-47c6-8153-dd88b856b756/sharing-components-designers-developers-collaboration-problems.jpg
date: 2023-01-10T11:30:00.000Z
summary: >-
  Recently UXPin has extended its powerful Merge technology by adding npm integration, allowing designers to sync React component libraries without requiring any developer input. This new step aims to improve collaboration between designers and developers.
description: >-
  Recently UXPin has extended its powerful Merge technology by adding npm integration, allowing designers to sync React component libraries without requiring any developer input. This new step aims to improve collaboration between designers and developers.
categories:
  - Design Systems
  - Workflow
  - Tools
  - Teams
disable_ads: true
disable_panels: true
disable_newsletterbox: true
sponsor:
  title: UXPin
  link: https://uxpin.com?utm_source=partnerships&utm_medium=partner&utm_campaign=smashmagazine.com_uxpin_mainsite_12_22
  image: https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/812ac1bc-e786-4641-85f8-3a08321a6960/uxpin-logo-blackfill.svg
  description: >-
    This article is kindly powered by our friends at <a href="https://uxpin.com?utm_source=partnerships&utm_medium=partner&utm_campaign=smashmagazine.com_uxpin_mainsite_12_22">UXPin</a>, a <strong>UI design and prototyping tool</strong> that gives your prototypes the superpowers they deserve: states, JS expressions, variables, conditional interactions, Git sync. This article, however, isn’t influenced by UXPin in any way and expresses the <strong>independent opinion</strong> of the author. <em>Thank you!</em>
---

Is it controversial to say deep integration of design systems, removing the need to maintain both a code and design version of each component, is the current Holy Grail of Web Design? 

Traditionally the “Holy Grail” was the full-height three-column layout, but that is now consigned to history. Similarly, vertical centering can no longer be the punchline of a CSS joke. Even Container Queries, often considered an impossible task, are making their way into browsers.

This historical precedence gives me optimism. People throughout the web industry worked together, both in collaboration and competitively, to gradually, step-by-step, improve the web. To fundamentally improve the way we all work. The same is happening now with design systems. For all the advantages there are, we still have many things to solve. **UXPin is focused on the goal of removing the gap between design and development tools.**

<h3 id="marker" style="text-transform: none;">Introducing UXPin’s npm Integration</h3>

We’ve [written about](https://www.smashingmagazine.com/2021/06/design-code-modern-approach-development-challenges/) [our friends](https://www.smashingmagazine.com/2021/10/bridging-gap-between-designers-developers/) at UXPin before, and it’s been really great watching them iterate their product towards bringing designers and engineers closer. Recently UXPin have extended their [powerful Merge functionality](https://www.uxpin.com/merge?utm_source=partnerships&utm_medium=partner&utm_campaign=smashmagazine.com_uxpin_merge_01_23) by adding npm integration, allowing designers to sync React component libraries without requiring any developer input.

Previously Merge required engineers to export the components to UXPin in the build/deployment pipeline... That’s not required when importing components from npm packages.

To understand how this works, we need to step back and look at how UXPin differs from other design tools. Usually, the canvas on which you design is an image. In the past, these were raster and, nowadays, vector, a step in the right direction, but you are still drawing images that are supposed to represent the direction of your product’s look and feel.

When you use your components on the canvas in UXPin, you aren’t drawing rectangles styled to look about right &mdash; you are placing the **real components** the developers will use in the end product. This means you can easily prototype fully interactive high-fidelity designs that would previously require coded prototypes, without any coding using the exact same components as the end product. This reduces the gap between designers and developers both in terms of overlapping effort as well as the gap between what’s designed and what the users interact with.

{{< rimg breakout="true" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/85095892-324b-4756-b213-9964de9501bb/image-component-based-design.png" width="800" height="667" sizes="100vw" caption="Designing with code components helps bridge the gap between design and development. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e560b9d3-f0d9-44b2-a688-165e435877c7/image-vs-code.png'>Large preview</a>)" alt="Designing with code components helps bridge the gap between design and development" >}}

<h3 id="marker" style="text-transform: none;">But npm Is For Developers, Isn’t It?</h3>

Let’s be clear: you do not need to install anything on your computer to import component libraries into UXPin using npm integration. You don’t need to write any code. All you need is an existing package hosted on npm. This may be a package that is open source and widely used, such as Ant UI or Material, or it may be specific to your company and already in use by developers.

**Node Package Manager (npm) is a tool for importing specified versions of code.** Developers use this for managing versions of “packages” of code that someone else has written. For example, they would tell it which version of React to download, and if a new version is released, they can update it when they are ready. This is basically an **automated way to avoid copying and pasting zip files everywhere**.

{{% pull-quote %}}
With UXPin’s npm integration, you can grab the components from npm packages and use them within the design tool.
{{% /pull-quote %}}

## Okay... How Do I Use It?

Within UXPin, you define the UI component library by adding a new library to the “Merge: Component Manager” section. You will be given options and need to select “Import React Components with npm integration.” Here you will be asked to write the name of the library, and this can be anything. You will also need the package name and version (which can be `latest`), the path to the styling assets, and any permissions you wish to set up. For a more thorough explanation, [see the documentation](https://www.uxpin.com/docs/merge/npm-integration/?utm_source=partnerships&utm_medium=partner&utm_campaign=smashmagazine.com_uxpin_docs_12_22).

<figure><a href="https://www.uxpin.com/merge/npm-integration?utm_source=partnerships&utm_medium=partner&utm_campaign=smashmagazine.com_uxpin_cta_12_22"><img src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/d13c13ab-0aeb-4d7d-8d01-242c45b6b8f1/uxpin-how-it-works.gif" width="600" alt="You can import the npm package with UI component on UXPin’s trial" /></a><figcaption>Import npm package with UI component on <a href="https://www.uxpin.com/merge/npm-integration?utm_source=partnerships&utm_medium=partner&utm_campaign=smashmagazine.com_uxpin_cta_12_22">UXPin’s trial</a>.</figcaption></figure>

Once that’s complete, you will have imported your component library from npm into UXPin!

This is not the end of the process, however. With the components imported, you need to configure the Merge Component Manager for the library you’ve imported. You need to specify each component individually and set up each of the properties that relate to it.

Although the setup, especially of a large library, can be quite a lot of effort, it really is worth putting in the time upfront to reap the rewards of an integrated design system. At this point, you will be able to build prototypes that are as realistic and true to the medium of the web as any prototype can be. If you want to avoid the integration process and use open-source solutions, you can also use built-in libraries of [Ant design](https://www.uxpin.com/studio/blog/integrate-with-ant-design-npm/?utm_source=partnerships&utm_medium=partner&utm_campaign=smashmagazine.com_uxpin_antdesign_01_23) and [MUI](https://www.uxpin.com/merge/mui-library?utm_source=partnerships&utm_medium=partner&utm_campaign=smashmagazine.com_uxpin_muilibrary_01_23).

<figure><img src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68d40858-a9f5-458e-a305-c5564a2c370a/npm-integration-coded-components.gif" width="600" alt="Try code-based libraries that are built-in in UXPin" /><figcaption>Try code-based libraries that are built-in in UXPin.</figcaption></figure>

## This Sounds Great, But Is It Suitable For My Team?

### Your Developers Already Have An npm Package For Your Design System

This is the perfect situation for an integrated design system. A common situation is to create components both in code and a design tool and aim to sync them. Documentation tools such as Storybook are often used to provide shared knowledge and a source of truth between designers and developers. With npm integration, you are able to further reduce the handover process by literally using the same technologies without the step in the middle.

### Designing Without Access To Developers

If you’re in the discovery phase for a new project and don’t yet have access to any developers just yet, UXPin gives you an advantage. You can prototype using open-source component libraries (for example MUI) and adjust them to your needs. When developers join the team those components can be swapped out for the ones you design from scratch and developers then code.

### Fully-Fledged Team With Existing Practices

In a seasoned team, changing your tools can be the last thing anyone wants to do and can be hard to agree on. But even for these teams, the reward of having a consistent, integrated solution for sharing components between designers and developers is likely worth the investment.

## Conclusion

The team at UXPin has taken an impressive step towards making their Merge technology more accessible with npm integration. With each new Merge release, we can see their vision of how teams can work more closely together with their design systems integrated throughout their process. We can see the future, and gradually we are getting there just as we did with their walking away from the vector-based design standard into working closer with devs. It was a long journey, but worth it in the end.

Try the npm integration by signing up to an [UXPin trial](https://www.uxpin.com/merge/npm-integration?utm_source=partnerships&utm_medium=partner&utm_campaign=smashmagazine.com_uxpin_cta_12_22) or test other collaborative integrations by [requesting access here](https://www.uxpin.com/merge?utm_source=partnerships&utm_medium=partner&utm_campaign=smashmagazine.com_uxpin_merge_01_23). 

### Further Reading

- [npm integration (UXPin docs)](https://www.uxpin.com/docs/merge/npm-integration/#step-1-add-a-library-using-npm-integration)
- [Design Systems: Step-by-Step Guide to Creating Your Own](https://www.uxpin.com/create-design-system-guide/)
- [How to Turn Your Design System into an npm Package?](https://www.uxpin.com/studio/blog/how-to-turn-design-system-into-npm-package/)
- [What Are Design Tokens?](https://www.uxpin.com/studio/blog/what-are-design-tokens/)

{{< signature "yk, il" >}}
