---
title: 'Discovering Primitive Objects In JavaScript (Part 1)'
slug: discovering-primitive-objects-javascript-part1
author: kirill-myshkin
image: >-
  https://files.smashing.media/articles/discovering-primitive-objects-javascript-part1/discovering-primitive-objects-javascript-part1.jpg
date: 2023-02-10T12:00:00.000Z
summary: >-
  Trying to rewrite parts of a patchy codebase, Kirill has rediscovered for himself the power of JavaScript objects. He kept returning again and again to a pattern that kept the code clear and removed unnecessary operations. Bringing regular objects closer to primitive values made a difference. That’s how Primitive Objects were discovered. In the first part, you’ll see how objects and primitive values differ and how to bring them closer.
description: >-
  In the first part of the series, Kirill Myshkin covers some aspects of JavaScript that help bring objects closer to primitive values, which allow benefiting from common language features that aren’t usually associated with an object, like comparisons and arithmetic operators.
categories:
  - JavaScript
  - Tools
  - Techniques
---

It seems natural to use strings to distinguish things. It’s very likely that in your codebase, there are objects with `name`, `id`, or `label` properties that are used to determine if an object is the one you’re looking for.

<pre><code class="language-javascript">if (element.label === "title") {
    make&#95;bold(element);
}
</code></pre>

At a certain point, your project grows (in size, importance, popularity, or all at once). It needs more strings as there are more things to distinguish from each other. The strings grow longer, as does the cost of typos or, say, your label naming convention changes. Now you have to find all the instances of those strings and replace them. Consequently, a commit for that change becomes much bigger than it should be. Which makes you look better in the eyes of the clueless. Simultaneously it makes your life miserable since it’s much harder now to find the cause of regression in your git history.

Strings are bad for identification. You have to consider uniqueness and typos; your editor or IDE won’t check if it’s the string you meant. It’s bad. I hear someone saying, “Just put them in a variable, duh.” That’s a good suggestion, and it removes some of my concerns. But look at John Smith:

<pre><code class="language-javascript">const john&#95;smith&#95;a&#95;person = "John Smith";
const john&#95;smith&#95;a&#95;company = "John Smith";

// Do they have the same name?
john&#95;smith&#95;a&#95;person === john&#95;smith&#95;a&#95;company; // true

// Are they the same thing?
john&#95;smith&#95;a&#95;person === john&#95;smith&#95;a&#95;company; // true
</code></pre>

John happens to share the name with a company. What if I say to you I have a better solution? The one that removes all the concerns and adds more value &mdash; allows you to achieve more. What would you say? Well, I won’t rewrite the article just because your answer doesn’t fit my narrative. The answer is objects. You use objects themselves to figure out if an object is the one you’re looking for.

<pre><code class="language-javascript">// Do they have a same name?
john&#95;smith&#95;a&#95;person.name === john&#95;smith&#95;a&#95;company.name; // true

// Are they the same thing?
john&#95;smith&#95;a&#95;person === john&#95;smith&#95;a&#95;company; // false
</code></pre>

It makes the intent clearer. Let me give you a better example. Say you have labels in your app. They are localized, so the label string is determined by the localization library you’re using and your team’s translation process. You keep your labels in a module where you have them all neatly organized and curated. Once you need to do something special for certain labels, you can compare it directly with the one you’ve got.

<pre><code class="language-javascript">import React from "react";
import labels from "./labels.js";

const render&#95;label(label) =&gt; (
    &lt;Label
        className={label === labels.title ? "bold" : "plain"}
        icon={label.icon}
        text={label.text}
    /&gt;
)

