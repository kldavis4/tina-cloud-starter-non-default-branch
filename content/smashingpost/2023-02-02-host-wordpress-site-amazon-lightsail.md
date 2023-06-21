---
title: 'How To Host A WordPress Site On Amazon Lightsail'
slug: host-wordpress-site-amazon-lightsail
author: leonardolosoviz
image: >-
  https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/host-wordpress-site-amazon-lightsail.jpg
date: 2023-02-02T09:00:00.000Z
summary: >-
  Lightsail provides all the power we need to host our websites, as we are used to from AWS, but making it way easier than ever before. In this article, Leonardo Losoviz explores how to launch a WordPress site in Lightsail in a quick and easy way.
description: >-
  Lightsail provides all the power we need to host our websites, as we are used to from AWS, but making it way easier than ever before. In this article, Leonardo Losoviz explores how to launch a WordPress site in Lightsail in a quick and easy way.
categories:
  - Tools
  - Plugins
  - WordPress
disable_ads: true
disable_panels: true
disable_newsletterbox: true
sponsor:
  title: AWS Amazon
  link: https://aws.amazon.com/
  image: https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/aws-logo.svg
  description: >-
    This article has been kindly supported by our dear friends at <a href="https://aws.amazon.com/">AWS</a> who offer reliable, scalable, and inexpensive cloud computing services. <em>Thank you!</em>
---

