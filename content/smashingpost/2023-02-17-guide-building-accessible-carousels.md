---
title: 'A Step-By-Step Guide To Building Accessible Carousels'
slug: guide-building-accessible-carousels
author: sonja-weckenmann
image: >-
  https://files.smashing.media/articles/guide-building-accessible-carousels/guide-building-accessible-carousels.jpg
date: 2023-02-17T12:00:00.000Z
summary: >-
  Most carousels come along with usability and accessibility issues. To avoid these issues, this article addresses step-by-step design considerations as well as semantic requirements for carousels to be accessible. It is intended to create an in-depth understanding of the implementation and its impact on users. 
description: >-
  Most carousels come along with usability and accessibility issues. To avoid these issues, this article addresses step-by-step design considerations as well as semantic requirements for carousels to be accessible. It is intended to create an in-depth understanding of the implementation and its impact on users. 
categories:
  - CSS
  - Guides
  - Accessibility
  - User Experience
---

You can spot them on every other homepage: carousel widgets with auto-rotating content. Those who use them want to show more content within a limited space. At the same time, they aim to present the most important messages as prominently as possible. However, if design and development do not receive proper attention, you will be at the highest risk of creating usability and accessibility issues.

This particularly affects people with cognitive, motor, or visual impairments, for whom using the complex design pattern is usually even more challenging. Whether you call it an "eye candy" or "devil’s spawn", if you want to implement the carousel in a user-friendly and accessible way, a whole range of requirements is to be considered.

## “Should I Use A Carousel?”