function TableOfContents({ items }) {
    return (
        &lt;ul className="my-menu"&gt;
            {items.map(render&#95;label(item.label)}
        &lt;/ul&gt;
    );
}
</code></pre>

See how much more I can do with objects? In the `labels` module, I’ve set aside a label `title`, which in this case should be rendered bold. Plus, being an object, my label can hold a localization string (imaginatively called `text`) and an icon. It’s all neatly organized in advance, which keeps my UI logic clean.

But it’s just a part of the picture. I know we use objects all over the place, and it’s nothing new to group things in them. But I bet you don’t use them exactly like that. I rarely see two objects being compared like that because you never know what’s in there or where it came from. Objects are created and changed all the time. It is more likely for them to be compared by the values of their properties than the objects themselves. And the reason for that is that objects aren’t suitable for that kind of use. They are too capable. To allow that use case and many others, we have to, on the one hand, reduce some capabilities of objects and, on the other, implement some more. And in the end, we’ll get what I call **Primitive Objects**. Th... a solution to al... some problems.

In the first part of the series, I want to cover some aspects of JavaScript that help bring objects closer to primitive values, which in return would allow us to benefit from common language features that aren’t usually associated with an object, like comparisons and arithmetic operators. In the following part, we’ll look closely into practical examples and tools to work with such objects. Now let’s see what objects are like in JavaScript.

{{% feature-panel %}}

## Properties Of Primitive Values We Need

First, let’s define our goal. Let’s draw a picture of where we would like to be afterward. What properties of primitive values do we want our objects to have?

- **Immutability**  
Primitive values are read-only. We want our objects not to be editable by anybody after their creation. Recall the example before. What use of a label do we have if some code out of our control has changed the text or icon of it? Once the object is defined, it should be set in stone.
- **Work with operators.**  
Expressions with certain operators return their appropriate type. Arithmetic operators give numbers back. Comparisons give booleans.
- **Have literal syntax.**  
Literals for primitives give you the exact value, or rather an object representing the value. Such objects get created once for each value. Each time you have `"hello"` in your code, you get the same object.
- **Have types.**  
The `typeof` operator tells you what you’re dealing with (except for `null`). We don’t always know which kind of object we get. So before we poke its properties, it would be nice to know what we’re dealing with.

I listed them by immediate usefulness. And as luck would have it, they are also ordered by easiest to get. In this article, I’ll cover the first one and a part of the second one. We’ll see how to make objects immutable. We also will define their representation in primitive values, which allows us to use some operators on them. Moving from objects to primitive values is easy, as primitive values are objects themselves &mdash; sort of.

## It’s Objects All the Way Down, Even If It Kinda Isn’t

I remember my confusion when I first saw `{} === {}; // false`. What is this language that cannot even tell apart two equal things? It felt so ridiculous and amusing. It was much later that I learnt that there are much worse parts in JavaScript, after which I stopped laughing while watching [wat talk](https://www.destroyallsoftware.com/talks/wat).

An object is one of the fundamental things in JavaScript. You might have heard that in JavaScript, everything is an object. That’s quite true. Apart from some bottom values, all the primitives are objects. While technically, it is more nuanced, from the perspective of our code, it is true. In fact, it’s true enough that believing everything is an object might be a useful mental model. But let’s first try to understand what is happening with that object-to-object comparison that was so amusing to younger me.

[Object literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) syntax is used for creating new objects. It allows us to declare and initiate an object in a single expression.

<pre><code class="language-javascript">// Instead of this.
const my&#95;object = new Object();
my&#95;object.first&#95;property = "First property";
my&#95;object.nth&#95;property = "Next property";

// You can do this.
const my&#95;object = {
    first&#95;property: "First property",
    nth&#95;property: "Next property"
};
</code></pre>

Much cleaner, right? But now I think the lack of object initialization line is what got me confused about those two empty object equality expressions. It seemed to show the language’s struggle to recognize apparent equality. But what actually happens in that expression is this:

<pre><code class="language-javascript">new Object() === new Object(); // false
</code></pre>

Now it’s obvious they aren’t equal. You’re comparing two distinct objects you’ve just created. To expect contrary is the same as expecting `5 === 3` to return `true`. In both cases, they are different things.

Let’s do a sanity check. Would two variables referring to the same object be considered equal?

<pre><code class="language-javascript">const my&#95;object = {};
const other&#95;thing = my&#95;object;
my&#95;object === other&#95;thing; // true
</code></pre>

In this case, only the first line has an expression that creates an object. On the second line, we make the `other_thing` variable refer to a just-created object. Two variables are now referring to the same object. Comparing them is just like comparing two equal numbers, isn’t it?

Why is this significant? Because it gives us a way to check if a variable refers to an object we’re looking for. And if we think about it in the context of “everything is an object,” that’s how numbers and strings work. When you compare two variables holding strings, the engine doesn’t have to check if each character in those strings is the same. It’s enough to compare if the variables refer to the same object. That is thanks to the most significant difference between regular objects and primitive values &mdash; immutability.

{{% ad-panel-leaderboard %}}

## How To Bring Regular Objects Closer To Primitive Values

In JavaScript, Primitive values are immutable. You cannot change a single character in a string as well as you cannot make a number five to become six. If you use `const` to initialize a variable and put a primitive value in it, it’ll always stay the same. No one could change the value; it’s immutable. No one could reassign the variable; it was created with `const`.

Let’s look closely at how numbers work. You can get six out of five by incrementing it by one, but it doesn’t change anything about five.

<pre><code class="language-javascript">const five = 5;
const six = 5 + 1;
five === 5; // true
</code></pre>

Some might say that using `let` would change that. But look, it cannot change five:

<pre><code class="language-javascript">const five = 5;
let result = 5;
result++;
result === 6; // true
five === 5; // true
</code></pre>

A five is still a five. That is because `++` is just a shorthand for `+= 1`. See the equals sign? What happened was I *assigned* a new value to the `result` variable, the value that I got from the `result + 1` expression (which is what `+= 1` is a shorthand for). The `const` keyword prevents reassignment to a variable. In the example above, that’s what gives me a way to know that `five` always refers to a `5` object.

We might assume that the only way primitive values are *changed* in JavaScript is through the assignment, which means what we’re actually changing is what a variable refers to. So it’s variables that are changing, not values. Not primitive ones, at least. But how it works with objects instead?

After initializing an object, you can change its properties: delete them, add new ones, and reassign old ones. We are all familiar with doing that. But apart from that, it behaves the same as primitive values. In fact, if you get accustomed to a model where objects and primitive values are the same things, you’ll look differently at all sorts of problems in JavaScript.

You probably stumbled upon a question about how variables are passed to a function. People ask whether variables are passed by value or by reference. A common answer is **primitive values are passed by value** while objects are passed by reference. But with the mental model I’m forcing on you here, you might already know what I will say about that. Before that, let me show you how the question doesn’t make much sense in JavaScript. I will also reveal to you a sleight of hand that many articles and tutorials use.

When you pass variables as parameters of a function call, they get assigned to the function’s arguments. Arguments are local variables to a function’s scope and have no connection back to the original variables, which makes sense. If you pass an expression to a function, you have to put the result of it somewhere, don’t you?

Look at the following two functions. They do the same thing, pass a value through, but one is defined with a single parameter, the other with none. The second one demonstrates what is happening with the parameter we passed in.

<pre><code class="language-javascript">function single(arg) {
    return arg;
}
    
function none() {
        
    // The first parameter is assigned to a variable `arg`.
    // Notice the `let`; it will be significant later.
    let arg = arguments[0];

    return arg;
}
    
single("hi"); // "hi"
none(5);      // 5
</code></pre>

You see that they both work the same. Keeping in mind how function arguments work, let’s try changing some values. We’ll have a function that changes its only argument and returns it. I also will create some variables that I’ll pass to the function one by one. Try to predict what would be printed in the console. (Answer is in the second sentence of the next paragraph.)

<pre><code class="language-javascript">function reassign(arg) {
    arg = "OMG";
}

const unreassignable = "What";
let reassignable = "is";
let non_primitive = { val: "happening" };

reassign(unreassignable);
reassign(reassignable);
reassign(non&#95;primitive);

console.log(unreassignable, reassignable, non&#95;primitive.val, "😱");
</code></pre>

Did your guess has any “OMG” in it? It shouldn’t have, as the console will show “What is happening 😱.” No matter what gets passed to a function in JavaScript, reassigning changes only the argument variable. So, neither `const` nor `let` change anything here because the function doesn’t get the variable itself. But what happens if we try changing the properties of an argument?

I created another function that tries to change the `val` property of its argument. See if you can guess the message in the console this time.

<pre><code class="language-javascript">function change&#95;val&#95;prop(arg) {
    try {
        arg.val = "OMG";
    } catch (ignore) {}
}

const a&#95;string = "What";
const a&#95;number = 15;
const non&#95;primitive = { val: "happening" };
const non&#95;primitive&#95;read&#95;only = Object.freeze({ my&#95;string: "here" });

change&#95;val&#95;prop(a&#95;string);
change&#95;val&#95;prop(a&#95;number);
change&#95;val&#95;prop(non&#95;primitive);
change&#95;val&#95;prop(non&#95;primitive&#95;read&#95;only);

console.log(
    a&#95;string.val,
    a&#95;number.val,
    non&#95;primitive.val,
    non&#95;primitive&#95;read&#95;only.val,
    "😱"
);
</code></pre>

Is there any “OMG” in your guess now? Great, the message is “undefined undefined OMG undefined 😱.” The only time the function could change the property is with a common object. What does it tell us? Is there any difference between how primitive values are passed and how objects are? Is it that passing frozen object suddenly changes it to pass-by-value? I think it’s more useful to treat them as equals.

Now about that sleight of hand I mentioned. Practically all the resources do that thing where they say that primitives and objects are passed differently, then immediately follow it with an example where they treat them differently. Look at [function description in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#description). By the time of this writing, it described it like this (emphasis mine):

<blockquote>Arguments may be passed by value (in the case of primitive values) or by reference (in the case of objects). This means that if a function <strong>reassigns</strong> a primitive type parameter, the value won’t change outside the function. In the case of an object type parameter, if <strong>its properties are mutated</strong>, the change will impact outside of the function.</blockquote>

I just showed you the reassigning wouldn’t change the object either. You cannot change primitives’ properties because they are read-only, which is also the case for frozen objects. And most of the examples you’ll find do the same thing. They first state the difference between two values, then demonstrate it using different methods for each value.

I’m not trying to criticize, don’t get me wrong. It probably was done because it explains JavaScript quirks in a more familiar way. Just be aware that sometimes an explanation gives you a model of thinking about a problem. But the model is never completely true to the nature of a problem.

Looking at this issue from the perspective of primitives being just like frozen objects helps you to recognize what actually happens. Alternative tutorials become illogical. And now, having discovered this notion of a primitive object that no one could change, let us make them more friendly for the rest of your program.

{{% ad-panel-leaderboard %}}

## Converting

Primitive values stand on their own; any program knows how to handle them. Objects could be anything. And even if you call them primitive, it’s not enough for them to suddenly become first-class citizens. To achieve some of that, we need to do some work.

You can define a way to convert objects into primitive values such as strings or numbers. For example, let’s create an object representing a rating from zero to five. We need to be able to work with numeric representation for comparison and sorting. We also need to be able to output it in text.

There are certain methods that you could define to describe your object’s representation. Remember `[object Object]`? It’s what you get when you try to turn your object into a string:

<pre><code class="language-javascript">String({}); // "[object Object]"
</code></pre>

Let’s change that.

### String Representation

That output comes from the default `toString` method defined in the Object prototype. But you could overwrite it by defining it on your own object.

<pre><code class="language-javascript">String({ toString: () => "hello there" }); // "hello there"
</code></pre>

That’s what we will use for our rating objects. To make it convenient, let’s create a function that initializes and freezes such objects. It will also check if the value is within the zero to five range and return `undefined` otherwise.

<pre><code class="language-javascript">function new&#95;rating(value) {
    const max = 5;

    // That symbol forces textual representation (who needs emoji anyway 🙄).
    const text&#95;only = "\ufe0e";

    const star = "⭑" + text&#95;only;
    const no&#95;star = "⭐" + text&#95;only;
        
    if (
        !Number.isSafeInteger(value) ||
        (value &lt; 0 || value &gt; max)
    ) {
        return undefined;
    }
        
    return Object.freeze({
        value,
        toString: () =&gt; star.repeat(value) + no&#95;star.repeat(max - value)
    });
}
</code></pre>

Now let’s rate something. There is a pen I like. It’s pretty great, and I’d give it five stars.

<pre><code class="language-javascript">const ratings = new WeakMap();
ratings.set(jetstream&#95;pen, new&#95;rating(5));
</code></pre>

This `WeakMap` for ratings is how you could assign properties to objects without actually changing them. Now, whenever we want to have a rating, we can convert both of our objects to strings.

<pre><code class="language-javascript">if (ratings.has(jetstream&#95;pen)) {
    console.log(`${jetstream&#95;pen} ${ratings.get(jetstream&#95;pen)}`);
    // "Uni-Ball Jetstream 0.5 ⭑︎⭑︎⭑︎⭑︎⭑︎"
}
</code></pre>

Wrapping both objects in string template literal is what I relied on here to trigger the `toString` method. Otherwise, you could just call the `String` function on them, as I did at the beginning of this section.

### For Numberphiles

For numbers, there’s the `valueOf` method, which is called whenever there’s an attempt to convert to number comparisons or math operators (except for `+`). Let’s add it to our `new_rating` function:

<pre><code class="language-javascript">function new&#95;rating(value) {
    // ...
        
    return Object.freeze({
        value,
        valueOf: () =&gt; value,
        toString: () =&gt; star.repeat(value) + no&#95;star.repeat(max - value)
    });
}
</code></pre>

Now it might seem redundant to return the `value` property directly. But remember that no one but us knows that it’s there. Returning it from `valueOf` is a universal way to get a numeric representation.

Let’s say we have our pen object again. And let’s say the rating is now its property (just to simplify the example). We can now filter out items with less than four stars:

<pre><code class="language-javascript">articles.filter((item) =&gt; item.rating &gt; 3);
// [ { name: "Uni-Ball Jetstream 0.5", ... } ]
</code></pre>

Similarly, we can sort items by rating. We can do that using the Arrays’ `sort` method. You probably already have your favorite little sorting function that you’d like to use, like this one:

<pre><code class="language-javascript">function sorter(first, second) {
    return second.rating - first.rating;
}

const sorted&#95;by&#95;rating = array&#95;of.sort(sorter);
</code></pre>

Now, `sorted_by_rating` holds an array of the very best items.

## Conclusion

I rarely looked at objects as something that could extend what could be expressed in JavaScript. With primitive objects, that’s what I’m trying to explore. There are still things we cannot add, like new operators or literal syntax, but still, with primitive objects, we could define new types of values.

In this first part of the *Primitive Objects* series, I tried to give an overview of how to make objects resemble some primitives properties. You freeze them to make them read-only. You also can define a representation in primitives, either number or string, to make it work with arithmetic operators or output them in text.

In the next parts coming up next week, I aim to give more examples of usage and comparison with other approaches I’ve encountered. You will see how to make it easier to create primitive objects and turn them into structures.

In this series, I’m trying to touch on **JavaScript features that can be relied on**. Even if not all of it makes sense, I hope that by looking at some of the examples I gave here, you’ll learn something useful that would make working with JavaScript less brittle without unnecessarily turning to additional tools.

{{< signature "yk, il" >}}
