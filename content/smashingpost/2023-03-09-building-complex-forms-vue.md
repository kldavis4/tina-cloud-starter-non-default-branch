---
title: 'Building Complex Forms In Vue'
slug: building-complex-forms-vue
author: olufunke-moronfolu
image: >-
  https://files.smashing.media/articles/building-complex-forms-vue/meta-building-complex-forms-vue.jpg
date: 2023-03-09T10:00:00.000Z
summary: >-
  Chances are, we will have to build a complex form at least once in our software engineering journey. This article goes over creating a complex form that can be progressively enhanced using some Vue features like the <code>v-for</code> and the <code>v-model</code>. It also gives a refresher on some basic Vue core features that will come in handy when building out the complex form in your day-to-day Vue usage.
description: >-
  Did you know that creating a complex form can be progressively enhanced using some Vue features like the <code>v-for</code> and the <code>v-model</code>? In this article, Olufunke shares some basic Vue core features that are super useful when building out the complex form in your day-to-day Vue usage.
categories:
  - Vue
  - Guides
  - JavaScript
  - Techniques
---

More often than not, web engineers always have causes to build out forms, from simple to complex. It is also a familiar pain in the shoe for engineers how fast codebases get incredibly messy and incongruously lengthy when building large and complex forms. Thus begging the question, “How can this be optimized?”.

Consider a business scenario where we need to build a waitlist that captures the name and email. This scenario only requires two/three input fields, as the case may be, and could be added swiftly with little to no hassle. Now, let us consider a different business scenario where users need to fill out a form with ten input fields in 5 sections. Writing 50 input fields isn’t just a tiring job for the Engineer but also a waste of great technical time. More so, it goes against the infamous “Don’t Repeat Yourself” (DRY) principle.

In this article, we will focus on learning to use the Vue components, the `v-model` directive, and the Vue props to build complex forms in Vue.

## The `v-model` Directive In Vue

Vue has several unique HTML attributes called directives, which are prefixed with the `v-`. These directives perform different functions, from rendering data in the DOM to manipulating data. 

The `v-model` is one such directive, and it is responsible for two-way data binding between the form input value and the value stored in the `data` property. The `v-model` works with any input element, such as the `input` or the `select` elements. Under the hood, it combines the inputted input value and the corresponding change event listener like the following:

<pre><code class="language-html">&lt;!-- Input element --&gt;
&lt;input v-model="inputValue" type="text"&gt;

&lt;!-- Select element --&gt;
&lt;select v-model="selectedValue"&gt;
  &lt;option value=""&gt;Please select the right option&lt;/option&gt;
  &lt;option&gt;A&lt;/option&gt;
  &lt;option&gt;B&lt;/option&gt;
  &lt;option&gt;C&lt;/option&gt;
&lt;/select&gt;
</code></pre>

The `input` event is used for the `<input type= "text">` element. Likewise, for the `<select> … </select>`, `<input type= "checkbox">` and `<input type= "radio">`, the `v-model` will, in turn, match the values to a `change` event.

## Components In Vue

Reusability is one of the core principles of Software Engineering, emphasizing on using existing software features or assets in a software project for reasons ranging from minimizing development time to saving cost. 

One of the ways we observe reusability in Vue is through the use of components. Vue components are reusable and modular interfaces with their own logic and custom content. Even though they can be nested within each other just as a regular HTML element, they can also work in isolation.

Vue components can be built in two ways as follows:

- Without the build step,
- With the build step.

### Without The Build Step

Vue components can be created without using the **Vue Command Line Interface (CLI)**. This component creation method defines a JavaScript object in a Vue instance options property. In the code block below, we inlined a JavaScript string that Vue parses on the fly.

<pre><code class="language-html">template: `
  &lt;p&gt; Vue component without the build step &lt;/p&gt;
  `
</code></pre>

### With The Build Step