A good chunk of all websites out there runs on Amazon Web Services (AWS). At the most basic, a website will usually use [Amazon EC2](https://aws.amazon.com/ec2/) and [Amazon S3](https://aws.amazon.com/s3/) solutions (for computing power and data storage, respectively), and most likely also [Amazon CloudFront](https://aws.amazon.com/cloudfront/) (as the content delivery network [CDN] to distribute the assets).
 
This stack works very well and is super powerful, but it is not dead easy to set up, as each of these services needs to be configured to interact with one another. And once that’s done, we need to configure the operating system and install the CMS, and anything else needed to run our software.
 
If all we need is to launch a website quickly and easily (for instance, to show the website under development to our client or to test a WordPress plugin), spending time to set up all these separate AWS services could be a bit too much.
 
This is why AWS created [Amazon Lightsail](https://aws.amazon.com/lightsail/?trk=7cac8a80-652f-40a3-9cf6-634bd78a89a2&sc_channel=el), a service that aggregates the other services (EC2, S3, CloudFront, and a few others) via a simplified user interface to launch webservers with everything installed and configured (for both hardware and core software) and ready to be used.
 
With Lightsail, we can have our website up and running in a matter of minutes.
 
Unlike most AWS services, Lightsail has a flat pricing structure, with a fixed price per month. (In contrast, EC2 is charged per number of seconds of use; EBS &mdash; which provides the volumes to store data in EC2 &mdash; by the size and type of disk along with any additional provisioned IOPS; S3, by the size of the stored objects and duration of storage; and CloudFront, by the amount of data transferred.) This makes it way easier to estimate our AWS bill at the end of the month.
 
**Note**: *You can [try out Lightsail for free](https://aws.amazon.com/lightsail/pricing/?trk=7cac8a80-652f-40a3-9cf6-634bd78a89a2&sc_channel=el) for the first three months.*
 
In this article, let’s explore how to launch a **WordPress site** in Lightsail in a quick and easy way.

## Creating A Lightsail Instance With WordPress Pre-Installed

To access Lightsail, we head over to [lightsail.aws.amazon.com](https://lightsail.aws.amazon.com/?trk=7cac8a80-652f-40a3-9cf6-634bd78a89a2&sc_channel=el) (we need to be logged in to AWS).
 
Initially, our dashboard will be empty:

{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/1-lightsail-dashboard.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/1-lightsail-dashboard.png" width="800" height="627" sizes="100vw" caption="Lightsail dashboard. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/1-lightsail-dashboard.png'>Large preview</a>)" alt="Lightsail dashboard" >}}

Let’s click on “Create instance” to host a WordPress site.
 
We must select the location of the server, the platform to use (Linux/Unit or Windows), and what software to install (OS + Apps) via the provided blueprints. Please notice that the WordPress blueprint installs the latest version and that there are separate blueprints for WordPress as a single site and as a multisite.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/2-lightsail-dashboard-creating-instance.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/2-lightsail-dashboard-creating-instance.png" width="800" height="627" sizes="100vw" caption="Creating an instance. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/2-lightsail-dashboard-creating-instance.png'>Large preview</a>)" alt="Creating an instance" >}}

Choose a location that is as close as possible to your users to reduce the latency when accessing the site.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/3-lightsail-dashboard-choosing-instance-location.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/3-lightsail-dashboard-choosing-instance-location.png" width="800" height="627" sizes="100vw" caption="Choosing the instance location. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/3-lightsail-dashboard-choosing-instance-location.png'>Large preview</a>)" alt="Choosing the instance location" >}}

Lightsail has different prices based on how powerful the server is: **The more traffic the website has, the more resources the server must have**.
 
We can get a basic server that is good for testing for $3.50/month USD; for production, we’d rather start with a server at $5 or 10/month, monitor its traffic, and analyze (over time) if to upgrade it.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/4-lightsail-dashboard-Instance-price.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/4-lightsail-dashboard-Instance-price.png" width="800" height="627" sizes="100vw" caption="Instance price. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/4-lightsail-dashboard-Instance-price.png'>Large preview</a>)" alt="Instance price" >}}
 
We finally assign a name to the instance and click on “Create instance.”
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/5-lightsail-dashboard-assigning-name-instance.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/5-lightsail-dashboard-assigning-name-instance.png" width="800" height="627" sizes="100vw" caption="Assigning a name to the instance. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/5-lightsail-dashboard-assigning-name-instance.png'>Large preview</a>)" alt="Assigning a name to the instance" >}}
 
The instance will be created in the background. After less than 1 minute, it will be ready, and its status on the dashboard will change from “Pending” to “Running.”
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/6-lightsail-dashboard-instance-created.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/6-lightsail-dashboard-instance-created.png" width="800" height="627" sizes="100vw" caption="Instance created. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/6-lightsail-dashboard-instance-created.png'>Large preview</a>)" alt="Instance created" >}}
 
Please notice the “Terminal” icon right next to the instance’s name. In the sections below, we will be using it to connect to the instance via SSH and execute commands on the server.
 
## Attaching A Static IP

When the instance is created, the IP assigned to it is “elastic,” which can change (for instance, when rebooting the server). So we must create a static IP and attach it to the instance so that it never changes.
 
For that, head over to the Networking tab and, under “Public IP,” click on “Attach static IP.”
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/7-wordpress-demo-elastic-IP.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/7-wordpress-demo-elastic-IP.png" width="800" height="627" sizes="100vw" caption="Elastic IP. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/7-wordpress-demo-elastic-IP.png'>Large preview</a>)" alt="Elastic IP" >}}

We must provide a name to identify the static IP.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/8-creating-static-IP.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/8-creating-static-IP.png" width="800" height="627" sizes="100vw" caption="Creating a static IP. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/8-creating-static-IP.png'>Large preview</a>)" alt="Creating a static IP" >}}

Click on “Create and attach,” upon which the server will now have a static IP associated with it.

{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/9-static-IP-attached-instance.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/9-static-IP-attached-instance.png" width="800" height="627" sizes="100vw" caption="Static IP attached to the instance. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/9-static-IP-attached-instance.png'>Large preview</a>)" alt="Static IP attached to the instance" >}}

We can now access our WordPress site in the browser under `http://{PUBLIC_IP}`.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/10-accessing-wordpress-site.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/10-accessing-wordpress-site.png" width="800" height="683" sizes="100vw" caption="Accessing the WordPress site. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/10-accessing-wordpress-site.png'>Large preview</a>)" alt="Accessing the WordPress site" >}}
 
Hello, WordPress site! 👋

## Accessing The WP Admin

The WordPress admin’s username is `user`, and we need to retrieve the password from the server by connecting to it via SSH.
 
For that, we click on the “Terminal” icon next to the instance name (as seen earlier), upon which a new window opens up in the browser, with a CLI running on the instance.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/11-connecting-instance-via-SSH.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/11-connecting-instance-via-SSH.png" width="800" height="644" sizes="100vw" caption="Connecting to the instance via SSH. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/11-connecting-instance-via-SSH.png'>Large preview</a>)" alt="Connecting to the instance via SSH" >}}

Execute the following command to print the password on the screen.

<pre><code class="language-bash">cat bitnami&#95;application&#95;password
</code></pre>

{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/12-printing-admin-password.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/12-printing-admin-password.png" width="800" height="644" sizes="100vw" caption="Printing the admin password. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/12-printing-admin-password.png'>Large preview</a>)" alt="Printing the admin password" >}}
 
Then highlight the password, and click on the orange clipboard icon (on the bottom right corner) to copy the password from the popping window.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/13-copying-password-clipboard.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/13-copying-password-clipboard.png" width="800" height="644" sizes="100vw" caption="Copying the password to the clipboard. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/13-copying-password-clipboard.png'>Large preview</a>)" alt="Copying the password to the clipboard" >}}
 
Head over to the WordPress admin screen under `http://{PUBLIC_IP}/wp-login.php`, and input the username and password.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/14-logging-into-wp-admin.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/14-logging-into-wp-admin.png" width="800" height="684" sizes="100vw" caption="Logging into the wp-admin. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/14-logging-into-wp-admin.png'>Large preview</a>)" alt="Logging into the wp-admin" >}}

Voilà, we are in.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/15-wordpress-sitelogged-into-wp-admin.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/15-wordpress-sitelogged-into-wp-admin.png" width="800" height="683" sizes="100vw" caption="Logged into the wp-admin. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/15-wordpress-sitelogged-into-wp-admin.png'>Large preview</a>)" alt="Logged into the wp-admin" >}}

## Using A Custom Domain

Accessing the website straight from the public IP is not ideal, so let’s create a custom domain.
 
In your DNS service, create an `A` record mapping your domain or subdomain to the instance’s public IP (if you don’t have a domain, you can also [register a new one via Lightsail](https://lightsail.aws.amazon.com/ls/webapp/create/route-53-domain?trk=7cac8a80-652f-40a3-9cf6-634bd78a89a2&sc_channel=el)). I use AWS Route 53, but any DNS service will work.

{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/16-create-DNS-record-Route-53.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/16-create-DNS-record-Route-53.png" width="800" height="627" sizes="100vw" caption="Creating a DNS record on Route 53. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/16-create-DNS-record-Route-53.png'>Large preview</a>)" alt="Creating a DNS record on Route 53" >}}

We can now access the website via the chosen domain.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/17-access-site-under-custom-domain.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/17-access-site-under-custom-domain.png" width="800" height="684" sizes="100vw" caption="Accessing site under custom domain. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/17-access-site-under-custom-domain.png'>Large preview</a>)" alt="Accessing site under custom domain" >}}

## Installing SSL

So far, we have been accessing the website under `http`. If we try `https`, we are told it is not secure.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/18-site-under-https-unsafe.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/18-site-under-https-unsafe.png" width="800" height="683" sizes="100vw" caption="Site under https is unsafe. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/18-site-under-https-unsafe.png'>Large preview</a>)" alt="Site under https is unsafe" >}}

So it’s time to install an SSL certificate provided via **Let’s Encrypt**. For this, we need to log in to the terminal again and enter the following command:

<pre><code class="language-bash">sudo /opt/bitnami/bncert-tool
</code></pre>

The program will request to input the list of domains for which to create the certificate (so you can add `yourdomain.com` and `www.yourdomain.com`).

{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/19-wordpress-demo-installing-ssl.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/19-wordpress-demo-installing-ssl.png" width="800" height="644" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/19-wordpress-demo-installing-ssl.png'>Large preview</a>)" alt="Wordpress demo installing ssl" >}}

The program will then request some more info (including your email) and ask if to redirect HTTP traffic to HTTPS (it’s recommended to say yes). Once it’s all provided, the certificate will be created.
 
Now, accessing the site under `https` works well:
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/20-website-under-https-OK.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/20-website-under-https-OK.png" width="800" height="682" sizes="100vw" caption="Site under https is OK. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/20-website-under-https-OK.png'>Large preview</a>)" alt="Site under https is OK" >}}

There’s one final step to do: Change the site URL in WordPress from `http` to `https` so that all links in the site point to the secure location, and we avoid the HTTP to HTTPS redirects.
 
Heading to the General Settings screen in WordPress, we see that both the “WordPress Address (URL)” and “Site Address (URL)” inputs cannot be edited.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/21-wordpress-demo-general-settings.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/21-wordpress-demo-general-settings.png" width="800" height="627" sizes="100vw" caption="General Settings in WordPress. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/21-wordpress-demo-general-settings.png'>Large preview</a>)" alt="General Settings in WordPress" >}}

To modify this configuration, we need to edit the `wp-config.php` file via the terminal.
 
Then connect to the terminal again, and execute this command:

<pre><code class="language-bash">sudo nano /opt/bitnami/wordpress/wp-config.php
</code></pre>

The command opens the file in the `nano` text editor.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/22-editing-wpconfig-php-file-with-nano.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/22-editing-wpconfig-php-file-with-nano.png" width="800" height="644" sizes="100vw" caption="Editing the <code>wpconfig.php</code> file with nano. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/22-editing-wpconfig-php-file-with-nano.png'>Large preview</a>)" alt="Editing the wpconfig.php file with nano" >}}

Scroll down until finding this code:

<pre><code class="language-bash">define('WP&#95;SITEURL', 'http://' . $&#95;SERVER['HTTP&#95;HOST'] . '/');
define('WP&#95;HOME', 'http://' . $&#95;SERVER['HTTP&#95;HOST'] . '/');
</code></pre>

And replace it with this code:

<div class="break-out">

<pre><code class="language-bash">define('WP&#95;SITEURL', 'https://' . $&#95;SERVER['HTTP&#95;HOST'] . '/');
define('WP&#95;HOME', 'https://' . $&#95;SERVER['HTTP&#95;HOST'] . '/');
if (isset($&#95;SERVER['HTTP&#95;CLOUDFRONT&#95;FORWARDED&#95;PROTO']) && $&#95;SERVER['HTTP&#95;CLOUDFRONT&#95;FORWARDED&#95;PROTO'] === 'https') {
    $&#95;SERVER['HTTPS'] = 'on';
}
</code></pre>
</div>
 
Then press <kbd>Ctrl</kbd> + <kbd>O</kbd> (to save) and <kbd>Ctrl</kbd> + <kbd>X</kbd> (to exit). Reloading the General Settings screen in WordPress, we see the site URL now uses `https`.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/23-wordpress-demo-general-settings-update-https.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/23-wordpress-demo-general-settings-update-https.png" width="800" height="627" sizes="100vw" caption="General Settings in WordPress updated with https. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/23-wordpress-demo-general-settings-update-https.png'>Large preview</a>)" alt="General Settings in WordPress updated with https" >}}

## Modifying The Admin Username
 
Lightsail sets the admin’s username as `user`. Because WordPress does not allow modification of the username once registered, if we’d like to modify it, we need to do it directly in the MySQL database.
 
To do this, execute the following command in the terminal (in this case, updating the username to `leo`):
 
<div class="break-out">

<pre><code class="language-bash">mysql -u root -p$(cat /home/bitnami/bitnami&#95;application&#95;password) -e 'UPDATE wp&#95;users set user&#95;login = "leo" where ID = 1;' bitnami&#95;wordpress
</code></pre>
</div>
 
Going to the admin user’s profile, we can see the username has been updated.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/24-updated-admin-username-wordpress-demo.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/24-updated-admin-username-wordpress-demo.png" width="800" height="627" sizes="100vw" caption="Updated admin username. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/24-updated-admin-username-wordpress-demo.png'>Large preview</a>)" alt="Updated admin username" >}}

## Storing The Images In An S3 Bucket

When uploading images (or any media asset) to WordPress, these are stored under the server’s folder `wp-content/uploads` and subsequently served from there.
 
This is a concern because the server should be considered expendable so that if it crashes and needs to be regenerated, no data will be lost. We can create a [snapshot](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-instance-snapshots-in-amazon-lightsail?trk=7cac8a80-652f-40a3-9cf6-634bd78a89a2&sc_channel=el) from the server to backup our data, and that will contain the folder with the images, but only starting from the moment in which the snapshot was taken; any image uploaded afterward would be lost.
 
Another issue could arise when hosting the site on multiple servers. If our traffic goes up, we can increase the computing power in Lightsail by launching additional servers (accessed behind a [load balancer](https://aws.amazon.com/lightsail/features/load-balancing/?trk=7cac8a80-652f-40a3-9cf6-634bd78a89a2&sc_channel=el), and all of them reading/writing to the same [managed database](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-databases?trk=7cac8a80-652f-40a3-9cf6-634bd78a89a2&sc_channel=el)).
 
However, images hosted in one server are in that server alone; if a request for that image were handled by a different server, the image would be missing.
 
The solution is to host the images in an S3 bucket and have the WordPress site serve the images directly from the bucket.
 
Let’s do that. In Lightsail, head over to the Storage tab and click on “Create bucket.”
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/25-amazon-lightsail-storage-dashboard.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/25-amazon-lightsail-storage-dashboard.png" width="800" height="627" sizes="100vw" caption="Storage dashboard. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/25-amazon-lightsail-storage-dashboard.png'>Large preview</a>)" alt="Storage dashboard" >}}
 
Lightsail offers the same flat pricing structure for S3 buckets as for EC2 instances: Depending on our storage and transfer needs, we can choose a plan that costs $1, 3, or 5 per month.

{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/26-amazon-lightsail-choosing-plan-when-creating-bucket.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/26-amazon-lightsail-choosing-plan-when-creating-bucket.png" width="800" height="627" sizes="100vw" caption="Choosing the plan when creating a bucket. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/26-amazon-lightsail-choosing-plan-when-creating-bucket.png'>Large preview</a>)" alt="Choosing the plan when creating a bucket" >}}

Make sure to choose the same AWS region as the location for the bucket as you had for the server (to reduce latency when uploading the images).

{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/27-amazon-lightsail-choosing-location-when-creating-bucket.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/27-amazon-lightsail-choosing-location-when-creating-bucket.png" width="800" height="627" sizes="100vw" caption="Choosing the location when creating a bucket. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/27-amazon-lightsail-choosing-location-when-creating-bucket.png'>Large preview</a>)" alt="Choosing the location when creating a bucket" >}}

Finally, provide a unique name for the bucket, and click on “Create bucket.”
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/28-bucket-created-amazon-lightsail.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/28-bucket-created-amazon-lightsail.png" width="800" height="627" sizes="100vw" caption="Creating the bucket. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/28-bucket-created-amazon-lightsail.png'>Large preview</a>)" alt="Creating the bucket" >}}

The bucket is now created, but we still need to configure it to update its permissions to make the uploaded assets public.
 
Click on the bucket name and, under the Permissions tab, select “Individual objects can be made public and read-only.”

{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/29-amazon-lightsail-wordpress-bucket-access-permissions.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/29-amazon-lightsail-wordpress-bucket-access-permissions.png" width="800" height="627" sizes="100vw" caption="Bucket permissions. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/29-amazon-lightsail-wordpress-bucket-access-permissions.png'>Large preview</a>)" alt="Bucket permissions" >}}

Under Resource access, attach the server to the bucket (then we can avoid defining our AWS credentials on the WordPress site).
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/30-amazon-lightsail-attaching-instance-to-bucket.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/30-amazon-lightsail-attaching-instance-to-bucket.png" width="800" height="627" sizes="100vw" caption="Attaching the instance to the bucket. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/30-amazon-lightsail-attaching-instance-to-bucket.png'>Large preview</a>)" alt="Attaching the instance to the bucket" >}}

Our Lightsail configuration is done. Next, we need to configure the WordPress site to upload images to the bucket.
 
This is achieved via [WP Offload Media Lite](https://wordpress.org/plugins/amazon-s3-and-cloudfront/), a free WordPress plugin that automatically uploads to S3 any asset added to the WordPress Media Library.
 
Head over to the plugins screen, search for “WP Offload Media Lite for Amazon S3,” and install and activate the plugin from the search results.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/31-wordpress-demo-installing-WP-offload-media-lite.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/31-wordpress-demo-installing-WP-offload-media-lite.png" width="800" height="627" sizes="100vw" caption="Installing WP Offload Media Lite. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/31-wordpress-demo-installing-WP-offload-media-lite.png'>Large preview</a>)" alt="Installing WP Offload Media Lite" >}}

Once activated, head over to `Settings > WP Offload Media` to configure the plugin.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/32-wordpress-demo-site-settings-WP-offload-media-lite.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/32-wordpress-demo-site-settings-WP-offload-media-lite.png" width="800" height="627" sizes="100vw" caption="Settings for WP Offload Media Lite. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/32-wordpress-demo-site-settings-WP-offload-media-lite.png'>Large preview</a>)" alt="Settings for WP Offload Media Lite" >}}

In the Connection Method section, select “My server is on Amazon Web Services, and I'd like to use IAM Roles,” and save your changes.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/33-connection-method-WP-offload-media-lite.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/33-connection-method-WP-offload-media-lite.png" width="800" height="627" sizes="100vw" caption="Connection Method for WP Offload Media Lite. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/33-connection-method-WP-offload-media-lite.png'>Large preview</a>)" alt="Connection Method for WP Offload Media Lite" >}}

Next, edit the `wp-config.php` file via the terminal (as explained earlier), and paste the following code anywhere near the top:

<pre><code class="language-bash">define( 'AS3CF&#95;SETTINGS', serialize( array(
    'provider' =&gt; 'aws',
    'use-server-roles' =&gt; true,
) ) );
</code></pre>

Back to the plugin settings, there is a `Storage Provider > Bucket tab`, where we must select the bucket we created to host our images.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/34-selecting-bucket-WP-offload-media-lite.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/34-selecting-bucket-WP-offload-media-lite.png" width="800" height="627" sizes="100vw" caption="Selecting the bucket for WP Offload Media Lite. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/34-selecting-bucket-WP-offload-media-lite.png'>Large preview</a>)" alt="Selecting the bucket for WP Offload Media Lite" >}}

On the next screen, we can optionally adjust the permissions to access the assets or click on “Keep Bucket Security As Is,” which will finalize the bucket configuration.
 
Finally, let’s make the plugin always retrieve the assets using HTTPS. In the Delivery Settings tab, select “Force HTTPS” and then “Save Changes.”
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/35-media-force-https-on.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/35-media-force-https-on.png" width="800" height="627" sizes="100vw" caption="Media Force HTTPS switched on. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/35-media-force-https-on.png'>Large preview</a>)" alt="Media Force HTTPS switched on" >}}

The plugin settings are now complete. We test it out by going to `Media > Add New`, uploading an image, and inspecting its file URL. If everything goes well, this should start with the bucket URL.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/36-wordpress-demo-settings-image-upload-bucket.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/36-wordpress-demo-settings-image-upload-bucket.png" width="800" height="627" sizes="100vw" caption="Image uploaded to bucket. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/36-wordpress-demo-settings-image-upload-bucket.png'>Large preview</a>)" alt="Image uploaded to bucket" >}}

## Distributing Images Via A CDN

We are almost done configuring the website. There is only one thing left to do: Add a CDN to access the images, so these will be served from a location nearby the user, reducing the latency and improving the overall performance of the site.
 
For this, head over to the Networking tab and click on “Create distribution.”
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/37-amazon-lightsail-networking-dashboard-wordpress.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/37-amazon-lightsail-networking-dashboard-wordpress.png" width="800" height="627" sizes="100vw" caption="Networking dashboard. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/37-amazon-lightsail-networking-dashboard-wordpress.png'>Large preview</a>)" alt="Networking dashboard" >}}

In the Create a distribution screen, choose the bucket as the origin of the distribution. 

**Note**: *The image request will be processed by an edge location near the user, which will first retrieve the asset from the bucket, cache it, and serve it from this location from then on.*
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/38-amazon-lightsail-choosing-origin-CDN-distribution.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/38-amazon-lightsail-choosing-origin-CDN-distribution.png" width="800" height="627" sizes="100vw" caption="Choosing the origin for the CDN distribution. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/38-amazon-lightsail-choosing-origin-CDN-distribution.png'>Large preview</a>)" alt="Choosing the origin for the CDN distribution" >}}

The pricing structure is flat. Choose the 50 GB plan at $2.50/month, which is free for the first year.
 
Then provide a unique name for the distribution, and click on “Create distribution.”
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/39-amazon-lightsail-creating-CDN-distribution.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/39-amazon-lightsail-creating-CDN-distribution.png" width="800" height="627" sizes="100vw" caption="Creating a CDN distribution. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/39-amazon-lightsail-creating-CDN-distribution.png'>Large preview</a>)" alt="Creating a CDN distribution" >}}

The distribution is now created. On the top right, we can visualize the domain from which to access our assets, of shape `{subdomain}.cloudfront.net` (we can change this to a custom domain under the Custom domains tab).
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/40-amazon-lightsail-visualizing-CDN-distribution-doman.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/40-amazon-lightsail-visualizing-CDN-distribution-doman.png" width="800" height="627" sizes="100vw" caption="Visualizing the CDN distribution domain. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/40-amazon-lightsail-visualizing-CDN-distribution-doman.png'>Large preview</a>)" alt="Visualizing the CDN distribution domain" >}}

We must modify the settings for **WP Offload Media Lite** to indicate to serve images from the CDN.
 
For that, head over to the Delivery Settings tab and edit the provider (currently set as Amazon S3).
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/41-amazon-lightsail-delivery-settings-WP-offload-media-lite.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/41-amazon-lightsail-delivery-settings-WP-offload-media-lite.png" width="800" height="627" sizes="100vw" caption="Delivery Settings for WP Offload Media Lite. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/41-amazon-lightsail-delivery-settings-WP-offload-media-lite.png'>Large preview</a>)" alt="Delivery Settings for WP Offload Media Lite" >}}

Choose “Amazon CloudFront” and click on “Save Delivery Provider.”
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/42-amazon-lightsail-updating-delivery-provider-WP-offload-media-lite.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/42-amazon-lightsail-updating-delivery-provider-WP-offload-media-lite.png" width="800" height="627" sizes="100vw" caption="Updating the Delivery Provider for WP Offload Media Lite. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/42-amazon-lightsail-updating-delivery-provider-WP-offload-media-lite.png'>Large preview</a>)" alt="Updating the Delivery Provider for WP Offload Media Lite" >}}

Now back to the Delivery Settings tab, there is a new section, “Use Custom Domain Name (CNAME).” Paste there the distribution domain, and click on “Save Changes.”
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/43-amazon-lightsail-updating-distribution-doman-wordpress-settings.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/43-amazon-lightsail-updating-distribution-doman-wordpress-settings.png" width="800" height="627" sizes="100vw" caption="Updating the distribution domain. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/43-amazon-lightsail-updating-distribution-doman-wordpress-settings.png'>Large preview</a>)" alt="Updating the distribution domain" >}}

To test it out, go once again to `Media > Add New`, upload an image, and check that the file URL now starts with the distribution domain.
 
{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/44-wordpress-site-settings-validating-image-served-from-CDN.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/44-wordpress-site-settings-validating-image-served-from-CDN.png" width="800" height="627" sizes="100vw" caption="Validating that the image is served from the CDN. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/44-wordpress-site-settings-validating-image-served-from-CDN.png'>Large preview</a>)" alt="Validating that the image is served from the CDN" >}}

Success! Accessing our WordPress site will now have its assets served by the AWS CDN, greatly increasing the performance of the site.

{{< rimg href="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/45-wordpress-blog-post-with-image.png" src="https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/45-wordpress-blog-post-with-image.png" width="800" height=683"" sizes="100vw" caption="WordPress blog post with image. (<a href='https://files.smashing.media/articles/wordpress-site-hosted-by-amazon-lightsail/45-wordpress-blog-post-with-image.png'>Large preview</a>)" alt="WordPress blog post with image" >}}

## We’re Done Here, Now It’s Your Turn

Lightsail provides all the power we need to host our websites, as we are used to from AWS, but making it way easier than ever before. In this article, we saw how to launch a WordPress site quickly and easily (the whole process took me between 15 and 30 minutes).
 
Lightsail conveniently offers a flat pricing structure that takes all surprises away from our bills. And you can try it without spending a penny: [it’s free for the first three months](https://aws.amazon.com/lightsail/pricing/?trk=7cac8a80-652f-40a3-9cf6-634bd78a89a2&sc_channel=el). So check it out!

{{< signature "yk, il" >}}
