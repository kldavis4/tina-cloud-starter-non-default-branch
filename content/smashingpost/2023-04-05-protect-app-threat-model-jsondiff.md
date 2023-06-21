---
title: 'How To Protect Your App With A Threat Model Based On JSONDiff'
slug: protect-app-threat-model-jsondiff
author: zack-grossbart-terry-yao
image: >-
  https://files.smashing.media/articles/protect-app-threat-model-jsondiff/protect-app-threat-model-jsondiff.jpg
date: 2023-04-05T13:00:00.000Z
summary: >-
  If you are a developer who wants to concentrate on delivering a killer application rather than worrying about countless security issues, threat model documents can be a tool to help you do that. With small architectural changes, you can make these threats manageable and prevent them in the future. Let’s explore how to build your own threat model using JSONDiff as a sample.
description: >-
  If you are a developer who wants to concentrate on delivering a killer application rather than worrying about countless security issues, threat model documents can help you do that. With small architectural changes, we can make these threats manageable and prevent them in the future.
categories:
  - Security
  - Tools
  - Apps
---

Security changes constantly. There’s a never-ending barrage of new threats and things to worry about, and you can’t keep up with it all. It feels like every new feature creates expanding opportunities for hackers and bad guys.

Threat model documents give you a framework to think about the security of your application and make threats manageable. Building a threat model shows you *where* to look for threats, *what* to do about them, and *how* to prevent them in the future. It provides a tool to stay safe so you can focus on delivering a killer application, knowing that your security is taken care of.

