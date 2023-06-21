---
title: 'A Guide To Accessible Form Validation'
slug: guide-accessible-form-validation
author: sandrina-pereira
image: >-
  https://files.smashing.media/articles/guide-accessible-form-validation/guide-accessible-form-validation.jpg
date: 2023-02-27T14:00:00.000Z
summary: >-
  Each time we build a field validation from scratch, accessibility doesn’t come out of the box. In this guide, Sandrina breaks down what we need to take into consideration, so that nobody gets stuck on an inaccessible invalid field.
description: >-
  Each time we build a field validation from scratch, accessibility doesn’t come out of the box. In this guide, Sandrina breaks down what we need to take into consideration, so that nobody gets stuck on an inaccessible invalid field.
categories:
  - Guides
  - Accessibility
  - Usability
  - User Experience
---

When it comes to form validation, we can explore it from two perspectives: usability and accessibility. “What’s the difference between usability and accessibility?” you may ask. Let’s start from there.

### Usability

Usability is about improving a given action until it’s as easy and delightful as possible. For example, making the process of fixing an invalid field easier or writing better descriptions so the user can fill the field without facing an error message.

To get a really good grasp of the challenges in this process, I highly recommend you to read the deep-dive “[Designing better inline validations UX](https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/)” from Vitaly. There, you’ll learn about the different approaches to validate a field and what are the caveats and trade-offs of each one.

### Accessibility

Choosing the best UX approach is just half of the challenge. The other half is ensuring that any person knows the field is invalid and easily understands how to fix it. That’s what I’ll explore through this guide.

You can look at ‘Accessibility’ and ‘Usability’ as two equally important universes with their own responsibilities. Accessibility is about ensuring anyone can *access* the content. Usability is about how easy it is to use the website. Once overlapped will take ‘User Experience’ to its best.

{{< rimg href="https://files.smashing.media/articles/guide-accessible-form-validation/accessibility-usability-circles-create-ux.png" src="https://files.smashing.media/articles/guide-accessible-form-validation/accessibility-usability-circles-create-ux.png" width="800" height="507" sizes="100vw" caption="A visual representation of two circles (Accessibility and Usability) that intersect in the middle creating UX. (<a href='https://files.smashing.media/articles/guide-accessible-form-validation/accessibility-usability-circles-create-ux.png'>Large preview</a>)" alt="A visual representation of two circles (Accessibility and Usability) that intersect in the middle creating UX" >}}

With these two concepts clarified, we are now ready to dive into accessible validations.

### Table Of Contents

<ol>
  <li><a href="#cccessibility-in-forms">Accessibility In Forms</a></li>
  <li><a href="#the-field-instructions">The Field Instructions</a></li>
  <li><a href="#required-fields">Required Fields</a></li>
  <li><a href="#invalid-fields">Invalid Fields</a></li>
  <li><a href="#moments-of-validation">Moments Of Validation</a></li>
  <li><a href="#testing-field-validations">Testing Field Validations</a></li>
  <li><a href="#things-to-keep-in-mind-for-accessible-fields">Things To Keep In Mind</a></li>
</ol>

## Accessibility In Forms

Before we get into validation, let me recap the accessibility fundamentals in forms:

- **Navigation**  
The form can be navigated using only the keyboard, so people who don’t use a mouse can still fill and submit the form. This is mostly about setting a [compliant focus indicator](https://www.sarasoueidan.com/blog/focus-indicators/) for each form control.
- **Context**  
Each form field must have an [accessible name (label)](https://css-tricks.com/html-inputs-and-labels-a-love-story/), so people who use assistive technologies can identify each field. For example, screen readers would read a field name to its user.

### Screen Readers In Forms

Similar to browsers, screen readers (SR) behave slightly differently from each other: different shortcuts, different semantic announcements, and different features support. For example, NVDA works better with Firefox, while VoiceOver works best with Safari, and both have slightly different behaviors. However, this shouldn’t stop us from building the common solid foundations that are strongly supported by all.

A while ago, I asked on Twitter [how screen reader users navigate forms](https://twitter.com/a_sandrina_p/status/1382811701796614148). Most prefer to `Tab` or use special shortcuts to quickly jump through the fields, but oftentimes can’t do it. The reason is that we, developers, forget to implement those fields with screen readers in mind most of the time. 

Currently, many of the field validations can’t be solved with native HTML elements, so we are left with the last resource: ARIA attributes. By using them, Assistive Technologies like screen readers will better describe a given element to the user.

Through the article, I’m using VoiceOver in macOS Catalina for all the scenarios. Each one includes a Copeden demo and a video recording, which hopefully will give you a better idea of how screen readers behave in forms, field descriptions, and errors.

## The Field Instructions

### Field Description

The field label is the first visual instruction to know what to fill in, followed by a description when needed. In the same way sighted users can see the description (assuming a color contrast that meets [WCAG 1.4.3 Contrast Minimum](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)), the SR users also need to be aware of it.

To do so, we can connect the description to the input by using the `aria-describedby` attribute, which accepts an `id` pointing to the description element. With it, SR will read the description automatically when the user focuses on the field input.

<pre><code class="language-html">&lt;label for="address"&gt;Your address&lt;/label&gt;
&lt;input id="address" type="text"</code> <code style="font-weight: bold;">aria-describedby="addressHint"/&gt;</code>
<code class="language-html">&lt;span id="addressHint"&gt;Remember to include the door and apartment.&lt;/span&gt;
</code></pre>

{{< codepen height="480" theme_id="light" slug_hash="bGjaZZQ" default_tab="result" breakout="true" user="sandrina-p" editable="true" data-editable="true" >}}Open the Pen [Field Validations — aria-describedby](https://codepen.io/sandrina-p/pen/bGjaZZQ) by <a href="https://codepen.io/sandrina-p">Sandrina Pereira</a>.{{< /codepen >}}

{{< vimeo id="801159295" >}}

#### The Future Of ARIA Description

An ARIA attribute `aria-description` exists, but it’s not yet supported by most screen readers. So, for now, we’ll need to stick with `aria-describedby`.

#### The Difference Between `aria-labelledby` And `aria-describedby`

The attribute `aria-labelledby` is an alternative to `<label>` and `aria-label`, responsible for the field’s accessible name. In short, we should use `aria-label` for critical information and `aria-describedby` for additional information. The `aria-describedby` is announced *after* the label with a slight pause between both. For example, in the demo above, the Voice Over would announce: 

<blockquote>{name} {role} [pause] {description}.<br />“Your address, input [pause] Remember to include the door and apartment.”</blockquote>

#### How Descriptions Are Announced

It’s worth noting that `aria-describedby` is [only meant to some HTML elements](https://www.tpgi.com/short-note-on-aria-label-aria-labelledby-and-aria-describedby/). Depending on the screen reader, it's also announced slightly differently. Some screen readers allow customizing how long the pause between the label and description is and even mute the description. Adrian Roselli has a brilliant deep dive on [descriptions exposure across all screen readers](https://adrianroselli.com/2022/04/accessible-description-exposure.html). The bottom line is not to rely on descriptions to convey critical information that can’t be easily accessed in another way.

#### Dealing With Complex Descriptions

When announcing texts inside `aria-describedby`, the screen readers will read it as just plain text, ignoring any semantics. Imagine a field that contains a long description with lists, links, or any other custom element:

{{< rimg href="https://files.smashing.media/articles/guide-accessible-form-validation/field-complex-description.png" src="https://files.smashing.media/articles/guide-accessible-form-validation/field-complex-description.png" width="800" height="430" sizes="100vw" caption="A field with a description that contains a list of three items and link. (<a href='https://files.smashing.media/articles/guide-accessible-form-validation/field-complex-description.png'>Large preview</a>)" alt="A field with a description that contains a list with three items and link" >}}

In this field, it would cause more harm than good to connect the entire description to the `aria-describedby`. Instead, I prefer to connect a short description that hints to the user about the full description so they can navigate to it on their own.

<div class="break-out">

 <pre><code class="language-html">&lt;input id="days" type="text"</code> <code style="font-weight: bold;">aria-describedby="daysHintShort"/&gt;</code>
<code class="language-html">&lt;div class="field-hint"&gt;</code>
  <code style="font-weight: bold;">&lt;span id="daysHintShort" hidden&gt;</code>
    <code class="language-html">&lt;!-- This text is announced automatically when the input is focused
    and ignored when the screen reader users navigate to it. --&gt;
    Below it's explained how these days influence your benefits.
  &lt;span&gt;
  &lt;div&gt;Depending on how many days....&lt;/div&gt;
&lt;/div&gt;
</code></pre>
</div>

As this short description is exclusive to assistive technologies only, we need to hide it from sight users. A possibility could be using the [`.sr-only` technique](https://kittygiraudel.com/snippets/sr-only-class/). However, a side-effect is that the screen reader user would bump into it again when moving to the next element, which is redundant. So, instead, let’s use the *`hidden`* attribute, which hides the short description from assistive technologies altogether, but still lets us use the node’s contents as the inputs’ description.

<div class="break-out">

<pre><code class="language-html">&lt;input id="days" type="text" aria-describedby="daysHintShort"/&gt;
&lt;div class="field-hint"&gt;</code>
  <code class="language-html">&lt;span id="daysHintShort"</code> <code style="font-weight: bold;">hidden&gt;</code>
    <code class="language-html">&lt;!-- This text is announced automatically when the input is focused,
    and ignored when the screen reader users navigates to it. --&gt;
    Below it's explained how these days influence your benefits.
  &lt;/span&gt;
  &lt;div&gt;Depending on how many days....&lt;/div&gt;
&lt;/div&gt;
</code></pre>
</div>

I find this pattern very useful for fields with long descriptions or even complex validation descriptions. The tip here is to hint to the users about the full instructions, so they won’t be left alone guessing about it.

{{< codepen height="480" theme_id="light" slug_hash="LYBevLe" default_tab="result" breakout="true" user="sandrina-p" editable="true" data-editable="true" >}}Open the Pen [Field Validations — complex descriptions](https://codepen.io/sandrina-p/pen/LYBevLe) by <a href="https://codepen.io/sandrina-p">Sandrina Pereira</a>.{{< /codepen >}}

{{< vimeo id="801181734" >}}

{{% feature-panel %}}

## Required Fields

How do you know a field is required? Depending on the context, it might be intuitive (e.g., a login form). Many times we need an explicit clue, though.

### The Visual Clue

The red asterisk is one of the most common visual patterns, like the following:

{{< rimg href="https://files.smashing.media/articles/guide-accessible-form-validation/required-fields-red-asterisk.png" src="https://files.smashing.media/articles/guide-accessible-form-validation/required-fields-red-asterisk.png" width="800" height="392" sizes="100vw" caption="Two fields where one of them has a red asterisk expressing that it’s required. (<a href='https://files.smashing.media/articles/guide-accessible-form-validation/required-fields-red-asterisk.png'>Large preview</a>)" alt="Two fields where one of them has a red asterisk expressing that it’s required" >}}

Visually most people will recognize this pattern. However, people who use SR will get confused. For instance, Voice Over will announce *“Address* ***star***, *edit text.”* Some screen readers might completely ignore it, depending on how strict the verbosity settings are. 

This is a perfect scenario of an element that, although it’s visually useful, it’s far from ideal for SR users. There are a few ways to address this [asterisk pattern](https://kittygiraudel.com/2022/08/05/the-required-fault-in-our-stars/). Personally, I prefer to “hide” the asterisk using `aria-hidden="true"`, which tells all assistive technologies to ignore it. That way, Voice Over will just say *“Address, edit text.”*

<pre><code class="language-html">&lt;label for="address" class="field-label"&gt;
  Address &lt;span class="field-star"</code> <code style="font-weight: bold;">aria-hidden="true"&gt;&#42;&lt;/span&gt;</code>
<code class="language-html">&lt;/label&gt; 
</code></pre>

### The Semantic Clue

With the visual clue removed from AT, we still need to semantically tell the input is required. To do so, we could add the [`required`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required) [attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required) to the element. With that, the SR will say, “*Address, required, edit text.”*

<pre><code class="language-html">&lt;input id="address" type="text" required /&gt;
</code></pre>

Besides adding the necessary semantics, the `required` attribute also modifies the form behavior. On Chrome 107, when the submit fails, it shows a tooltip with a native error message and focuses the required empty field, like the following: 

{{< rimg href="https://files.smashing.media/articles/guide-accessible-form-validation/native-error-message-required-empty-field.png" src="https://files.smashing.media/articles/guide-accessible-form-validation/native-error-message-required-empty-field.png" width="800" height="323" sizes="100vw" caption="A required invalid field with a native tooltip saying “Please fill out this field”. (<a href='https://files.smashing.media/articles/guide-accessible-form-validation/native-error-message-required-empty-field.png'>Large preview</a>)" alt="A tooltip with a native error message below the required empty field" >}}

### The Flaws In Default Validations

Probably your designer or client will complain about this default validation because it doesn’t match your website aesthetics. Or your users will complain the error is hard to understand or disappears too soon. As currently, it’s impossible to customize the styling and behavior, so we’ll see ourselves forced to [avoid the default field validation](https://adrianroselli.com/2019/02/avoid-default-field-validation.html) and implement our own.
And just like that, accessibility is compromised again. As web creators, it’s our duty to ensure the custom validation is accessible, so let’s do it.

The first step is to replace `required` with `aria-required`, which will keep the input required semantics without modifying its style or behavior. Then, we’ll implement the error message itself in a second. 

<pre><code class="language-html">&lt;input id="address" type="text"</code> <code style="font-weight: bold;">required="required" /&gt;</code>
<code class="language-html">&lt;input id="address" type="text"</code> <code style="font-weight: bold;">aria-required="true" /&gt;</code></pre>

Here’s a table comparing side by side the difference between `required` and `aria-required`:

<table class="tablesaw break-out">
	<thead>
		<tr>
			<th>Function</th>
      <th><code>required</code></th>
      <th><code>aria-required</code></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Adds semantics</td>
			<td>Yes</td>
      <td>Yes</td>
		</tr>
		<tr>
			<td>Prevents invalid submit</td>
			<td>Yes</td>
      <td>No</td>
		</tr>
		<tr>
			<td>Shows custom error message</td>
			<td>Yes</td>
      <td>No</td>
		</tr>
    <tr>
			<td>Auto-focus invalid field</td>
			<td>Yes</td>
      <td>No</td>
		</tr>
	</tbody>
</table>

**Reminder:** *ARIA attributes never modify an element’s styles or behavior. It only enhances its semantics.*

{{< codepen height="480" theme_id="light" slug_hash="MWXZJBX" default_tab="result" breakout="true" user="sandrina-p" editable="true" data-editable="true" >}}Open the Pen [Field Validations — required vs aria-required](https://codepen.io/sandrina-p/pen/MWXZJBX) by <a href="https://codepen.io/sandrina-p">Sandrina Pereira</a>.{{< /codepen >}}

{{< vimeo id="801186255" >}}

As an alternative, if you need to keep the `required` attribute but without the ‘validation behavior’, you can add the [`novalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate) [attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate) to `<form>`. Personally, I still prefer the `aria-required` because it’s easier to control the input behavior isolated in a `Field` component without depending on the parent element.

## Invalid Fields

### The Color Trap

In a minimalist design, it’s tempting to use only the red color to express that the field is invalid. Although the usage of color is beneficial, using it alone is not enough, as defended by [WCAG 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html). People perceive color in different ways and use different color settings, and that red color won’t be noticed by everyone.

The solution here is to complement the colorful error state with an additional visual element. It could be an icon, but even that might not be enough to understand *why* the field is invalid. So the most inclusive solution is to explicitly show a text message.

{{< rimg href="https://files.smashing.media/articles/guide-accessible-form-validation/visual-comparation-invalid-fields.png" src="https://files.smashing.media/articles/guide-accessible-form-validation/visual-comparation-invalid-fields.png" width="800" height="349" sizes="100vw" caption="Visual comparison side-by-side. Right-side: Using only color. Left-side: Using also an icon and text. (<a href='https://files.smashing.media/articles/guide-accessible-form-validation/visual-comparation-invalid-fields.png'>Large preview</a>)" alt="Visual comparison side-by-side. Right-side: Using only color. Left-side: Using also an icon and text." >}}

### The Error Message

From a usability standpoint, there’s a lot to take into consideration about error messages. In short, the trick is to write a helpful message without technical jargon that states why the field is incorrect and, when possible, to explains how to fix it. For a deep dive, read how to [design better error messages](https://www.smashingmagazine.com/2022/08/error-messages-ux-design/) by Vitaly and how [Wix rewrote all their error messages](https://wix-ux.com/when-life-gives-you-lemons-write-better-error-messages-46c5223e1a2f). 

From an accessibility standpoint, we must ensure anyone not only knows that the field is invalid but also what’s the error message. To mark a field as invalid, we use the ARIA attribute `aria-invalid="true"`, which will make the SR announce that the field is invalid when it’s focused. Then, to also announce the error, we use `aria-describedby` we learned about before, pointing to the error element:

<pre><code class="language-html">&lt;input
  id="address"
  type="text"
  required="required"</code>
  <code style="font-weight: bold;">aria-invalid="true"
  aria-describedby="addressError addressHint"
/&gt;</code>
<code class="language-html">&lt;span&gt;
  &lt;p id="addressError"&gt;Address cannot be empty.&lt;/p&gt;
  &lt;p id="addressHint"&gt;Remember to include the door and apartment.&lt;/p&gt;
&lt;/span&gt;
</code></pre>

#### Invalid Field With Description

A good thing about `aria-describedby` is that it accepts multiple ids, which is very useful for invalid fields with descriptions. We can pass the id of both elements, and the screen reader will announce both when the input is focused, respecting the order of the ids.

<pre><code class="language-html">&lt;input
  id="address"
  type="text"
  required="required"
  aria-invalid="true"</code>
  <code style="font-weight: bold;">aria-describedby="addressError addressHint"
/&gt;</code>
<code class="language-html">&lt;span&gt;
  &lt;p id="addressError"&gt;Address cannot be empty.&lt;/p&gt;
  &lt;p id="addressHint"&gt;Remember to include the door and apartment.&lt;/p&gt;
&lt;/span&gt;
</code></pre>

{{< codepen height="480" theme_id="light" slug_hash="oNMEBXg" default_tab="result" breakout="true" user="sandrina-p" editable="true" data-editable="true" >}}Open the Pen [Field Validations — aria-invalid](https://codepen.io/sandrina-p/pen/oNMEBXg) by <a href="https://codepen.io/sandrina-p">Sandrina Pereira</a>.{{< /codepen >}}

{{< vimeo id="801328056" >}}

#### The Future Of ARIA Errors And Its Support

An ARIA attribute dedicated to errors already exists &mdash; `aria-errormessage` &mdash; but it’s not yet supported by most screen readers. So, for now, you are better off avoiding it and sticking with `aria-describedby`.

In the meantime, you could check [A11Ysupport](https://a11ysupport.io/) to know the support of a given ARIA attribute. You can look at this website as the “[caniuse](https://caniuse.com/)” but for screen readers. It contains detailed test cases for almost every attribute that influences HTML semantics. Just pay attention to the date of the test, as some tests might be too old.

#### Dynamic Content Is Not Announced By Default

Important to note that although `aria-describedby` supports multiple ids, if you change them (or the elements’ content) dynamically while the input is focused, the SR won’t re-announce its new content automatically. The same happens to the input label. It will only read the new content after you leave the input and focus it again.

In order for us to announce changes in content dynamically, we’ll need to learn about live regions. Let’s explore that in the next section.

{{% ad-panel-leaderboard %}}

## Moments Of Validation

The examples shown so far demonstrate ARIA attributes in static fields. But in real fields, we need to apply them dynamically based on user interactions. Forms are one of the scenarios where JavaScript is fundamental to making our fields fully accessible without compromising modern interactive usability.

Regardless of which moment of validation (usability pattern) you use, any of them can be accomplished with accessibility in mind. We’ll explore three common validation patterns:

- **Instant validation**    
The field gets validated on every value change.
- **Afterward validation**    
The field gets validated on blur.
- **Submit validation**    
The field gets validated on the form submit.

### Instant Validation

In this pattern, the field gets validated every time the value changes, and we show the error message immediately after.

In the same way, as the error is shown dynamically, we also want the screen reader to announce it right away. To do so, we must turn the error element in a Live Region, by using `aria-live="assertive"`. Without it, the SR won’t announce the error message, unless the user manually navigates to it.

{{< codepen height="480" theme_id="light" slug_hash="gOjvgrm" default_tab="result" breakout="true" user="sandrina-p" editable="true" data-editable="true" >}}Open the Pen [Field Validations - instant validation](https://codepen.io/sandrina-p/pen/gOjvgrm) by <a href="https://codepen.io/sandrina-p">Sandrina Pereira</a>.{{< /codepen >}}

{{< vimeo id="801329427" >}}

Some nice things to know about this example:

- While the input is valid, the `aria-invalid` can be `"false"` or be completely absent from the DOM. Both ways work fine.
- The `aria-describedby` can be dynamically modified to contain one or multiple ids. However, if modified while the input is focused, the screen reader won’t re-announce its new ids &mdash; only when the input gets re-focused again.
- The `aria-live` attribute holds many gotchas that can cause more harm than good if used incorrectly. Read “[Using aria-live](https://bitsofco.de/using-aria-live/)” by Ire Aderinokun to better understand how Live Regions behave and when (not) to use it.
- From a usability perspective, be mindful that this validation pattern can be annoying, the same way it’s annoying when the error shows up too early while we are still typing our answer.

### Afterward Validation

In this pattern, the error message is only shown after the user leaves the field (on blur event). Similar to the ‘Instant Validation’, we need to use the `aria-live`  so that the user knows about the error before start filling the next elements.

**Usability tip:** *I personally prefer to show the on-blur error only if the input value changes. Why? Some screen reader users go through all the fields to know how many exist before starting to actually fill them. This can happen with keyboard users too. Even sight users might accidentally click on one of the fields while scrolling down. All these behaviors would trigger the on-blur error too soon when the intent was just to ‘read’ the field, not to fill it. This slightly different pattern avoids that error flow.*

{{< codepen height="480" theme_id="light" slug_hash="yLqvgWd" default_tab="result" breakout="true" user="sandrina-p" editable="true" data-editable="true" >}}Open the Pen [Field Validations - afterward validation](https://codepen.io/sandrina-p/pen/yLqvgWd) by <a href="https://codepen.io/sandrina-p">Sandrina Pereira</a>.{{< /codepen >}}

{{< vimeo id="801330447" >}}

### Submit Validation

In this pattern, the validation happens when the user submits the form, showing the error message afterward. How and when exactly these errors are shown depends on your design preferences. I’ll go through two of the most common approaches:

#### In Long Forms

In this scenario, I personally like to show an error summary message, usually placed right before the submit button, so that the chances of being visible on the viewport are higher. This error message should be short, for example, “Failed to save because 3 fields are invalid.”

It’s also common to show the inline error messages of all invalid fields, but this time without `aria-live` so that the screen reader doesn’t announce all the errors, which can be annoying. Some screen readers only announce the first Live Region (error) in the DOM which can also be misleading.

Instead, I add the `aria-live="assertive"` only to the error summary. 

{{< codepen height="480" theme_id="light" slug_hash="bGjLqbQ" default_tab="result" breakout="true" user="sandrina-p" editable="true" data-editable="true" >}}Open the Pen [Field Validations - on submit - error summary](https://codepen.io/sandrina-p/pen/bGjLqbQ) by <a href="https://codepen.io/sandrina-p">Sandrina Pereira</a>.{{< /codepen >}}

In the demo above, the error summary has two elements:

<pre><code class="language-html">&lt;p aria-live="assertive"</code> <code style="font-weight: bold;">class="sr-only"&gt;</code>
  <code class="language-html">Failed to save because 2 fields are invalid.
&lt;/p&gt;</code>
<code style="font-weight: bold;">&lt;p aria-hidden="true"&gt;</code>
  <code class="language-html">Failed to save because 2 fields are invalid.
&lt;/p&gt;
</code></pre>

1. The semantic error summary contains a static error summary meant to be announced only on submit. So the `aria-live` is in this element, alongside the `.sr-only` to hide it visually.
2. The visual error summary updates every time the number of invalid fields changes. Announcing that message to SR could be annoying, so it’s only meant for visual updates. It has the `aria-hidden` so that the screen readers users don’t bump into the error summary twice.

Check the screen reader demo below:

{{< vimeo id="801331832" >}}

#### In Short Forms

In very short forms, such as logins, you might prefer not to show an error summary in favor of just the inline error messages. If so, there are two common approaches you can take here:

1. Add an invisible error summary for screen readers by using the `.sr-only` we learned above. 
2. Or, when there’s just one invalid field, focus that invalid field automatically using [`HTMLElement.focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus). This helps keyboard users by not having to tab to it manually, and, thanks to `aria-describedby`, will make screen readers announce the field error immediately too. Note that here you don’t need `aria-live` to force the error announcement because the field getting focused is enough to trigger it.

{{< codepen height="480" theme_id="light" slug_hash="YzOXajZ" default_tab="result" breakout="true" user="sandrina-p" editable="true" data-editable="true" >}}Open the Pen [Field Validations - on submit - auto-focus](https://codepen.io/sandrina-p/pen/YzOXajZ) by <a href="https://codepen.io/sandrina-p">Sandrina Pereira</a>.{{< /codepen >}}

{{< vimeo id="801332671" >}}

#### Accessibility Comes Before Usability

I must highlight that this is just one approach among others, such as:

- **Error text**  
It can be just a simple text or include the number of invalid fields or even add an anchor link to each invalid field. 
- **Placement**  
Some sites show the error summary at the top of the form. If you do this, remember to scroll and focus it automatically so that everyone can see/hear it.
- **Focus**  
Some sites focus on the error summary, while others don’t. Some focus on the first invalid field and don’t show an error summary at all.

Any of these approaches can be considered accessible as long it’s implemented correctly so that anyone can perceive why the form is invalid. We can always argue that one approach is better than the other, but at this point, the benefits would be mostly around usability and no longer exclusively about accessibility.

Nevertheless, the form error summary is an excellent opportunity to gracefully recover from a low moment in a form journey. In an upcoming article, I will break down these form submit patterns in greater detail from both accessibility and usability perspectives.

## Testing Field Validations

Automated accessibility tools catch only around [20-25% of A11Y issues](https://www.levelaccess.com/blog/automated-accessibility-testing-tools-how-much-do-scans-catch/); the more interactive your webpage is, the fewer bugs it catches. For instance, those tools would not have caught any of the demos explored in this article.

You could write unit tests asserting that the ARIA attributes are used in the right place, but even that doesn’t guarantee that the form works as intended for everyone in every browser.

Accessibility is about personal experiences, which means it relies a lot on manual testing, similar to how pixel-perfect animations are better tested manually too. For now, the most effective accessibility testing is a combination of multiple practices such as automated tools, unit tests, manual tests, and user testing.

In the meantime, I challenge you to try out a screen reader by yourself, especially when you build a new custom interactive element from scratch. You’ll discover a new web dimension, and ultimately, it will make you a better web creator.

## Things To Keep In Mind For Accessible Fields

### Auto Focusing Invalid Inputs

Above, I mentioned one possible pattern of automatically focusing the first invalid field, so the user doesn’t need to manually navigate to it. Depending on the case, this pattern might be useful or not. In doubt, I prefer to keep things simple and not add auto-focus. If not obvious, let the user read the summary error message, understand it and then navigate to the field by themselves.

### Wrapping Everything Inside `<label>`

It might be tempting to wrap everything about a field inside the `<label>` element. Well, yes, the assistive technologies would then announce everything inside automatically on input focus. But, depending on how ‘extensive’ the input is, it might sound more confusing than helpful:

- It’s not clear for screen reader users what exactly the label is.
- If you include interactive elements inside the label, clicking on them might conflict with the automatic input focus behavior.
- In automated tests (e.g., [Testing Library](https://testing-library.com/)), you can’t target an input by its label.

Overall, keeping the label separate from everything else has more benefits, including having grainier control over how elements are announced and organized.

### Disabling The Submit Button

Preventing the user from submitting an invalid form is the most common reason to disable a button. However, the user probably won’t understand why the button is disabled and won’t know how to fix the errors. That’s a big cognitive effort for such a simple task. Whenever possible, **avoid disabled buttons**. Let people click buttons at any time and show them the error message with instructions. In the last instance, if you really need a disabled button, consider making it an [inclusive disabled button](https://css-tricks.com/making-disabled-buttons-more-inclusive/), where anyone can understand and interact with it.

### Good UX Is Adaptable

Most physical buildings in the world have at least two ways to navigate them: stairs and lifts. Each one has its unique UX with pros and cons suited for different needs. On the web, don’t fall into the trap of forcing the same pattern on all kinds of users and preferences.

Whenever you find an A11Y issue in a given pattern, try to improve it, but also consider looking for an alternative pattern that can be used simultaneously or toggled.
 
Remember, every person deserves a good experience, but not every experience is good for everyone.

{{% ad-panel-leaderboard %}}

## Wrapping Up

Field validations are one of those web concepts without dedicated HTML elements that suit modern web patterns, so we need ARIA to fill in the gaps. In short, this article covered the most common attributes for field validations that make a difference for many people in their web journey:

- `aria-required`: To mark a field as required.
- `aria-invalid`: To mark the field as invalid.
- `aria-describedby`: To connect the description and error message to the input.
- `aria-live`: To announce dynamic error messages.

Accessibility is about people, not about ARIA. Besides those attributes, remember to review your colors, icons, field instructions, and, equally important, the validations themselves. Your duty as a web creator is to ensure everyone can enjoy the web, even when a form fails to submit.

Last but not least, I’d like to appreciate the technical review from [Ben Mayers](https://benmyers.dev/), [Kitty Giraudel](https://kittygiraudel.com/), and [Manuel Matuzović](https://www.matuzo.at/). Because sharing is what makes us better. <3

### WCAG References

All the practices we explored in this article are covered by WCAG guideline “3.3 Input Assistance”:

- [3.3.1 Error Identification](https://www.w3.org/TR/WCAG21/#error-identification) 
- [3.3.2 Labels or Instructions](https://www.w3.org/TR/WCAG21/#labels-or-instructions)
- [3.3.3 Error Suggestion](https://www.w3.org/TR/WCAG21/#error-suggestion)
- [3.3.4 Error Prevention (Legal)](https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data)
- [3.3.5 Help](https://www.w3.org/TR/WCAG21/#help)
- [3.3.6 Error Prevention](https://www.w3.org/TR/WCAG21/#error-prevention-all)

The more I learn about web accessibility, the more I realize accessibility goes beyond complying with web standards. Remember, the WCAG are ‘guidelines’ and not ‘rules’ for a reason. They are there to support you, but if you suspect a guideline doesn’t make sense based on your diverse user research, don’t be afraid to question it and think outside the box. Write about it, and ultimately guidelines will evolve too.

{{< signature "vf, il, yk" >}}
