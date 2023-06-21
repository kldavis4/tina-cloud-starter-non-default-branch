---
title: 'Designing for Accessibility: Best Practices for Closed Captioning and Subtitles UX'
slug: closed-captions-subtitles-ux
author: vitaly-friedman
image: >-
  https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/5de2f7ff-c421-4bba-84b0-e346653ed12c/closed-captions-subtitles-ux.jpg
date: 2023-01-11T08:00:00.000Z
summary: >-
  Captioning can be much more than text. Design patterns for better UX of subtitles, captions, video players, transcripts and on-screen text.
description: >-
  Captioning can be much more than text. Design patterns for better UX of subtitles, captions, video players, transcripts and on-screen text.
categories:
  - UX
  - Design Patterns
  - Web Design
  - Accessibility
---

When we think about closed captioning, we often think about noisy environments, be it busy restaurants, shopping malls, or airport lounges. There, consuming content via audio is difficult, and so captions help communicate information in an alternative, textual way.

This is, of course, useful for video streaming like Netflix or Hulu, but also for games, video courses, **social media content**, and real-time communication on Zoom, Google Meet, and so on with automated captioning turned on. That way, however, is the *only* way for some of us who are hard of hearing &mdash; temporarily or permanently &mdash; nevermind of how noisy or busy the environment is.

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9c15cba7-8b14-4710-8c13-9bdf11116527/1-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9c15cba7-8b14-4710-8c13-9bdf11116527/1-closed-captions-subtitles-ux.png" width="800" height="420" sizes="100vw" caption="Subtitles available in 13 languages on <a href='https://www.ted.com/talks/catherine_price_why_having_fun_is_the_secret_to_a_healthier_life/transcript?referrer=playlist-the_most_popular_ted_talks_of_2022&autoplay=true'>TED</a>. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9c15cba7-8b14-4710-8c13-9bdf11116527/1-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot with 13 available subtitles on TED" >}}

In fact, the environment might not matter that much. Many people [turn on closed captioning by default](https://preply.com/en/blog/americas-subtitles-use/) these days to comfortably follow along in the video. Perhaps the spoken language isn’t their native language, or perhaps they aren’t quite familiar with the accent of some speakers, or maybe they don’t have headphones nearby, don’t want to use them, or can’t use them. In short, [closed captions are better for everybody](https://sebastiangreger.net/2019/02/ux-closed-captions-for-everybody) and they [increase ROI and audience](https://www.youtube.com/watch?v=ngKp9MqUGj8&feature=youtu.be&ab_channel=TEDxTalks).

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/34c2cc11-3a07-477b-9a59-f5911fdbd91b/2-closed-captions-subtitles-ux.jpeg" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/34c2cc11-3a07-477b-9a59-f5911fdbd91b/2-closed-captions-subtitles-ux.jpeg" width="800" height="500" sizes="100vw" caption="The Doctor asks her phone “Tell me about the Visual Language of Closed Captions and Subtitles.” (Source: <a href='https://uxdesign.cc/a-guide-to-the-visual-language-of-closed-captions-and-subtitles-2fda5fa2a325'>uxdesign.cc</a>) (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/34c2cc11-3a07-477b-9a59-f5911fdbd91b/2-closed-captions-subtitles-ux.jpeg'>Large preview</a>)" alt="A picture of a woman with mobile saying ‘Tell me about the Visual Language of Closed Captions and Subtitles’" >}}

Just a decade ago, **closed captioning** would be difficult to come by on the web. Yet, today it’s almost unimaginable to have a public video produced without proper captioning in place. And it doesn’t seem like a particularly complicated task. Isn’t it basically just text flowing over lines, with a few time stamps in between?

Well, it doesn’t have to be. With captions, we can **embed a lot of contextual details** that are somehow lost between the lines when translated from audio to text &mdash; be it sarcasm, music information, synthetic voice, background noise, or unexpected interruptions. But first, we need to talk about how subtitles and captions are different.