This article will show you how to create a threat model document. We’ll review [JSONDiff.com](https://www.jsondiff.com/) and build a threat model for it, and we’ll show how small architectural changes can have a gigantic impact on the security of your application.

## Who Do You Trust?

Every time you use a computer, you trust many people. When you make an application, you’re asking other people to trust you, but you’re also asking them to trust everything you depend on.

Your threat model makes it clear who you’re trusting, what you’re trusting them with, and *why* you should trust them.

## What Is A Threat Model?

A threat model is a document where you write down three things:

1. The architecture of your application,
2. The potential threats to your application,
3. The steps you’re taking to mitigate those threats.

It’s really that simple. You don’t need complex tools or a degree in security engineering. All you need is an understanding of your application and a framework for where to look for threats.

This article will show how to build your own threat model using JSONDiff as a sample. You can also take a look at the [complete threat model](https://github.com/zgrossbart/jdd/tree/master/threat_model) for JSONDiff to see the finished document.

## Threat Models Start With Architecture

All threat models start with a deep understanding of your architecture. You need to understand the full stack of your application and everything it depends on. Documenting your architecture is always a good idea; you can start anytime. You’re architecting from the moment you start picking the tools you’ll use.

Here are some basic questions to answer for your architecture:

- Where does my application run?
- Where is my application hosted?
- What dependencies does my application have?
- Who has access to my application?
- Where does my application store data?
- Where does my application send data?
- How does my application manage users and credentials?

Give a brief overview of your application and then document how it works. Start by drawing a picture of your application. Keep it simple. Show the major pieces that make your application run and how they interact.

Let’s start by looking at the overall architecture of JSONDiff.

JSONDiff is a simple application that runs in a browser. The source code is stored on [GitHub.com](https://github.com/zgrossbart/jdd), and it’s open source. It can run in two modes:

1. The public version is at [JSONDiff.com](https://www.jsondiff.com/).
2. A private version users can run in a Docker container.

We’ll draw the architecture in relation to what runs in the client and what runs on the server. For this drawing, we won’t worry about where the server is running and will just focus on the public version.

Drawing your architecture can be one of the trickiest steps because you’re starting with a blank page and have to choose a representation that makes sense for your application. Sometimes you’ll want to talk about larger pieces; other times, you’ll want to focus on smaller chunks and user actions. Ask yourself what someone would need to know to understand your security, and write that.

JSONDiff is a single-page web application using jQuery. In this case, it makes sense to focus on the pieces that run on the server, the pieces that run in the browser, and how they work.

The first step to any architecture is a brief description of what the application is. You need to set the stage and let anyone reading the architecture know some basic information:

- What does the application do?
- Who’s using it?
- Why are they using it?

JSONDiff is a browser-based application that compares JSON data. It takes two JSON documents, compares them semantically, and shows the differences. JSONDiff is free for anyone and anywhere. It’s used by developers to find differences in their JSON documents that are difficult to find with a standard text-editor diff tool or in GitHub.

{{< rimg href="https://files.smashing.media/articles/protect-app-threat-model-jsondiff/1-jsondiff-comparison-two-json-documents.png" src="https://files.smashing.media/articles/protect-app-threat-model-jsondiff/1-jsondiff-comparison-two-json-documents.png" width="800" height="199" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/protect-app-threat-model-jsondiff/1-jsondiff-comparison-two-json-documents.png'>Large preview</a>)" alt="JSONDiff application where two JSON documents are compared, and differences are highlighted" >}}

The architecture diagram looks like this:

{{< rimg href="https://files.smashing.media/articles/protect-app-threat-model-jsondiff/2-jsondiff-architecture-diagram.jpg" src="https://files.smashing.media/articles/protect-app-threat-model-jsondiff/2-jsondiff-architecture-diagram.jpg" width="800" height="484" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/protect-app-threat-model-jsondiff/2-jsondiff-architecture-diagram.jpg'>Large preview</a>)" alt="JSONDiff architecture diagram" >}}

The architecture is simple: Nginx hosts the site, and most of the code is in the [`jdd.js` file](https://github.com/zgrossbart/jdd/blob/main/jdd.js). But it brings up many good questions:

- How does JSONDiff load JSON data?
- Does it ever send the data it loads anywhere?
- Does it store the data?
- Where do the ads come from?

Write down all of the questions your architecture diagram brings up, and answer them in your threat model. Having those questions written down gives you a place to start understanding the threats. 

Let’s focus on the first question and show how to dig into it with a security mindset.

There are two ways to load the JSON data you want to compare. You can load it in the browser by copying and pasting it or by choosing a file. That interaction is very well understood, and there isn’t much of a threat there. You can also load the JSON data by specifying an URL, which opens a big can of worms.

Specifying a URL to load the data is a very useful feature. It makes comparing large documents easier, and you can send someone else a URL with the JSON documents already loaded. It also brings up a lot of issues.

The [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) prevents JavaScript applications running in browsers from loading random URLs. There are very good reasons that this policy exists. JSONDiff is subverting the policy, and that should make your security spidey-sense tingle.

JSONDiff uses a proxy to enable this feature. The `proxy.php` file is a simple proxy that will load JSON data from anywhere.

Loading random data sounds like a recipe for a **cross-site request forgery (CSRF)** attack. That’s a risk.

All applications have risks; we manage those risks with mitigations. In this case, the proxy risk has two mitigations:

1. The proxy can only load data that are already publicly available on the Internet.
2. The file that’s loaded by the proxy is never executed.

Our threat model will include this risk and show how we mitigated it. In fact, each threat needs to show how much risk there is and what we did to mitigate each risk.

Let’s take a look at where threats appear in your application.

{{% feature-panel %}}

## Threats

There are many categories of threats through the development and deployment lifecycles. It’s helpful to split threats into different categories and document those potential threats for our application, *while* we’re starting to plan, design, implement, deploy, and test that software or service.

For every threat we identify, we need to describe two pieces:

- **The threat**  
What is the specific threat we’re worried about here? How could it be exploited in our application? How serious could that exploit be?
- **Mitigation**  
How are we going to mitigate that threat?

### Code Threats

Many threats start with the code you write. Here are a few categories of coding issues to think about:

#### Weak Cryptography

<blockquote>“Does your application use SSL or TLS for secure network connections?”</blockquote>

If you are, make sure that you’re using the latest recommended versions.

<blockquote>“Does your application encrypt data or passwords?”</blockquote>

Make sure you’re using the latest hashing algorithms and not the older ones like MD5 or SHA-1.

<blockquote>“Did you implement your own encryption algorithm?”</blockquote>

Don’t. Just don’t. There’s almost never a good reason to implement your own encryption.

#### SQL Injection

SQL injection attacks happen when a user enters values in an application that are sent directly to a database without being sanitized (like [Bobby Tables](https://xkcd.com/327/)). This can inject malicious code that alters the original SQL query to retrieve, change, or delete data inside the SQL database.

Avoid injection attacks by not trusting any inputs coming from users. Your threat model should address any place you’re taking user input and saving it anywhere. 

JSONDiff never saves any of the JSON data it compares. If we added that feature, we’d be open to many types of injection attacks. It doesn’t matter if we saved the JSON to a SQL database like PostgreSQL, a NoSQL database like MongoDB, or a file system. We’d mitigate that threat by making sure to sanitize our inputs and never trusting data from users.

#### Cross-Site Scripting (XSS)

Malicious scripts can be injected into web applications, making browsers run those scripts in a trusted context; that allows them to steal user tokens, passwords, cookies, and session data. This [injection attack](https://owasp.org/Top10/A03_2021-Injection/) happens when a user saves or references code from somewhere else and gets that code to run in the application security context.

JSONDiff doesn’t let users save anything, but you can build URLs to preload the documents to compare like this:

{{< rimg href="https://jsondiff.com/?left=https://jsondiff.com/one.json&right=https://jsondiff.com/two.json" src="https://files.smashing.media/articles/protect-app-threat-model-jsondiff/3-semantic-json-compare-tool.png" width="800" height="397" sizes="100vw" caption="<a href='https://jsondiff.com/?left=https://jsondiff.com/one.json&right=https://jsondiff.com/two.json'>The semantic JSON compare tool</a>. (<a href='https://files.smashing.media/articles/protect-app-threat-model-jsondiff/3-semantic-json-compare-tool.png'>Large preview</a>)" alt="The semantic JSON compare tool" >}}

This is a clear threat to address in the threat model. If someone referenced malicious code in an URL like this and sent it to someone, they could run it without realizing the risk. JSONDiff mitigates this threat by using a custom parser for the inputs and making sure that none of them get executed. We can test that with ‘evil’ JSON and JavaScript files like this:

{{< rimg href="https://jsondiff.com/?left=https://jsondiff.com/evil.js&right=https://jsondiff.com/evil.json" src="https://files.smashing.media/articles/protect-app-threat-model-jsondiff/4-jsondiff-evil-json-javascript-files.png" width="800" height="401" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/protect-app-threat-model-jsondiff/4-jsondiff-evil-json-javascript-files.png'>Large preview</a>)" alt="JSONDiff with ‘evil’ JSON and JavaScript files" >}}

Consider all of the inputs to your application and how you’re making sure they can’t cause problems. 

#### Cross-Site Request Forgery (CSRF)

[CSRF attacks](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) wait for you to log in and then use your credentials to steal data and make changes. Session-based unique CSRF tokens can be used to prevent such an attack. Examine everywhere your application uses sessions. What are you doing to make sure sessions can’t be shared or stolen?

JSONDiff doesn’t have sessions, so there’s nothing to steal. Adding the ability to manage sessions and login would create a large set of new threats. The threat model would need to address protecting the session token, making sure that sessions can’t be reused, and ensuring that sessions can’t be stolen, among other things.

#### Logging Sensitive Information

Your logs aren’t secure, so don’t put any sensitive information there. Logging passwords or other sensitive customer information is the most common security issue in building an application: developers log some activity or error, and that contains the token or password information or personal information about the user. 

What are you doing to make sure that developers don’t log sensitive information? Make sure your code review includes looking at logging output. There are also password scanners you can run over your log files to find likely passwords.

### Code Review And Separation Of Duties

Trust, but verify, as some people on your team will be malicious. Everyone on your team makes mistakes &mdash; trust your team, but verify.

The best way to verify this is to separate the roles within your team. Allowing one person to change code, test it, and push it to production without any oversight presents a risk. Separation of duties splits the stages of your pipeline to production into multiple stages. There are four clear stages in every application that you should separate as much as possible:

1. Writing the code,
2. Reviewing the changes,
3. Testing the functionality,
4. Deploying the application.

For small projects, these roles may overlap or be part of an automated process. Even when the pipeline is fully automatic, you can still separate the functions. For example, making sure that the owner of a given area didn’t write all the tests for that area ensures that someone else is verifying the functionality. In well-run projects, these roles can switch so everyone gets a turn to write code as well as review it or write tests as well as do deployments.

JSONDiff is an open-source application that makes review much easier. For closed-source applications, you can use the Pull Request mechanism in Git to ensure all code is reviewed for the issues mentioned above. Spend time with your team and teach them what they should look for during code review.

Static code analysis tools also help detect security threats and other issues. These tools include linters and code checkers like JSHint, along with more comprehensive security scanners. These tools look at your source code and find problems based on the specific programming language you’re using. OWASP maintains a [list of static analysis tools](https://owasp.org/www-community/Source_Code_Analysis_Tools).

Many security scanners use **common vulnerabilities and exposures (CVE) databases** to know what issues to look for. Integrating these tools into your build process ensures that all your changes will be scanned.

The code for JSONDiff was scanned by JSHint, and all issues were fixed, or so I thought. It turned out that I scanned the JavaScript, but I missed the server side. My co-author Terry ran the SonarQube lint scanner and found an error in the PHP proxy:

{{< rimg href="https://files.smashing.media/articles/protect-app-threat-model-jsondiff/5-sonarqube-lint-scanner-error-php-proxy.png" src="https://files.smashing.media/articles/protect-app-threat-model-jsondiff/5-sonarqube-lint-scanner-error-php-proxy.png" width="800" height="144" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/protect-app-threat-model-jsondiff/5-sonarqube-lint-scanner-error-php-proxy.png'>Large preview</a>)" alt="SonarQube lint scanner with a highlighted error in the PHP proxy" >}}

This [small fix](https://github.com/zgrossbart/jdd/commit/b4938411c887d04932b1fd2859903817e94a35a6) is a great example of how a second pair of eyes can help you find problems.

### Third-Party Threats

Your application has dependencies and probably a lot of them. They may be from other groups or open-source projects. The list of all these dependencies and the versions they use makes up a **Software Bill of Materials (SBOM)**.

When the teams who maintain the projects you depend on find security issues, they report them in a CVE database. Other security professionals report CVEs as well. Third-party scanners look at those databases and make sure you aren’t using dependencies with known security issues.

**Static application security testing (SAST) tools** like Snyk can also scan third-party threats and report vulnerabilities in the libraries you’re using. Those vulnerabilities are then scored by severity, so you know how seriously to take each threat.

Tools like NPM have built-in vulnerability checking for dependencies. Integrating vulnerability checks in your build process mitigates that threat.

### Data Security Threats

Protecting your application means protecting the application data. Always make sure your data is transmitted and stored with confidentiality, integrity, and availability.

Here are some of the risks to data security:

- Accidental data loss or destruction,
- Malicious access to confidential data like financial data,
- Unauthorized access from various partners or employees,
- Natural disasters or uncontrollable hazards like earthquakes, floods, fire, or war.

To mitigate those risks, we can implement these actions:

- **Protect the data with strong passwords**, and define the policy for password expiration.
- **Categorize the data with different classes and usage**, and define the different roles that can access different levels of data.
- Always **do an authorization check** to make sure only a permitted user with the corresponding role can access that level of data.
- **Deploy various security tools** like firewalls and antivirus software.
- **Encrypt your data at rest** (when it’s stored somewhere).
- **Encrypt your data in transit** (when it’s moving between two points).

JSONDiff doesn’t store any data. Let’s think about the in-transit threat:

- **The threat**  
JSONDiff loads data from any URL to compare. How are we protecting that data?
- **Mitigation**  
JSON uses SSL encryption when loading data if it’s available and always uses SSL to encrypt data sent to the browser.

### Runtime Threats

After the application is deployed and running, we need to consider the runtime threats.

The best way to find runtime threats is a penetration test from a team of experts. Pen-test teams pretend they’re hackers and attack your application. They attack your external interfaces and look for SQL injection, cross-site scripting, denial of service (DDOS) attacks, privilege escalation attacks, and many more problems.

If you can afford an external pen-test team, then use one, but you can also do this yourself. Pen-test tools like the [OWASP ZAP proxy](https://www.zaproxy.org/) perform dynamic scanning on your application endpoints and report common threats.

### Threats To Stability

Availability attacks try to disrupt your application instead of hacking it. High availability and redundant designs mitigate the threat of these attacks.

There are several things we can consider to build up plans for those threats:

- **High-availability infrastructure**, including the network and server. If we deploy the application via the cloud, we can consider using multiple regions or zones and set up a load balancer.
- **Redundancy for the system and data.** This will improve stability and availability, but the cost will be high. You can balance stability and cost: Only make your most critical components redundant.
- **Monitoring of system and setup alerts** if the system might be running at capacity in various components. There could be a malicious activity that will destroy your infrastructure, and monitoring the health of your system availability will be critical.
- **Backup and restore plans.** If security threats take the system down, how can we quickly bring it back up? We need to build a plan for backing up and restoring.
- **Handling outages of dependent services.** We need to build up some fallback plans, design and implement circuit breakers, and keep dependent services from breaking the entire application.

### Building A Data Recovery Plan

What can disrupt your application or system? Think about human error, hardware failure, data center power outages, natural disasters, and cybersecurity attacks.

**Business continuity and disaster recovery (BCDR) design** will be critical to ensure that your organization, users or customers, and employees can do business with minimal disruption.

For an organization like a company, you’ll need to create a business continuity plan. That means first assessing your people, IT infrastructure, and application. Identify people’s roles and responsibilities for your business continuity plan and recovery solutions.

If you’re deploying your application in a cloud-based environment, you need to deploy it across multiple regions or multiple cloud providers. The critical part is the data storage for the system and application: All data should have point-in-time replication, allowing your application or service to be restored soon from a secondary data center or a different country or continent. 

Your **BCDR solution should be regularly tested** every year (or even more often), and your **plan should be frequently reviewed** and improved by the people in your organization.

{{% ad-panel-leaderboard %}}

## The Worst-Case Scenario

{{% pull-quote %}}
Threat models provide a framework to imagine the worst-case scenario, which helps you think outside the box and come up with novel threats.
{{% /pull-quote %}}

So what’s the worst-case scenario for JSONDiff? It probably involves the `proxy.php` script. We already know to focus on the proxy, and there have been some severe PHP exploits in the past. The [`proxy.php` file](https://github.com/zgrossbart/jdd/blob/main/proxy.php) is also the only part that runs on the server side. That makes it the weakest link.

If I was able to hack the proxy, I could change the way it works. Maybe I could fool it into returning different content. I can’t run malicious code with that content, but I could trick someone into thinking two JSON documents were the same when they weren’t; I might be able to do something malicious with that.

I could go even further and think about what would happen if someone hacked into the server and changed the contents of the code, but now I’m just back to credential management, which is already covered in the threat model.

This reminds us to keep up to date with PHP versions, so we get the latest security fixes.

Thinking of the worst-case scenario sends you in different directions and improves your threat model.

## We’re Just Scratching The Surface

We’re just scratching the surface of all the threats to think about when building a threat model. Mitre has an excellent [matrix of threats to think about](https://attack.mitre.org) when building your own threat model. OWASP also maintains a [Top 10 list of security risks](https://owasp.org/www-project-top-ten/) and a [Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) that everyone should be familiar with.

The most important takeaway is that you should **think about all the ways people interact with your application and all the ways your application interacts with other systems**. Any time you can simplify those interactions, you’re reducing your vulnerability to threats.

For more complex threat models, making a **threat diagram** is also useful. Tools like [draw.io](https://app.diagrams.net/) have specific shapes for threat modeling diagrams:

{{< rimg href="https://files.smashing.media/articles/protect-app-threat-model-jsondiff/6-drawio-shapes-threat-modeling-diagram.png" src="https://files.smashing.media/articles/protect-app-threat-model-jsondiff/6-drawio-shapes-threat-modeling-diagram.png" width="800" height="98" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/protect-app-threat-model-jsondiff/6-drawio-shapes-threat-modeling-diagram.png'>Large preview</a>)" alt="Screenshot from draw.io with specific shapes for threat modeling diagrams" >}}

## What If I Can’t Mitigate A Threat?

You can’t mitigate every threat. For JSONDiff, a threat I have no control over is Google AdSense, which adds dynamic content to JSONDiff.com. I don’t get to check that content first. I can’t verify every ad that Google might show. I also can’t force Google to go through a security review process for my site. In the end, I just have to trust Google.

In the rare cases when you have a threat you can’t mitigate or minimize, the best you can do is **settle for transparency**. Be as open and honest about that threat as possible. Document it. Let your users or customers know, so they can make their own choices about whether the risk is worth it.

## Build Your Threat Model Early

Threat models help the most when begun early in the process. Start putting your threat model together as soon as you pick technologies. Decisions about how you’ll manage users, where you’ll store data, and where your application runs all have a major impact on the threat model of your application.

{{% pull-quote %}}
Working on the threat model early, when it’s easier to make architectural changes, makes it easier to fend off threats.
{{% /pull-quote %}}

## Communicating Your Threat Model

The previous section showed you how to start creating your threat model. What should you do with it once you’re done?

There are a few potential audiences for your threat model:

- **Security reviewers**  
If you create an application for any security-conscious company, it will want to do a security review. Your threat model will be a requirement for that process. Having a threat model ahead of time will give you a giant head start. 
- **Auditors**  
Security auditors will always look for a threat model. They want to make sure you’ve thought through the threats to your application.
- **Yourself**  
Use your own threat model to manage your threats. Have the team keep it up to date while you’re adding new features. Making sure that team members update the threat model will force them to think of any potential threats they’re adding when they make changes.
- **Everyone**  
If your project allows it, then share your threat model with everyone. Show the people who trust your application the potential threats and how you’re handling them. Openness reassures them and helps them appreciate all the work you’ve done to make your application secure.

{{% ad-panel-leaderboard %}}

## Keep Improving Your Threat Model

We talked about the most important steps in constructing a threat model, but threats are a constantly moving target. We need to build up a management plan for security incidents, defining how to respond to any threats we learn about from internal or external sources.

Every incident you find should end up in your threat model. Document how you found it, how you fixed it, and what you did to make sure it never happens again. Every application has security issues; what matters is how well you handle them. This is a continuous process of improvement:

1. Build the architecture to understand what the application is for.
2. Identify the application threats.
3. Think about how to mitigate the identified vulnerabilities.
4. Validate the threat model with other experts in your area.
5. Review the threat model, and make updates every time you find a new threat.

## Threat Models Let Me Sleep At Night

I make threat models for myself. I want to sleep at night instead of staring at the ceiling and wondering what security holes I’ve missed. I want to focus on delighting my users without constantly worrying about security. Threat models give me a framework to do that.

I make threat models for my customers. I want them to know that I take their security seriously, and I’m thinking about keeping them secure. I want to show them what I’m doing and help them understand so they can judge for themselves. 

Threat models are flexible and grow or shrink as much as you need. They provide a tool for you to reassure your users about security and allow you to sleep at night. Now you know why you need one for your application, too.

{{< signature "yk, il" >}}
