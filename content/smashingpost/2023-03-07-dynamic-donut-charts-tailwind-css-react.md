---
title: 'How To Create Dynamic Donut Charts With TailwindCSS And React'
slug: dynamic-donut-charts-tailwind-css-react
author: paul-scanlon
image: >-
  https://files.smashing.media/articles/dynamic-donut-charts-css-conic-gradient-tailwindcss-react/meta-dynamic-donut-charts-tailwind-css-react.jpg
date: 2023-03-07T15:30:00.000Z
summary: >-
  In this article, Paul Scanlon shares a super lightweight approach to creating a Donut chart using <code>conic-gradient()</code>. There are no additional libraries to install or maintain, and there’s no heavy JavaScript that needs to be downloaded by the browser in order for them to work. Let’s explore!
description: >-
  In this article, Paul Scanlon shares a super lightweight approach to creating a Donut chart using <code>conic-gradient()</code>. There are no additional libraries to install or maintain, and there’s no heavy JavaScript that needs to be downloaded by the browser in order for them to work.
categories:
  - CSS
  - SVG
  - React
  - Techniques
---

CSS is amazing &mdash; I’m regularly surprised at how far it has come in the years I’ve been using it (~2005 &ndash; present). One such surprise came when I noticed this tweet by [Shruti Balasa](https://twitter.com/shrutibalasa/status/1612785019159982080?s=20&t=6TLkMmRjOFQxKP7W-jFPcA) which demonstrated how to create a pie chart using [`conic-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient#gradient_pie-chart).

It’s fairly straightforward. Here’s a code snippet:

<pre><code class="language-css">div {
  background: conic-gradient(red 36deg, orange 36deg 170deg, yellow 170deg);
  border-radius: 50%;
}
</code></pre>

Using this tiny amount of CSS, you can create gradients that start and stop at specific angles and define a color for each ‘segment’ of the pie chart. 

{{< rimg href="https://files.smashing.media//articles/dynamic-donut-charts-css-conic-gradient-tailwindcss-react/1-css-conic-gradient-charts.jpg" src="https://files.smashing.media//articles/dynamic-donut-charts-css-conic-gradient-tailwindcss-react/1-css-conic-gradient-charts.jpg" width="800" height="450" sizes="100vw" caption="(<a href='https://files.smashing.media//articles/dynamic-donut-charts-css-conic-gradient-tailwindcss-react/1-css-conic-gradient-charts.jpg'>Large preview</a>)" alt="CSS conic-gradient charts with Donut Charts and a Pie Chart" >}}

## Happy Days!

Brills, I thought I could use this instead of a charting library for a data dashboard project I’m working on for the new [CockroachDB Cloud API](https://www.cockroachlabs.com/docs/api/cloud/v1.html#get-/api/v1/clusters), but I had a problem. I didn’t know the values for my chart ahead of time, and the values I was receiving from the API weren’t in degrees! 

Here’s a preview link and Open-source repo of how I worked around those two problems, and in the rest of this post, I’ll explain how it all works.

- 🚀 Preview: [https://css-conic-gradient-charts.vercel.app/](https://css-conic-gradient-charts.vercel.app/)
- ⚙️ Repo: [https://github.com/PaulieScanlon/css-conic-gradient-charts](https://github.com/PaulieScanlon/css-conic-gradient-charts)

## Dynamic Data Values

Here’s some sample data from a *typical* API response which I’ve sorted by `value`.

<pre><code class="language-css">const data = [
  {
    name: 'Cluster 1',
    value: 210,
  },
  {
    name: 'Cluster 2',
    value: 30,
  },
  {
    name: 'Cluster 3',
    value: 180,
  },
  {
    name: 'Cluster 4',
    value: 260,
  },
  {
    name: 'Cluster 5',
    value: 60,
  },
].sort((a, b) =&gt; a.value - b.value);
</code></pre>

You can see that each item in the array has a `name` and a `value`. 

In order to convert the `value` from a number into a `deg` value to use with CSS, there are a few things you need to do:

- Calculate the total amount of all the values.
- Use the total amount to calculate the percentage that each value represents.
- Convert the percentage into degrees.

**Note**: *The code I’ll be referring to in the steps below can be found in the repo here: [/components/donut-1.js](https://github.com/PaulieScanlon/css-conic-gradient-charts/blob/main/components/donut-1.js).*

{{% feature-panel %}}

### Calculate The Total Amount

Using JavaScript, you can use this little one-liner to *sum* up each value from the data array, which results in a single total.

<pre><code class="language-javascript">const total&#95;value = data.reduce((a, b) =&gt; a + b.value, 0);

// =&gt; 740
</code></pre>

### Calculate The Percentage

Now that you have a `total_value`, you can convert each of the values from the data array to a percentage using a JavaScript function. I’ve called this function `covertToPercent`.

**Note**: *I’ve used the value of 210 from Cluster 1 in this example.*

<pre><code class="language-javascript">const convertToPercent = (num) =&gt; Math.round((num / total&#95;value) &#42; 100);

// convertToPercent(210) =&gt; 28
</code></pre>

### Convert Percentage to Degrees

Once you have a percentage, you can convert the percentage into degrees using another JavaScript function. I’ve called this function `convertToDegrees`.

<pre><code class="language-javascript">const convertToDegrees = (num) =&gt; Math.round((num / 100) &#42; 360);

// convertToDegrees(28) =&gt; 101
</code></pre>

### The Result

As a temporary test, if I were to [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) over the items in the sorted data array, using the two functions explained above, you’d end up with the following output:

<pre><code class="language-javascript">const test_output = data.map((item) =&gt; {
  const percentage = convertToPercent(item.value);
  const degrees = convertToDegrees(percentage);

  return `${degrees}deg`;
});

// =&gt; ['14deg', '29deg', '86deg', '101deg', '126deg']
</code></pre>

The return value of `test_output` is an array of the `value` (in degrees) + the string `deg`. 

This solves one of a two-part problem. I’ll now explain the other part of the problem.

To create a Pie chart using [`conic-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient#gradient_pie-chart), you need two `deg` values. The first is the angle from where the gradient should start, and the second is the angle where the gradient should stop. You’ll also need a color for each segment, but I’ll come to that in a moment.

<div class="break-out">

<pre><code class="language-css"> ['red 🤷 14deg', 'blue 🤷 29deg', 'green 🤷 86deg', 'orange 🤷 101deg', 'pink 🤷 126deg']
</code></pre>
</div>

Using the values from the `test_output`, I only have the end value (where the gradient should stop). The start angle for each segment is actually the end angle from the previous item in the array, and the end angle is the cumulative value of all previous end values plus the current end value. And to make matters worse, the start value for the first angle needs to be manually set to `0` 🥴.

Here’s a diagram to better explain what that means:

{{< rimg href="https://files.smashing.media/articles/dynamic-donut-charts-css-conic-gradient-tailwindcss-react/3-diagram-pie-chart-conic-gradient.png" src="https://files.smashing.media/articles/dynamic-donut-charts-css-conic-gradient-tailwindcss-react/3-diagram-pie-chart-conic-gradient.png" width="800" height="500" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/dynamic-donut-charts-css-conic-gradient-tailwindcss-react/3-diagram-pie-chart-conic-gradient.png'>Large preview</a>)" alt="A diagram which explains a function" >}}

If that sounds confusing, it’s because it is, but if you look at the output of a function that can do all this, it might make more sense.

<pre><code class="language-css">"#...", 0, 14,
"#...",, 14, 43,
"#...",, 43, 130,
"#...",, 130, 234,
"#...",, 234, 360,
</code></pre>

## The Function That Can Do All This

And here’s the function that can indeed do all of this. It uses [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) to iterate over the data array, performs the necessary addition to calculate the angles, and returns a new set of numbers that can be used to create the correct start and end angles for use in a Chart.

<div class="break-out">

<pre><code class="language-javascript">const total&#95;value = data.reduce((a, b) =&gt; a + b.value, 0);
const convertToPercent = (num) =&gt; Math.round((num / total&#95;value) &#42; 100);
const convertToDegrees = (num) =&gt; Math.round((num / 100) &#42; 360);

const css&#95;string = data
  .reduce((items, item, index, array) =&gt; {
    items.push(item);

    item.count = item.count || 0;
    item.count += array[index - 1]?.count || item.count;
    item.start&#95;value = array[index - 1]?.count ? array[index - 1].count : 0;
    item.end&#95;value = item.count += item.value;
    item.start&#95;percent = convertToPercent(item.start&#95;value);
    item.end&#95;percent = convertToPercent(item.end&#95;value);
    item.start&#95;degrees = convertToDegrees(item.start&#95;percent);
    item.end&#95;degrees = convertToDegrees(item.end&#95;percent);

    return items;
  }, [])
  .map((chart) =&gt; {
    const { color, start&#95;degrees, end&#95;degrees } = chart;
    return ` ${color} ${start&#95;degrees}deg ${end&#95;degrees}deg`;
  })
  .join();
</code></pre>
</div>

I’ve purposefully left this pretty verbose, so it’s easier to add in `console.log()`. I found this to be quite helpful when I was developing this function. 

You might notice the additional [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) chained to the end of the [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). By using a [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) I’m able to modify the returned values and tack on `deg`, then return them all together as an array of strings. 

Using [`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) right at the end converts the array back to a single `css_string`, which can be used with `conic-gradient()` 😅.

<pre><code class="language-css">"#..." 0deg 14deg,
"#..." 14deg 43deg,
"#..." 43deg 130deg,
"#..." 130deg 234deg,
"#..." 234deg 360deg
</code></pre>

{{% ad-panel-leaderboard %}}

## Using The `css_string` With An SVG `foreignObject`

Now, unfortunately, you can’t use `conic-gradient()` with [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG). But you can wrap an HTML element inside a [`foreignObject`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) and style the `background` using a `conic-gradient()`.

<div class="break-out">

<pre><code class="language-html">&lt;svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' style={{ borderRadius: '100%' }}&gt;
  &lt;foreignObject x='0' y='0' width='100' height='100'&gt;
    &lt;div
      xmlns='http://www.w3.org/1999/xhtml'
      style={{
        width: '100%',
        height: '100%',
        background: `conic-gradient(${css_string})`, // &lt;- 🥳
      }}
    /&gt;
  &lt;/foreignObject&gt;
&lt;/svg&gt;
</code></pre>
</div>

Using the above, you should be looking at a Pie chart. In order to make a Donut chart, I’ll need to explain how to make the hole.

## Let’s Talk About the Hole

There’s only really one way you can ‘mask’ off the middle of the Pie chart to reveal the background. This approach involves using a [`clipPath`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath). This approach looks like the below code snippet. I’ve used this for Donut 1.

**Note**: *The `src` for Donut 1 can be seen here: [components/donut-1.js](https://github.com/PaulieScanlon/css-conic-gradient-charts/blob/main/components/donut-1.js#L44).*

<div class="break-out">

<pre><code class="language-html">&lt;svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' style={{ borderRadius: '100%' }}&gt;

  &lt;clipPath id='hole'&gt;
    &lt;path d='M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 18 a 2 2 0 0 0 0 64 2 2 0 0 0 0 -64' /&gt;
  &lt;/clipPath&gt;

  &lt;foreignObject x='0' y='0' width='100' height='100' clipPath='url(#hole)'&gt;
    &lt;div
      xmlns='http://www.w3.org/1999/xhtml'
      style={{
        width: '100%',
        height: '100%',
        background: `conic-gradient(${css_string})`
      }}
    /&gt;
  &lt;/foreignObject&gt;
&lt;/svg&gt;
</code></pre>
</div>

However, there is another way. This approach involves using a `<circle />` element and placing it in the center of the pie chart. This will work if the fill of the `<circle />` matches the background color of whatever the chart is placed on. In my example, I’ve used a pattern background, and you’ll notice if you look closely at Donut 3 that you can’t see the [bubble pattern](https://heropatterns.com/) through the center of the chart. 

**Note**: *The `src` for Donut 3 can be seen here: [components/donut-3.js](https://github.com/PaulieScanlon/css-conic-gradient-charts/blob/main/components/donut-3.js#L44).*

<div class="break-out">

<pre><code class="language-html">&lt;svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' style={{ borderRadius: '100%' }}&gt;
  &lt;foreignObject x='0' y='0' width='100' height='100'&gt;
    &lt;div
      xmlns='http://www.w3.org/1999/xhtml'
      style={{
        width: '100%',
        height: '100%',
        background: `conic-gradient(${css&#95;string})`
      }}
    /&gt;
  &lt;/foreignObject&gt;
  &lt;circle cx='50' cy='50' r='32' fill='white' /&gt;
&lt;/svg&gt;
</code></pre>
</div>

IMO the `clipPath` approach is nicer, but it can be more difficult to amend the path points to get the desired thickness of the hole if you don’t have access to something like Figma or Illustrator.

## Finally, Colors!

Colors for charts are something that always cause me problems. Most of the time, the colors I use are defined in CSS, and all this stuff is happening in JavaScript, so how do you use CSS variables in JavaScript?

In my example site, I’m using [Tailwind](https://tailwindcss.com/) to style ‘all the things’ and by using [this trick](https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574), I’m able to expose the CSS variables so they can be referred to by their name. 

If you want to do the same, you could add a `color` key to the data array:

<pre><code class="language-css">data={[
  {
    name: 'Cluster 1',
    value: 210,
    color: 'var(--color-fuchsia-400)',
  },
  {
    name: 'Cluster 2',
    value: 30,
    color: 'var(--color-fuchsia-100)',
  },
  {
    name: 'Cluster 3',
    value: 180,
    color: 'var(--color-fuchsia-300)',
  },
  {
    name: 'Cluster 4',
    value: 260,
    color: 'var(--color-fuchsia-500)',
  },
  {
    name: 'Cluster 5',
    value: 60,
    color: 'var(--color-fuchsia-200)',
  },
].sort((a, b) =&gt; a.value - b.value)
</code></pre>

And then reference the `color` key in the array [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to return it as part of the `css_string`. I’ve used this approach in Donut 2.

**Note**: *You can see the `src` for Donut 2 here: [components/donut-2.js](https://github.com/PaulieScanlon/css-conic-gradient-charts/blob/main/components/donut-2.js#L25).*

<pre><code class="language-javascript">.map((chart) =&gt; {
  const { color, start&#95;degrees, end&#95;degrees } = chart;
  return ` ${color} ${start&#95;degrees}deg ${end&#95;degrees}deg`;
})
.join();
</code></pre>

You could even dynamically create the color name using a hard-coded value (`color-pink-`) + the `index` from the array. I’ve used this approach in Donut 1.

**Note**: *You can see the `src` for Donut 1 here: [components/donut-1.js](https://github.com/PaulieScanlon/css-conic-gradient-charts/blob/main/components/donut-1.js#L26).*

<div class="break-out">

<pre><code class="language-javascript">.map((chart, index) =&gt; {
  const { start&#95;degrees, end&#95;degrees } = chart;
  return ` var(--color-pink-${(index + 1) &#42; 100}) ${start&#95;degrees}deg ${end&#95;degrees}deg`;
})
.join();
</code></pre>
</div>

{{% ad-panel-leaderboard %}}

## If You’re Lucky! 

However, you might get lucky and be working with an API that actually returns values with an associated color. This is the case with the [GitHub GraphQL API](https://docs.github.com/en/graphql). So. I popped together one last example. 

{{< rimg href="https://files.smashing.media/articles/dynamic-donut-charts-css-conic-gradient-tailwindcss-react/2-ccs-conic-gradient-charts.png" src="https://files.smashing.media/articles/dynamic-donut-charts-css-conic-gradient-tailwindcss-react/2-ccs-conic-gradient-charts.png" width="800" height="500" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/dynamic-donut-charts-css-conic-gradient-tailwindcss-react/2-ccs-conic-gradient-charts.png'>Large preview</a>)" alt="GitHub GraphQL API with Github chart with ten different languages associated with its own color" >}}

You can see this working in your browser by visiting [/github](https://css-conic-gradient-charts.vercel.app/github), and the `src` for both the GitHub Donut Chart and Legend can be found here:

- [components/github-chart.js](https://github.com/PaulieScanlon/css-conic-gradient-charts/blob/main/components/github-chart.js);
- [components/github-legend.js](https://github.com/PaulieScanlon/css-conic-gradient-charts/blob/main/components/github-legend.js).

## Wrapping Up

You might be thinking this is quite complicated, and it’s probably easier to use a Charting Library, and you’re probably right. It probably is. But this way is **super lightweight**. There are no additional libraries to install or maintain, and there’s no heavy JavaScript that needs to be downloaded by the browser in order for them to work. 

I experimented once before with creating Donut Charts using an SVG and the [`stroke-dashoffset`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray). You can read about that in my article, “[Create an SVG Doughnut Chart From Scratch For Your Gatsby Blog](https://paulie.dev/posts/2021/01/react-svg-doughnut-chart/).” That approach worked really well, but I think I prefer the approach described in this post. CSS is simply the best!  

If you’d like to discuss any of the methods I’ve used here, please come find me on Twitter: [@PaulieScanlon](https://twitter.com/PaulieScanlon). 

See you around the internet!

{{< signature "yk, il" >}}