Creating components using the build step involves using [Vite](https://vitejs.dev/) &mdash; a blazingly fast, lightweight build tool. Using the build step to create a Vue component makes a **Single File Component (SFC)**, as it can cater to the file’s logic, content, and styling.

<pre><code class="language-html">&lt;template&gt;
  &lt;p&gt; Vue component with the build step &lt;/p&gt;
&lt;/template&gt;
</code></pre>

In the above code, we have the `<p>` tag within the HTML `<template>` tag, which gets rendered when we use a build step for the application.

### Registering Vue Components

Creating a Vue component is the first step of reusability and modularity in Vue. Next is the registration and actual usage of the created Vue component.

Vue components allow the nesting of components within components and, even more, the nesting of components within a global or parent component.

Let’s consider that we stored the component we created using the build step in a `BuildStep.vue` file. To make this component available for usage, we will import it into another Vue component or a `.vue`, such as the root entry file. After importing this component, we can then register the component name in the `components` option property, thus making the component available as an HTML tag. While this HTML tag will have a custom name, the Vue engine will parse them as valid HTML and render them successfully in the browser.

<pre><code class="language-html">&lt;!-- App.vue --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;BuildStep /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import BuildStep from './BuildStep.vue'

export default {
  components: {
    BuildStep
  }
}
&lt;/script&gt;
</code></pre>

From the above, we imported the `BuildStep.vue` component into the `App.vue` file, registered it in the `components` option property, and then declared it within our HTML template as `<BuildStep />`.

{{% feature-panel %}}

## Vue Props

Vue props, otherwise known as properties, are custom-made attributes used on a component for passing data from the parent component to the child component(s). A case where props can come in handy is when we need a component with different content but a constant visual layout, considering a component can have as many props as possible.

The Vue prop has a one-way data flow, i.e., from the parent to the child component. Thus, the parent component owns the data, and the child component cannot modify the data. Instead, the child component can emit events that the parent component can record.

### Props Declaration In Vue

Let us consider the code block below:

<pre><code class="language-html">&lt;template&gt;
  &lt;p&gt; Vue component {{ buildType }} the build step&lt;/p&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  props: {
    buildType: {
      type: String
    }
  }
}
&lt;/script&gt;
</code></pre>

We updated the HTML template with the interpolated `buildType`, which will get executed and replaced with the value of the props that will be passed down from the parent component.

We also added a **props** tag in the props option property to listen to the props change and update the template accordingly. Within this props option property, we declared the name of the props, which matches what we have in the `<template>` tag, and also added the **props type**.

The props type, which can be Strings, Numbers, Arrays, Boolean, or Objects, acts as a rule or check to determine what our component will receive.

In the example above, we added a type of String; we will get an error if we try to pass in any other kind of value like a Boolean or Object.

### Passing Props In Vue

To wrap this up, we will update the parent file, i.e., the `App.vue`, and pass the props accordingly.

<pre><code class="language-html">&lt;!-- App.vue --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;BuildStep buildType="with"/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import BuildStep from './BuildStep.vue'

export default {
  components: {
    BuildStep
  }
}
&lt;/script&gt;
</code></pre>

Now, when the **build step** component gets rendered, we will see something like the following:

<pre><code class="language-html">Vue component with the build step
</code></pre>

With props, we needn’t create a new component from scratch to display whether a component has a build step or not. We can again declare the `<BuildStep />` component and add the relevant build type.

<pre><code class="language-html">&lt;!-- App..vue --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;BuildStep buildType="without"/&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

Likewise, just as for the build step, when the component gets rendered, we will have the following view:

<pre><code class="language-html">Vue component without the build step
</code></pre>

## Event Handling In Vue

Vue has many directives, which include the `v-on`. The `v-on` is responsible for listening and handling DOM events to act when triggered. The `v-on` directive can also be written as the `@` symbol to reduce verbosity.

<pre><code class="language-html">&lt;button @click="checkBuildType"&gt; Check build type &lt;/button&gt;
</code></pre>

The button tag in the above code block has a click event attached to a `checkBuildType` method. When this button gets clicked, it facilitates executing a function that checks for the build type of the component.

### Event Modifiers

The `v-on` directive has several event modifiers that add unique attributes to the `v-on` event handler. These event modifiers start with a dot and are found right after the event modifier name.

<div class="break-out">

