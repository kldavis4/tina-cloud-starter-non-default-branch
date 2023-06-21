---
title: 'Picture Perfect: Meet Pixo, A Photo Editor For Your End Users'
slug: pixo-photo-editor
author: hristo-chakarov
image: >-
  https://files.smashing.media/articles/photo-image-editor-pixo-wordpress/pixo-photo-editor.jpg
date: 2023-02-09T09:00:00.000Z
summary: >-
  With so many image editing services available nowadays, it’s good to have one good solution that is applicable for all websites and web apps that need to provide image editing as a feature. Hristo Chakarov explains how Pixo Editor’s easy integration (just a few JavaScript lines) and rich API can save your time and improve your end users’ workflow.
description: >-
  With so many image editing services available nowadays, it’s good to have one good solution that is applicable for all websites and web apps that need to provide image editing as a feature. Hristo Chakarov explains how Pixo Editor’s easy integration (just a few JavaScript lines) and rich API can save your time and improve your end users’ workflow.
categories:
  - JavaScript
  - Mobile
  - Apps
  - API
  - UI
disable_ads: true
disable_panels: true
disable_newsletterbox: true
sponsor:
  title: Pixo
  link: https://pixoeditor.com/?utm_campaign=sm2023&utm_medium=post&utm_source=smashingmagazine
  image: https://files.smashing.media/articles/photo-image-editor-pixo-wordpress/pixo-logo.svg
  description: >-
    This article has been kindly supported by our dear friends at <a href="https://pixoeditor.com/?utm_campaign=sm2023&utm_medium=post&utm_source=smashingmagazine">Pixo</a> who provide users with a beautiful, easy-to-use, and intuitive image editor. <em>Thank you!</em>
---

There are plenty of services nowadays that work with photos. Retouched images usually fulfill their purposes much better than raw ones. If you develop a service that allows its users to upload photos, wrapping a photo editing tool right in the service prior to uploading could save much time for your end users. Even though there is a large amount of photo editing software, both for desktop and mobile and online, editing a photo or a batch of photos in such software could be slower than editing the photo within your service UI.

Let’s imagine a user choosing a photo, applying some changes to it, and simply uploading it. They wouldn’t need to use a complex desktop or mobile software; they wouldn’t need to waste time by uploading the original photo to an online image editing tool first, then having to save the edited image locally, and finally uploading it to your service.

A perfect example of such a use case is an online marketplace for used cars. It would be really hard to sell a car without providing some photos of it, right? You may want to touch up a number of photos before uploading them, e.g. by masking the car plate or adjusting the tones and colors. Another example is a property management platform. Again, photos are vital for selling or renting a property, and retouching may come in handy, as well as adding some text over the photos for explanations and clarifications. Stock photo platforms may also benefit from allowing their end users to customize their purchased stock photos before they download them.

There are many solutions to this problem. When choosing the best one for your website or app, you’d better take the following into consideration:

- **Easy To Integrate Into Your Product**  
You don’t want to read tons of documentation in order to integrate such a tool.
- **As Many Various Features As You Like**
- **Simplicity**  
The majority of the end users need easy-to-use tools to edit their photos.
- **Rich API**  
The more control you have over the photo editor, the better.
- **White-Label Support**  
You want to make it look like part of your brand.
- **Optimized Output Images**  
Web performance is vital.
- **Affordable Pricing**

One of the image editors that you may like to consider and try out is [Pixo](https://pixoeditor.com/?utm_campaign=sm2023&utm_medium=post&utm_source=smashingmagazine). And for full exposure, that’s the one we are currently working on, with a friendly free plan available as well. Pixo can be integrated into any website or app because of its easy integration (just a few JavaScript lines) and rich API. It is also available to WordPress as a plugin, replacing the default image editor in WP Admin. Pixo Editor has all the features of the default editor plus a few more.

One of them is **batch editing** which allows the site administrator/editor to make some changes to a photo and replicate them to the whole batch. Simply select a batch of photos in the Media Library and choose Batch Edit. When Pixo opens the first photo for editing, the site editor makes some changes &mdash; chooses a filter, adjusts colors, and adds text. On save, the changes will be replicated to the rest of the photos from the batch!

{{< youtube id="CJN2zQezRls" caption="Pixo Image Editor for WordPress" breakout="true" time="205" >}}

But something even cooler is the fact that Pixo can be integrated into a WordPress site’s frontend &mdash; no matter which theme is chosen or which plugins there are. Pixo attaches to a file input field and listens for image selection; when the end user picks a photo, Pixo Editor opens it for editing. The user can then make some changes and save them back to the file input. Submitting the file input will actually submit the edited photo, not the original one. This basically makes the editor very easy to integrate anywhere.

You can make it attach to every file input field on the page, or a specific one, via CSS selector. The form submission handler can be an online shop plugin or a contact form plugin. Does not really matter as long as it prints a file input field on the page and handles the file upload on form submission. 

As Pixo is a SaaS, it can be integrated anywhere with a few lines of JavaScript. It can load an image from the DOM or from a URL, `base64` string or `dataurl`, from the local file system, and more. 

<div class="break-out">

 <pre><code class="language-javascript">var image = document.getElementById('myimage'); // DOM image
var image = 'https://yourdomain.com/path/to/image.jpg'); // image url
var image = 'abfdSDFEWwq2332Wdsdsdf435esf345SDfdr4S='; // base64 encoded image
var image = 'data:image/png;base64,abfdSDFEWwq2332Wdsdsdf43..'; // dataurl
var image = '{...}'; // previously exported image as JSON

