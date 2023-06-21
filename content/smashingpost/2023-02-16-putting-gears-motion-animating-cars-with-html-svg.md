---
title: 'Putting Gears In Motion: Animating Cars With HTML And SVG'
slug: putting-gears-motion-animating-cars-with-html-svg
author: paul-scanlon
image: >-
  https://files.smashing.media/articles/animate-race-cars-using-html/putting-gears-motion-animating-cars-with-html-svg.jpg
date: 2023-02-16T13:00:00.000Z
summary: >-
  SVG `<animateMotion>` provides a way to define how an element moves along a motion path. In this article, Paul Scanlon shares an idea of how to use it by animating race cars in an infinite loop as easy as one-two-three!
description: >-
  SVG `<animateMotion>` provides a way to define how an element moves along a motion path. In this article, Paul Scanlon shares an idea of how to use it by animating race cars in an infinite loop as easy as one-two-three!
disable_ads: true
disable_panels: true
categories:
  - Animation
  - HTML
  - SVG
---

Hello! And if you like HTML, you’ve come to the right place! 

I love HTML. As an old-school front-end developer, I think it’s a hugely underrated skill. I’ve been writing HTML since ~2005, and today the browser alone can almost do all the things Flash could do nearly two decades ago!

One such *trick* HTML now has is called [`<animateMotion>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion) &mdash; those familiar with Flash will remember this as *The Motion Guide*. I found this video from 14 years ago, but the method existed for a while before that:

{{< youtube id="owojvNuuOxg" caption="Flash Tutorial - 5 - Motion Guide Layers (<a href='https://www.youtube.com/watch?v=owojvNuuOxg'>Watch on YouTube</a>)" >}}

 The idea is, you create a path for elements to follow… and that’s it! 

Here’s an example of what you can do with `<animateMotion>`:

- 🚀 [Live Preview](https://animate-motion-race-cars.vercel.app/)
- ⚙️ [Repository](https://github.com/PaulieScanlon/animate-motion-race-cars)

If you take a look at the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion#example), you’ll see a simple example of a red circle following a path on an infinite loop. The race cars in the live preview follow the same simple rules, and it works just like this!

<figure><a href="https://animate-motion-race-cars.vercel.app/"><img src="https://smashing-files.ams3.digitaloceanspaces.com/articles/animate-race-cars-using-html/race-cars-animation.gif" width="600" height="374" alt="Three animated cars in blue, green and pink following dashed lines" /></a><figcaption>A simple example of what can be achieved using <code>animateMotion</code>. (<a href='https://animate-motion-race-cars.vercel.app/'>See animation</a>)</figcaption></figure>

{{% feature-panel %}}

## SVG Using `animateMotion`

Here’s a [simplified version](https://animate-motion-race-cars.vercel.app/simple-version.html) which I'll use to explain some of the finer details.

**Note**: *I’ve removed some of the path values for brevity, but you can see  `src` for the below snippet at [simple-version.html](https://github.com/PaulieScanlon/animate-motion-race-cars/blob/main/simple-version.html).)*

<div class="break-out">

<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Simple Example&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;main&gt;
      &lt;svg viewBox="0 0 307 184" xmlns="http://www.w3.org/2000/svg"&gt;
        &lt;g id="track"&gt;
          &lt;g id="track-lines"&gt;
            &lt;path fill="none" stroke="#facc15" d="M167.88,111.3..." /&gt;
          &lt;/g&gt;

          &lt;g id="pink-car"&gt;
            &lt;animateMotion dur="4s" repeatCount="indefinite" rotate="auto" path="M167.88,111.3..." /&gt;
            &lt;path fill="#EC4899" d="M13.71,18.65c0.25-0.5..." /&gt;
          &lt;/g&gt;
        &lt;/g&gt;
      &lt;/svg&gt;
    &lt;/main&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
</div>

The first thing to look at is the `<g>` element with the `id` of `track-lines`. This is the yellow dashed line that represents the path the car will follow.

You’ll also see another `<g>` element with the `id` of `pink-car`. Within this group is the `<animateMotion>` element. It has an attribute of `path`. The numbers used to form this path are the same as the numbers that form the `track-lines`. An `<animateMotion>` element is invisible, and its only purpose is to provide a path for an element to follow.

Speaking of which, below the `<animateMotion>` element is another `<path>` element, this is the pink car, and it will follow the path of its nearest neighbor.

## `animateMotion` Attributes

There’s some additional attributes that the `<animateMotion>` element accepts; these are as follows:

- `dur`: The duration of the animation.
- `repeatCount`: The number of times the animation should loop.
- `rotate`: This can be considered as an orientation to the path. It will ensure the element that’s animating around the path always faces the direction of travel.
- `path`: As explained, this is the actual path an element will follow.  

The [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion#example) show the `<animateMotion>` element as a child of an Svg `<circle>` shape e.g:

<pre><code class="language-html">&lt;circle r="5" fill="red"&gt;
  &lt;animateMotion
    dur="10s"
    repeatCount="indefinite"
    path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" /&gt;
&lt;/circle&gt;
</code></pre>

Whilst this approach works for shapes, it will only work if the element can accept a child. The SVG path element can’t, so wrapping everything in the `<g>` element allows HTML to work out where the coordinate system should start and which elements should follow the path. Sneaky ay!

And that’s it. I designed the track and the other elements seen on the [preview link](https://animate-motion-race-cars.vercel.app/) in Adobe Illustrator and exported the whole thing as an SVG. I then did a little bit of manual refactoring to ensure the cars were adjacent to an `<animateMotion>` element. Et voilà! A race track!

{{% ad-panel-leaderboard %}}

## Accessibility

One small snag, the `<animateMotion>` element doesn’t natively observe [prefers-reduce-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion). To work around this in the preview I've added a [media query](https://github.com/PaulieScanlon/animate-motion-race-cars/blob/main/index.html#L17) that sets any element with the class name of `car` to `display: none;`. Not ideal, but it is at least motion safe!

I hope you’ve enjoyed this post, and if you have any questions, please come and find me on Twitter. [@PaulieScanlon](https://twitter.com/PaulieScanlon), oh and if you’re a better illustrator than I am, please, feel free to re-design the race track and cars, and I’ll be happy to convert it into code!  

See you around the internet!

### Further Reading On SmashingMag

- “[How To Build A Real-Time Multi-User Game From Scratch](https://www.smashingmagazine.com/2021/10/real-time-multi-user-game/),” Martin Grubinger
- “[Easy SVG Customization And Animation: A Practical Guide](https://www.smashingmagazine.com/2023/01/svg-customization-animation-practical-guide/),” Adrian Bece
- “[Composable CSS Animation In Vue With AnimXYZ](https://www.smashingmagazine.com/2021/10/composable-css-animation-vue-animxyz/),” Ejiro Asiuwhu
- “[A Guide To Keyboard Accessibility: HTML And CSS (Part 1)](https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/),” Cristian Díaz

{{% ad-panel-leaderboard %}}

{{< signature "yk, il" >}}