<style>.course-intro{--shadow-color:206deg 31% 60%;background-color:#eaf6ff;border:1px solid #ecf4ff;box-shadow:0 .5px .6px hsl(var(--shadow-color) / .36),0 1.7px 1.9px -.8px hsl(var(--shadow-color) / .36),0 4.2px 4.7px -1.7px hsl(var(--shadow-color) / .36),.1px 10.3px 11.6px -2.5px hsl(var(--shadow-color) / .36);border-radius:11px;padding:1.35rem 1.65rem}@media (prefers-color-scheme:dark){.course-intro{--shadow-color:199deg 63% 6%;border-color:var(--block-separator-color,#244654);background-color:var(--accent-box-color,#19313c)}}</style>
  
<p class="course-intro"><em>Pssst!</em> This article is <strong>part of our ongoing series</strong> on <a href="/category/design-patterns">design patterns</a>. It’s also a part of <a style="font-weight:700" href="https://smart-interface-design-patterns.com/">Smart Interface Design Patterns</a>&nbsp;🍣 and is available in the <a href="https://smashingconf.com/online-workshops/workshops/interface-design-course-vitaly-friedman/">live UX training</a> as well.</p>

## Subtitles vs. Captions

At the first glance, subtitles and captions might appear to be the same. In the end, it’s all about conveying information in a textual way. However, as kindly pointed out by Svetlana Kouznetsova in her [book an audio accessibility](https://audio-accessibility.com/book/), they aren’t really interchangeable.

Accordion to Svetlana,

<blockquote><strong>Captions</strong> are considered as part of <strong>accessibility</strong> and designed for deaf people to access aural information in the same language with accessibility elements such as speaker identifications, sound descriptions etc.<br /><br />
<strong>Subtitles</strong>, on another hand, are considered as part of <strong>internationalization</strong> (not accessibility) and designed as a translation from one spoken language to another written language for hearing people who don't understand the original language.</blockquote>

While captions are designed for people with hearing difficulties, subtitles are designed to support hearing people who might not understand the original language. They often lack speaker IDs and sound descriptions and consequently, [subtitles aren't necessarily accessible](https://audio-accessibility.com/news/2020/10/why-subtitles-are-not-accessible-to-me-as-a-deaf-person/).

In this article, we focus both on subtitles and captions, with some general guidelines of how we can improve both. Our journey starts with a general conversation about design conventions for subtitles.

## Subtitles Formatting and Design Conventions

Fortunately, there are already [golden rules](https://www.checksub.com/subtitle/do-good-subtitles-golden-rules/) of transcription, [best practices](https://dcmp.org/learn/captioningkey) as well as an [established visual language](https://uxdesign.cc/a-guide-to-the-visual-language-of-closed-captions-and-subtitles-2fda5fa2a325) for **closed captions and subtitles**. When we want to indicate any subtle changes in the background, emphasis on specific words, whispering, or a short pause, we can rely on simple text formatting rules in subtitles to communicate it.

{{< rimg href="https://uxdesign.cc/a-guide-to-the-visual-language-of-closed-captions-and-subtitles-2fda5fa2a325" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8984f9d8-0080-42ca-8bab-2182914eda79/3-closed-captions-subtitles-ux.png" width="800" height="589" sizes="100vw" caption="An overview of <a href='https://uxdesign.cc/a-guide-to-the-visual-language-of-closed-captions-and-subtitles-2fda5fa2a325'>common design conventions on closed captions and subtitles</a>, by Gareth Ford Williams. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8984f9d8-0080-42ca-8bab-2182914eda79/3-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot showing a visual language of closed captions" >}}

Gareth Ford Williams has put together a [visual language of closed captions](https://uxdesign.cc/a-guide-to-the-visual-language-of-closed-captions-and-subtitles-2fda5fa2a325) and has kindly provided a [PDF cheatsheet](https://www.dropbox.com/s/qzjapyaaz5o2j81/Captions%20and%20Subtitles%20Formatting.pdf?dl=0) that is commonly used by professional captioners.

There are some [generally established rules](https://www.checksub.com/subtitle/do-good-subtitles-golden-rules/) about captioning, and here are some that I found quite useful when working on captioning for my own video course:

- Divide your sentences into **two relatively equal parts** like a pyramid (40ch per line for the top line, a bit less for the bottom line);
- Always keep an average of **20 to 30 characters per second**;
- A sequence should only last **between 1 and 8 seconds**;
- Always keep a person’s name or title together;
- Do not break a line after conjunction;
- Consider aligning **multi-lined captions to the left**.

There are some minor differences in formatting between different languages (and Gareth writes about them in the article), but the resource can be used as inspiration and a checklist to make sure you don’t forget any fine details.

{{% feature-panel id="vitaly-friedman" %}}

## Captions Natively Integrated In The Content

On their own, closed captions and subtitles are often seen as an **additional layer** that lives on top of existing audio or video content and supports users in addition to that main piece of content. However, what if we designed them to be **natively integrated** into the video player?

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/10eda064-fce0-4c64-b81e-79bbdb04846c/4-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/10eda064-fce0-4c64-b81e-79bbdb04846c/4-closed-captions-subtitles-ux.png" width="800" height="583" sizes="100vw" caption="<a href='https://ethicsfordesign.com/player/?lang=en'>Ethics for Design</a> has reinvented the video player experience. For the better. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/10eda064-fce0-4c64-b81e-79bbdb04846c/4-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot from Ethics for Design where subtitles and supplementary information about the speaker are integrated into the video content" >}}

[Ethics for Design](https://ethicsfordesign.com/player/?lang=en) provides a very different video experience: subtitles take a prominent role in the design, with supplementary information about the speaker remaining on the page as the video advances. The text **isn’t hardcoded into the video** but is available separately, being fully accessible for copy-paste, for example. Also, additional materials and illustrations are highlighted as a speaker is speaking.

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/ef757c4c-7c98-4c85-ba31-76eeb3a8bd5b/5-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/ef757c4c-7c98-4c85-ba31-76eeb3a8bd5b/5-closed-captions-subtitles-ux.png" width="800" height="450" sizes="100vw" caption="The Subtle Art of Subtitles, from the Sherlock TV series. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/ef757c4c-7c98-4c85-ba31-76eeb3a8bd5b/5-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="On-screen text technique in Sherlock TV series" >}}

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/710d9813-0fb0-4678-8669-39204dc42a6a/6-closed-captions-subtitles-ux.jpeg" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/710d9813-0fb0-4678-8669-39204dc42a6a/6-closed-captions-subtitles-ux.jpeg" width="800" height="450" sizes="100vw" caption="<a href='https://www.youtube.com/watch?v=xXQV-OQzN6c'>Sherlock TV Series Text Message Effect</a> by Atticus. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/710d9813-0fb0-4678-8669-39204dc42a6a/6-closed-captions-subtitles-ux.jpeg'>Large preview</a>)" alt="Sherlock TV Series Text Message Effect by Atticus" >}}

Another way of natively integrating subtitles in the video is the **on-screen text technique** used in various shows such as [Sherlock TV series](https://filmschoolrejects.com/living-words-sherlock-text-screen/). The idea there was to provide storytelling through visual text embedded into visuals but also make text messages more accessible without having to show the entire phone screen to viewers. 

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c7471362-6f72-407c-ba74-1eb0ed93eb15/7-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c7471362-6f72-407c-ba74-1eb0ed93eb15/7-closed-captions-subtitles-ux.png" width="800" height="423" sizes="100vw" caption="A screenshot from the <a href='https://www.cmd-amsterdam.nl/portfolio/living-comic-thanos-vs-iron-man/'>Living Comic</a> with comic book style subtitles." alt="A screenshot from Living Comic with comic book style subtitles" >}}

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/51a1bcb9-7e1a-482f-a72e-a192b4d65fd6/8-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/51a1bcb9-7e1a-482f-a72e-a192b4d65fd6/8-closed-captions-subtitles-ux.png" width="800" height="423" sizes="100vw" caption="A screenshot from the <a href='https://www.cmd-amsterdam.nl/portfolio/living-comic-thanos-vs-iron-man/'>Living Comic</a> with comic book style subtitles." alt="A screenshot from Living Comic with comic book style subtitles." >}}

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3cc1d326-0293-4ea7-b8ba-d1f2a577a4d7/9-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3cc1d326-0293-4ea7-b8ba-d1f2a577a4d7/9-closed-captions-subtitles-ux.png" width="800" height="423" sizes="100vw" caption="A screenshot from the <a href='https://www.cmd-amsterdam.nl/portfolio/living-comic-thanos-vs-iron-man/'>Living Comic</a> where the frame of the video player changes its color and starts glowing." alt="A screenshot from Living Comic where the frame of the video player changes its color and starts glowing" >}}

For his thesis at the Hogeschool van Amsterdam, Agung Tarumampen was asked to come up with a concept of what sound visualization would look like if we were designing a **first-class experience for deaf people**.

Agung has experimented with [Living Comic](https://www.cmd-amsterdam.nl/portfolio/living-comic-thanos-vs-iron-man/), with more striking typography, a bit of animation and a comic book style to transform seemingly boring subtitles into an integral visual part of the experience.

It can even go beyond subtitles, though. When there is a fight happening in the video, the **frame of the video player changes its color and starts glowing**. The [result](https://www.youtube.com/watch?v=MCCpgj7WTFw&ab_channel=AgungTarumampen) is very dynamic and impressive but probably a little bit elaborate to produce. (Discovered via [Vasilis van Gemert](https://beyondtellerrand.com/events/dusseldorf-2022/speakers/vasilis-van-gemert)).

## Add Search Within Subtitles and Transcripts

When released, some videos come along with transcripts that are properly edited and broken down into sections. That’s common for [TED videos](https://www.ted.com/talks/catherine_price_why_having_fun_is_the_secret_to_a_healthier_life/transcript?referrer=playlist-the_most_popular_ted_talks_of_2022&autoplay=true), where viewers can jump to a specific part of the speech, as **every sentence in the transcript is linked to the time stamp** within the video.
 
{{< rimg href="https://www.ted.com/talks/catherine_price_why_having_fun_is_the_secret_to_a_healthier_life?language=en" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/49cabc93-db80-44f9-8156-827518e9ac71/10-closed-captions-subtitles-ux.png" width="800" height="434" sizes="100vw" caption="<a href='https://www.ted.com/talks/catherine_price_why_having_fun_is_the_secret_to_a_healthier_life?language=en'>TED.com</a> with a searchable transcript on the side, running next to the video. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/49cabc93-db80-44f9-8156-827518e9ac71/10-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot from TED, showing an in-browser search tool which is available for transcripts" >}}

With a transcript in place, it’s useful to allow users to search for specific terms in the transcript and jump right there. In TED’s case, viewers can do so with an in-browser search tool. But with most videos that have only subtitles, it’s usually impossible &mdash; and easy to fix.

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e2e5cfee-77c2-4882-ab57-3cf1ca567107/11-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e2e5cfee-77c2-4882-ab57-3cf1ca567107/11-closed-captions-subtitles-ux.png" width="800" height="328" sizes="100vw" caption="<a href='https://zoom.us/rec/play/Fk0lARYFJkjMANlrbcIGd_2OMvvbPloZAbNZS72BbE27-YvfLn2P8mlTLzRIpZ2ccD0zHe8LFKg6rWUD.aZz3WY9lGR05RqKa?autoplay=true'>Zoom</a> with auto-generated captioning and search within; with Dan Mall speaking about design systems during a Smashing Hour. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e2e5cfee-77c2-4882-ab57-3cf1ca567107/11-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot from Zoom with auto-generated captioning and search within" >}}

As an additional feature for subtitles/captioning settings, we could **enable search** as well. After all, subtitles are just a text file that already includes everything: the content and the time stamps. That’s a great little tool to help users navigate the video faster and more precisely, and it could work similarly to Zoom’s search within an auto-generated transcript (pictured above).

{{% ad-panel-leaderboard %}}

## Decouple Audio Track and Subtitles

We might be assuming that viewers prefer to read subtitles in the same language as the original video track, but that’s not necessarily the case. Sometimes subtitles are available in the user’s native language, while the audio track isn’t. Sometimes captioning includes **detailed audio descriptions** in one language but doesn’t have them in another.

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/0508e146-3430-4673-9163-d23b42c14060/12-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/0508e146-3430-4673-9163-d23b42c14060/12-closed-captions-subtitles-ux.png" width="800" height="509" sizes="100vw" caption="<A href='https://www.netflix.com/watch/81644272?trackId=14170286&tctx=2%2C1%2C74a115ea-ce3b-4944-9d9e-03e3de9965ac-493791398%2CNES_BCB58F7B8CE1BB8B7E6310ACB82A04-994911DC4F528C-1F3CC79973_p_1672470355417%2CNES_BCB58F7B8CE1BB8B7E6310ACB82A04_p_1672470355417%2C%2C%2C%2C81644272'>Netflix</a> decouples audio track and subtitles. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/0508e146-3430-4673-9163-d23b42c14060/12-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot showing how Netflix decouples audio track and subtitles into two columns" >}}

Also, some users might watch the video with its original audio track by default and then choose subtitles or captioning in a language that fits them best. And, of course, some people might have a strong preference for watching the video in one language but reading subtitles or captioning in another.

Similar to the [design of the language selector](https://www.smashingmagazine.com/2022/05/designing-better-language-selector/), we can allow them to **freely choose their preference** without any assumptions on our end. Whenever possible, decouple settings for the audio track and subtitles/captions.

## Allow Multiple Languages At The Same Time

Most video players allow a selection of a single subtitle language. However, if multiple people are watching a movie together, it might be a good idea to consider allowing users to **select multiple languages** at the same time. In that case, various languages would need to appear differently and probably be taking over one line at a time.

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/30f70b1b-d742-41b1-89d6-cbe47443befe/13-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/30f70b1b-d742-41b1-89d6-cbe47443befe/13-closed-captions-subtitles-ux.png" width="800" height="345" sizes="100vw" caption="Multiple subtitles at the same time. Source: <a href='https://blog.prototypr.io/subtitles-were-never-designed-the-missing-element-in-tv-typography-design-4277d777548d'>prototypr.io</a>. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/30f70b1b-d742-41b1-89d6-cbe47443befe/13-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot with subtitles in three languages placed in three rows" >}}

Of course, it doesn’t make much sense to allow users to select multiple variants of the same language, e.g., *English* and *English with Audio Description*. It’s worth stating that the selection of languages might need to be grouped and alphabetized in addition to the most popular languages used on the site. [Flags aren’t languages](https://www.flagsarenotlanguages.com/blog/why-flags-do-not-represent-language/), though, so using a flag to highlight a language is a dangerous path to embark on.

## Customization Settings For Subtitles And Captions

Where and how should subtitles and captions be displayed? Surely some websites will have specific branding and specific typography, and these design choices would carry over to subtitles as well. However, some fonts might be more appropriate for people with dyslexia, and sometimes font sizes might need to be enlarged.

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/11bcf1f6-87cf-4cf9-8fb0-cb58a2dd8d10/14-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/11bcf1f6-87cf-4cf9-8fb0-cb58a2dd8d10/14-closed-captions-subtitles-ux.png" width="800" height="452" sizes="100vw" caption="<a href='https://www.youtube.com/watch?v=JWtOFF0iSbo'>YouTube’s subtitles settings</a> allow users to customize everything from font color to window opacity. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/11bcf1f6-87cf-4cf9-8fb0-cb58a2dd8d10/14-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot with YouTube’s subtitles settings" >}}

On [YouTube](https://www.youtube.com/watch?v=JWtOFF0iSbo), users can select a font used for subtitles and choose between **monospaced and proportional serif and sans-serif**, casual, cursive, and small-caps. But perhaps, in addition to stylistic details, we could provide a careful selection of fonts to help audiences with different needs. This could include a [dyslexic font](https://adrianroselli.com/2015/03/typefaces-for-dyslexia.html) or a [hyper-legible font](https://brailleinstitute.org/freefont), for example.

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e1abe983-fb91-44be-8ce0-900b1badab72/15-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e1abe983-fb91-44be-8ce0-900b1badab72/15-closed-captions-subtitles-ux.png" width="800" height="452" sizes="100vw" caption="<a href='https://www.primevideo.com/'>Amazon Prime</a>’s subtitles option with presets for size and a few presets for various high contrast options. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e1abe983-fb91-44be-8ce0-900b1badab72/15-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot with Amazon Prime’s subtitles option with presets for size and a few presets for various high contrast options" >}}

Additionally, we could display **presets for various high contrast options** for subtitles, and that’s how it’s done on Amazon. This gives users a faster selection, requiring less effort to configure just the right combination of colors and transparency. Still, it would be useful to provide more sophisticated options just in case users need them.

## Position of Subtitles

One fine detail that’s always missing in customization settings is the adjustment of the **position of subtitles and captions** on the screen. Often video streaming companies elaborately adjust the position of subtitles depending on what’s currently displayed in the video. On Netflix, for example, Japanese subtitles [sometimes appear on the side](https://netflixtechblog.com/implementing-japanese-subtitles-on-netflix-c165fbe61989) to not overlap any text or any important details on the video.

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/63ff295b-f10c-43e6-9bfa-2dc4607682bc/16-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/63ff295b-f10c-43e6-9bfa-2dc4607682bc/16-closed-captions-subtitles-ux.png" width="800" height="500" sizes="100vw" caption="<a href='https://netflixtechblog.com/implementing-japanese-subtitles-on-netflix-c165fbe61989'>Netflix with Japanese subtitles</a> changing orientation to vertical to not overlap any text or any important details of the video. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/63ff295b-f10c-43e6-9bfa-2dc4607682bc/16-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot from Netflix with Japanese subtitles placed vertically" >}}

On Netflix, viewers can’t adjust the position of subtitles, but it actually might be a very good idea to do so. The [research conducted by BBC](https://www.researchgate.net/publication/310819123_Online_News_Videos_The_UX_of_Subtitle_Position) (pictured below) showed a **significant improvement** when changing the subtitle location from the standard position of *within* a video at the bottom to **below the video clip**.

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b3da3c0a-125f-4a7b-b71f-bc7e1ad10ce8/17-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b3da3c0a-125f-4a7b-b71f-bc7e1ad10ce8/17-closed-captions-subtitles-ux.png" width="800" height="458" sizes="100vw" caption="BBC has conducted experiment changes in video size and subtitle positioning. Subtitles below the video clip performed best. (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b3da3c0a-125f-4a7b-b71f-bc7e1ad10ce8/17-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot from BBC experiment changes in video size and subtitle positioning showing examples of subtitles within and over video" >}}

According to BBC, “additionally, participants responded positively when given the ability to **change the position of subtitles in real-time**, allowing for a more personalised viewing experience.” It’s worth noting that the test was performed with news segments, which is likely to be a slightly different context compared to immersive movies.

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8028d163-d720-45d2-ab92-4b3619eba1ff/18-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8028d163-d720-45d2-ab92-4b3619eba1ff/18-closed-captions-subtitles-ux.png" width="800" height="452" sizes="100vw" caption="KM player with an option to adjust the scale and position of subtitles. (Source: <a href='https://gadgetstouse.com/blog/2021/12/31/best-free-video-players-to-watch-movies-with-subtitles/'>gadgetstouse.com</a>) (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8028d163-d720-45d2-ab92-4b3619eba1ff/18-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot with the KM player’s audio and subtitles settings" >}}

Some video players provide that level of customization out of the box. [VLC](https://www.videolan.org/vlc/) and [KM](https://www.kmplayer.com/home) video players, for example, provide an option to adjust the scale and position of subtitles or captions and even try to synchronize them automatically. That’s the level of customization that is often missing on the web.

In general, having options to **change the font based on a user’s need**, choose presets for the display of subtitles, and allow users to relocate the caption on screen seems like a safe combination of features that subtitles settings need to provide.

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b454b588-8714-46e9-b778-558cb6f5928e/19-closed-captions-subtitles-ux.jpeg" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b454b588-8714-46e9-b778-558cb6f5928e/19-closed-captions-subtitles-ux.jpeg" width="800" height="533" sizes="100vw" caption="An active video call session underway with many participants, but no captions. (Source: <a href='https://uxdesign.cc/these-are-design-principles-for-real-time-captions-in-video-calls-325b8906767e'>Design Principles for real-time captions in video calls</a>) (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b454b588-8714-46e9-b778-558cb6f5928e/19-closed-captions-subtitles-ux.jpeg'>Large preview</a>)" alt="A screenshot of a video call session with many participants without captions" >}}

This is especially useful in **real-time communication tools** like Zoom or Google Meet, where captions might overlap a shared screen or a photo of a person who is currently speaking.

{{% ad-panel-leaderboard %}}

## Captioning Turned On By Default?

If a vast majority of viewers prefer to watch a movie with subtitles or captions turned on, it might be worth considering having them turned on by default. However, that requires an assumption about the preferred language and the type of captioning a user prefers to watch. And viewers who prefer **not to be disturbed by running text** would need to turn them off every time they want to watch a movie.

{{< rimg href="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/555a9741-a267-43b5-bb70-95edf40be144/20-closed-captions-subtitles-ux.png" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/555a9741-a267-43b5-bb70-95edf40be144/20-closed-captions-subtitles-ux.png" width="800" height="450" sizes="100vw" caption="This is how it could be. ‘Dyslexic’ preset in use on YouTube. (Just a concept.) (<a href='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/555a9741-a267-43b5-bb70-95edf40be144/20-closed-captions-subtitles-ux.png'>Large preview</a>)" alt="A screenshot of YouTube’s subtitles settings with dyslexic preset" >}}

Ideally, a video player would include a **setting to turn on or off captions by default** and respect the user’s choice whenever a user chooses to come back to the site or rewatch a video. Or even further than that, users could **save captioning preferences as presets**, adjusting everything from font size to the location of subtitles on the screen. So rather than turning subtitles on by default for everyone, it could be an opt-in setting that could be set once and then stay a default as long as it isn’t changed.

## Wrapping Up

**Subtitles and captions** might appear like an obvious and simple design challenge. Still, to improve the experience of viewers, we need to consider everything from formatting, editorial, and design conventions to different ways of **displaying captions natively**, to the location, and customization settings and presets.

The guidelines and ideas listed above might be helpful when you are choosing a video platform for your video content or when you edit captions for your social media content.

And it’s worth remembering: a vast majority of your customers are likely to use some sort of captioning when they watch your content, so it’s worth spending a bit of extra attention to ensure that their experience is as good as it can be &mdash; nevermind what capabilities they might or might not have.

*A kind thank you note to Svetlana Kouznetsova for her kind feedback on this article.*

### Useful Resources

- [Guidelines and Best Practices for Captioning Educational Video](https://dcmp.org/learn/captioningkey), Captioning Key, Described and Captioned Media Program (DCMP)
- [The Golden Rules of Transcription](https://www.checksub.com/subtitle/do-good-subtitles-golden-rules/), Checksub
- “[Subtitles were never designed. The missing element in TV typography design](https://blog.prototypr.io/subtitles-were-never-designed-the-missing-element-in-tv-typography-design-4277d777548d)”, Avi Ashkenazi
- “[The UX design case of closed captions for everyone](https://sebastiangreger.net/2019/02/ux-closed-captions-for-everybody)”, Sebastian Greger
- “[Using Subtitles to Improve Accessibility: Instagram TV UX Design](https://divamithoughts.medium.com/case-study-using-subtitles-to-improve-accessibility-igtv-ux-design-1ee9843e9441)”, Divami Design Labs
- “[Reading television: the cognitive experience of closed-captioned TV](https://uxdesign.cc/reading-television-the-cognitive-experience-of-closed-captioned-tv-345e664446b3)”, James Beber
- “[Typefaces for Dyslexia](https://adrianroselli.com/2015/03/typefaces-for-dyslexia.html)”, Adrian Roselli
- [BBC Subtitle Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/)
- “[Implementing Japanese Subtitles on Netflix](https://netflixtechblog.com/implementing-japanese-subtitles-on-netflix-c165fbe61989)”, Rohit Puri, Cyril Concolato, David Ronca and Yumi Deeter
- “[Design Principles for Real-Time Captions in Video Calls](https://uxdesign.cc/these-are-design-principles-for-real-time-captions-in-video-calls-325b8906767e)”, Quinn Keast
- “[Games UX: All About Subtitles](https://medium.com/super-jump/games-ux-all-about-subtitles-73a12531fd4f)” (behind a Medium paywall), Chris Bam Harrison
- [Usability tests for personalized subtitles](https://www.jbe-platform.com/content/journals/10.1075/ts.18016.man) (academic paper, behind a paywall), Lluís Mas Manchón and Pilar Orero
- [Sound Is Not Enough](https://audio-accessibility.com/book/), a book on audio accessibility by Svetlana Kouznetsova ([preview](https://audio-accessibility.com/book-preview/))



## Meet “Smart Interface Design Patterns”

If you are interested in similar insights around UX, take a look at [**Smart Interface Design Patterns**](https://smart-interface-design-patterns.com/), our shiny **9h-video course** with 100s of practical examples from real-life projects. Design patterns and guidelines on everything from mega-dropdowns to complex enterprise tables &mdash; with 5 new segments added every year. *Just sayin’!* [Check a free preview](https://www.youtube.com/watch?v=aSP5oR9g-ss).

<figure style="margin-bottom: 1rem"><a href="https://smart-interface-design-patterns.com/"><img style="border-radius: 11px" decoding="async" fetchpriority="low" width="950" height="492" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7cc4e1de-6921-474e-a3fb-db4789fc13dd/b4024b60-e627-177d-8bff-28441f810462.jpeg 400w,
https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7cc4e1de-6921-474e-a3fb-db4789fc13dd/b4024b60-e627-177d-8bff-28441f810462.jpeg 800w,
https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7cc4e1de-6921-474e-a3fb-db4789fc13dd/b4024b60-e627-177d-8bff-28441f810462.jpeg 1200w,
https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7cc4e1de-6921-474e-a3fb-db4789fc13dd/b4024b60-e627-177d-8bff-28441f810462.jpeg 1600w,
https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7cc4e1de-6921-474e-a3fb-db4789fc13dd/b4024b60-e627-177d-8bff-28441f810462.jpeg 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7cc4e1de-6921-474e-a3fb-db4789fc13dd/b4024b60-e627-177d-8bff-28441f810462.jpeg" sizes="100vw" alt="Smart Interface Design Patterns"></a><figcaption class="op-vertical-bottom">Meet <a href="https://smart-interface-design-patterns.com/">Smart Interface Design Patterns</a>, our new video course on interface design &amp; UX.</figcaption></figure>

<div class="btn--lined btn--lined--white-border" style="margin-top: 0.75em; margin-bottom: 0.75em"><a class="btn btn--large btn--green btn--text-shadow" href="https://smart-interface-design-patterns.com/">Jump to the video course&nbsp;&rarr;</a></div>

<p class="ticket-price__desc" style="font-size: .8em!important; text-align: center; line-height: 1.5; margin-top: 0; display: block;">100 design patterns &amp; real-life 
examples.<br>9h-video course + live UX training. <a href="https://www.youtube.com/watch?v=aSP5oR9g-ss">Free preview</a>.</p>


{{< signature "yk, il" >}}
