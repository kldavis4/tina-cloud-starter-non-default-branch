---
title: 'Getting Internationalization (i18n) Right With Remix And Headless CMS'
slug: internationalization-i18n-right-remix-headless-cms-storyblok
author: facundo-giuliani-arisa-fukuzaki
image: >-
  https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/meta-internationalization-i18n-right-remix-headless-cms-storyblok.jpg
date: 2023-02-21T16:00:00.000Z
summary: >-
  This article will show you the impact of internationalization, its fundamental logic, how to approach it with Remix, and optionally, how to manage it more conveniently using a headless CMS.
description: >-
  This article will show you the impact of internationalization, its fundamental logic, how to approach it with Remix, and optionally, how to manage it more conveniently using a headless CMS.
categories:
  - Apps
  - Frameworks
  - Next.js
  - JavaScript
disable_ads: true
disable_panels: true
disable_newsletterbox: true
sponsor:
  title: Storyblok
  link: https://www.storyblok.com/?utm_source=smashmagazine&utm_medium=article&utm_campaign=i18n_remix_headless_cms
  image: https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/50cb5f98-1b75-4f2a-9e13-b5a2fbe1a71d/storyblok-logo.svg
  description: >-
    This article has been kindly supported by our dear friends at <a href="https://www.storyblok.com/?utm_source=smashmagazine&utm_medium=article&utm_campaign=i18n_remix_headless_cms">Storyblok</a>, a friendly headless CMS with a visual editor, nested components and customizable content blocks for websites and apps. <em>Thank you!</em>
---

How much of a language barrier is there still in the 21st century? You, as the reader, are probably very familiar with English, but what about others?

Nowadays, most of us have often heard the importance of accessibility, better performance, and better UX or DX. You might not hear or often see about i18n compared with these topics. But if you see facts and numbers from the statistics, you might find some surprising results about i18n and its impact. Let’s find out about that together.

<h3 id="marker" style="text-transform: none;">i18n And l10n</h3>

Before we go through the impact of i18n, let’s learn the difference between the two terminologies.

- **i18n**  
i18n stands for internationalization. Between the first character, “i,” and the last character, “n,” from this word, there are 18 characters. i18n describes implementing the structures and features for your applications to be ready to localize content.
- **l10n**  
l10n stands for localization. Between the first character, “l,” and the last character, “n,” from this word, there are ten characters. l10n means translating content into the languages for users who are accessing from specific regions.

As a follow-up, i18n contains a programmatic process to implement features for content editors and translators to be able to start the l10n process from the UI.

<h2 id="marker" style="text-transform: none;">Why Does i18n Matters That Much?</h2>

To see the importance of i18n, let’s look at the numbers and statistics for objective information. You will see the numbers of some facts below, and before reading further, let’s guess what those numbers stand for.

- 5.07 billion
- 25.9%
- 74.1%
- China
- Asia

The first fact shows a tremendous amount of the numbers. 5.07 billion is the number of users in this world in 2020. The world population in 2021 was 7.837 billion, nearly 8 billion. More than half of the world's population has access to content on the internet and apps.

Based on the number of users in this world, there’s another research about the most common languages used on the internet. Looking at the chart, most of us pay attention to the highest number on this diagram: 25.9%, English.

{{< rimg breakout="true" href="https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/1-common-languages-internet.png" src="https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/1-common-languages-internet.png" width="800" height="700" sizes="100vw" caption="(Image source: <a href='https://www.statista.com/statistics/262946/share-of-the-most-common-languages-on-the-internet/'>Statista</a>) (<a href='https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/1-common-languages-internet.png'>Large preview</a>)" alt="Most common languages used on the internet as of January 2020, by share of internet users" >}}

The second highest is the rest of the languages, 23.1%. Also, suppose you gather the rest of the percentage except English. In that case, you may realize out of the over 5 billion users, 74.1% of the users are accessing the content in any other language.

After going through these facts, we can now talk about why internationalizing and localizing your content for Asia and China, in particular, is crucial. China has the most internet users worldwide. As a result, more than half of all internet users globally are from Asia.

Based on what we saw, probably, we can not ignore localizing content. It will improve UX if these huge amounts of users worldwide could have localized content. After knowing the potential impact of proper i18n, let’s look at the fundamental logic.

<h2 id="marker" style="text-transform: none;">How i18n Works At A Basic Level</h2>

Regardless of the technology to implement i18n, there are three ways to determine languages and regions. 

1. The location of the IP address
2. [Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) header/[Navigator.languages](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages)
3. Identifiers in URLs

