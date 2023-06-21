---
title: 'Understanding App Directory Architecture In Next.js'
slug: understanding-app-directory-architecture-next-js
author: atila-fassina
image: >-
  https://files.smashing.media/articles/understanding-app-directory-architecture-next-js/understanding-app-directory-architecture-next-js.jpg
date: 2023-02-01T11:00:00.000Z
summary: >-
  The new App Directory architecture has been the main character of the recent Next.js release, which keeps bringing up many questions. In this article, Atila Fassina explores the advantages and pitfalls of this new strategy and reflects on whether you should use it in production now or not.
description: >-
  The new App Directory architecture has been the main character of the recent Next.js release, which keeps bringing up many questions. In this article, Atila Fassina explores the advantages and pitfalls of this new strategy and reflects on whether you should use it in production now or not.
categories:
  - Next.js
  - Guides
  - React
  - Apps
---

Since [Next.js 13 release](https://nextjs.org/blog/next-13), there’s been some debate about how stable the shiny new features packed in the announcement are. On “[What’s New in Next.js 13](https://www.smashingmagazine.com/2022/11/whats-new-nextjs-13/)?” we have covered the release announced and established that though carrying some interesting experiments, Next.js 13 is definitely stable. And since then, most of us have seen a very clear landscape when it comes to the new `<Link>` and `<Image>` components, and even the (still beta) `@next/font`; these are all good to go, instant profit. **Turbopack**, as clearly stated in the announcement, is still alpha: aimed strictly for **development** builds and still heavily under development. Whether you can or can’t use it in your daily routine depends on your stack, as there are integrations and optimizations still somewhere on the way. This article’s scope is strictly about the main character of the announcement: the new App Directory architecture (AppDir, for short).

Because the **App directory** is the one that keeps bringing questions due to it being partnered with an important evolution in the React ecosystem &mdash; React Server Components &mdash; and with edge runtimes. It clearly is the shape of the future of our Next.js apps. It is **experimental** though, and its [roadmap](https://beta.nextjs.org/docs/app-directory-roadmap) is not something we can consider will be done in the next few weeks. So, should you use it in production now? What advantages can you get out of it, and what are the pitfalls you may find yourself climbing out of? As always, the answer in software development is the same: it depends.

## What Is The App Directory Anyway?

It is the new strategy for handling routes and rendering views in Next.js. It is made possible by a couple of different features tied together, and it is built to make the most out of React concurrent features (yes, we are talking about React Suspense). It brings, though, a big paradigm shift in how you think about components and pages in a Next.js app. This new way of building your app has **a lot** of very welcomed improvements to your architecture. Here’s a short, non-exhaustive list:

- Partial Routing.
    - Route Groups.
    - Parallel Routes.
    - Intercepting Routes.
- Server Components vs. Client Components.
- Suspense Boundaries.
- And much more, check the [features overview](https://beta.nextjs.org/docs#features-overview) in the new documentation.

### A Quick Comparison

When it comes to the current routing and rendering architecture (in the Pages directory), developers were required to think of data fetching per route.

- `getServerSideProps`: Server-Side Rendered;
- `getStaticProps`: Server-Side Pre-Rendered and/or Incremental Static Regeneration;
- `getStaticPaths` + `getStaticProps`: Server-Side Pre-Rendered or Static Site Generated.

Historically, it hadn’t yet been possible to choose the rendering strategy on a per-page basis. Most apps were either going full Server-Side Rendering or full Static Site Generation. Next.js created enough abstractions that made it a standard to think of routes individually within its architecture.

Once the app reaches the browser, hydration kicks in, and it’s possible to have routes collectively sharing data by wrapping our `_app` component in a React Context Provider. This gave us tools to *hoist* data to the top of our rendering tree and cascade it down toward the leaves of our app.

<pre><code class="language-javascript">import { type AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
		&lt;SomeProvider&gt;
			&lt;Component {...pageProps} /&gt;
		&lt;/SomeProvider&gt;
}
</code></pre>

The ability to render and organize required data per route made this approach an almost good tool for when data absolutely needed to be available globally in the app. And while this strategy will allow data to spread throughout the app, wrapping everything in a Context Provider bundles hydration to the root of your app. It is not possible anymore to render any branches on that tree (any route within that Provider context) on the server. 

Here, enters the **Layout Pattern**. By creating wrappers around pages, we could opt in or out of rendering strategies per route again instead of doing it once with an app-wide decision. Read more on how to manage states in the Pages Directory on the article “[State Management in Next.js](https://www.smashingmagazine.com/2021/08/state-management-nextjs/)” and on the [Next.js documentation](https://nextjs.org/docs/basic-features/layouts).

The **Layout Pattern** proved to be a great solution. Being able to granularly define rendering strategies is a very welcomed feature. So the App directory comes in to put the layout pattern front and center. As a first-class citizen of Next.js architecture, it enables enormous improvements in terms of performance, security, and data handling.

With React concurrent features, it’s now possible to stream components to the browser and let each one handle its own data. So rendering strategy is even more granular now &mdash; instead of page-wide, it’s component-based. Layouts are nested by default, which makes it more clear to the developer what impacts each page based on the file-system architecture. And on top of all that, it is mandatory to explicitly turn a component client-side (via the “use client” directive) in order to use a Context.

{{% feature-panel %}}

## Building Blocks Of The App Directory

This architecture is built around the **Layout Per Page Architecture**. Now, there is no `_app`, neither is there a `_document` component. They have both been replaced by the root `layout.jsx` component. As you would expect, that’s a special layout that will wrap up your entire application.

<pre><code class="language-javascript">export function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		&lt;html lang="en"&gt;
			&lt;body&gt;
				{children}
			&lt;/body&gt;
		&lt;/html&gt;
}
</code></pre>

The **root layout** is our way to manipulate the HTML returned by the server to the entire app at once. It is a server component, and it **does not** render again upon navigation. This means any data or state in a layout will persist throughout the lifecycle of the app. 

While the **root layout** is a special component for our entire app, we can also have root components for other building blocks:

- `loading.jsx`: to define the Suspense Boundary of an entire route;
- `error.jsx`: to define the Error Boundary of our entire route;
- `template.jsx`: similar to the layout, but re-renders on every navigation. Especially useful to handle state between routes, such as in or out transitions.

All of those components and conventions are **nested by default**. This means that `/about` will be nested within the wrappers of `/`  automatically.

Finally, we are also required to have a `page.jsx` for every route as it will define the main component to render for that URL segment (as known as the place you put your components!). These are obviously not nested by default and will only show in our DOM when there’s an exact match to the URL segment they correspond to.

There is much more to the architecture (and even more coming!), but this should be enough to get your mental model right before considering migrating from the **Pages directory** to the **App directory** in production. Make sure to check on the official [upgrade guide](https://beta.nextjs.org/docs/upgrade-guide) as well.

### Server Components In A Nutshell

React Server Components allow the app to leverage infrastructure towards better performance and overall user experience. For example, the immediate improvement is on bundle size since RSC won’t carry over their dependencies to the final bundle. Because they’re rendered in the server, any kind of parsing, formatting, or component library will remain on the server code. Secondly, thanks to their asynchronous nature, Server Components are **streamed** to the client. This allows the rendered HTML to be progressively enhanced on the browser.

So, Server Components lead to a more predictable, cacheable, and constant size of your final bundle breaking the linear correlation between app size and bundle size. This immediately puts RSC as a best practice versus traditional React components (which are now referred to as client components to ease disambiguation).

On Server Components, fetching data is also quite flexible and, in my opinion, feels closer to vanilla JavaScript &mdash; which always smooths the learning curve. For example, understanding the JavaScript runtime makes it possible to define data-fetching as either parallel or sequential and thus have more fine-grained control on the resource loading waterfall.

- **Parallel Data Fetching**, waiting for all:

<pre><code class="language-javascript">import TodoList from './todo-list'

async function getUser(userId) {
  const res = await fetch(`https://&lt;some-api&gt;/user/${userId}`);
  return res.json()
}

async function getTodos(userId) {
  const res = await fetch(`https://&lt;some-api&gt;/todos/${userId}/list`);
  return res.json()
}

export default async function Page({ params: { userId } }) {
  // Initiate both requests in parallel.
  const userResponse = getUser(userId)
  const  = getTodos(username)

  // Wait for the promises to resolve.
  const [user, todos] = await Promise.all([userResponse, todosResponse])

  return (
    &lt;&gt;
      &lt;h1&gt;{user.name}&lt;/h1&gt;
      &lt;TodoList list={todos}&gt;&lt;/TodoList&gt;
    &lt;/&gt;
  )
}
</code></pre>

- **Parallel**, waiting for one request, streaming the other:

<pre><code class="language-javascript">async function getUser(userId) {
  const res = await fetch(`https://&lt;some-api&gt;/user/${userId}`);
  return res.json()
}

async function getTodos(userId) {
  const res = await fetch(`https://&lt;some-api&gt;/todos/${userId}/list`);
  return res.json()
}

export default async function Page({ params: { userId } }) {
  // Initiate both requests in parallel.
  const userResponse = getUser(userId)
  const todosResponse = getTodos(userId)

  // Wait only for the user.
  const user = await userResponse

  return (
    &lt;&gt;
      &lt;h1&gt;{user.name}&lt;/h1&gt;
			&lt;Suspense fallback={&lt;div&gt;Fetching todos...&lt;/div&gt;}&gt;
	      &lt;TodoList listPromise={todosResponse}&gt;&lt;/TodoList&gt;
			&lt;/Suspense&gt;
    &lt;/&gt;
  )
}

async function TodoList ({ listPromise }) {
  // Wait for the album's promise to resolve.
  const todos = await listPromise;

  return (
    &lt;ul&gt;
      {todos.map(({ id, name }) =&gt; (
        &lt;li key={id}&gt;{name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}
</code></pre>

In this case, `<TodoList>` receives an in-flight Promise and needs to `await` it before rendering. The app will render the **suspense fallback** component until it’s all done.

- **Sequential Data Fetching** fires one request at a time and awaits for each:

<pre><code class="language-javascript">async function getUser(username) {
  const res = await fetch(`https://&lt;some-api&gt;/user/${userId}`);
  return res.json()
}

async function getTodos(username) {
  const res = await fetch(`https://&lt;some-api&gt;/todos/${userId}/list`);
  return res.json()
}

export default async function Page({ params: { userId } }) {
  const user = await getUser(userId)
  

  return (
    &lt;&gt;
      &lt;h1&gt;{user.name}&lt;/h1&gt;
			&lt;Suspense fallback={&lt;div&gt;Fetching todos...&lt;/div&gt;}&gt;
		    &lt;TodoList userId={userId} /&gt;
			&lt;/Suspense&gt;
    &lt;/&gt;
  )
}

async function TodoList ({ userId }) {
  const todos = await getTodos(userId);

  return (
    &lt;ul&gt;
      {todos.map(({ id, name }) =&gt; (
        &lt;li key={id}&gt;{name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}
</code></pre>

Now, `Page` will fetch and wait on `getUser`, then it will start rendering. Once it reaches `<TodoList>`, it will fetch and wait on `getTodos`. This is still more granular than what we are used to it with the Pages directory.

Important things to note:

- Requests fired within the same component scope will be fired in parallel (more about this at [Extended Fetch API](#extended-fetch-api) below).
- Same requests fired within the same server runtime will be deduplicated (only one is actually happening, the one with the shortest cache expiration).
- For requests that won’t use `fetch` (such as third-party libraries like SDKs, ORMs, or database clients), route caching will not be affected unless manually configured via [segment cache configuration](https://beta.nextjs.org/docs/data-fetching/fetching#segment-cache-configuration).

<pre><code class="language-javascript">export const revalidate = 600; // revalidate every 10 minutes

export default function Contributors({
  params
}: {
  params: { projectId: string };
}) {
	const { projectId }  = params
	const { contributors } = await myORM.db.workspace.project({ id: projectId })

  return &lt;ul&gt;{&#42;/ ... &#42;/}&lt;/ul&gt;;
}
</code></pre>

To point out how much more control this gives developers: when within the pages directory, rendering would be blocked until all data is available. When using `getServerSideProps`, the user would still see the loading spinner until data for the entire route is available. To mimic this behavior in the App directory, the fetch requests would need to happen in the `layout.tsx` for that route, so always avoid doing it. An “all or nothing” approach is rarely what you need, and it leads to worse perceived performance as opposed to this granular strategy.

{{% ad-panel-leaderboard %}}

## Extended Fetch API

The syntax remains the same: `fetch(route, options)`. But according to the [Web Fetch Spec](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), the `options.cache` will determine how this API will interact with the **browser cache.** But in Next.js, it will interact with the [framework server-side HTTP Cache](https://beta.nextjs.org/docs/data-fetching/fundamentals#caching-data). 

When it comes to the extended **Fetch API** for Next.js and its cache policy, two values are important to understand:

- `force-cache`: the default, looks for a fresh match and returns it.
- `no-store` or `no-cache`: fetches from the remote server on every request.
- `next.revalidate`: the same syntax as ISR, sets a hard threshold to consider the resource fresh.

<pre><code class="language-javascript">fetch(`https://route`, { cache: 'force-cache', next: { revalidate: 60 } })
</code></pre>

The caching strategy allows us to categorize our requests:

- **Static Data**: persist longer. E.g., blog post.
- **Dynamic Data:** changes often and/or is a result of user interaction. E.g., comments section, shopping cart.

By default, every data is considered **static data**. This is due to the fact `force-cache` is the default caching strategy. To opt out of it for fully dynamic data, it’s possible to define `no-store` or `no-cache`.

If a dynamic function is used (e.g., setting cookies or headers), the default will switch from `force-cache` to `no-store`!

Finally, to implement something more similar to Incremental Static Regeneration, you’ll need to use `next.revalidate`. With the benefit that instead of being defined for the entire route, it only defines the component it’s a part of.

## Migrating From Pages To App

Porting logic from **Pages directory** to **Apps directory** may look like a lot of work, but Next.js has worked prepared to allow both architectures to coexist, and thus **migration can be done incrementally**. Additionally, there is a very good **[migration guide](https://beta.nextjs.org/docs/upgrade-guide#migrating-from-pages-to-app)** in the documentation; I recommend you to read it fully before jumping into a refactoring. 

Guiding you through the migration path is beyond the scope of this article and would make it redundant to the docs. Alternatively, in order to add value on top of what the official documentation offers, I will try to provide insight into the friction points my experience suggests you will find.

### The Case Of React Context

In order to provide all the benefits mentioned above in this article, RSC can’t be interactive, which means they don’t have hooks. Because of that, we have decided to push our client-side logic to the leaves of our rendering tree as late as possible; once you add interactiveness, children of that component will be client-side. 

In a few cases pushing some components will not be possible (especially if some key functionality depends on React Context, for example). Because most libraries are prepared to defend their users against Prop Drilling, many create context providers to skip components from root to distant descendants. So ditching React Context entirely may cause some external libraries not to work well.

As a temporary solution, there is an escape hatch to it. A client-side wrapper for our providers:

<pre><code class="language-javascript">// /providers.jsx
‘use client’

import { type ReactNode, createContext } from 'react';

const SomeContext = createContext();

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    &lt;SomeContext.Provider value="data"&gt;
      {children}
    &lt;/SomeContext.Provider&gt;
  );
}
</code></pre>

And so the layout component will not complain about skipping a client component from rendering. 

<pre><code class="language-javascript">// app/.../layout.jsx
import { type ReactNode } from 'react';
import Providers from ‘./providers’;

export default function Layout({ children }: { children: ReactNode }) {
	return (
    &lt;Providers&gt;{children}&lt;/Providers&gt;
  );
}
</code></pre>

It is important to realize that once you do this, the entire branch will become client-side rendered. This approach will take everything within the `<Providers>` component to not be rendered on the server, so use it only as a last resort.

### TypeScript And Async React Elements

When using `async/await` outside of Layouts and Pages, TypeScript will yield an error based on the response type it expects to match its JSX definitions. It is supported and will still work in runtime, but according to Next.js documentation, this needs to be fixed upstream in TypeScript.

For now, the solution is to add a comment in the above line `{/* @ts-expect-error Server Component */}`.

### Client-side Fetch On The Works

Historically, Next.js has not had a built-in data mutation story. Requests being fired from the client side were at the developer’s own discretion to figure out. With React Server Components, this is bound for a chance; the React team is working on a `use` hook which will accept a `Promise`, then it will handle the promise and return the value directly.

In the future, this will supplant most bad cases of `useEffect` in the wild (more on that in the excellent talk “[Goodbye UseEffect](https://www.youtube.com/watch?v=bGzanfKVFeU)”) and possibly be the standard for handling asynchronicity (fetching included) in client-side React. 

For the time being, it is still recommended to rely on libraries like React-Query and SWR for your client-side fetching needs. Be especially aware of the `fetch` behavior, though!

{{% ad-panel-leaderboard %}}

## So, Is It Ready?

Experimenting is at the essence of moving forward, and we can’t make a nice omelet without breaking eggs. I hope this article has helped you answer this question for your own specific use case.

If on a greenfield project, I’d possibly take **App directory** for a spin and keep **Page directory** as a fallback or for the functionality that is critical for business. If refactoring, it would depend on how much client-side fetching I have. Few: do it; many: probably wait for the full story.

Let me know your thoughts on [Twitter](https://atila.io/twitter) or in the comments below.

### Further Reading On SmashingMag

- “[Optimizing A Vue App](https://www.smashingmagazine.com/2022/11/optimizing-vue-app/)”, Michelle Barker
- “[Node.js Authentication With Twilio Verify](https://www.smashingmagazine.com/2022/10/nodejs-authentication-twilio-verify/)”, Alexander Godwin
- “[A New Pattern For The Jamstack: Segmented Rendering](https://www.smashingmagazine.com/2022/07/new-pattern-jamstack-segmented-rendering/)”, Eric Burel
- “[A Look At Remix And The Differences With Next.js](https://www.smashingmagazine.com/2022/07/look-remix-differences-next/)”, Facundo Giuliani

{{< signature "yk, il" >}}