<pre><code class="language-html">&lt;form @submit.prevent="submitData"&gt;
 ...
&lt;!-- This enables a form to be submitted while preventing the page from being reloaded. --&gt;
&lt;/form&gt;
</code></pre>
</div>

### Key Modifiers

Key modifiers help us listen to keyboard events, such as `enter`, and `page-up` on the fly. Key modifiers are bound to the `v-on` directive like `v-on:eventname.keymodifiername`, where the `eventname` could be `keyup` and the `modifiername` as `enter`.

<pre><code class="language-html">&lt;input @keyup.enter="checkInput"&gt;
</code></pre>

The key modifiers also offer flexibility but allow multiple key name chaining.

<pre><code class="language-html">&lt;input @keyup.ctrl.enter="checkInput"&gt;
</code></pre>

Here the key names will listen for both the `ctrl` and the `enter` keyboard events before the `checkInput` method gets called.

{{% ad-panel-leaderboard %}}

## The `v-for` Directive

Just as JavaScript provides for iterating through arrays using loops like the `for` loop, Vue-js also provides a built-in directive known as the `v-for` that performs the same function.

We can write the `v-for` syntax as `item in items` where **items** are the array we are iterating over or as `items of items` to express the similarity with the JavaScript loop syntax.

### List Rendering

Let us consider rendering the types of component build steps on a page.

<div class="break-out">

<pre><code class="language-html">&lt;template&gt;
  &lt;div&gt;
    &lt;ul&gt;
        &lt;li v-for="steps in buildSteps" :key="steps.id"&gt; {{ steps.step }}&lt;/li&gt;
      &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
 data() {
   return {
     buildSteps: [
      {
       id: "step 1",
       step:'With the build step',
      },
      {
        id: "step 2",
       step:'Without the build step'
      }
    ]
   }
 }
}
&lt;/script&gt;
</code></pre>
</div> 

In the code block above, the `steps` array within the `data` property shows the two types of build steps we have for a component. Within our template, we used the `v-for` directive to loop through the steps array, the result of which we will render in an unordered list.

We added an optional `key` argument representing the index of the item we are currently iterating on. But beyond that, the `key` accepts a unique identifier that enables us to track each item’s node for proper state management.

### Using `v-for` With A Component

Just like using the `v-for` to render lists, we can also use it to generate components. We can add the `v-for` directive to the component like the following:

<pre><code class="language-html">&lt;BuildStep v-for="steps in buildSteps" :key="steps.id"/&gt;
</code></pre>

The above code block will not do much for rendering or passing the `step` to the component. Instead, we will need to pass the value of the `step` as props to the component.

<div class="break-out">

<pre><code class="language-html">&lt;BuildStep v-for="steps in buildSteps" :key="steps.id" :buildType="steps.step" /&gt;
</code></pre>
</div>

We do the above to prevent any tight fixation of the `v-for` to the component.

The most important thing to note in the different usage of the `v-for` is the automation of a long process. We can move from manually listing out 100 items or components to using the `v-for` directive and have everything rendered out within the split of a second, as the case may be.

### Building A Complex Registration Form In Vue

We will combine everything we have learned about the `v-model`, Vue components, the Vue props, the `v-for` directive, and event handling to build a complex form that would help us achieve efficiency, scalability, and time management.

This form will cater to capturing students’ bio-data, which we will develop to facilitate progressive enhancement as business demands increase.

#### Setting Up The Vue App

We will be scaffolding our Vue application using the build step. To do this, we will need to ensure we have the following installed:

- [Node.js](https://nodejs.org/en/);
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).

Now we will proceed to create our Vue application by running the command below:

<pre><code class="language-bash"># npm
npm init vue@latest vue-complex-form
</code></pre>

where `vue-complex-form` is the name of the Vue application.

After that, we will run the command below at the root of our Vue project:

<pre><code class="language-bash">npm install
</code></pre>

#### Creating The JSON File To Host The Form Data

We aim to create a form where users can fill in their details. While we can manually add all the input fields, we will use a different approach to simplify our codebase. We will achieve this by creating a JSON file called `util/bio-data.json`. Within each of the JSON objects, we will have the basic info we want each input field to have.

