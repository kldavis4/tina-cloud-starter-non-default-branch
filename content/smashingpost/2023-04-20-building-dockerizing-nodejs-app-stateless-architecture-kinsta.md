---
title: 'Building And Dockerizing A Node.js App With Stateless Architecture With Help From Kinsta'
slug: building-dockerizing-nodejs-app-stateless-architecture-kinsta
author: tejas-kumar
image: >-
  https://files.smashing.media/articles/building-dockerizing-nodejs-app-stateless-architecture-kinsta/building-dockerizing-nodejs-app-stateless-architecture-kinsta.jpg
date: 2023-04-20T12:00:00.000Z
summary: >-
  Dockerizing your Node.js apps can lead to smashing success—offering consistency, easy debugging, and hassle-free dependency management. When you host this container on Kinsta, you also benefit from high-speed performance, robust security, and top-notch scalability. By combining these two, you'll surely have a whale of a time as you sail smoothly through the development seas.
description: >-
  Dockerizing your Node.js apps can lead to smashing success—offering consistency, easy debugging, and hassle-free dependency management. When you host this container on Kinsta, you also benefit from high-speed performance, robust security, and top-notch scalability. By combining these two, you'll surely have a whale of a time as you sail smoothly through the development seas.
categories:
  - Node.js
  - Apps
  - Stateless
  - JavaScript
disable_ads: true
disable_panels: true
disable_newsletterbox: true
sponsor:
  title: Kinsta
  link: https://kinsta.com/?utm_source=smashing&utm_medium=digital&utm_campaign=application-hosting&utm_content=article
  image: https://files.smashing.media/articles/building-dockerizing-nodejs-app-stateless-architecture-kinsta/kinsta-logo.svg
  description: >-
    This article has been kindly supported by our dear friends at <a href="https://kinsta.com/application-hosting/?utm_source=smashing&utm_medium=digital&utm_campaign=application-hosting&utm_content=article">Kinsta</a> who are committed to the best experience for developers and businesses, building for performance and ease of use. <em>Thank you!</em>
---

In this article, we’ll take a swing at creating a stateless Node.js app and dockerizing it, making our development environment clean and efficient. Along the way, we’ll explore the benefits of hosting containers on platforms like Kinsta that offers a managed hosting environment while supporting Docker containers as well as application and database hosting, enabling users to deploy and scale their applications with more flexibility and ease.

## Creating A Node.js App

<blockquote>In case you’re newer to code, Node.js is a platform built on Chrome’s JavaScript engine that allows developers to create server-side applications using JavaScript. It is popular for its lightweight nature, efficient performance, and asynchronous capabilities.</blockquote>

Stateless apps do not store any information about the user’s session, providing a clean and efficient way to manage your applications. Let’s explore how to create a Node.js app in this manner.

### Step 1: Initialize The Node.js Project

First, create a new directory and navigate to it:

<pre><code class="language-bash">mkdir smashing-app && cd smashing-app
</code></pre>

Next, initialize a new Node.js project:

<pre><code class="language-bash">npm init -y</code></pre>

### Step 2: Install Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Install Express with the following command:

<pre><code class="language-bash">npm install express</code></pre>

### Step 3: Create Your Stateless App

Create a new file named “app.js” and add the following code:

<pre><code class="language-javascript">const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Welcome to our smashing stateless Node.js app!");
});
app.listen(port, () => {
  console.log(`Smashing app listening at http://localhost:${port}`);
});
</code></pre>

Let’s explore this a bit. Here’s what each line does:

* `const express = require("express");`  
This line imports the Express.js framework into the code, making it available to use.
* `const app = express();`  
This line creates an instance of the Express.js framework called app. This app instance is where we define our server routes and configurations.
* `const port = process.env.PORT || 3000;`  
This line sets the port number for the server. It looks for a port number set in an environment variable called PORT. If that variable is not set, it defaults to port 3000.
* `app.get("/", (req, res) => {}`  
This line defines a route for the server when a GET request is made to the root URL (“/”).
* `res.send("Welcome to our smashing stateless Node.js app!");`  
This line sends the string “Welcome to our smashing stateless Node.js app!” as a response to the GET request made to the root URL.
* `app.listen(port, () => {})`  
This line starts the server and listens on the port number specified earlier.

