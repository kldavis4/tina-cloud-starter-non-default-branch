---
title: 'Easy SVG Customization And Animation: A Practical Guide'
slug: svg-customization-animation-practical-guide
author: adrian-bece
image: >-
  https://files.smashing.media/articles/svg-customization-animation-practical-guide/meta-sharing-image-svg-customization-animation-practical-guide.jpg
date: 2023-01-30T14:00:00.000Z
summary: >-
  Developers often feel discouraged from editing SVG markup and experimenting with SVG animations, thinking it’s a significant time investment or they need to use a complex animation library to do so. In this article, Adrian showcases his favorite tricks, which make the process streamlined and fun.
description: >-
  Developers often feel discouraged from editing SVG markup and experimenting with SVG animations, thinking it’s a significant time investment or they need to use a complex animation library to do so. In this article, Adrian showcases his favorite tricks, which make the process streamlined and fun.
categories:
  - SVG
  - Coding
  - Animation
  - Guides
---

Scalable Vector Graphics (SVG) have been a staple in Web Development for quite some time, and for a good reason. They can be scaled up or down without loss of quality due to their vector properties. They can be compressed and optimized due to the XML format. They can also be easily edited, styled, animated, and changed programmatically.

At the end of the day, SVG is a **markup language**. And just as we can use CSS and JavaScript to enhance our HTML, we can use them the same on SVGs. We could add **character and flourishes** to our graphic elements, add **interactions**, and shape truly delightful and memorable user experiences. This optional but crucial detail is often overlooked when building projects, so **SVGs end up somewhat underutilized** beyond their basic graphical use cases.

How can we even **utilize SVGs** beyond just using them statically in our projects?