<pre><code class="language-javascript">[
  {
    "id": 1,
    "inputvalue":"  ",
    "formdata": "First Name",
    "type": "text",
    "inputdata": "firstname"
  },
  {
    "id": 2,
    "inputvalue":"  ",
    "formdata": "Last Name",
    "type": "text",
    "inputdata": "lastname"
  },
]
</code></pre>

As seen in the code block above, we created an object with some keys already carrying values:

- `id` acts as the primary identifier of the individual object;
- `inputvalue` will cater to the value passed into the `v-model`;
- `formdata` will handle the input placeholder and the labels name;
- `type` denotes the input type, such as email, number, or text;
- `inputdata` represents the input **id** and **name**.

These keys’ values will be passed in later to our component as props. We can access the complete JSON data here.

#### Creating The Reusable Component

We will create an input component that will get passed the props from the JSON file we created. This input component will get iterated on using a `v-for` directive to create numerous instances of the input field at a stretch without having to write it all out manually. To do this, we will create a  `components/TheInputTemplate.vue` file and add the code below:

<pre><code class="language-html">&lt;template&gt;
  &lt;div&gt;
    &lt;label :for="inputData"&gt;{{ formData }}&lt;/label&gt;
    &lt;input
      :value= "modelValue"
      :type= "type"
      :id= "inputData"
      :name= "inputData"
      :placeholder= "formData"
      @input="$emit('update:modelValue', $event.target.value)"
    &gt;
  &lt;/div&gt;
 &lt;/template&gt;
 
&lt;script&gt;
export default {
  name: 'TheInputTemplate',
  props: {
    modelValue: {
      type: String
    },
    formData: {
      type: String
    },
    type: {
      type: String
    },
    inputData: {
      type: String
    }
  },
  emits: ['update:modelValue']
}
&lt;/script&gt;
&lt;style&gt;
label {
  display: inline-block;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: rgb(61, 59, 59);
  font-weight: 700;
  font-size: 0.8rem;
}
input {
  display: block;
  width: 90%;
  padding: 0.5rem;
  margin: 0 auto 1.5rem auto;
}
&lt;/style&gt;
</code></pre>

In the above code block, we achieved the following:

- We created a component with an input field.
- Within the input field, we matched the values that we will pass in from the JSON file to the respective places of interest in the element.
- We also created props of `modelValue`, `formData`, `type`, and `inputData` that will be registered on the component when exported. These props will be responsible for taking in data from the parent file and passing it down to the `TheInputTemplate.vue` component.
- Bound the `modelValue` prop to the value of the input value.
- Added the `update:modelValue`, which gets emitted when the `input` event is triggered.

#### Registering The Input Component

We will navigate to our `App.vue` file and import the `TheInputTemplate.vue` component from where we can proceed to use it.

<pre><code class="language-html">&lt;template&gt;
  &lt;form class="wrapper"&gt;
    &lt;TheInputTemplate/&gt;
  &lt;/form&gt;
&lt;/template&gt;
&lt;script&gt;
import TheInputTemplate from './components/TheInputTemplate.vue'
export default {
  name: 'App',
  components: {
    TheInputTemplate
  }
}
&lt;/script&gt;
&lt;style&gt;
html, body{
  background-color: grey;
  height: 100%;
  min-height: 100vh;
}
.wrapper {
  background-color: white;
  width: 50%;
  border-radius: 3px;
  padding: 2rem  1.5rem;
  margin: 2rem auto;
}
&lt;/style&gt;
</code></pre>

Here we imported the `TheInputTemplate.vue` component into the `App.vue` file, registered it in the `components` option property, and then declared it within our HTML template.

If we run `npm run serve`, we should have the following view:

{{< rimg href="https://files.smashing.media/articles/building-complex-forms-vue/1-ui-view.png" src="https://files.smashing.media/articles/building-complex-forms-vue/1-ui-view.png" width="800" height="306" sizes="100vw" caption="Input component after registration. (<a href='https://files.smashing.media/articles/building-complex-forms-vue/1-ui-view.png'>Large preview</a>)" alt="Application interface just after rendering the input component and registering the component in the App.vue file" >}}