Now, run the app with:

<pre><code class="language-bash">node app.js</code></pre>

Your Node.js app is now running at `http://localhost:3000`.

## Stateless Architecture

Stateless architecture means that the server doesn’t store any information about the user’s session, resulting in several benefits:

* **Scalability**  
Stateless applications can easily scale horizontally by adding more instances without worrying about session data.
* **Simplicity**  
Without session data to manage, the application logic becomes simpler and easier to maintain.
* **Fault tolerance**  
Stateless applications can recover quickly from failures because there’s no session state to be lost or recovered.

Okay, we’ve got our Node.js server running locally, but how can we package it up so that anyone can run it? Even people without Node.js installed, and have it run on any platform? That’s where Docker comes in.

## Dockerizing The App

Docker is a tool that helps developers build, ship, and run applications in a containerized environment. It simplifies the process of deploying applications across different platforms and environments.

### Step 1: Install Docker

First, make sure you have Docker installed on your machine. You can download it [here](https://docker.com/).

### Step 2: Create A Dockerfile

Create a new file named Dockerfile in your project directory and add the following code:

<pre><code class="language-bash">FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=3000
CMD [ "node", "app.js" ]
</code></pre>

Once again, let’s take a look at what this is doing in a little more detail:

* `FROM node:18-alpine`  
This line specifies the base image for this Docker image. In this case, it is the official Node.js Docker image based on the Alpine Linux distribution. This gives Node.js to the Docker container, which is like a “virtual machine” but lighter and more efficient.
* `WORKDIR /usr/src/app`  
This line sets the working directory inside the Docker container to `/usr/src/app`.
* `COPY . .`  
This line copies all the files from the local directory to the working directory in the Docker container.
* `RUN npm install`  
This line installs the dependencies specified in the `package.json` file.
* `ENV PORT=3000`  
Using this directive, we make the app more configurable by using the PORT environment variable. This approach provides flexibility and allows hosting providers like Kinsta to connect the application to their infrastructure seamlessly.
* `CMD [ "node", "app.js" ]`  
This line specifies the command to run when the Docker container starts. In this case, it runs the node command with app.js as the argument, which will start the Node.js application.

So, this Dockerfile builds a Docker image that sets up a working directory, installs dependencies, copies all the files into the container, exposes port 3000, and runs the Node.js application with the node command.

### Step 3: Build And Run The Docker Container

Let’s now build this and run it locally to make sure everything works fine.

<pre><code class="language-bash">docker build -t smashing-app
</code></pre>

When this succeeds, we will run the container:

<pre><code class="language-bash">docker run -p 3000:3000 smashing-app
</code></pre>

Let’s break this down because that `-p 3000:3000` thing might look confusing. Here’s what’s happening:

1. `docker run` is a command used to run a Docker container.
2. `-p 3000:3000` is an option that maps port `3000` in the Docker container to port `3000` on the host machine. This means that the container’s port `3000` will be accessible from the host machine at port `3000`. The first port number is the host machine’s port number (ours), and the second port number is the container’s port number.
3. We can have port `1234` on our machine mapped to port `3000` on the container, and then `localhost:1234` will point to `container:3000` and we'll still have access to the app.
4. `smashing-app` is the name of the Docker image that the container is based on, the one we just built.

Your Dockerized Node.js app should now be running at <code>[http://localhost:3000](http://localhost:3000)</code>.

When running the Docker container, we can additionally pass a custom PORT value as an environment variable:

<pre><code class="language-bash">docker run -p 8080:5713 -d -e PORT=5713 smashing-app
</code></pre>

This command maps the container's port 5713 to the host's port 8080 and sets the PORT environment variable to 5713 inside the container.

Using the PORT environment variable in the Dockerfile allows for greater flexibility and adaptability when deploying the Node.js app to various hosting providers, including [Kinsta](https://kinsta.com/?utm_source=smashing&utm_medium=digital&utm_campaign=application-hosting&utm_content=article).

## More Smashing Advantages Of Dockerizing A Node.js App

Dockerizing a Node.js app brings several advantages to developers and the overall application lifecycle. Here are some additional key benefits with code examples:

### Simplified Dependency Management

Docker allows you to encapsulate all the dependencies within the container itself, making it easier to manage and share among team members. For example, let's say you have a package.json file with a specific version of a package:

<pre><code class="language-json">{
  "dependencies": {
    "lodash": "4.17.21"
  }
}
</code></pre>

By including this in your Dockerfile, the specific version of lodash is automatically installed and bundled within your container, ensuring consistent behavior across environments.

##### Easy App Versioning

Docker allows you to tag and version your application images, making it simple to roll back to previous versions or deploy different versions in parallel. For example, if you want to build a new version of your app, you can tag it using the following command:

<pre><code class="language-bash">docker build -t smashing-app:v2 .
</code></pre>

You can then run multiple versions of your app simultaneously:

<pre><code class="language-bash">docker run -p 3000:3000 -d smashing-app:v1

docker run -p 3001:3000 -d smashing-app:v2
</code></pre>

##### Environment Variables

Docker makes it easy to manage environment variables, which can be passed to your Node.js app to modify its behavior based on the environment (development, staging, production). For example, in your app.js file:

<pre><code class="language-javascript">const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
app.get('/', (req, res) => {
  res.send(`Welcome to our smashing stateless Node.js app running in ${env} mode!`);
});
app.listen(port, () => {
  console.log(`Smashing app listening at http://localhost:${port}`);
});
</code></pre>

In your Dockerfile, you can set the `NODE_ENV` variable:

<pre><code class="language-dockerfile">FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV=production
CMD [ "node", "app.js" ]
</code></pre>

Or you can pass it when running the container:

<pre><code class="language-bash">docker run -p 3000:3000 -d -e NODE_ENV=production smashing-app
</code></pre>

The TL;DR of this is that through Dockerizing node apps, we can eliminate a whole class of “works on my machine” problems while also boosting the reusability, testability, and portability of our Node.js applications. 🎉

## Hosting Containers With Kinsta

Now that we have our stateless Node.js app Dockerized, you might be wondering where to host it. [Kinsta](https://kinsta.com/?utm_source=smashing&utm_medium=digital&utm_campaign=application-hosting&utm_content=article) is widely known for its application and database hosting. Let’s explore how we’d do this with Kinsta in a step-by-step manner.

<ol>
  <li>Login or sign-up to your Kinsta account.</li>
  <li>From there, you should be in your dashboard.</li>
  <li>Using the sidebar, navigate to <strong>Applications.</strong><br />

{{< rimg breakout="true" href="https://kinsta.com/?utm_source=smashing&utm_medium=digital&utm_campaign=application-hosting&utm_content=article" src="https://files.smashing.media/articles/building-dockerizing-nodejs-app-stateless-architecture-kinsta/kinsta-sidebar-applications.jpg" width="800" height="474" sizes="100vw" caption="" alt="Applications" >}}
</li>
<li>From here, you should be able to Add a Service of type <strong>application</strong>.</li>
<li>Once you add an application, you’ll be invited to connect your GitHub account to Kinsta so that Kinsta can automatically deploy your application when updates are pushed to it.</li>
<li>You can now choose the repo containing the code you’d like to deploy, along with setting some basic details like the application’s name and environment variables.<br />

{{< rimg breakout="true" href="https://kinsta.com/?utm_source=smashing&utm_medium=digital&utm_campaign=application-hosting&utm_content=article" src="https://files.smashing.media/articles/building-dockerizing-nodejs-app-stateless-architecture-kinsta/kinsta-adding-application.png" width="800" height="474" sizes="100vw" caption="" alt="Adding an application in Kinsta" >}}
</li>
<li>Next, we specify the build environment of our application. It is here we specify the location of the Dockerfile in our repo that we just created.</li>
<li>Finally, we allocate computer resources for our container, enter our payment information, and we’re ready to go!</li>
</ol>

Kinsta will now build and deploy our application, and give us a public, secure link from where it is accessible. Our application is now published to the web!

## Conclusion

In this tutorial, we’ve built a Node.js app and Dockerized it, making it easy to deploy across various environments. We’ve also explored the benefits of stateless architecture and touched upon some great choices for hosting containers, like [Kinsta](https://kinsta.com/?utm_source=smashing&utm_medium=digital&utm_campaign=application-hosting&utm_content=article).

{{< signature "yk, il" >}}