Take the [“The State of CSS 2021”](https://2021.stateofcss.com/en-US/) landing page, for example. This SVG Logo has been beautifully designed and animated by [Christopher Kirk-Nielsen](https://chriskirknielsen.com/). Although this logo would have looked alright just as a static image, it wouldn’t have had as much of an impact and drawn attention without this intricate animation.

Let’s go even further &mdash; SVG, HTML, CSS, and JavaScript can be combined and used to create **delightful, interactive, and stunning projects**. Check out [Sarah Drasner’s](https://twitter.com/sarah_edo) incredible work. She has also written [a book](https://www.oreilly.com/library/view/svg-animations/9781491939697/) and has a [video course](https://frontendmasters.com/courses/svg-essentials-animation/) on the topic.

{{< codepen height="480" theme_id="light" slug_hash="ExpENmo" default_tab="result" breakout="true" user="smashingmag" editable="true" data-editable="true" >}}See the Pen [Vue Time Comparison [forked]](https://codepen.io/smashingmag/pen/ExpENmo) by <a href="https://codepen.io/sdras">Sarah Drasner</a>.{{< /codepen >}}  

**Developers often feel discouraged** to play around with SVG animations, either because of time constraints, or they believe that they need to master design, SVG markup, and one of many complex JavaScript-based animation libraries, or because of some other reason.

Even if you are completely unfamiliar with SVG markup, this quick [3-minute intro](https://www.youtube.com/watch?v=emFMHH2Bfvo) by Fireship is more than enough to get you up to speed.

Many impressive JavaScript-based animation libraries can be used to create stunning and complex SVG animations but **in this article, we’ll stick to basics** and showcase how few additional lines of CSS and JavaScript can make all the difference. Let’s make these seemingly advanced and often overlooked concepts accessible, so you can **create delightful and meaningful SVG animations and interactions** on the fly.

{{% feature-panel %}}

## SVG Workflow Tips

Before we dive into SVG animations, let’s go over some essential SVG tips and tricks. These should help you get a better grasp of SVG styling and ease you into the concepts of editing SVG markup, which we’ll rely on in later examples.

### Utilizing CSS `currentColor` For SVG Icons

Let’s start with a simple example. We have a monochromatic SVG of the star icon that we want to use in our button component.

<div class="break-out">

<pre><code class="language-html">&lt;svg width="24" height="24" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path d="..." fill="#C2CCDE" /&gt;
&lt;/svg&gt;
</code></pre>
</div>

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/01-star-icon.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/01-star-icon.png" width="800" height="333" sizes="100vw" caption="Here’s our wonderful star icon. (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/01-star-icon.png'>Large preview</a>)" alt="A star icon" >}}

Let’s add it to our HTML and create a simple button component.

<div class="break-out">

<pre><code class="language-html">&lt;button type="button"&gt;
  &lt;svg width="24" height="24" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"&gt;&lt;path d="..." fill="#C2CCDE" /&gt;&lt;/svg&gt;
  Add to favorites
&lt;/button&gt;
</code></pre>
</div>

Our button already has some background and text color styles applied to it so let’s see what happens when we add our SVG star icon to it.

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/02-button-star-icon.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/02-button-star-icon.png" width="800" height="272" sizes="100vw" caption="Our star icon fits nicely in the button, but its color is not right. (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/02-button-star-icon.png'>Large preview</a>)" alt="A button with a star icon in light gray color" >}}

Our SVG icon has a `fill` property applied to it, more specifically, a `fill="#C2CCDE"` in SVG’s `path` element. This icon could have come from the SVG library or even exported from a design file, so it makes sense for a color to be exported alongside other graphical properties.

SVG elements can be targeted by CSS like any HTML element, so developers usually reach for the CSS and override the `fill` color.

<pre><code class="language-css">.button svg &#42; {
  fill: var(--color-text);
}
</code></pre>

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/03-button-color-star-icon.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/03-button-color-star-icon.png" width="800" height="156" sizes="100vw" caption="We’ve successfully applied color to our SVG icon. (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/03-button-color-star-icon.png'>Large preview</a>)" alt="A button with a star icon in dark gray color" >}}

However, this is not an ideal solution as this is a greedy selector, and overriding the `fill` attribute on all elements can have unintended consequences, depending on the SVG markup. Also, `fill` is not the only property that affects the element’s color.

Let’s showcase this downside by creating a new button and adding a Google logo icon. SVG markup is a bit more complex than our star icon, as it has multiple `path` elements. SVG elements don’t have to be all visible, there are cases when we want to use them in different ways (as a clipping region, for example), but we won’t go into that. Just keep in mind that greedy selectors that target SVG elements and override their `fill`  properties can produce unexpected results.

<div class="break-out">

<pre><code class="language-html"> &lt;svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"&gt;
  &lt;path d="..." fill="#4285F4" /&gt;
  &lt;path d="..." fill="#34A853" /&gt;
  &lt;path d="..." fill="#FBBC05" /&gt;
  &lt;path d="..." fill="#EA4335" /&gt;
  &lt;path d="..." fill="none" /&gt;
 &lt;/svg&gt;
</code></pre>
</div>

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/04-button-visible-svg-element.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/04-button-visible-svg-element.png" width="800" height="175" sizes="100vw" caption="Some SVG element was not visible until we override the fill color property. Now the icon doesn’t look right at all! (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/04-button-visible-svg-element.png'>Large preview</a>)" alt="A button with a visible SVG element and a broken icon" >}}

We can look at the issue from a different perspective. Instead of looking for a silver bullet CSS solution, we can simply edit our SVG. We already know that the `fill` property affects the SVG element’s color so let’s see what we can do to make our icons more customizable.

Let’s use a very underutilized CSS value: `currentColor`. I’ve talked about this awesome value in one of [my previous articles](https://www.smashingmagazine.com/2022/05/lesser-known-underused-css-features-2022/?ref=sidebar#currentcolor). 

<blockquote>Often referred to as “the first CSS variable,” <code>currentColor</code> is a value equal to the element’s <code>color</code> property. It can be used to assign a value equal to the value of the <code>color</code> property to any CSS property which accepts a color value. It forces a CSS property to inherit the value of the <code>color</code> property.</blockquote>

{{< codepen height="480" theme_id="light" slug_hash="MWQjEKN" default_tab="result" breakout="true" user="smashingmag" editable="true" data-editable="true" >}}See the Pen [currentColor svg](https://codepen.io/smashingmag/pen/MWQjEKN) by <a href="https://codepen.io/smashingmag">Smashing Magazine</a>.{{< /codepen >}}

We can simply use the CSS `color` property to change SVG’s `fill` property simply by assigning it the `currentColor` value. This comes in very handy when SVG fill color needs to match text color and respond to various states, like hover and focus.

<pre><code class="language-html">&lt;!-- BEFORE --&gt;
&lt;path d="..." fill="#C2CCDE" /&gt;

&lt;!-- AFTER--&gt;
&lt;path d="..." fill="currentColor" /&gt;
</code></pre>

We can do the same for our Google logo. We need to make sure to avoid replacing the `fill="none"` value as this element shouldn’t be visible.

<pre><code class="language-html">&lt;path d="..." fill="currentColor" /&gt;
&lt;path d="..." fill="currentColor" /&gt;
&lt;path d="..." fill="currentColor" /&gt;
&lt;path d="..." fill="currentColor" /&gt;
&lt;path d="..." fill="none" /&gt;
</code></pre>

And we can safely remove our `.button svg *` selector as our SVGs will respond to the CSS `color` property value. Check out the following demo to see `currentColor`  in action, and feel free to play around and experiment with it.

{{< codepen height="480" theme_id="light" slug_hash="JjBLbzw" default_tab="result" breakout="true" user="smashingmag" editable="true" data-editable="true" >}}See the Pen [SVG button example [forked]](https://codepen.io/smashingmag/pen/JjBLbzw) by <a href="https://codepen.io/AdrianBece">Adrian Bece</a>.{{< /codepen >}}  

By avoiding the override, we retain complete control over the icon styling. For example, if we needed to keep the original Google logo colors in the icon, we simply wouldn’t edit the SVG. If we decided to stick with the initial idea of overriding styles, we’d have to override the override to put the fill colors back or write a separate selector for that button, resulting in code duplication or unnecessarily increasing specificity.

If you are using Figma to create or export SVG icons, consider using a plugin to automatically replace all visible color values in an SVG with the `currentColor` value. Here are a few Figma plugins that support this, alongside some other neat tricks for optimizing SVGs for the Web: 

- [SVG Export](https://www.figma.com/community/plugin/814345141907543603/SVG-Export),
- [One Click SVG](https://www.figma.com/community/plugin/1020972132670952724).

### SVG Optimization

SVG elements can be optimized just like any other markup language &mdash; we can minify it and remove unnecessary formatting and metadata, we can remove unnecessary properties and invisible elements, and so on.

These optimizations can be done automatically, depending on your tech stack. [SVGO](https://github.com/svg/svgo) is the most popular tool for optimizing SVGs and can be [easily integrated](https://github.com/svg/svgo#other-ways-to-use-svgo) with pretty much any tech stack. If you are looking for a handy web tool for quick manual optimization, [Jake Archibald’s](https://twitter.com/jaffathecake) [SVGOMG](https://jakearchibald.github.io/svgomg/) has been a go-to choice for many developers, including myself.

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/05-SVGOMG-tool.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/05-SVGOMG-tool.png" width="800" height="486" sizes="100vw" caption="Jake Archibald’s SVGOMG makes SVG optimization a breeze. (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/05-SVGOMG-tool.png'>Large preview</a>)" alt="SVGOMG tool" >}}

If you are looking for more, CSS-Tricks keeps a [comprehensive list](https://css-tricks.com/tools-for-optimizing-svg/) of various SVG optimization tools with plenty of information and articles on the topic.

### Using SVGs With Popular JavaScript-Based Frameworks

Many popular JavaScript frameworks like React have fully integrated SVG in their toolchains to make the developer experience easier. In React, this could be as simple as importing the SVG as a component, and the toolkit would do all the heavy lifting optimizing it.

<pre><code class="language-javascript">import React from 'react';
import {ReactComponent as ReactLogo} from './logo.svg';

const App = () =&gt; {
  return (
    &lt;div className="App"&gt;
      &lt;ReactLogo /&gt;
    &lt;/div&gt;
  );
}
export default App;
</code></pre>

However, as [Jason Miller](https://mobile.twitter.com/_developit/status/1382838799420514317) and many other developers have noted, including the SVG markup in JSX bloats the JavaScript bundle and makes the SVG less performant as a result. Instead of just having the browser parse and render an SVG, with JSX, we have expensive extra steps added to the browser. Remember, JavaScript is the most expensive Web resource, and by injecting SVG markup into JSX, we’ve made SVG as expensive as well.

One solution would be to create [SVG symbol](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol) objects and include them with [SVG use](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use). That way, we’ll be defining the SVG icon library in HTML, and we can instantiate it and customize it in React as much as we need to.

<pre><code class="language-html">&lt;!-- Definition --&gt;
&lt;svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;symbol id="myIcon" width="24" height="24" viewBox="0 0 24 24"&gt;
      &lt;!-- ... --&gt;
  &lt;/symbol&gt;
  &lt;!-- ... --&gt;
&lt;/svg&gt;

&lt;!-- Usage --&gt;
&lt;svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;use href="#myIcon" /&gt;
&lt;/svg&gt;
</code></pre>

{{% ad-panel-leaderboard %}}

## Breathing Life Into SVGs

Animating SVGs can be easy and fun. It takes just a few minutes to create some simple and effective animations and interactions. If you are unsure which animation would be ideal for a graphic or should you animate it at all, it’s best to consult with the designer. You can even look for some similar examples and use cases on [Dribble](https://dribbble.com/shots/popular/animation) or other similar websites.

It’s also important to keep in mind that **animations should be tasteful, add to the overall user experience, and serve some purpose** (draw the user’s attention, for example).

We’ll cover various use cases that you might encounter on your projects. Let’s start with a really sweet example.

### Animating A Cookie Banner

Some years ago, I was working on a project where a designer made an adorable cookie graphic for an unobtrusive cookie consent popup to make the element more prominent. This cookie graphic was whimsical and a bit different from the general design of the website.

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/06-cookie-banner.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/06-cookie-banner.png" width="800" height="280" sizes="100vw" caption="Here is the design for our example and it’s very similar to the one I was working with some years ago. (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/06-cookie-banner.png'>Large preview</a>)" alt="A cookie banner" >}}

I’ve created the element and added the graphic, but when looking at the page as a whole, it felt kind of lifeless, and it didn’t stand out as much as we thought it will. The user needed to accept cookies as the majority of website functionality depended on cookies. We wanted to create an unobtrusive banner that doesn’t block user navigation from the outset, so I decided to animate it to make it more prominent and add a bit of flourish and character.

I’ve decided to create three animations that’ll be applied to the cookie SVG:

- Quick and snappy rolling fade-in entry animation;
- Repeated wiggle animation with a good amount of delay in between;
- Repeating and subtle eye sparkle animation.

Here’s the final result of the element that we’ll be creating. We’ll cover each animation step by step.

{{< vimeo id="792218002" >}}

Now, this looks much better, doesn’t it? Let’s see what it adds to it:

- Animation matches the whimsical nature of the graphic itself.
- Movement feels natural enough, although JavaScript-based animation libraries would produce better results.
- Animation is tasteful and not intrusive, but it draws attention. It acts as a gentle reminder for a user to make a decision.

Let’s have a quick look at the markup (some markup here is removed for clarity). You can check out the complete markup and CSS in the [CodePen demo](https://codepen.io/AdrianBece/pen/BaPQJZv?editors=1100). 

We’ll animate the `svg` element itself and two `path` elements inside the SVG. Notice that the animation also features a shadow located in a `span` element, but **we’ll focus only on our SVG elements** as shadow just boils down to adding a simple CSS animation to an HTML element.

<div class="break-out">

<pre><code class="language-html">&lt;figure role="presentation" class="cookie-notice&#95;&#95;graphic-container"&gt;
  &lt;span class="cookie-notice&#95;&#95;shadow"&gt;&lt;/span&gt;
  &lt;svg class="cookie-notice&#95;&#95;graphic" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 223.233 228.464"&gt;
    &lt;path fill="#f8c256" d="..." /&gt;
    &lt;!-- ... --&gt;
  &lt;/svg&gt;
&lt;/figure&gt;
</code></pre>
</div>

#### Entry Animation

For the entry animation, we want the cookie to roll in from the left side of the screen and fade in as it rolls into place. Banner content is centered on the screen, so we cannot just roll the cookie from off-screen &mdash; it would look alright on smaller screens, but on larger screens, the movement would be jarring, so we’ll add a fade-in to keep the animation nice and snappy:

- `opacity`: controls fade-in,
- `transform`: controls horizontal movement and rotation.

<pre><code class="language-css">@keyframes enter {
  0% {
    opacity: 0;
    transform: translate3d(-60%, 0, 0) rotateZ(-50deg);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotateZ(17deg);
  }
}
</code></pre>

We have animation keyframes in place, but we’re not done yet. It’s important to choose an appropriate [easing function](https://www.smashingmagazine.com/2021/04/easing-functions-css-animations-transitions/). The default linear movement wouldn’t look nice, and the pre-defined easing functions might look alright, but we can do better by creating our custom [cubic-bezier function](https://www.smashingmagazine.com/2021/04/easing-functions-css-animations-transitions/#cubic-b%C3%A9zier-functions).

Let’s **consider the look and feel of the animation**. We want the movement to be whimsical, so let’s add a very basic bounce-like easing function - we’ll make our cookie overshoot the final position and snap back into it, resulting in a single bounce. With JavaScript-based animation libraries, we can create more impressive **spring-like easing functions**. Still, I want to keep this as simple and as effective as possible to show you that you can add nice-looking animations on the fly, regardless of time constraints or lack of knowledge of SVGs.

If you’re interested in learning more about advanced JavaScript-based animations, I would recommend Josh Comeau’s [wonderful article](https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/) on the topic. He also points out the **importance of creating believable animations** by choosing the correct easing functions.

<blockquote>Spring physics are like a secret ingredient; they make all animations taste better. The motion produced using spring physics is fluid and organic. It’s believable; springs do a better job of tricking our brains into thinking that something is actually moving.</blockquote>

We can use any easing function as a starting point and modify it. We’ll set the fourth number to a value above one, so we get that simple bouncing movement at the end.

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/07-easing-function-simple-single-bounce.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/07-easing-function-simple-single-bounce.png" width="800" height="457" sizes="100vw" caption="Easing function for a simple single bounce. (Image source: <a href='https://easings.co/'>easings.co</a>) (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/07-easing-function-simple-single-bounce.png'>Large preview</a>)" alt="Easing function" >}}

Let’s store it in a CSS variable so that we can reuse it for the repeatable wiggle movement animation.

<pre><code class="language-css">--transition-bounce: cubic-bezier(0.2, 0.7, 0.4, 1.65);
</code></pre>

Let’s put everything together, set a duration value and [fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode), and add the animation to our `svg` element.

<pre><code class="language-javascript">/&#42; Our SVG element &#42;/
.cookie-notice&#95;&#95;graphic {
  opacity: 0; /&#42; Should not be visible at the start &#42;/
  animation: enter 0.8s var(--transition-bounce) forwards;
}
</code></pre>

Let’s check out what we’ve created. It already looks really nice. Notice how the bouncing easing function made a lot of difference to the overall look and feel of the whole element.

{{< vimeo id="792221004" >}}

#### Repeating Wiggle Animation

We’ve made a nice entry animation that might draw the user's attention at first, but the user might get distracted by other elements on the page or focus on performing other tasks. Remember, the cookies are important for our website’s main functionality, so we want to create **a gentle reminder** for the user **that draws attention** that is not obtrusive or blocks user actions.

If you are looking for ideas, [Dribble](https://dribbble.com/shots/popular/animation) can be a great source of inspiration. For the wiggle animation, I was inspired by the following [Alpaca animation example](https://dribbble.com/shots/4576524-Alpaca-Animation) by Matthew Ware. More specifically, I wanted to create a repeating wiggle movement with plenty of pauses between repeats, similar to how Matthew has animated the alpaca’s right ear.

So, let’s outline the five steps for this repeated animation:

1. The object remains still (delay between iterations).
2. It pulls back gently to the left and rotates back.
3. It releases and moves forward and rotates forward.
4. It slows down as it returns to its original position and stops.
5. The object remains still (delay between iterations).

However, **CSS doesn’t offer an option to pause animation between iterations** out of the box, so let’s be creative and solve this for ourselves. We can use percentage values in the `@keyframes` definition to create an **artificial delay between iterations**.

<pre><code class="language-css">@keyframes wiggle {
  0% {}   /&#42; Stands still &#42;/
  45% {}  /&#42; Movement starts &#42;/
          /&#42; ... &#42;/
  60% {}  /&#42; Movement ends &#42;/
  100% {} /&#42; Stands still &#42;/
}
</code></pre>

Just like in the previous example, we have to be aware of the easing properties that we’ll be using so that the wiggle movement still feels natural. We need to **stay true to the look and feel** that we’ve previously established, so the different animations blend nicely, so we’ll use our bouncing easing function that we’ve defined.

Easing functions are repeated between each pair of keyframe percentage values. We can make our movement overshoot the target and make the animation nice and bouncy.

{{< codepen height="480" theme_id="light" slug_hash="KKaEjbM" default_tab="result" breakout="true" user="smashingmag" editable="true" data-editable="true" >}}See the Pen [Cubic bezier functions 3 keyframes](https://codepen.io/smashingmag/pen/KKaEjbM) by <a href="https://codepen.io/smashingmag">Smashing Magazine</a>.{{< /codepen >}}

Let’s visualize the bouncing easing curve and apply it to the five animation step pairs that we’ve outlined: standing still, backward movement, forward movement, slowing down into the original place, and, finally, standing still.

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/08-easing-function-bouncing-curve.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/08-easing-function-bouncing-curve.png" width="800" height="397" sizes="100vw" caption="Easing function repeats between each keyframe value definition. Original curve created with <a href='https://easings.co/'>easings.co</a>. (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/08-easing-function-bouncing-curve.png'>Large preview</a>)" alt="Easing function bouncing curve" >}}

<pre><code class="language-css">@keyframes wiggle {
  /&#42; Stands still &#42;/
  0% {
    transform: translate3d(0, 0, 0) rotateZ(17deg);
  }
  /&#42; Starts moving &#42;/
  45% {
    transform: translate3d(0, 0, 0) rotateZ(17deg);
  }

  /&#42; Pulls back &#42;/
  50% {
    transform: translate3d(-10%, 0, 0) rotateZ(8deg);
  }

  /&#42; Moves forward &#42;/
  55% {
    transform: translate3d(6%, 0, 0) rotateZ(24deg);
  }

  /&#42; Returns to starting position &#42;/
  60% {
    transform: translate3d(0, 0, 0) rotateZ(17deg);
  }

  /&#42; Stands still &#42;/
  100% {
    transform: translate3d(0, 0, 0) rotateZ(17deg);
  }
}
</code></pre>

<pre><code class="language-javascript">/&#42; Our SVG element &#42;/
.cookie-notice&#95;&#95;graphic {
  opacity: 0;
  animation: enter 0.8s var(--transition-bounce) forwards,
    wiggle 6s 3s var(--transition-bounce) infinite;
}
</code></pre>

{{< vimeo id="792235075" >}}

#### Repeating Eye Sparkle Animation

We’ve added to our SVG element, but so far, we’ve been working exclusively on the parent `svg` element, so we haven’t dug into the actual SVG markup. If you haven’t worked with SVG markup before, don’t worry &mdash; we’ll use just **a few very simple tricks that we’ll repeat** across all examples in the article to create various great-looking animations.

We need to find the six elements (circles) inside the SVG markup that we’ll animate. We’ll use the **browser’s inspect element tool** to quickly find the elements we’re looking for.

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/09-browsers-inspect-element-tool.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/09-browsers-inspect-element-tool.png" width="800" height="362" sizes="100vw" caption="We can use inspect element on our SVG file and find elements that we want to target. (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/09-browsers-inspect-element-tool.png'>Large preview</a>)" alt="Browser’s inspect element tool" >}}

SVG elements can have a CSS `class` attribute, so we’ll use that to target them. Let’s add the `class` attribute to the two `path` elements that we identified.

<pre><code class="language-css">&lt;!-- ... --&gt;
&lt;path fill="#351f17" d="..." /&gt;
&lt;path class="cookie&#95;&#95;eye" fill="#fff" d="..." /&gt;
&lt;path fill="#351f17" d="..." /&gt;
&lt;path class="cookie&#95;&#95;eye" fill="#fff" d="..." /&gt;
&lt;!-- ... --&gt;
</code></pre>

We want to make cookie’s eyes sparkle. I got this idea from a music video for a song by [Devin Townsend](https://youtu.be/-zIxPUPWVq8?t=300). You can see the animation play at the 5-minute mark. It just goes to show how **you can find ideas pretty much anywhere**.

Let’s just change the scale and opacity. Notice how so far, we’ve relied only on those two attributes for all three animations, which are quite different from each other.

<pre><code class="language-css">@keyframes sparkle {
  from {
    opacity: 0.95;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</code></pre>

We want this animation to repeat without delay. It should be subtle enough to blend in nicely with the graphic and the overall element and not obtrusive for the user. As for the easing function, we’ll do something different. We’ll use [staircase functions](https://www.smashingmagazine.com/2021/04/easing-functions-css-animations-transitions/#staircase-functions) to achieve that quick and snappy transition between the two animation states (our `from` and `to` values).

We need to be careful here. **Transform origin is going to be set relative to the parent SVG element’s `viewbox`** and not the element itself. So if we set `transform-origin: center center`, the transformation will use the center coordinates of the parent SVG and not the `path` element. We can easily fix that by setting a [transform-box](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box) property to `fill-box`.

<blockquote>The nearest SVG viewport is used as the reference box. If a `viewBox` attribute is specified for the SVG viewport creating element, the reference box is positioned at the origin of the coordinate system established by the `viewBox` attribute, and the dimension of the reference box is set to the width and height values of the `viewBox` attribute.</blockquote>

<div class="break-out">

<pre><code class="language-css">.cookie&#95;&#95;eye {
  animation: sparkle 0.15s 1s steps(2, jump-none) infinite alternate;
  transform-box: fill-box;
  transform-origin: center center;
}
</code></pre>
</div>

Last but not least, let’s [respect the user’s accessibility preferences](https://web.dev/prefers-reduced-motion/) and turn off all animations if they have it set.

<pre><code class="language-css">@media (prefers-reduced-motion: reduce) {
  &#42;,
  ::before,
  ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}
</code></pre>

Here is the final result. Feel free to play around with the demo and experiment with keyframe values and easing values to change the look and feel of the animation.

{{< codepen height="480" theme_id="light" slug_hash="eYjMvXz" default_tab="result" breakout="true" user="smashingmag" editable="true" data-editable="true" >}}See the Pen [Animated cookie svg [forked]](https://codepen.io/smashingmag/pen/eYjMvXz) by <a href="https://codepen.io/AdrianBece">Adrian Bece</a>.{{< /codepen >}}  

### Transform Animations On SVG Elements

Let’s play around with the CSS transform property and CSS animation attributes and create a nice entry animation for an SVG that we have here.

First, let’s plan out our animation:

1. No element will be visible at the beginning.
2. The dark-colored rectangle will come down from the top.
3. A white half-circle will rotate in.
4. Lines will scale horizontally and appear with some delay between them.

{{< vimeo id="792238146" >}}

Let’s set up the keyframes we’ll need for the animations that we’ve outlined.

<pre><code class="language-css">@keyframes fromTop {
    from {
    transform: translateY(100%);
  } to {
    transform: translateY(0);
  }
}

@keyframes rotateIn {
  from {
    transform: rotateZ(180deg);
  } to {
    transform: rotateZ(0);
  }
}

@keyframes scaleXIn {
  from {
    transform: scaleX(0);
  }
  
  to {
    transform: scaleX(1);
  }
}
</code></pre>

We’ll use inspect element to find the target elements for the first two animations and set the appropriate `class` attributes.

<div class="break-out">

<pre><code class="language-html">&lt;svg xmlns="http://www.w3.org/2000/svg"xml:space="preserve" viewBox="0 0 1600 1066"&gt;
  &lt;!-- ... --&gt;
  &lt;path class="sun&#95;&#95;bg" d="..." style="fill:#363636;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path14" /&gt;
  &lt;path class="sun&#95;&#95;top" d="..." style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path16" /&gt;
  &lt;!-- ... --&gt;
&lt;/svg&gt;
</code></pre>
</div>

Let’s define the `animation` for each element. We’ll use the `transform-box` property to set the transform-origin to the `path` element instead of the parent SVG.

<pre><code class="language-css">.sun&#95;&#95;bg {
  transform: translateY(100%);
  animation: fromTop 0.5s 1s ease forwards;
  transform-box: fill-box;
}

.sun&#95;&#95;top {
  transform: rotateZ(180deg);
  animation: rotateIn 1s 1.4s ease-in-out forwards;
  transform-origin: center top;
  transform-box: fill-box;
}
</code></pre>

So far, so good. We’ve used the same approach and techniques as in the previous example. Let’s introduce a new trick for animating the bottom rectangles.

We have 17 rectangles, and instead of going to each one of them and adding a `class` attribute to each one of them, **let’s group them and apply the class to a group.** It’s similar to a `div` element in HTML &mdash; we can use it to add a useful generic wrapper around elements so we can group them and style them easily. SVG has a handy little [group element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g) (`g`). So we’ll add an opening tag before the first rectangle and a closing tag after the last element.

<div class="break-out">

<pre><code class="language-html">&lt;g class="sun&#95;&#95;lines" id="g20" clip-path="url(#clipPath24)"&gt;
  &lt;path d="... style="fill:#363636;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path26" /&gt;
  &lt;path d="... style="fill:#363636;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path26" /&gt;
  &lt;path d="... style="fill:#363636;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path26" /&gt;
  &lt;!-- ... --&gt;
 &lt;/g&gt;
</code></pre>
</div>

Much quicker and maintainable than adding 17 `class` attributes, isn’t it? And we haven’t changed anything visually on our SVG by doing that.

Let’s add animation to these `path` elements in a group. If we wanted all group elements to have the same animation properties, we could have simply added the animation to the group, but we want each `path` element to have a slight delay.

<pre><code class="language-css">.sun&#95;&#95;lines &gt; path {
  transform: scaleX(0);
  animation: scaleXIn 0.5s 2.5s ease-in-out forwards;
  transform-origin: center center;
  transform-box: fill-box;
}
</code></pre>

And finally, let’s add a delay to each path child element of the group. If we were using SASS or some other CSS pre-processor, we could have easily added these styles with a loop.

<pre><code class="language-css">.sun&#95;&#95;lines &gt; path:nth-child(2) {
  animation-delay: 2.6s;
}

.sun&#95;&#95;lines &gt; path:nth-child(3) {
  animation-delay: 2.7s;
}

/&#42; ... &#42;/
</code></pre>

Here is the demo and the final result. Feel free to play around with easing and delay values to create different animation effects.

{{< codepen height="480" theme_id="light" slug_hash="GRBxmRP" default_tab="result" breakout="true" user="smashingmag" editable="true" data-editable="true" >}}See the Pen [Animated SVG graphic [forked]](https://codepen.io/smashingmag/pen/GRBxmRP) by <a href="https://codepen.io/AdrianBece">Adrian Bece</a>.{{< /codepen >}}

### Repeating Animations For SVG Patterns

SVGs often serve as a background graphic and just as a decoration to some content, like a very prominent hero container like in our next example. Although it looks good enough on its own, we can make it look better by adding some motion to it.

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/10-image-text-content-background-svg.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/10-image-text-content-background-svg.png" width="800" height="409" sizes="100vw" caption="Our hero image consists of text content and background SVG. (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/10-image-text-content-background-svg.png'>Large preview</a>)" alt="Image consisting of text content and background SVG" >}}

Let’s take a closer look at the SVG we’ll be working with. It consists of a few dozen `circle` elements.

<pre><code class="language-html">&lt;!-- ... --&gt;
&lt;circle cx="103.5" cy="34.5" r="11.3"&gt;&lt;/circle&gt;
&lt;circle cx="172.5" cy="34.5" r="15.7"&gt;&lt;/circle&gt;
&lt;circle cx="310.5" cy="34.5" r="24.6"&gt;&lt;/circle&gt;
&lt;circle cx="517.5" cy="34.5" r="34.5"&gt;&lt;/circle&gt;
&lt;circle cx="586.5" cy="34.5" r="34.5"&gt;&lt;/circle&gt;
&lt;circle cx="655.5" cy="34.5" r="33.4"&gt;&lt;/circle&gt;
&lt;!-- ... --&gt;
</code></pre>

Let’s start by adding a bit of opacity to our background and making it more chaotic. When we apply CSS transforms to elements inside SVG, they are transformed relative to the SVG’s main viewbox. That is why we’re getting a slightly chaotic displacement when applying a `scale` transform. We’ll use that to our advantage and not change the reference box.

To make things a little bit easier for us, we’ll use SASS. If you are unfamiliar with SASS and SCSS, you can view compiled CSS in CodePen below.

<pre><code class="language-css">svg circle {
  opacity: 0.85;

  &:nth-child(2n) {
    transform: scale3d(0.75, 0.75, 0.75);
    opacity: 0.3;
}
</code></pre>

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/11-image-sass.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/11-image-sass.png" width="800" height="409" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/11-image-sass.png'>Large preview</a>)" alt="Image with chaotic background" >}}

With that in mind, let’s add some keyframes. We’ll use two sets of keyframes that we’ll apply randomly to our circle elements. Once again, we’ll leverage the `scale` transform displacement and change the opacity value. 

<pre><code class="language-css">@keyframes a {
  0% {
    opacity: 0.8;
    transform: scale3d(1, 1, 1);
  }
  100% {
    opacity: 0.3;
    transform: scale3d(0.75, 0.75, 0.75);
  }
}

@keyframes b {
  0% {
    transform: scale3d(0.75, 0.75 0.75);
    opacity: 0.3;
  }
  100% {
    opacity: 0.8;
    transform: scale3d(1, 1, 1);
  }
}
</code></pre>

Now, let’s use quite a few `:nth-child` selectors. Every odd child will use the `a` keyframes, while every even circle will use a `b` keyframes. We’ll use `:nth-child` selectors to play around with animation duration and animation delay values.

<div class="break-out">

<pre><code class="language-css">svg circle {
  opacity: 0.85;
  animation: a 10s cubic-bezier(0.45,0.05,0.55,0.95) alternate infinite;

  &:nth-child(2n) {
    transform: scale3d(0.75, 0.75, 0.75);
    opacity: 0.3;

    animation-name: b;
    animation-duration: 6s;
    animation-delay: 0.5s;
  }

  &:nth-child(3n) {
    animation-duration: 4s;
    animation-delay: 0.25s;
  }

  /&#42; ... &#42;/
}
</code></pre>
</div>

And, once again, just by playing around with opacity values and CSS transforms on our SVG and playing around with child selectors and animation parameters, we’ve managed to create a more interesting background for our hero container.

{{< codepen height="480" theme_id="light" slug_hash="OJwvmWK" default_tab="result" breakout="true" user="smashingmag" editable="true" data-editable="true" >}}See the Pen [Animated welcome screen [forked]](https://codepen.io/smashingmag/pen/OJwvmWK) by <a href="https://codepen.io/AdrianBece">Adrian Bece</a>.{{< /codepen >}}

#### SVG As A CSS Background Image

As a quick bonus example, we can also convert our repeatable SVG pattern shape into base64 using [this handy tool](https://codebeautify.org/svg-to-base64-converter) and use it as a repeatable `background-image` pattern.

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/12-design-repeatable-circle-pattern.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/12-design-repeatable-circle-pattern.png" width="800" height="275" sizes="100vw" caption="Let’s use this design for our example with a repeatable circle pattern. (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/12-design-repeatable-circle-pattern.png'>Large preview</a>)" alt="Design with a repeatable circle pattern" >}}

Here is a markup for our circle SVG.

<div class="break-out">

<pre><code class="language-html">&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"&gt;&lt;circle cx="50" cy="50" r="50" fill-opacity=".03"/&gt;&lt;/svg&gt;
</code></pre>
</div>

Be careful not to inline too much data with base64, so stylesheets can be downloaded and parsed quickly. When we convert it to base64, we get this handy CSS `background-image` snippet:

<div class="break-out">

<pre><code class="language-css">background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbC1vcGFjaXR5PSIuMDMiLz48L3N2Zz4=);
</code></pre>
</div>

We can simply apply a simple animation where we offset the `background-position` by the `background-size` value and get this neat background animation.

<pre><code class="language-css">.wrapper {
  animation: move-background 3.5s linear;
  background-image: url(data:image/svg+xml;base64,...);
  background-size: 96px;
  background-color: #16a757;
  /&#42; ... &#42;/
}

@keyframes move-background {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 96px 0;
  }
}
</code></pre>

Our example looks more interesting with this subtle moving animation going on in the background. Remember to respect users’ accessibility preferences and turn off the animations if they have a preference set.

{{< codepen height="480" theme_id="light" slug_hash="mdjxmXZ" default_tab="result" breakout="true" user="smashingmag" editable="true" data-editable="true" >}}See the Pen [Animating background SVG pattern [forked]](https://codepen.io/smashingmag/pen/mdjxmXZ) by <a href="https://codepen.io/AdrianBece">Adrian Bece</a>.{{< /codepen >}}

### Self-Drawing & Eelf-Erasing SVG Animation

Self-drawing / Self-erasing SVG is a cool and impressive animation that can be applied to any SVG `path` or another element that has a `stroke` attribute set. Let’s take our SVG text, for example, and check out its markup. Notice the `stroke` and `stroke-width` properties. 

<div class="break-out">

<pre><code class="language-html">&lt;svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323 151"&gt;
  &lt;path fill="none" stroke="#a56a19" stroke-width="2" d="..." /&gt;
&lt;/svg&gt;
</code></pre>
</div>

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/13-starting-text.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/13-starting-text.png" width="800" height="271" sizes="100vw" caption="Our starting text. (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/13-starting-text.png'>Large preview</a>)" alt="Starting text" >}}

Before diving into the animation, we need to cover two SVG properties that we’ll be using: `stroke-dasharray` and `stroke-dashoffset`. They’re integral for pulling off this animation.

Stroke can be converted to dashes with a certain length using a `stroke-dasharray` property.

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/14-stroke-dasharray-property.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/14-stroke-dasharray-property.png" width="800" height="257" sizes="100vw" caption="Converting stroke into dashes with the length of 10 pixels with CSS <code>stroke-dasharray: 10</code>. (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/14-stroke-dasharray-property.png'>Large preview</a>)" alt="Text with stroke converted into dashes" >}}

And we can offset the positions of those strokes by a certain amount using the `stroke-dashoffset` property.

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/15-stroke-dashoffset-property.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/15-stroke-dashoffset-property.png" width="800" height="245" sizes="100vw" caption="Adding a slight 10px dash offset with CSS <code>stroke-dashoffset: 10</code>. (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/15-stroke-dashoffset-property.png'>Large preview</a>)" alt="Strokes with a slight dash offset" >}}

So, what’s this have to do with our drawing and erasing animation? Imagine what would happen if we could have a dash that covers the whole stroke length and offset it by the same value. In that case, the starting point of the stroke would be way past the ending point of the stroke, and we wouldn’t see it. 

<div class="break-out">

<pre><code class="language-css">svg path {
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 800;  /&#42; Dash covering the whole stroke &#42;/
  stroke-dashoffset: 800; /&#42; Offset it to make it invisible &#42;/
}
</code></pre>
</div>

If we animate the offset value from that value back to 0, the stroke would slowly become visible, **as it was drawing itself**.

<div class="break-out">

<pre><code class="language-css">svg path {
  /&#42; ... &#42;/
  animation: draw 6s linear infinite;
}

@keyframes draw{
  to {
    stroke-dashoffset: 0; /&#42; Reduce offset to make it visible &#42;/
  }
}
</code></pre>
</div>

If we continue to animate the offset value from 0 to a negative value, **we’d get the erasing effect**.

<pre><code class="language-css">svg path {
  /&#42; ... &#42;/
  animation: drawAndErase 6s linear infinite;
}

@keyframes drawAndErase {
  to {
    stroke-dashoffset: -800;
  }
}
</code></pre>

You’re probably wondering where the magical `800` pixel value came from. This value depends on the SVG and the length of the dash needed to cover the whole stroke length. It can be easily guessed, but [Chris Coyier](https://css-tricks.com/svg-line-animation-works/) has a handy function that can do it for you. However, depending on the stroke properties and SVG shape, this function might not always return an ideal value, but it can guide you closer to it.

Check out the complete demo and feel free to play around with values to see how the stroke properties affect the animation. If you are looking for more examples, CodyHouse has covered a [fun-looking button animation](https://codyhouse.co/nuggets/self-drawing-svg-animation) using the same trick.

{{< codepen height="480" theme_id="light" slug_hash="LYBdLNK" default_tab="result" breakout="true" user="smashingmag" editable="true" data-editable="true" >}}See the Pen [SVG stroke animation [forked]](https://codepen.io/smashingmag/pen/LYBdLNK) by <a href="https://codepen.io/AdrianBece">Adrian Bece</a>.{{< /codepen >}}

{{% ad-panel-leaderboard %}}

## Playing With The Smashing Cat

I simply could not resist including Magazine’s fabulous cat mascot and animating it! Smashing Magazine has so many fun-looking SVGs, it was very difficult to choose just one, so I’ve narrowed it down to two SVGs.

For the first SVG, we’ll take everything we’ve learned so far and add a nice-looking animation, and for the second SVG, we’ll add some fun interactions using JavaScript.

### Using Everything That We’ve Learned So Far

Everything we’ve done for this example is the same as in previous ones, only combined into a single SVG and involving a few more elements and groups of elements. Feel free to check out the CodePen demo below and use the browser inspect element feature to check out what is going on under the hood.

{{< codepen height="480" theme_id="light" slug_hash="xxJWrOB" default_tab="result" breakout="true" user="smashingmag" editable="true" data-editable="true" >}}See the Pen [Smashing cat animated [forked]](https://codepen.io/smashingmag/pen/xxJWrOB) by <a href="https://codepen.io/AdrianBece">Adrian Bece</a>.{{< /codepen >}}

For this example, every animation was pretty much straightforward &mdash; just find the element using the browser’s inspect element tool, group it if needed, apply a class and add an animation.

I guess that the pipe animation was the most difficult one to get right as the pipe has to follow the contours of the mouth precisely. I was just playing around with the transform values and picked whatever ended up looking great.

<pre><code class="language-javascript">.pipe {
  transform-box: fill-box;
  transform-origin: top left;
  animation: pipeMove 4s ease-in-out infinite alternate;
}

@keyframes pipeMove {
  from {
    transform: translate3d(4px, -12px, 0) rotateZ(-5deg);
  }
  to {
    transform: translate3d(-5px, 12px, 0) rotateZ(5deg);
  }
}
</code></pre>

### Adding Interactivity

Now for an even more interesting example: Smashing cat playing a barista. Let’s focus on making it interactive by adding the following:

1. Eyes should follow the cursor.
2. Clicking on the hat should animate it.
3. Clicking on a bowtie should animate it.
4. Clicking on the coffee machine handle should make coffee pour into a cup.

{{< rimg href="https://files.smashing.media/articles/svg-customization-animation-practical-guide/16-smashing-cat-barista.png" src="https://files.smashing.media/articles/svg-customization-animation-practical-guide/16-smashing-cat-barista.png" width="800" height="537" sizes="100vw" caption="Just looking at awesome these SVGs sparks so many animation ideas! (<a href='https://files.smashing.media/articles/svg-customization-animation-practical-guide/16-smashing-cat-barista.png'>Large preview</a>)" alt="Smashing cat playing a barista" >}}

Let’s start by adding the **mouse-tracking eye animation**. We’ll skip manually implementing this feature in JavaScript and use a handy library called [watching-you](https://github.com/jj811208/watching-you).

Using the browser’s inspect element tool, we’ll find the target elements inside the SVG and add the eye-left and eye-right CSS classes to these elements, respectively.

<div class="break-out">

<pre><code class="language-javascript">&lt;ellipse class="cls-5 eye eye-left" cx="245.15133" cy="134.57033" rx="5.31264" ry="8.61816" transform="translate(-33.47349 110.5587) rotate(-23.83807)" /&gt;
&lt;ellipse class="cls-4 eye eye-right" cx="284.42686" cy="116.68559" rx="5.31264" ry="8.61816" transform="translate(-22.89477 124.9063) rotate(-23.83807)" /&gt;
</code></pre>
</div>

We’ll configure the library and make it target the classes that we’ve added.

<pre><code class="language-javascript">const optionsLeft = { power: 4, rotatable: false };
const watcherLeft = new WatchingYou(".eye-left", optionsLeft);
watcherLeft.start();

const optionsRight = { power: 3, rotatable: false };
const watcherRight = new WatchingYou(".eye-right", optionsRight);
watcherRight.start();
</code></pre>

We also need to remember to apply the `transform-box` property, so our eyes move around the center.

<pre><code class="language-css">.eye {
  transform-box: fill-box;
  transform-origin: center center;
}
</code></pre>

Let’s check out what we’ve got. With just a few lines of code and a tiny JavaScript library to do the heavy lifting, we’ve made the SVG element respond to the mouse position. Now that’s amazing, isn’t it?

{{< vimeo id="792276628" >}}

Bowtie and hat animation will be created in a very similar way. Let’s start with a hat and find it using the browser’s inspect element tool. The hat graphic consists of two path elements, so let’s group them.

<pre><code class="language-html">&lt;g class="hat"&gt;
  &lt;path class="cls-6" d="..." /&gt;
  &lt;path class="cls-9" d="..." /&gt;
&lt;/g&gt;
</code></pre>

We’ll apply the same `transform-box` property and add a `hat--active` class that will run the animation when applied.

<pre><code class="language-css">.hat {
  transform-box: fill-box;
  transform-origin: center bottom;
  cursor: pointer;
}

.hat--active {
  animation: hatJump 1s cubic-bezier(0, 0.7, 0.5, 1.25);
}

@keyframes hatJump {
  0% {
    transform: rotateZ(0) translateY(0);
  }

  50% {
    transform: rotateZ(-10deg) translateY(-50%);
  }

  100% {
    transform: rotateZ(0) translateY(0);
  }
}
</code></pre>

Finally, let’s set up a click event listener that applies an active class to the element and then removes it after the animation has finished running.

<pre><code class="language-javascript">const hat = document.querySelector(".hat");

hat.addEventListener("click", function () {
  if (hat.classList.contains("hat--active")) {
    return;
  }
  // Add the active class.
  hat.classList.add("hat--active");
  
  // Remove the active class after 1.2s.
  setTimeout(function () {
    hat.classList.remove("hat--active");
  }, 1200);
});
</code></pre>

We use the same trick with the bowtie element, only applying a different animation and class. Feel free to check out the [CodePen demo](https://codepen.io/AdrianBece/pen/gOjgQGw) for more details.

{{< vimeo id="792697095" >}}

Let’s move on to the coffee machine. Notice we don’t have any SVG element acting as a coffee on our SVG, so we’ll need to add it ourselves. You should **feel comfortable editing SVG markup** and we don’t even have to break a sweat here. Let’s make it easy for ourselves and find and copy the coffee machine’s pipe rectangle, which is similar to the coffee stream shape we want to have. We just have to change the color to brown and slightly adjust the dimensions.

<div class="break-out">

<pre><code class="language-html">&lt;!-- Pipe --&gt;
&lt;rect class="cls-12" x="137.81171" y="243.99883" width="6.21967" height="12.29272" transform="translate(281.84309 500.29037) rotate(-180)" /&gt;

&lt;!-- Copied and adjusted Pipe rect to act as a coffee --&gt;
&lt;rect class="coffee" x="139" y="243.99883" width="4" height="12.29272" transform="translate(281.84309 500.29037) rotate(-180)" fill="brown" /&gt;
</code></pre>
</div>

Like in the previous examples, let’s add active classes and their respective animation keyframes. We’ll compose the two animations and play around with duration and delay. 

<pre><code class="language-css">.lever, .coffee {
  transform-box: fill-box;
  transform-origin: center bottom;
}

.lever {   
  cursor: pointer; 
}

.lever--active {
  animation: leverPush 2.5s linear;
}

@keyframes leverPush {
  0% {
    transform: translateY(0);
  }
  8% {
    transform: translateY(50%);
  }
  90% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0);
  }
}

.coffee--active {
  animation: coffeeStream 2.4s 0.1s ease-out forwards;
}

@keyframes coffeeStream {
  0% {
    transform: translateY(0);
  }
  5% {
    transform: translateY(50%);
  }
  95% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(150%);
  }
}
</code></pre>

Let’s apply the active classes on click and remove them after the animation has finished running. And that’s it!

<pre><code class="language-javascript">const lever = document.querySelector(".lever");
const coffee = document.querySelector(".coffee");

lever.addEventListener("click", function () {
  if (lever.classList.contains("lever--active")) {
    return;
  }

  lever.classList.add("lever--active");
  coffee.classList.add("coffee--active");

  setTimeout(function () {
    lever.classList.remove("lever--active");
    coffee.classList.remove("coffee--active")
  }, 2500);
});
</code></pre>

Check out the complete example below, and, as always, feel free to play around with the animations and experiment with other elements, like the speech bubble or making the coffee machine’s lights blink while coffee is pouring out. Have fun!

{{< codepen height="480" theme_id="light" slug_hash="gOjzMap" default_tab="result" breakout="true" user="smashingmag" editable="true" data-editable="true" >}}See the Pen [Smashing cat interaction [forked]](https://codepen.io/smashingmag/pen/gOjzMap) by <a href="https://codepen.io/AdrianBece">Adrian Bece</a>.{{< /codepen >}}

## Conclusion

I hope that this article encourages you to play around and make some wonderful SVG animations and interactions and integrate this workflow into your day-to-day projects. We’ve used only a handful of tricks and CSS properties to create a whole variety of nice effects on the fly. With some extra time, knowledge, and effort, you can create some truly amazing and interactive graphics.

Feel free to reach out on [Twitter](https://twitter.com/AdrianBeceDev) and share your work. Happy to hear your thoughts and see what you come up with!

### References

- [SVG explained in 100 seconds](https://www.youtube.com/watch?v=emFMHH2Bfvo), Fireship
- “[How SVG Line Animation Works](https://css-tricks.com/svg-line-animation-works/)”, Chris Coyier
- [SVG specs](https://www.w3.org/TR/SVG2/), W3C
- “[`prefers-reduced-motion`: Sometimes less movement is more](https://web.dev/prefers-reduced-motion/)”, Thomas Steiner

{{< signature "vf, yk, il" >}}