At this point, there is not much to see because we are yet to register the props on the component.

#### Passing Input Data

To get the result we are after, we will need to pass the input data and add the props to the component. To do this, we will update our `App.vue` file:

<div class="break-out">

<pre><code class="language-html">&lt;template&gt;
  &lt;div class="wrapper"&gt;
    &lt;div v-for="bioinfo in biodata" :key="bioinfo.id"&gt;
      &lt;TheInputTemplate v-model="bioinfo.inputvalue":formData= "bioinfo.formdata":type= "bioinfo.type":inputData= "bioinfo.inputdata"/&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;script&gt;
//add imports here
import biodata from "../util/bio-data.json";
export default {
  name: 'App',
 //component goes here
  data: () =&gt; ({
    biodata
  })
}
&lt;/script&gt;
</code></pre>
</div>

From the code block above, we achieved several things:

- We imported the bio-data JSON file we created into the `App.vue` file. Then we added the imported variable to the `data` options of the Vue script.
- Looped through the JSON data, which we instantiated in the data options using the Vue `v-for` directive.
- Within the `TheInputTemplate.vue` component we created, we passed in the suitable data to fill the props option.

At this point, our interface should look like the following:

{{< rimg href="https://files.smashing.media/articles/building-complex-forms-vue/2-interface-input-fields.png" src="https://files.smashing.media/articles/building-complex-forms-vue/2-interface-input-fields.png" width="800" height="575" sizes="100vw" caption="Application view showing the rendered complex form. (<a href='https://files.smashing.media/articles/building-complex-forms-vue/2-interface-input-fields.png'>Large preview</a>)" alt="Interface showing the rendered form after passing the props to the input component">}}

To confirm if our application is working as it should, we will open up our Vue DevTools, or install one from [https://devtools.vuejs.org](https://devtools.vuejs.org/) if we do not have it in our browser yet.

When we type in a value in any of the input fields, we can see the value show up in the `modelValue` within the Vue Devtools dashboard.

{{< rimg href="https://files.smashing.media/articles/building-complex-forms-vue/3-vue-devtools-dashboard.png" src="https://files.smashing.media/articles/building-complex-forms-vue/3-vue-devtools-dashboard.png" width="800" height="265" sizes="100vw" caption="Vue DevTools showing the input value. (<a href='https://files.smashing.media/articles/building-complex-forms-vue/3-vue-devtools-dashboard.png'>Large preview</a>)" alt="Vue Devtools view showing the modelValue of the input value">}}

{{% ad-panel-leaderboard %}}

## Conclusion

In this article, we explored some core Vue fundamentals like the `v-for`, `v-model`, and so on, which we later sewed together to build a complex form. The main goal of this article is to simplify the process of building complex forms while maintaining readability and reusability and reducing development time.

If, in any case, there will be a need to extend the form, all the developer would have to do is populate the JSON files with the needed information, and voila, the form is ready. Also, new Engineers can avoid swimming in lengthy lines of code to get an idea of what is going on in the codebase.

**Note**: *To explore more about handling events within components to deal with as much complexity as possible, you can check out this article on [using components with v-model](https://vuejs.org/guide/components/events.html#usage-with-v-model).*

### Further Reading on Smashing Magazine

- “[Optimizing A Vue App](https://www.smashingmagazine.com/2022/11/optimizing-vue-app/),” Michelle Barker
- “[Three Insights I Gained While Researching Vue.js Accessibility](https://www.smashingmagazine.com/2021/07/three-insights-vuejs-accessibility/),” Marcus Herrmann
- “[Tools And Practices To Speed Up The Vue.js Development Process](https://www.smashingmagazine.com/2021/07/tools-practices-speed-up-vuejs-development-process/),” Uma Victor
- “[Moving From Vue 1 To Vue 2 To Vue 3: A Case Study Of Migrating A Headless CMS System](https://www.smashingmagazine.com/2023/03/vue-case-study-migrating-headless-cms-system/),” Lisi Linhart

{{< signature "yk, il" >}}
