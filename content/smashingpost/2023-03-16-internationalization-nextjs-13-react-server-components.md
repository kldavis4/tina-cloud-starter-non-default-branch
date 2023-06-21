---
title: 'Internationalization In Next.js 13 With React Server Components'
slug: internationalization-nextjs-13-react-server-components
author: jan-amann
image: >-
  https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/internationalization-nextjs-13-react-server-components.jpg
date: 2023-03-16T20:00:00.000Z
summary: >-
  Based on an example of a multilingual app that displays street photography images from Unsplash, Jan Amann explores <code>next-intl</code> to implement all internationalization needs in React Server Components and shares a technique for introducing interactivity with a minimalistic client-side footprint.
description: >-
  Based on an example of a multilingual app that displays street photography images from Unsplash, Jan Amann explores <code>next-intl</code> to implement all internationalization needs in React Server Components and shares a technique for introducing interactivity with a minimalistic client-side footprint.
categories:
  - Next.js
  - JavaScript
  - Coding
  - React
---

With the introduction of [Next.js 13](https://beta.nextjs.org/docs/getting-started) and the beta release of the App Router, React Server Components became publicly available. This new paradigm allows components that don’t require React’s interactive features, such as `useState` and `useEffect`, to remain server-side only.

One area that benefits from this new capability is **internationalization**. Traditionally, internationalization requires a tradeoff in performance as loading translations results in larger client-side bundles and using message parsers impacts the client runtime performance of your app.

The promise of **React Server Components** is that we can have our cake and eat it too. If internationalization is implemented entirely on the server side, we can achieve new levels of performance for our apps, leaving the client side for interactive features. But how can we work with this paradigm when we need interactively-controlled states that should be reflected in internationalized messages?

In this article, we’ll explore a multilingual app that displays street photography images from Unsplash. We’ll use [`next-intl`](https://next-intl-docs.vercel.app/) to implement all our internationalization needs in React Server Components, and we’ll look at a technique for introducing interactivity with a minimalistic client-side footprint.

{{< rimg href="https://street-photography-viewer.vercel.app/en" src="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/13-app-final-framed.png" width="800" height="680" sizes="100vw" caption="You can also check the <a href='https://street-photography-viewer.vercel.app/en'>interactive demo</a>. (<a href='https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/13-app-final-framed.png'>Large preview</a>)" alt="App final framed" >}}

## Fetching Photos From Unsplash

A key benefit of Server Components is the ability to fetch data directly from inside components via `async`/`await`. We can use this to fetch the photos from Unsplash in our page component.

But first, we need to create our API client based on the official Unsplash SDK.

<pre><code class="language-javascript">import {createApi} from 'unsplash-js';

export default createApi({
  accessKey: process.env.UNSPLASH&#95;ACCESS&#95;KEY
});
</code></pre>

Once we have our Unsplash API client, we can use it in our page component.

<pre><code class="language-javascript">import {OrderBy} from 'unsplash-js';
import UnsplashApiClient from './UnsplashApiClient';

export default async function Index() {
  const topicSlug = 'street-photography';

  const [topicRequest, photosRequest] = await Promise.all([
    UnsplashApiClient.topics.get({topicIdOrSlug: topicSlug}),
    UnsplashApiClient.topics.getPhotos({
      topicIdOrSlug: topicSlug,
      perPage: 4
    })
  ]);

  return (
    &lt;PhotoViewer
      coverPhoto={topicRequest.response.cover&#95;photo}
      photos={photosRequest.response.results}
    /&gt;
  );
}
</code></pre>

**Note:** *We use `Promise.all` to invoke both requests that we need to make in parallel. This way, we avoid a request waterfall.*

At this point, our app renders a simple photo grid.

{{< rimg href="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/2-app-basic-photo-grid.png" src="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/2-app-basic-photo-grid.png" width="800" height="602" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/2-app-basic-photo-grid.png'>Large preview</a>)" alt="An app which renders a simple photo grid" >}}

The app currently uses hard-coded English labels, and the dates of the photos are displayed as timestamps, which is not very user-friendly (yet).

{{% feature-panel %}}

## Adding Internationalization With `next-intl`

In addition to English, we’d like our app to be available in Spanish. Support for Server Components is currently in beta for [`next-intl`](https://next-intl-docs.vercel.app/), so we can use [the installation instructions for the latest beta](https://next-intl-docs.vercel.app/docs/next-13/server-components) to set up our app for internationalization.

### Formatting Dates

Aside from adding a second language, we’ve already found that the app doesn’t adapt well to English users because the dates should be formatted. To achieve a good user experience, we’d like to tell the user the relative time when the photo was uploaded (e.g., “8 days ago”).

Once  `next-intl` is set up, we can fix the formatting by using the `format.relativeTime` function in the component that renders each photo.

<pre><code class="language-javascript">import {useFormatter} from 'next-intl';

export default function PhotoGridItem({photo}) {
  const format = useFormatter();
  const updatedAt = new Date(photo.updated&#95;at);

  return (
    &lt;a href={photo.links.html}&gt;
        {/&#42; ... &#42;/}
        &lt;p&gt;{format.relativeTime(updatedAt)}&lt;/p&gt;
      &lt;/div&gt;
    &lt;/a&gt;
  );
}
</code></pre>

Now the date when a photo has been updated is easier to read.

{{< rimg href="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/3-app-photo-item-date-formatted.png" src="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/3-app-photo-item-date-formatted.png" width="800" height="547" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/3-app-photo-item-date-formatted.png'>Large preview</a>)" alt="An app’s photo time with the formatted date" >}}

**Hint:** *In a traditional React app that renders on both the server and client side, it can be quite a challenge to ensure that the displayed relative date is in sync across the server and client. Since these are different environments and may be in different time zones, you need to configure a mechanism to transfer the server time to the client side. By performing the formatting only on the server side, we don’t have to worry about this problem in the first place.*

### ¡Hola! 👋 Translating Our App To Spanish

Next, we can replace the static labels in the header with localized messages. These labels are passed as props from the `PhotoViewer` component, so this is our chance to introduce dynamic labels via the `useTranslations` hook.

<pre><code class="language-javascript">import {useTranslations} from 'next-intl';

export default function PhotoViewer(/&#42; ... &#42;/) {
  const t = useTranslations('PhotoViewer');

  return (
    &lt;&gt;
      &lt;Header
        title={t('title')}
        description={t('description')}
      /&gt;
      {/&#42; ... &#42;/}
    &lt;/&gt;
  );
}
</code></pre>

For each internationalized label we add, we need to make sure that there is an appropriate entry set up for all languages.

<div class="break-out">

<pre><code class="language-javascript">// en.json
{
  "PhotoViewer": {
    "title": "Street photography",
    "description": "Street photography captures real-life moments and human interactions in public places. It is a way to tell visual stories and freeze fleeting moments of time, turning the ordinary into the extraordinary."
  }
}
</code></pre>
</div>

<div class="break-out">

<pre><code class="language-javascript">// es.json
{
  "PhotoViewer": {
    "title": "Street photography",
    "description": "La fotografía callejera capta momentos de la vida real y interacciones humanas en lugares públicos. Es una forma de contar historias visuales y congelar momentos fugaces del tiempo, convirtiendo lo ordinario en lo extraordinario."
  }
}
</code></pre>
</div>

**Tip:** *[`next-intl` provides a TypeScript integration](https://next-intl-docs.vercel.app/docs/usage/typescript) that helps you ensure that you’re only referencing valid message keys.*

Once this is done, we can visit the Spanish version of the app at `/es`.

{{< rimg href="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/11-app-basic-es-framed.png" src="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/11-app-basic-es-framed.png" width="800" height="668" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/11-app-basic-es-framed.png'>Large preview</a>)" alt="The Spanish version of the app" >}}

So far, so good!

{{% ad-panel-leaderboard %}}

## Adding Interactivity: Dynamic Ordering Of Photos

By default, the Unsplash API returns the most popular photos. We want the user to be able to change the order to show the most recent photos first.

Here, the question arises whether we should resort to client-side data fetching so that we can implement this feature with `useState`. However, that would require us to move all of our components to the client side, resulting in an increased bundle size.

Do we have an alternative? Yes. And it’s a capability that has been around on the web for ages: [search parameters](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) (sometimes referred to as *query parameters*). What makes search parameters a great option for our use case is that they can be read on the server side.

So let’s modify our page component to receive `searchParams` via props.

<pre><code class="language-javascript">export default async function Index({searchParams}) {
  const orderBy = searchParams.orderBy || OrderBy.POPULAR;

  const [/&#42; ... &#42;/, photosRequest] = await Promise.all([
    /&#42; ... &#42;/,
    UnsplashApiClient.topics.getPhotos({orderBy, /&#42; ... &#42;/})
  ]);
</code></pre>

After this change, the user can navigate to `/?orderBy=latest` to change the order of the displayed photos.

To make it easy for the user to change the value of the search parameter, we’d like to render an interactive [`select` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) from within a component.

{{< rimg href="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/5-app-order-select-collapsed.png" src="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/5-app-order-select-collapsed.png" width="800" height="234" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/5-app-order-select-collapsed.png'>Large preview</a>)" alt="The app’s order select with the most popular photos displayed" >}}

We can mark the component with `'use client';` to attach an event handler and process change events from the `select` element. Nevertheless, we would like to keep the internationalization concerns on the server side to reduce the size of the client bundle.

Let’s have a look at the required markup for our `select` element.

<pre><code class="language-html">&lt;select&gt;
  &lt;option value="popular"&gt;Popular&lt;/option&gt;
  &lt;option value="latest"&gt;Latest&lt;/option&gt;
&lt;/select&gt;
</code></pre>

We can split this markup into two parts:

1. Render the `select` element with an interactive Client Component.
2. Render the internationalized `option` elements with a Server Component and pass them as `children` to the `select` element.

Let’s implement the `select` element for the client side.

<pre><code class="language-javascript">'use client';

import {useRouter} from 'next-intl/client';

export default function OrderBySelect({orderBy, children}) {
  const router = useRouter();

  function onChange(event) {
    // The `useRouter` hook from `next-intl` automatically
    // considers a potential locale prefix of the pathname.
    router.replace('/?orderBy=' + event.target.value);
  }

  return (
    &lt;select defaultValue={orderBy} onChange={onChange}&gt;
      {children}
    &lt;/select&gt;
  );
}
</code></pre>

Now, let’s use our component in `PhotoViewer` and provide the localized `option` elements as `children`.

<pre><code class="language-javascript">import {useTranslations} from 'next-intl';
import OrderBySelect from './OrderBySelect';

export default function PhotoViewer({orderBy, /&#42; ... &#42;/}) {
  const t = useTranslations('PhotoViewer');

  return (
    &lt;&gt;
      {/&#42; ... &#42;/}
      &lt;OrderBySelect orderBy={orderBy}&gt;
        &lt;option value="popular"&gt;{t('orderBy.popular')}&lt;/option&gt;
        &lt;option value="latest"&gt;{t('orderBy.latest')}&lt;/option&gt;
      &lt;/OrderBySelect&gt;
    &lt;/&gt;
  );
}
</code></pre>

With this pattern, the markup for the `option` elements is now generated on the server side and passed to the `OrderBySelect`, which handles the change event on the client side.

**Tip**: *Since we have to wait for the updated markup to be generated on the server side when the order is changed, we may want to show the user a loading state. React 18 introduced [the `useTransition` hook](https://beta.reactjs.org/reference/react/useTransition), which is integrated with Server Components. This allows us to disable the `select` element while waiting for a response from the server.*

<pre><code class="language-javascript">import {useRouter} from 'next-intl/client';
import {useTransition} from 'react';

export default function OrderBySelect({orderBy, children}) {
  const [isTransitioning, startTransition] = useTransition();
  const router = useRouter();

  function onChange(event) {
    startTransition(() =&gt; {
      router.replace('/?orderBy=' + event.target.value);
    });
  }

  return (
    &lt;select disabled={isTransitioning} /&#42; ... &#42;/&gt;
      {children}
    &lt;/select&gt;
  );
}
</code></pre>

{{% ad-panel-leaderboard %}}

## Adding More Interactivity: Page Controls

The same pattern that we’ve explored for changing the order can be applied to page controls by introducing a `page` search parameter.

{{< rimg href="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/6-app-pagination.png" src="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/6-app-pagination.png" width="800" height="146" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/6-app-pagination.png'>Large preview</a>)" alt="App's pagination" >}}

Note that languages have different rules for handling decimal and thousand separators. Furthermore, languages have different forms of pluralization: while English only makes a grammatical distinction between one and zero/many elements, for example, Croatian has a separate form for ‘few’ elements.

`next-intl` uses the [ICU syntax](https://next-intl-docs.vercel.app/docs/usage/messages#rendering-of-messages) which makes it possible to express these language subtleties.

<div class="break-out">

<pre><code class="language-javascript">// en.json
{
  "Pagination": {
    "info": "Page {page, number} of {totalPages, number} ({totalElements, plural, =1 {one result} other {# results}} in total)",
    // ...
  }
}
</code></pre>
</div>

This time we don’t need to mark a component with `'use client';`. Instead, we can implement this with regular anchor tags.

<div class="break-out">

<pre><code class="language-javascript">import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/24/solid';
import {Link, useTranslations} from 'next-intl';

export default function Pagination({pageInfo, orderBy}) {
  const t = useTranslations('Pagination');
  const totalPages = Math.ceil(pageInfo.totalElements / pageInfo.size);

  function getHref(page) {
    return {
      // Since we're using `Link` from next-intl, a potential locale
      // prefix of the pathname is automatically considered.
      pathname: '/',
      // Keep a potentially existing `orderBy` parameter. 
      query: {orderBy, page}
    };
  }

  return (
    &lt;&gt;
      {pageInfo.page &gt; 1 && (
        &lt;Link aria-label={t('prev')} href={getHref(pageInfo.page - 1)}&gt;
          &lt;ArrowLeftIcon /&gt;
        &lt;/Link&gt;
      )}
      &lt;p&gt;{t('info', {...pageInfo, totalPages})}&lt;/p&gt;
      {pageInfo.page &lt; totalPages && (
        &lt;Link aria-label={t('prev')} href={getHref(pageInfo.page + 1)}&gt;
          &lt;ArrowRightIcon /&gt;
        &lt;/Link&gt;
      )}
    &lt;/&gt;
  );
}
</code></pre>
</div>

## Conclusion

### Server Components Are A Great Match For Internationalization

Internationalization is an important part of the user experience, whether you support multiple languages or you want to get the subtleties of a single language right. A library like [`next-intl`](https://next-intl-docs.vercel.app/) can help with both cases.

Implementing internationalization in Next.js apps has historically come with a performance tradeoff, but with Server Components, this is no longer the case. However, it might take some time to explore and learn patterns that will help you keep your internationalization concerns on the server side.

In our street photography viewer app, we only needed to move a single component to the client side: `OrderBySelect`.

{{< rimg href="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/12-app-components.png" src="https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/12-app-components.png" width="800" height="515" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/internationalization-nextjs-13-react-server-components/12-app-components.png'>Large preview</a>)" alt="App’s components" >}}

Another aspect to note is that you might want to consider implementing loading states since the network latency introduces a delay before your users see the result of their actions.

### Search Parameters Are A Great Alternative To `useState`

Search parameters are a great way to implement interactive features in Next.js apps, as they help to reduce the bundle size of the client side.

Apart from performance, there are other **benefits of using search parameters**:

- URLs with search parameters can be shared while preserving the application state.
- Bookmarks preserve the state as well.
- You can optionally integrate with the browser history, enabling undoing state changes via the back button.

Note, however, that there are also **tradeoffs to consider**:

- Search parameter values are strings, so you may need to serialize and deserialize data types.
- The URL is part of the user interface, so using many search parameters may affect readability.

You can have a look at the complete [code of the example on GitHub](https://github.com/amannn/street-photography-viewer).

*Many thanks to [Delba de Oliveira](https://twitter.com/delba_oliveira) from Vercel for providing feedback for this article!*

### Further Reading On SmashingMag

 - “[Understanding App Directory Architecture In Next.js](https://www.smashingmagazine.com/2023/02/understanding-app-directory-architecture-next-js/)”, Atila Fassina
 - “[Designing For Users Across Cultures: An Interview With Jenny Shen](https://www.smashingmagazine.com/2019/05/designing-users-across-cultures-interview-jenny-shen/)”, Rachel Andrew
 - “[Dynamic Data-Fetching In An Authenticated Next.js App](https://www.smashingmagazine.com/2022/04/dynamic-data-fetching-authenticated-nextjs-app/)”, Caleb Olojo
 - “[How To Implement Search Functionality In Your Nuxt App Using Algolia InstantSearch](https://www.smashingmagazine.com/2021/10/search-functionality-nuxt-app-algolia-instantsearch/)”, Miracle Onyenma

{{< signature "yk, il" >}}