var constructor_options = { apikey: 'abc123xyz000' }; // must be a valid API key issued by https://pixoeditor.com
new Pixo.Bridge(constructor_options).edit(image);
</code></pre>
</div>

When the edited image is exported, you can decide what to do with it in a callback function. 

<div class="break-out">

 <pre><code class="language-javascript">new Pixo.Bridge({
    apikey: 'abc123xyz000',
    onSave: function(image){
       // download the photo
       image.download();
       // or inject it into the DOM
       document.body.appendChild(image.toImage());
       // or serialize it as JSON
       image.toJSON();
       // or upload the photo
       var data = new FormData();
       data.append('image', image.toBlob());
       var request = new XMLHttpRequest();
       request.open('POST', 'http://yourdomain.com/path/to/upload.php');
       request.send(data);
    }
 }).edit('http://yourdomain.com/path/to/imagetoedit.jpg');
</code></pre>
</div>

Here is a CodeSandbox example showing some of the available input and output options:

<iframe src="https://codesandbox.io/embed/pixo-example-we4eog?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="pixo-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Photo Editing Features

Pixo Editor implements the most common image editing tools &mdash; crop and rotate, color correction, adding rich text over the image, filters and stickers. There is a stock stickers library, but the end user can upload another image and insert it as a sticker.

One of the greatest features is the Background tool. It allows the end users to replace the background with a solid color, another image from Unsplash, or a custom image.

{{< youtube id="O1ivXN-keJg" caption="Pixo Editor: Background Tool" breakout="true" >}}

There are drawing tools that allow the end users to draw freely on top of the image. The Pencil tool is useful for circling some parts of the image or drawing arrows to point to something. The Blur tool is excellent for masking parts of a photo &mdash; car plates, faces, or other sensitive information. The Erase tool does what it says &mdash; erases parts of inserted stickers and other images. Unfortunately, the Erase tool does not work on the source photo.

Another interesting feature is session restoration. When the user edits a photo in Pixo, downloads it, and then opens it for editing, all objects like text and stickers are editable, and the undo/redo history is there too. This is really cool because if the user makes a mistake, s/he can fix it very easily. Session restoration also works if the user closes the web browser by accident. Opening the editor with the same photo will prompt the user to restore the previous session, and his/her work won’t be lost.

{{< youtube id="RWp32CZGh-Q" caption="Session Restore explained." breakout="true" >}}

Last but not least, output photos get great compression without any quality loss, so you don’t have to worry about traffic and storage. The editor also supports WebP format.

## White Label Support

Pixo Editor has full white-label support. You can change the look and feel of the editor completely in order to match your own brand &mdash; logo, colors, fonts, and even layout. The API gives the possibility to define your color palette with a few JavaScript properties. But you can even upload a custom CSS file with overrides and change basically anything. The editor comes with six default themes that you can build your own on top of.

<iframe src="https://codesandbox.io/embed/pixo-white-label-example-chy1bo?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="pixo-white-label-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Templates

Creating templates is yet another cool feature of the service. With Pixo Editor, you can apply changes to an image and export it as a template. Then, when the end user selects this template, your application code can load it in Pixo Editor, replacing the source image with the one selected by the user. This way, all edits, like text blocks, filters, and color corrections, will be applied to the user’s image at once. This is very useful for poster images.

You can create templates with text placeholders. When the end users edit these templates, they can add their custom text to the placeholders and export the final result as an image.

Here are JSFiddle examples:

1. [Template Creator](https://jsfiddle.net/pixoeditor/1o3d9Lq5/)  
An instance of Pixo being used to create a template and save it to localStorage for simplicity.
2. [Template Consumer](https://jsfiddle.net/pixoeditor/u8jfkx45/)  
An instance of Pixo being used to pick an image and apply the template to it.

## API

Pixo provides an API that allows developers to configure the editor, as well as to execute commands and apply changes to the currently loaded photo. For example, you can extend the stock stickers library with your custom stickers very easily:

<div class="break-out">

 <pre><code class="language-javascript">pixo_instance.filterStickers(function (stock_stickers) {
   // merge or completely replace the stickers
   return my_stickers;
});
</code></pre>
</div>

A similar approach can be used if you want to amend the stock photo frames, fonts (for the text tool), and pre-defined crop sizes. And if you want to apply a change to the current photo programmatically, you can do it with the `exec` command. You can do almost everything the end user can do within the editor &mdash; simply by executing the corresponding command. This includes applying a filter, inserting a sticker, removing the background, color correction, cropping, transforming, and more. Combined with some custom CSS, you can quickly implement your own controls and use only the canvas and the business logic from Pixo:

<script async src="//jsfiddle.net/pixoeditor/pufd51zt/embed/"></script>

In the example above, we hide the built-in controls with CSS `(display: none)`, and we leave only the canvas visible. And with some HTML, CSS and JavaScript that calls the `exec` API, we basically implement our own custom controls. This can be in handy if, for some reason, we cannot fully customize the UI the way we like with just CSS.

But there are many more use cases for the API. For example, we can ensure that the edited images match a specific aspect ratio by cropping the image on load using the API. Or, we can insert a watermark when the editing is done by the end-user, on export:

<script async src="//jsfiddle.net/pixoeditor/h3e5jr1b/embed/"></script>

## REST API

Pixo also provides a REST endpoint. You can call it posting an image binary file or with a URL to an image or its base64 representation, and apply the same changes as the end user can do within the editor:

<div class="break-out">

 <pre><code class="language-javascript">curl -X POST -F 'apikey=yourapikey' -F 'filter=Sepia' -F 'image=@input.jpeg' https://pixoeditor.com/api/image > output.jpeg
</code></pre>
</div>

## Integrating Pixo Into Native Mobile Applications

Pixo is a JavaScript-based service designed for websites or web applications, but it can also be integrated into native mobile applications thanks to the WebView component, supported by both iOS and Android. The flow is very simple:

1. The User picks up a photo for editing using a native Image Picker component;
2. The photo is encoded to base64 string;
3. Pixo is loaded inside a WebView component;
4. The base64 string is sent to Pixo using the WebView messaging API;
5. The User edits the photo with the editor;
6. The User is happy with the edited photo and exports it;
7. Pixo calls back a native function through the WebView API and passes the edited photo as a base64 string;
8. The base64 string is converted to a native image.

You can see here [a demo app for iOS](https://gitlab.com/pixo-editor/integrations/ios) that implements the above approach and [an app for both iOS and Android implemented in Flutter](https://gitlab.com/pixo-editor/integrations/flutter).

<p><iframe width="500" height="1000" src="https://www.youtube.com/embed/mQvY5vVIj2o" title="Pixo integration in a Flutter app" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>

The same approach could be implemented into an Electron desktop app.

## Pros And Cons

Using a third-party image editing service is great because of its very easy integration. Adding an image editing SDK or even implementing such an editor on your own requires much more effort. Also, the service "automatically updates", i.e. you will get the latest, greatest and coolest new features, bug fixes and improvements, and new browsers support automatically &mdash; without having to change anything on your end. This, however, increases the risk of getting new bugs introduced if the newer version was not properly tested by the vendor.

But since it’s an online service, there is a risk that it could be down for some time, and during this period, your end users won’t be able to do their work. The self-hosted solution will always be up and running as long as your main app or website is live. Still, Pixo’s average uptime is 99.993% (according to the public status report) which is not that bad.

## Final Thoughts

Pixo seems to be a good image editing solution for all websites and web apps that need to provide image editing as a feature. Its detailed documentation and examples make the integration very easy. Pixo has [a 30-day full-featured free trial](https://pixoeditor.com/?utm_campaign=sm2023&utm_medium=post&utm_source=smashingmagazine). After that, you can continue using its basic editing tools and APIs for free or get a subscription plan with full features. 

## Resources

* [WordPress Plugin](https://wordpress.org/plugins/image-editor-by-pixo/)
* [Documentation & Examples](https://pixoeditor.com/documentation/?utm_campaign=sm2023&utm_medium=post&utm_source=smashingmagazine)

{{< signature "vf, il" >}}