As widely used as they are, carousel widgets have a bad reputation among UX professionals. They are ignored by users ([Nielsen Norman Group](https://www.nngroup.com/articles/auto-forwarding/)), only 1% interact with a carousel at all, and 89% of them only with the first slide ([Eric Runyon](https://erikrunyon.com/2013/07/carousel-interaction-stats/ )). Jared Smith even responds to the question ["Should I use A Carousel?"](https://shouldiuseacarousel.com) by saying, "Seriously, you really shouldn't." Others state that there isn’t one answer. You have to consider [various factors](https://www.smashingmagazine.com/2015/02/carousel-usage-exploration-on-mobile-e-commerce-websites/#considerations), such as function, design, platform (desktop or mobile) and, most importantly, context. For whatever reason you include a carousel on a website, make sure it is user-friendly and accessible.

## Accessible Implementation

For a carousel to be accessible, it is essential that all users can perceive the widget and its components and that they can easily navigate it using a mouse, touch gestures, a keyboard, a screen reader, and any other assistive technology. The rotation of the slides must not interfere with users' ability to operate the carousel or use the website as a whole.

The W3C’s WAI-ARIA working group provides guidance on implementing an accessible carousel in its [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/). This article is based on those recommendations and wants to create a profound understanding of elements and ARIA attributes applied and their impact on users. 

### Auto-Rotating

I assume we have all been there at some point: Constantly changing content can be rather annoying. For some people, however, uncontrolled rotation can be absolutely critical: 

- **People need different times to read content.**  
If the available time is not enough, auto-advancing carousels can become very frustrating. It’s not very satisfying to just be able to skim the text before new content appears without any request.
- **Some people, especially people with cognitive impairments such as attention deficit disorder, may experience moving content distracting.**  
The movement could prevent users from concentrating and interacting with the rest of the website. People within the autistic spectrum may even have to leave such a page entirely.
- **Screen reader users may not be aware of the rotation.**  
They might read a heading on "slide 1" and execute the keyboard command for "read next item." Instead of hearing the next element on "slide 1", the screen reader announces a text from "slide 2" &mdash; without the person knowing that the element just read out is from an entirely new context. 

WCAG 2.1, therefore, requires the possibility to stop movement ([2.2.2 Pause, Stop, Hide](https://www.w3.org/TR/WCAG21/#pause-stop-hide)).

- **Add a "Pause" or "Stop" button if you cannot give up auto-rotation at all.**  
The "Pause" button is the minimum solution (if the movement does not end automatically after 5 seconds).
In addition, usability experts recommend the following: 
- **Pause auto-rotation as long as a slide is being hovered.**  
There is usually a correlation between the mouse position and the user’s interest in a piece of content. Don’t risk a slide change a few milliseconds before a person activates a link and then ends up on the wrong page and, to make things worse, not realizing that this was not the intended one.
- **Stop the rotation permanently when users are setting focus on interactive elements using a keyboard or interacting with the carousel.**  
An action such as actively changing slides also indicates that the user might be interested in the content. People may temporarily explore other parts of the page but possibly want to come back. Furthermore, you make keyboard navigation easier if the carousel stops as soon as a control receives focus.

{{% feature-panel %}}

### Visibility

For all of us, user interface elements are intuitively easier to use if we can perceive them well. For people with visual impairments, however, this aspect is crucial. 

- **Ensure sufficient contrast.**  
Most often, icons are used to indicate the controls: simple arrows for advancing the slides as well as the widely used dots for selectively fading in. However, these icons often have poor contrast against the background, especially when placed on images. The easiest way to avoid contrast issues is to position the icons outside the slides.
- **Provide a visible focus indicator.**  
People navigating with a keyboard need to be able to see which interactive element they are currently focusing on. Often design merely (if at all) provides a slight and barely discernible change in color of the controls. If color is the only way to indicate focus, both colors (the one used for non-focused and focused state) must meet at least a contrast ratio of 3.0:1 with each other. [This minimum contrast requirement](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) also applies to the icon against its background and to other kinds of focus indicators (e.g., a border that indicates the focus state of a button). 
- **The size of the controls affects their visibility as well.**  
Besides, with a reasonable target size combined with sufficient distance between interactive elements, you reduce the risk of accidentally activating a nearby button or a linked slide. This not only benefits people with limited dexterity but also minimizes errors when using mobile devices.
- **Indicate the current position within the set of slides.**  
It is not the only option, but often this is done by highlighting one of several progress dots. To ensure that people with color deficiencies can access visual information, you must not rely on color alone but use a color-independent indicator, for example, a filled and unfilled dot.

### Activation With A Simple Pointer Input

Many people are used to moving slides on touch devices by swiping. But there are also users who cannot perform this gesture because of their impairment or because of the assistive technology they use. In addition to swiping, enable users with an alternative way of navigating [(WCAG 2.5.1 Pointer Gestures)](https://www.w3.org/TR/WCAG21/#pointer-gestures).

Provide interaction with a simple pointer input (e.g., simple click or tap). That means if there are no slide picker controls to display content directly, you need to implement "Previous" and "Next" buttons.

### Structure, Semantics And Labelling

The carousel widget is designed primarily for two-dimensional, visual use. For screen reader users who do not see the carousel as a whole, it is much harder to understand the composition of controls and content. These users have different perspectives when [using a website](https://techblog.topdesk.com/accessibility/how-screen-reader-users-read-the-web/). They explore content linearly, tab through interactive elements, and use shortcuts for navigation. The challenge is to provide a meaningful structure and semantics and inform users about controls and slides in a way that enables them to build a mental model of the widget. Use semantic markup for different sections, controls, and content and proper labeling to ensure good orientation.

#### Regions And Groups

Using the HTML element [`<section>`](https://www.scottohara.me/blog/2021/07/16/section.html) (or [`role="region"`](https://www.w3.org/TR/wai-aria-1.1/#region)) with an [accessible name](https://www.tpgi.com/what-is-an-accessible-name/), you can set a generic landmark and thus mark smaller regions of a page. [Landmarks](https://www.scottohara.me/blog/2018/03/03/landmarks.html) provide a way to identify the structure of a web page to screen reader users and help them with orientation. Using a screen reader, you can display these sections in a table of contents and use specific [keyboard shortcuts for landmarks](https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/at.html) to move focus to the corresponding content.

When navigating to the landmark, the assistive technology announces the name and type of the section, for example: "[name] &mdash; region". In browse mode (exploring content with arrow keys), the screen reader tells users when they enter or exit a region. They will hear something like "[name] &mdash; region" or "out of region". (This output in browse mode is currently well-supported by the screen reader NVDA, but unfortunately, with JAWS, users have to set [screen reader settings](https://webaim.org/discussion/mail_message?id=47461) accordingly.)

[`role="group"`](https://www.w3.org/TR/wai-aria-1.1/#group) is intended to form a logical set of items as a group. Since it is not a landmark, the group is not included in a landmark listing displayed by the user. For that reason, use this role in contrast to `role="region"` for less important sections of a page. You could use `role="group"`, for example, to [group (custom) form controls](https://www.w3.org/WAI/tutorials/forms/grouping/#associating-related-controls-with-wai-aria) (compare `<fieldset>` and `<legend>` in HTML) but it is not limited to this.

With `role="group"`, it is also necessary to use the role with an accessible name. The screen reader will convey the boundaries of the group by announcing something like "[name] &mdash; grouping" or "out of grouping," and the assistive technology will inform users about the start and end of the group (in this case also JAWS in the default setting).

The following applies to `role="region"` and `role="group"`: When the first interactive element within the region or group receives focus, the screen reader will announce its name and role, plus the role and label of the focused control.

{{< rimg breakout="true" href="https://files.smashing.media/articles/guide-building-accessible-carousels/accessible-carousel%28en%29.svg" src="https://files.smashing.media/articles/guide-building-accessible-carousels/accessible-carousel%28en%29.svg" width="800" height="" sizes="100vw" caption="The controls of the carousels are often shown below the carousel, but it is helpful to put them at the beginning of the focus order. (Image credit: <a href='https://tollwerk.de'>tollwerk GmbH</a>, 2022, All rights reserved) (<a href='https://files.smashing.media/articles/creating-accessible-carousels/accessible-carousel%28en%29.svg'>Large preview</a>)" alt="A landscape frame with the caption “Carousel container” frames further shapes: It contains the “slide container” and below is an area for “controls.” Five indicated round buttons represent the different control elements. To the right and left of the slide container, buttons for manually rotating the slides are indicated. The slide container says, “Slide with contents.”" >}}

{{% ad-panel-leaderboard %}}

#### The Carousel Container

Currently, there is no specific HTML element or ARIA role to mark up a carousel. However, you can still convey semantic information to make the existence of the carousel, its sections, and the meaning of the controls clear and understandable to non-visual users. That will help them better adapt to the widget and its interaction patterns.

##### role="region|group" + accessible name

An easy way to make non-visual users aware of the carousel is to use a landmark or a group role: To get there, use the `<section>` element (or `role="region"`) or `role="group"` for the container that encompasses all the carousel elements (including the carousel controls and slides). In addition, provide an accessible name that identifies the carousel as such. 

Carousel container marked with a landmark:

<pre><code class="language-html">&lt;div role="region" aria-label="Carousel"&gt;
    &lt;!-- Slides and controls --&gt;
&lt;/div&gt;
</code></pre>

Screen reader output when encountering the widget: „Carousel &mdash; region“ 

The W3C Authoring Practices go beyond this basic markup and recommend using the [`aria-roledescription`](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) attribute:

##### role="region|group" + aria-roledescription + accessible name

With `aria-roledescription`, you create an even more specific output for screen reader users. You thus define the meaning of the container more precisely.

Code sample (HTML): Carousel container marked with a landmark with a specified meaning

<div class="break-out">

 <pre><code class="language-html">&lt;div role="region" aria-roledescription="carousel" aria-label="Design patterns"&gt;
    &lt;!-- Slides and controls --&gt;
&lt;/div&gt;
</code></pre>
</div>

Screen reader output: "Design patterns &mdash; carousel" instead of (without using `aria-roledescription`) "Design patterns &mdash; region." In the previous example, we have seen a more generic accessible name ("Carousel"). With `role="region",` this has resulted in the output: "Carousel &mdash; region".

`aria-roledescription` changes the way a screen reader announces the role of an element. This allows authors to define a localized and human-readable description for a role. The screen reader announces the value of `aria-roledescription` (a string provided by the author) instead of the original role. It overrides the role to which the attribute is applied. `aria-roledescription` should only be used on elements that have a valid implicit or explicit (ARIA) role. 

Back to our carousel, this means instead of region or grouping (you can also use `role="group"` instead of `role="region"`), the value of `aria-roledescription` is read out by the assistive technology. Note: If the `aria-roledescription` property is set to "carousel", you should not set the `aria-label` property to "carousel" because this would be redundant.  

The ARIA specification recommends the attribute mainly for clarifying the purpose of non-interactive container roles such as `group` or `region`. Otherwise, use it with great caution:

<blockquote>“Do not use <code>aria-roledescription</code> to change the way a role is announced, if it will prevent the user from knowing what to do with it.”<br /><br />&mdash; <a href="https://tink.uk/using-the-aria-roledescription-attribute/">Léonie Watson</a></blockquote>

#### The Slide Container

Just as you communicate the boundaries of the carousel as a whole, you can do the same for the slides. Each slide represents simply a smaller entity within the "carousel" composite.

##### role="group" + aria-roledescription + accessible name

Container for slides marked as "group" with a specified meaning:

<div class="break-out">

 <pre><code class="language-html">&lt;div role="group" aria-roledescription="slide" aria-labelledby="carousel_item-1_heading"&gt;
  &lt;h2 id="carousel_item-1_heading"&gt;Modal dialogs&lt;/h2&gt;
  &lt;!-- Some more content --&gt;
&lt;/div&gt;
</code></pre>
</div>

Screen reader output: „Slide &mdash; heading level 2 &mdash; Modal dialogs“

In this example, the heading of the slide serves as the accessible name of the group. The `aria-labelledby` property is set to the `id` of the heading. You could also use the `aria-label` attribute to convey the position within the set of slides, for example, "1 of 3". In particular, that makes sense if no unique name is available to identify the slide.

Again, if you set `aria-roledescription` to "slide", the `aria-label` property should not be set to "slide" to avoid redundancy.

#### The Slides

Slides that are not visible should be hidden, not only visually but from all users (including users of assistive technology). You can either use CSS (`display: none` or `visibility: hidden`) or the HTML `hidden` attribute.

If you truly hide the slides that are not visible, you should not use list markup for the whole set of slides. Screen readers do announce the number of list items (which may seem helpful) but will ignore hidden ones. Concerning the carousel, list markup would not result in an output of the total number of list items but just the visible ones. If only one slide is visible, that wouldn’t be very helpful.

#### The Container For The Controls

What about the container for the controls? It also encompasses a set of items. Because of this, it is reasonable to apply `role="group"` to it. And again, the group needs an appropriate group name.

##### role="group" + accessible name

Container for controls marked as "group" with a specified meaning:

<pre><code class="language-html">&lt;div role="group" aria-label="Slide controls"&gt;
    &lt;!-- Slide controls --&gt;
&lt;/div&gt;
</code></pre>

Screen reader output: „Slide controls &mdash; grouping“

In this context, the accessible name (the group name) reflects the purpose of the controls, for example, "Slide controls" or "Choose a slide".

The ARIA Authoring Practices refer to this implementation as a ["grouped carousel"](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/#grouped-carousel-elements).  Another approach is described as ["tabbed carousel"](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/#tabbed-carousel-elements). Following the "tabbed" pattern, you would use `role="tablist"`, `role="tab"` for the controls and  `role="tabpanel"` (instead of `role="group"`) for the slide container. Don’t use `aria-roledescription` in this case. The appropriate ARIA properties are specified in the [tab pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/#wai-aria-roles-states-and-properties-22).

#### The Controls

Slide picker controls allow users to display a specific slide. They visually present the total number of slides and indicate the current position within the set. It is rather popular to use "dots" for that purpose.

##### Operable Keyboard Controls

All controls must be operable with the keyboard. Use the native `button` element for controls of the grouped carousel. That involves the "Previous" and "Next" buttons, the "Pause" button, and the slide picker controls.

If you cannot use native HTML, add semantic information by applying an explicit ARIA role (`role="button"`) to the clickable `div` or `span` element. Use `tabindex="0"` to include the element in the tab sequence. Furthermore, you need to incorporate JavaScript that provides interactions expected for a button (activation with `Space` and `Enter` ). Be aware that ARIA roles do not cause browsers to provide keyboard behaviors.

**Grouped controls**

<pre><code class="language-html">&lt;div role="group" aria-label="Slide controls"&gt;
  &lt;button aria-label="Show slide 1 of 4"&gt; 
      &lt;!-- SVG icon --&gt;
  &lt;/button&gt;
  &lt;!-- Some more controls --&gt;
&lt;/div&gt;
</code></pre>

Screen reader output: „Slide controls &mdash; grouping &mdash; Show slide 1 of 4 &mdash; button“

##### The Accessible Name Of The Controls

Choose an appropriate accessible name (text alternative) in context with the group name. Regarding the above example, the screen reader would announce: "Slide controls &mdash; grouping &mdash; Show slide 1 of 4" &mdash; button" when focusing on the first control in the group (or "Slide controls &mdash; grouping &mdash; Pause &mdash; button" if the first control is a "Pause" button). 

Assuming the group name is "Choose a slide," then the heading of the corresponding slide would also be a reasonable label for the button in this context. Instead of using the `aria-label` attribute, you could also specify the label using [visually hidden text](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html).

Along with the group name and the slide picker elements, the "Previous," "Next," and "Pause" buttons need an accessible name. That means do not forget about the text alternatives for these icons either.

##### Semantic Markup Of The Active Control

Do not just indicate visually but also semantically which control does represent the currently displayed slide. You can use `aria-disabled="true"` for this purpose. In this case, `aria-disabled` is preferable to the HTML attribute `disabled`. Unlike `disabled`, a button with an `aria-disabled` attribute is still included in the tab sequence of the page. You may also use the [`aria-current`](https://www.w3.org/TR/wai-aria-1.1/#aria-current) property set to `"true"`.

{{% ad-panel-leaderboard %}}

### Focus Order

For a webpage to be accessible using a keyboard or assistive technology, it is important to ensure a [proper focus order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html). That is the order in which you tab through interactive elements. An appropriate order generally means that it follows the visual flow of the page. Users can navigate in a logical and predictable way without loss of orientation. 

By default, the tab order is set by order of the elements in the source code (more precisely, in the DOM). That means that the order in which you write the HTML will affect the focus order when navigating with the keyboard. The DOM order also affects the reading order, that is, the order in which screen reader users in browse mode linearly explore content using the arrow keys (non-interactive content included). 

The DOM and, with it, the focus sequence should match as closely as possible to the visual order of the page. In this way, sighted keyboard users can easily follow the sequence.

Content changes that precede the current focus cause issues with sequential navigation since screen reader users will not know about such changes (apart from dynamically displayed status messages implemented using [live regions](https://www.scottohara.me/blog/2022/02/05/are-we-live.html)). Users need to navigate backwards to reach those interactive elements, which makes navigation more difficult.

#### A Proper And Understandable Focus Order For A Carousel

Many carousel implementations are intended to visually display the controls below the slides: 

1. Previous
2. **Slide**
3. Next
4. Pause
5. **Slide Controls**

If this order matches the order of the elements in the DOM, both the activation of "Next" and the activation of the slide controls will cause a content change (display of a new slide) before the triggering control. That is, users need to navigate backwards if they want to explore the content of the slide with the screen reader or follow a link on the slide.

##### DOM Order

The focus order is easier to use, and the reading order is more meaningful if the controls (at least the "Pause" button and the slide controls) are positioned in the DOM **before the changing slides**. If you still want the controls to be visually positioned below the carousel, use CSS for this purpose. When in doubt, a good focus and reading order for the carousel is more important than the optimal conformity with the visual order:

1. Pause
1. **Slide controls**
1. Previous
1. **Slide**
1. Next

or 

1. Pause
1. **Slide controls**
1. Previous
1. Next
1. **Slide**

Notice that people working with magnification software will locate the "Pause" button more quickly if it is also visually positioned at the beginning of the carousel. They do not see the carousel as one (depending on the magnification level) but might explore the content by moving the keyboard focus or the mouse pointer, which results in repositioning their viewport.

##### Pause And Previous/Next Buttons

When activating the Pause / Play and Previous / Next control, the focus has to remain on the button. That allows sighted keyboard users to repeatedly press the button and perceive the changing content at the same time.

##### The Keyboard Navigation For "Tabbed Carousels"

If you prefer following the "tabbed carousel" pattern, allow users to [navigate with arrow keys within the set of controls](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/#keyboard-interaction-21). In addition, ARIA markup must correspond to the tab pattern (unlike the "grouped carousel") to make screen reader users understand the expected operation based on the information announced by the screen reader. 

##### Working Example

Complete carousel widget:

<div class="break-out">

 <pre><code class="language-html">&lt;div role="region" aria-roledescription="carousel" aria-label="Tips & Techniques"&gt;
  &lt;div role="group" aria-label="Slide controls"&gt;
    &lt;button aria-label="Stop auto-rotation"&gt;
      &lt;!-- SVG icon --&gt;
    &lt;/button&gt;
    &lt;button aria-disabled="true"&gt;
      &lt;span class="hide-element"&gt;Show slide 1 of 3: Hiding Accessibly&lt;/span&gt;
      &lt;!-- SVG icon --&gt;
    &lt;/button&gt;
    &lt;button aria-disabled="false"&gt;
      &lt;span class="hide-element"&gt;Show slide 2 von 3: Accessible Contrasts&lt;/span&gt;
      &lt;!-- SVG icon --&gt;
    &lt;/button&gt;
    &lt;button aria-disabled="false"&gt;
      &lt;span class="hide-element"&gt;Show slide 3 von 3: Semantics, WAI-ARIA and Assistive Technologies&lt;/span&gt;
      &lt;!-- SVG icon --&gt;
    &lt;/button&gt;
    &lt;button aria-label="Previous slide"&gt;
      &lt;!-- SVG icon --&gt;
    &lt;/button&gt;
    &lt;button aria-label="Next slide"&gt;
      &lt;!-- SVG icon --&gt;
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div role="group" aria-roledescription="Slide" aria-labelledby="carousel-item-1__heading" id="carousel-item-1"&gt;
    &lt;h2 id="carousel-item-1__heading"&gt;Hiding accessibly&lt;/h2&gt;
    &lt;!-- Further slide contents --&gt;
  &lt;/div&gt;
  &lt;div hidden role="group" aria-roledescription="Slide" aria-labelledby="carousel-item-2__heading" id="carousel-item-2"&gt;
    &lt;h2 id="carousel-item-2__heading"&gt;Accessible Contrasts&lt;/h2&gt;
    &lt;!-- Further slide contents --&gt;
  &lt;/div&gt;
  &lt;div hidden role="group" aria-roledescription="Slide" aria-labelledby="carousel-item-3__heading" id="carousel-item-3"&gt;
    &lt;h2 id="carousel-item-3__heading"&gt;Semantics, WAI-ARIA and Assistive Technologies&lt;/h2&gt;
    &lt;!-- Further slide contents --&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
</div>

## Wrapping Up

1. Add a button to pause or stop all movement.
2. Ensure that controls have sufficient contrast (meet WCAG’s color contrast requirements).
3. Provide a visible focus indicator.
4. Don’t rely solely on swiping. In addition, provide interaction with a simple pointer input (e.g., simple click or tap).
5. Provide semantic markup and labeling to ensure that screen readers can identify the carousel as a whole, the slides, and the set of controls. For the  ["grouped carousel"](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/#grouped-carousel-elements), use `role="group"` with an `aria-label` or `aria-labelledby` attribute. For the carousel container, you can also use a landmark (`role="region"` with an accessible name) instead of `role="group"`.
6. The `aria-roledescription` attribute allows you to specify the meaning of the container tagged with `role="region"` or `role="group"`.
7. If you go for the ["tabbed carousel"](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/#tabbed-carousel-elements), use the ARIA attributes specified in the tab pattern. Ensure keyboard navigation within the set of "tabs" can be operated with the arrow keys.
8. All controls must be keyboard operable and require meaningful text alternatives for icons.
9. Ensure a proper focus order. It is recommended to position at least "Pause" and slide controls in the DOM before the slides, even if this order may differ slightly from the visual tab order.

## Conclusion

This article describes one way of implementing carousel widgets in an accessible way. Even W3C working groups provide different approaches in the [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) and the [W3C Accessibility Tutorial](https://www.w3.org/WAI/tutorials/carousels/) (see also a [discussion on GitHub](https://github.com/w3c/wai-tutorials/issues/594) and the [comment by Jason Web](https://dev.to/ickers/comment/1hbid) regarding user testing of "tabbed carousels" and focus management). The important thing is:

- Be familiar with semantic markup options and their impact on users.
- The objective is to provide a predictable and understandable way of operating the widget, also for non-visual users.
- Test with a keyboard and a screen reader. This will show most clearly whether you have met your goal or not.
- If you do not have the resources to implement a carousel in an accessible way or if it is just the wrong pattern, better explore [alternatives](https://www.mightybytes.com/blog/5-alternatives-using-carousel-on-homepage/), and you might notice the [benefits](https://www.smashingmagazine.com/2016/07/ten-requirements-for-making-home-page-carousels-work-for-end-users/#an-alternative-to-carousels) they entail.

<blockquote>“Carousels are complex components, and making complex components accessible adds more complexity.”<br /><br />&mdash; <a href="https://www.skillcast.com/blog/online-accessibility-faqs">Léonie Watson</a></blockquote>

**Note**: *This article was first published in German on [tollwerk.de](https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/barrierefreie-karussells) in April 2022.*

## Useful Resources

- “[ARIA Authoring Practices Guide (APG), Carousel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/),” W3C Web Accessibility Initiative
- “[How To Build A More Accessible Carousel Or Slider](https://dev.to/jasonwebb/how-to-build-a-more-accessible-carousel-or-slider-35lp),” Jason Web
- “[The Unbearable Inaccessibility Of Slideshows](https://www.sitepoint.com/unbearable-accessible-slideshow/),” Gian Wild
- “[W3C Accessibility Tutorial](https://www.w3.org/WAI/tutorials/carousels/),” W3C Web Accessibility Initiative (WAI)
- “[Using The `aria-roledescription` Attribute](https://tink.uk/using-the-aria-roledescription-attribute/),” Léonie Watson
- “[Designing A Better Carousel UX](https://www.smashingmagazine.com/2022/04/designing-better-carousel-ux/),” Vitaly Friedman
- “[Carousel/Slider Design Best Practices (with examples)](https://www.youtube.com/watch?v=QoWY4WLv-74),” Vitaly Friedman (Video)
- “[5 Alternatives To Using A Carousel On Your Website Homepage](https://www.mightybytes.com/blog/5-alternatives-using-carousel-on-homepage/),” Mightybytes
- “[More Alternatives To Using A Carousel On Your Website](https://www.mightybytes.com/blog/more-alternatives-to-carousels-on-website/),” Mightybytes

{{< signature "vf, il" >}}