Using the IP address detects the region of the users and allows them to access content in their regional languages. However, the user’s IP address does not necessarily match their language preference. Moreover, [location analysis prevents the sites from being crawled by search engines.](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?visit_id=638090932378616963-37385648&rd=1#geotargeting)

Using [Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) header or [Navigator.languages](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages) is another possible approach to implement i18n. However, this approach provides language information but not regional information.

i18n is not just about localizing content. It includes improving UX as well. For example, creating identifiers in URLs enhances UX. It also helps to divide localized content into the dedicated system. We will cover how it’s possible to implement such a system in the “[A Combination Of Remix And CMS](#a-combination-of-remix-and-cms)” section.

Typically, identifiers in URLs exist in three different patterns:

1. Differentiate by domains (i.e. `hello.es`, `hello.jp`)
2. URL parameters (i.e. `hello.com?loc=de`)
3. Localized sub-directories (i.e. `hello.com/es`, `hello.com/ja`)

To follow the same-origin policy for better SEO, localized sub-directories can be used.

Based on the interesting facts and the fundamental logic for implementing i18n, we’ll talk about frameworks and libraries, as some of them use i18n libraries.

## Libraries

In order to not reinvent the wheel whenever we want to implement i18n into our projects, developers have different libraries, tools, and services that can be used to facilitate the work. If we are working with React or React-based frameworks, we have different options available. Let’s talk about some of them.

#### Format.js

[Format.js](https://formatjs.io/) is a modular collection of JavaScript libraries that we can use to implement i18n logic in both the client and the server. This group of libraries is focused on formatting numbers, dates, and strings. It offers different functionalities and tooling and runs in the browser as well as in the Node.js runtime. It integrates with various frameworks, like Vue and React, so that we can use its functionalities on our Remix projects. You can read more about it on the [official React Intl's docs](https://formatjs.io/docs/react-intl/).

<h4 id="marker" style="text-transform: none;">i18next</h4>

Another alternative that we can evaluate for our project is [i18next](https://www.i18next.com/). This JavaScript library goes beyond the standard i18n features, providing a whole suite to manage i18n in our projects. We can detect users’ language, cache translations, and even install plugins and extensions. As it was built in JavaScript, we can use this tool for websites as well as for mobile and desktop applications.

## What About Remix?

When creating a website using Remix, we have different options to consider. As it is a React-based framework, we can use any of the previously mentioned libraries. However, we will go through two approaches that can fit better in your Remix projects. First, we will see how to localize content using remix-i18next, a Remix specific library for i18n. Second, we will use a headless content management system as the source of our content’s different languages/locales.

#### remix-i18next

Based on i18next, [Sergio Xalambrí](https://github.com/sergiodxa), one of the main Remix contributors, created [remix-i18next](https://github.com/sergiodxa/remix-i18next). This library offers similar features and modules as the JavaScript library but focuses on Remix concepts and approaches. Easy to set up and use, production-ready, and without any requirement or dependency. Let’s have a closer look at how to implement i18n into our Remix projects using remix-i18next.
 
First of all, we need to install some npm packages:
 

<pre><code class="language-bash">npm install remix-i18next i18next react-i18next i18next-browser-languagedetector i18next-http-backend i18next-fs-backend
</code></pre>

All of them will help us to manage i18n on both the server and the client side of our website. We will also use them to set up our backend and define the logic that will detect the language from the user.

Now, we should add some configuration that will be used across the website from both the client and the server side. Let’s create a couple of JSON files with the translations of the different character strings that we’ll use on our website:

<pre><code class="language-json">{
  "intro": "Hello everyone!"
}
</code></pre>

<pre><code class="language-json">{
  "intro": "Hola a todos!"
}
</code></pre>

By naming the files “common.json”, we’re defining the namespace for the strings ~~that~~ we’ll list in them.

Now, let’s create a file called `i18n.js`. This file contains different configuration settings that we’ll use at the moment of initializing our i18n server.

<pre><code class="language-javascript">export default {
  supportedLngs: ["en", "es"],
  fallbackLng: "en",
  defaultNS: "common",
  // Disabling suspense is recommended
  react: { useSuspense: false },
};
</code></pre>

You can see more configuration options in the [official i18next docs](https://www.i18next.com/overview/configuration-options).

Now, create the file `i18next.server.js`, which contains logic that will be used in the `entry.server.jsx` file of our Remix project.

<div class="break-out">

 <pre><code class="language-javascript">import Backend from "i18next-fs-backend";
    import { resolve } from "node:path";
    import { RemixI18Next } from "remix-i18next";
    import i18n from "~/i18n"; // The configuration file we created
    
    let i18next = new RemixI18Next({
      detection: {
        supportedLanguages: i18n.supportedLngs,
        fallbackLanguage: i18n.fallbackLng,
      },
      i18next: {
        ...i18n,
        backend: {
          loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
        },
      },
      backend: Backend,
    });
    
    export default i18next;
</code></pre>

We’re basically initializing a new i18n server that will run with our Remix backend. We’re specifying the location of the JSON files containing the translations to be used.

Let’s add these features to our main Remix config files. First, we add some logic to be able to translate content client side. To do that, let’s edit our `entry.client.jsx` file:

<div class="break-out">

 <pre><code class="language-javascript">import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { getInitialNamespaces } from "remix-i18next";
import i18n from "./i18n"; // The configuration file we created

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    ...i18n, // The same config we created for the server
    ns: getInitialNamespaces(),
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["htmlTag"],
      caches: [],
    },
  })
  .then(() => {
    // After i18next init, hydrate the app
    hydrateRoot(
      document,
      // Wrap RemixBrowser in I18nextProvider
      &lt;I18nextProvider i18n={i18next}&gt;
        &lt;RemixBrowser /&gt;
      &lt;/I18nextProvider&gt;
    );
  });
</code></pre>
</div>

We need to wait to ensure translations are loaded before the hydration in order to keep our web app interactive.

Let’s add the logic to the `entry.server.jsx` file now:

<div class="break-out">

 <pre><code class="language-javascript">import { createInstance } from "i18next";
import Backend from "i18next-fs-backend";
import { resolve } from "node:path";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "./i18next.server"; // The backend file we created
import i18n from "./i18n"; // The configuration file we created

...

export default async function handleRequest(
...
) {
  // We create a new instance of i18next
  let instance = createInstance();

  // We can detect the specific locale from each request
  let lng = await i18next.getLocale(request);
  // The namespaces the routes about to render wants to use
  let ns = i18next.getRouteNamespaces(remixContext);

  await instance
    .use(initReactI18next)
    .use(Backend)
    .init({
      ...i18n,// The config we created
      lng, // The locale we detected from the request
      ns,
      backend: {
        loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
      },
    });

  return new Promise((resolve, reject) => {
    ...

    let { pipe, abort } = renderToPipeableStream(
      <I18nextProvider i18n={instance}>
        <RemixServer context={remixContext} url={request.url} />{" "}
      </I18nextProvider>,
      ...
    );
    ...
  });
}
</code></pre>
</div>

Identifying users’ preferred language will allow us, among other things, to redirect them to certain routes.

Now we can start using the functionalities provided by remix-i18next to detect the user’s locale and deliver translated content based on that. Let’s edit the `root.jsx` file:

<pre><code class="language-javascript">...

import { json } from "@remix-run/node";
import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";

...

export let loader = async ({ request }) => {
  let locale = await i18next.getLocale(request);
  return json({ locale });
};

export let handle = {
  i18n: "common",
};

export default function App() {
  // Get the locale from the loader
  let { locale } = useLoaderData();
  let { i18n } = useTranslation();

  useChangeLanguage(locale);

  return (
    &lt;html lang={locale} dir={i18n.dir()}&gt;
      ...
    &lt;/html&gt;
  );
}
</code></pre>

The `useChangeLanguage` hook will change the language of the instance to the locale detected by the loader. Whenever we do something to change the language, this locale will change, and i18next will load the correct translations.

Now, we are able to translate content in any route:

<pre><code class="language-javascript">import { useTranslation } from "react-i18next";

export default function MyPage() {
  let { t } = useTranslation();
  return &lt;h1&gt;{t("intro")}&lt;/h1&gt;;
}
</code></pre>

We use the `t()` function to show translated strings based on the list of messages that we defined in our JSON files. 

In this example, we use one default namespace, but we can set up multiple namespaces if we want. You can read more about the `t()` function in [the official i18next docs](https://www.i18next.com/overview/api#t).

In case we want to translate content server side, we can use the `getFixedT` method inside our loaders and actions:

<pre><code class="language-javascript">import i18next from "~/i18next.server";

...

export let loader = async ({ request }) => {
  let t = await i18next.getFixedT(request);
  let title = t("intro");
  return json({ title });
};
</code></pre>

## A Combination Of Remix And CMS

Together, we explored the available options to implement i18n with Remix. At the beginning of this article, we learned that i18n could result in hugely improved UX and SEOUX, and SEO. As part of UX, it’s also important to include better DX.

The approach above creates translation files at the source code level. Also, we don’t have the logic to implement identifiers in URLs. To achieve this, let’s look at the approach of integrating a CMS. In this article, we’ll use Storyblok, which offers three different approaches to localizing content and handles to determine the languages and regions.

**Note**: *If you want to create the connection between your Remix app and Storyblok, there’s [a 5-minute tutorial](https://www.storyblok.com/tp/headless-cms-remix?utm_source=smashmagazine&utm_medium=article&utm_campaign=i18n_remix_headless_cms) that explains just how to do that.*

After that, you can quickly clone a starter space by using this magic link to have all the necessary components and field types. This example space covers an approach called folder-level translation. We’ll cover what it is about in the next section.

#### Choose Between Three Approaches

Storyblok has three ways to create the layout to store localized content and determine languages and regions.

1. [Folder-level translation](https://www.storyblok.com/docs/guide/in-depth/internationalization#folder-level-translation?utm_source=smashmagazine&utm_medium=article&utm_campaign=i18n_remix_headless_cms): Divide localized content in folder-level.
2. [Field-level translation](https://youtu.be/I228iqqNz0E?t=138): Translate in field-type level.
3. [Space-level translation](https://www.storyblok.com/docs/guide/in-depth/internationalization#space-level-translation?utm_source=smashmagazine&utm_medium=article&utm_campaign=i18n_remix_headless_cms): Dedicate spaces (environments or repositories) into certain localized content.

To cover the identifiers in URLs, folder-level translation works perfectly, as each folder will only contain relevant localized content.

{{< rimg breakout="true" href="https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/2-storyblok-folder-level-translation.png" src="https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/2-storyblok-folder-level-translation.png" width="800" height="467" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/2-storyblok-folder-level-translation.png'>Large preview</a>)" alt="Folder Level Translation" >}}

Also, identifiers can be modified from the folder settings via the slug.

{{< rimg breakout="true" href="https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/3-storyblok-folder-settings.png" src="https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/3-storyblok-folder-settings.png" width="800" height="467" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/3-storyblok-folder-settings.png'>Large preview</a>)" alt="Folder settings" >}}

By modifying the slug from the folder settings screen, this localized identifier in the URL appears in all stories inside this Japanese folder. For example, the about page inside of the Japanese folder already has a localized identifier in the URL.

{{< rimg breakout="true" href="https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/4-storyblok-page-teaser.png" src="https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/4-storyblok-page-teaser.png" width="800" height="467" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/internationalization-i18n-right-remix-headless-cms-storyblok/4-storyblok-page-teaser.png'>Large preview</a>)" alt="Storyblok page general teaser" >}}

To programmatically generate content pages, Remix has a feature called [Splats](https://remix.run/docs/en/v1/guides/routing#splats), catching all slugs regardless of the nested levels. Naming a file `$.jsx` will enable the catch-all slug fundamental function.

<pre><code class="language-bash">app
├── root.jsx
└── routes
    ├── files
    │   └── $.jsx
    └── files.jsx
</code></pre>

The difference between [dynamic segments](https://remix.run/docs/en/v1/guides/routing#dynamic-segments) from Remix is that splats still match at the next `/`. Therefore, splats will capture everything in the path. If the URL path is `hello.com/ja/about/something`, the splat route has a special param to capture the trailing segments of the URL. 

<pre><code class="language-javascript">export async function loader({ params }) {
  params["&#42;"]; // "ja/about/something"
}
</code></pre>

Using the splat route’s special param, let’s edit `$.jsx` file.

<div class="break-out">

 <pre><code class="language-javascript">export default function Page() {
 // useLoaderData returns JSON parsed data from loader func
 let story = useLoaderData();
 story = useStoryblokState(story, {
   resolveRelations: ["featured-posts.posts", "selected-posts.posts"]
 });
 return &lt;StoryblokComponent blok={story.content} /&gt;
};
// loader is Backend API & Wired up through useLoaderData
export const loader = async ({ params, preview = false }) =&gt; {
 let slug = params["&#42;"] ?? "home";
 slug = slug.endsWith("/") ? slug.slice(0, -1) : slug;
 let sbParams = {
   version: "draft",
   resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
 };
 // …
 let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`,
 sbParams);
 return json(data?.story, preview);
};
</code></pre>
</div>

**HINT**: *In the section “Choose between 3 approaches”, we didn’t cover all three approaches, but if you’d like to know more, all approaches are documented below.*

## Summary

We learned together the facts and statistics to know the impacts and the importance of i18n and saw how Remix handles several options to implement advanced i18n. Interestingly, a better i18n experience provides better SEO and UX. Hopefully, this article provided you with new knowledge and insightful learnings.

- “[Internationalization](https://www.storyblok.com/docs/guide/in-depth/internationalization?utm_source=smashmagazine&utm_medium=article&utm_campaign=i18n_remix_headless_cms),” Storyblok Docs
- [Video version of this article](https://portal.gitnation.org/contents/lets-remix-to-localize-content-1072)
- [Remix docs](https://remix.run/docs/en/v1)
- [remix-i18next](https://github.com/sergiodxa/remix-i18next)
- [Storyblok docs](https://www.storyblok.com/docs/guide/introduction?utm_source=smashmagazine&utm_medium=article&utm_campaign=i18n_remix_headless_cms)

{{< signature "vf, il" >}}
