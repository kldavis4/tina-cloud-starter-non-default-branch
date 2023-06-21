---
title: 'Moving From Vue 1 To Vue 2 To Vue 3: A Case Study Of Migrating A Headless CMS System'
slug: vue-case-study-migrating-headless-cms-system
author: lisi-linhart
image: >-
  https://files.smashing.media/articles/vue-case-study-migrating-headless-cms-system/meta-vue-case-study-migrating-headless-cms-system.jpg
date: 2023-03-02T09:00:00.000Z
summary: >-
  While migrating large front-end systems is usually a daunting task, it can be helpful to understand the reasons and strategies behind it. In this article, Elisabeth Wieser-Linhart explores its potential benefits and drawbacks and shares what considerations and steps were involved in the process of migrating the front-end interface of Storyblok’s headless content management system.
description: >-
  In this article, Elisabeth Wieser-Linhart explores its potential benefits and drawbacks and shares what considerations and steps were involved in the process of migrating the front-end interface of Storyblok’s headless content management system.
categories:
  - Vue
  - Headless
  - CMS
  - Tools
  - Case Studies
disable_ads: true
disable_panels: true
disable_newsletterbox: true
sponsor:
  title: Storyblok
  link: https://www.storyblok.com/?utm_source=smashmagazine&utm_medium=article&utm_campaign=vue-case-study-migrating-headless-cms-system
  image: https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/50cb5f98-1b75-4f2a-9e13-b5a2fbe1a71d/storyblok-logo.svg
  description: >-
    This article has been kindly supported by our dear friends at <a href="https://www.storyblok.com/?utm_source=smashmagazine&utm_medium=article&utm_campaign=vue-case-study-migrating-headless-cms-system">Storyblok</a>, a friendly headless CMS with a visual editor, nested components and customizable content blocks for websites and apps. <em>Thank you!</em>
---

One of the greatest challenges in software development is not in creating new functionality but in maintaining and upgrading existing systems. With growing dependencies and complexity, it can be a tedious task to continuously keep everything updated. This becomes even more challenging when upgrading a base technology that the whole system runs on. 

In this article, we will discuss how Storyblok solved the challenges of migrating the front-end interface of our headless content management system from Vue 1 to Vue 2 to Vue 3 within six years of growing the startup.

While migrating larger front-end systems can be a daunting task, it can be helpful to understand the reasons and strategies behind it. We’ll delve into the considerations and steps involved in such a migration and explore the potential benefits and drawbacks. With a clear understanding of the process, we can approach the migration with more confidence and ensure a smooth transition for our users and stakeholders.

## The Vue Ecosystem & Storyblok’s Early Days 

The Vue.js framework’s first large pre-beta release happened in late 2016, and Storyblok began work on a full prototype built on top of Vue in late 2015. At the time, Vue was still a relatively new framework, and other more established options like React were available. Despite this, Storyblok decided to take a chance on Vue and built their own prototype on top of it. This turned out to be a good decision, as the prototype worked well, and up to today, Vue is kept as the underlying framework for the front-end interface. 

Over the years, Storyblok has played a key role in the growth and development of Vue, participating in forums, conferences, and meetups, sponsoring certain projects, as well as contributing to the Vue ecosystem through open-source projects and other initiatives. As Storyblok grew together with the Vue community over the years, Vue started upgrading its framework, and Storyblok began growing out of its prototype to become a fully-fledged product. This is where our migration story starts. 

## Ground-up Migration vs. Soft Migration 

There were two main points in time when Storyblok was facing large migration challenges. The first one was when the upgrade from Vue 1 to Vue 2 happened. This went hand in hand with the update from Storyblok Version 1 to Storyblok Version 2. The decision was to completely rebuild the system from scratch. This is what we’ll call **Ground-up migration**. The second large migration happened when going from Vue 2 to Vue 3, where the front-end interface did not change. The existing codebase was updated in the background without visual changes for the user, and this is what we’ll call **Soft migration**.

Ground-up migration allows for **greater flexibility and control over the design and architecture** of the new system, but it can be a time-consuming and resource-intensive process. For Storyblok, it allowed the development of an [open-source Blok Ink design system](https://blok.ink/) as the core of the new system. This design system could then simultaneously be used by our customers to build their own extensions. 

Soft migration, on the other hand, can be **quicker and more cost-effective**, but it’s strongly limited and influenced by the current design and architecture of the existing system. Upgrading large codebases and all their dependencies can take months to achieve, and the time for this can be hard to find in a growing business. When thinking about customers, soft migration tends to be easier because the user doesn’t have to relearn a whole new interface, and no large marketing and communication resources need to be allocated towards this kind of migration.  

How were these migration decisions made from a business perspective? After Storyblok was launched as a product in 2017 with Vue 1, it was continuously improved and extended with new features. In 2019, the team received its first seed investment, which allowed them to hire more developers to work on Storyblok. In 2020, work began on Storyblok V2 with Vue 2, with around five developers starting on the project for the first time. Instead of updating the old codebase from Vue 1 to Vue 2, the team decided to start with a completely new codebase. This gave the new team two main benefits:

1. The developers were fully involved in creating the architecture of the new system;
2. They learned how the system worked by rebuilding it. 

In the core, the decision to make a ground-up migration was correct because the flexibility of that migration allowed the team to build a *better, newer, and more stable* version of the prototype while also understanding how it works. The main drawbacks of the ground-up migration were the cost of time and resources and getting the buy-in from the customers to switch from the old to the new version. 

As Storyblok continued to evolve and improve, the codebase needed to be upgraded from Vue 2 to Vue 3. Migrating to the new version involved updating large amounts of code and ensuring that everything continued to work as expected. In this migration, we had to invest a lot of resources in retesting the interface, as well as allocating time for the developers to learn and understand the changes in Vue 3. This can be especially challenging when working with a large team, as there may be different codebases and business needs to consider. 

Ultimately, the decision between these two approaches will depend on the specific needs and circumstances of the migration, including the following:

- Resources and expertise available,
- Complexity and size of the system,
- Desired level of control and flexibility over the design and architecture of the new system.

It’s important to have a *clear* plan in place to guide the migration process and ensure a smooth transition, so in the next chapter, we will look into what that plan looked like for us. 

## Strategies For Large Migrations

These five factors are essential to consider when planning a migration:

<table class="tablesaw break-out">
	<tbody>
		<tr>
			<td><strong>Time</strong></td>
			<td>Creating a timeline for the migration</td>
		</tr>
		<tr>
			<td><strong>Functionality</strong></td>
			<td>Identify and prioritize critical parts of the system to migrate</td>
		</tr>
		<tr>
			<td><strong>Resources</strong></td>
			<td>Use automation and tools to support the migration</td>
		</tr>
    <tr>
			<td><strong>Acceptance</strong></td>
			<td>Engage and communicate with users</td>
		</tr>
    <tr>
			<td><strong>Risk</strong></td>
			<td>Monitor and evaluate the migration process</td>
		</tr>
	</tbody>
</table>

### Creating A Timeline

One of the main challenges of migration is getting the buy-in from the organization, clients, and teams. Since migrations aren’t adding any new functionality, it can be hard to convince a team and the product owners of the importance of migration. However, 

{{% pull-quote %}}
In the long term, migrations are necessary, and the longer you put them off, the harder they will become.
{{% /pull-quote %}}

Secondly, migrations tend to take more than a few weeks, so it’s a harder and more tedious process that has to be planned with all the developers and stakeholders. Here is what our timeline looked like:

#### Going from Vue 1 to Vue 2

This process took us around two years from start to finish:

- Before Mid&ndash;2020: Develop new features in the old version.
- 2020 June: Identify and develop ‘core’ components in a new open-source design system.
- 2020 November: Create a new Vue 2 project.
- 2020 Nov &mdash; 2021 August: Redevelop all parts of the old app in the new app with the new design system.
- 2021 August: Beta Release of parts of the new application (e.g., our Visual Editor).
- 2021 August &mdash; 2022 August: Add all the missing functionality from the old app, add new features, and improve overall UX through customer feedback.
- 2022 August: Official release of the new app.
- During that time: onboard 20+ developers, designers, QAs, and product owners.

#### Going from Vue 2 to Vue 3

This process took us around eight months:

- 2022 July &mdash; 2022 November: Start migrating the Design System to Vue 3.
- 2022 November &mdash; 2023 January: remove all the ‘old’ breaking functionality and update or replace old dependencies that depend on Vue 2.
- 2022 December: Several meetings to explain what changed in Vue 3 with developers and stakeholders and how the transition will happen.
- 2023 January: Introduce the Vue 3 codebase, switch developers to the new codebase, and thoroughly test and start developing in Vue 3.
- 2023 February: Launch the Vue 3 version into production. 

To create a timeline, you need to identify all the parts of the migration first. This can be done in an excel sheet or a planning tool like Jira. Here is an example of a simple sheet that could be used for creating a rough timeline. It can be useful to split different areas to separate sheets to divide them into the teams they belong to. 

{{< rimg href="https://files.smashing.media/articles/vue-case-study-migrating-headless-cms-system/1-migration-timeline-excel-sheet.png" src="https://files.smashing.media/articles/vue-case-study-migrating-headless-cms-system/1-migration-timeline-excel-sheet.png" width="800" height="370" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/vue-case-study-migrating-headless-cms-system/1-migration-timeline-excel-sheet.png'>Large preview</a>)" alt="An excel sheet with the migration timeline" >}}

### Identifying And Prioritizing Functionality to Migrate

In order to manage the cost and resources required for the migration, it is essential to identify and prioritize the **critical features and functionality of the system** that need to be migrated. For us, it meant starting bit by bit with more important functionality. When we built the new version of Storyblok, we started with our most important core feature, the “Visual Editor,” and built an entirely new version of it using our Design System. In any migration, you should ask yourself these questions to find out what the priorities are:

- Is the goal to create a completely new version of something?
- What parts does the system have? Can some of them be migrated separately?
- Which parts of the system are most important to the customer?
- Who knows the system well and can help with the migration? 
- Does every developer need to work on the migration, or can a few ‘experts’ be selected to focus on this task? 
- Can I estimate how long the migration will take? If not, can I break down the parts of the system more to find out how long smaller parts of the system can be migrated?

If you have multiple sub-parts that can be migrated separately, it’s easier to split them to different people to work on the migration. Another big decision is *who* is working on the migration. For our Vue 1 to Vue 2 migration, all our developers worked on creating the new functionality, but on the Vue 2 to Vue 3, it was one expert (the person who is writing this article) who did most of the migration and then it was handed over to the teams to finish and retest the whole application to see if everything was still working as it should. 

At the same time, I organized some training for the developers to dive deeper into Vue 3 and the breaking changes in the system. 

<blockquote>The core of the migration strategy always depends on the knowledge of the system as well as the importance of the features to be migrated.</blockquote>

More important features will be migrated and worked on first, and less important things can be kept to be improved in the end. 

### Use Automation And Tools to Support The Migration

Since a migration process is always very time-consuming, it pays off to invest in some automation of tedious tasks to find out all the problems of the migration. For our migration from Vue 2 to Vue 3, [the migration build](https://v3-migration.vuejs.org/migration-build.html) and its linting were very helpful in finding all the potential problem areas in the app that needed to be changed. We also worked with hand-written scripts that iterate through all Vue files in the project (we have over 600 of them) to automatically add all missing **[emit notations](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)**, replace event names, that updated in Vue 3 and update common logic changes in the unit tests, like adding the **[global notation](https://test-utils.vuejs.org/migration/#mocks-and-stubs-are-now-in-global)**. 

These scripts were a large timesaver since we didn’t have to touch hundreds of files by hand, so investing time in writing such scripts can really pay off. In the core, utilizing regex to find and replace large logic chunks can help, but for the last final stretch, you will still spend hours fixing some things manually. 

In the final part, all the unit and end-to-end tests we already had, helped to find some of the potential problems in the new version of our app. For unit testing, we used Jest with the built-in [Test Utils](https://test-utils.vuejs.org/) as well as the [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro), for the e2e tests, we’re using [Cypress](https://www.cypress.io/) with different plugins. 

### Engage And Communicate With Users

If you create a new version of something, it’s essential to make sure that the experience is not getting worse for the customer. This can involve providing training and support to help users understand and use the new version, as well as collecting feedback and suggestions from users to help improve the new system. For us, this was a very important learning during the ground-up migration from Vue 1 to Vue 2 because we continuously collected feedback from the customer while rebuilding the app at the same time. This helped us to ensure that what we were building was what the customers wanted. 

Another way was to have the beta version accessible way ahead of the new version being finished. In the beginning, we only made the Partner Portal available, then the Visual Editor, then the Content Editing, and lastly, the missing parts of the app. By gradually introducing the new parts, we could collect feedback during the development time and adjust things where the customer experience was not perfect yet. 

In any scenario, it will be important to ask yourself these questions in a ground-up migration:

- How can we collect feedback from our customers early and often to ensure what we’re building is working?
- How can we communicate with the existing customers to make them aware of using the new version?
- What are the communication channels for the update? Can we leverage the update with the marketing team to make users more excited about it? 
- Who do we have internally that handles communication, and who are the stakeholders who should be updated regularly on the changes?

For us, this meant building ‘feedback buttons’ into the interface to collect feedback from the users starting to use the new version. It pointed to a form where the users could rate specific parts but also give open feedback. This feedback was then handed back to the design team to evaluate and forward if it was valid feedback. Further, we added channels in our Discord to hear directly from developers using the system and introduced ‘tour’ functionalities that showed users where all the buttons and features are located and what they do. Finally, we added buttons to the old app to seamlessly switch between the old and new versions. We did various campaigns and videos on social media to hype our community about using the new version. 

In all cases, **it’s crucial to find out who the core stakeholders and communicators of the migration are**. You can find that out with a simple impact/influence matrix. This matrix documents who is impacted by the migration and who should have how much influence over the migration. This can indicate who you should be in close contact with and who might only need to be communicated with occasionally. 

{{< rimg href="https://files.smashing.media/articles/vue-case-study-migrating-headless-cms-system/3-communication-stakeholders.png" src="https://files.smashing.media/articles/vue-case-study-migrating-headless-cms-system/3-communication-stakeholders.png" width="800" height="578" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/vue-case-study-migrating-headless-cms-system/3-communication-stakeholders.png'>Large preview</a>)" alt="Matrix with communication stakeholders" >}}

### Monitor And Evaluate The Migration Process

Since a migration process will always take a few months or even years to accomplish, it’s essential to monitor the process and make sure that after a few months, it’s still going in the right direction. 

Here are some questions that can help you figure out if you’re on the right track:

- Have all the areas and functionalities that need to be migrated been defined? How are we tracking the process of each area?
- Are all stakeholders, including users and other teams, being effectively communicated with and their concerns addressed?
- Are there unexpected issues that have arisen during the migration that require you to adjust the budget and time frame of the migration?
- Is the new version being properly tested and validated before being put into production?
- Are the final results of the migration meeting the expectations of the users and stakeholders?

During the different migration phases, we hit several roadblocks. One of them was the **customer’s expectations** of having the exact same functionality from the old app in the new app. Initially, we wanted to change some of the UX and deprecate some features that weren’t satisfying to us. But over time, we noticed that it was really important to customers to be close to what they already knew from the older version, so over time, we moved many parts to be closer to how the customer expected it to be from before. 

The second big roadblock in the migration from Vue 2 to Vue 3 was the **migration of all our testing environments**. Initially, we didn’t expect to have to put so much effort into updating the unit tests, but updating them was, at times, more time-consuming than the app itself. The testing in the “soft migration” had to be very extensive, and it took us more than three weeks to find and fix all the issues. During this time, we depended heavily on the skills of our QA engineers to help us figure out anything that might not work anymore. 

{{< rimg href="https://files.smashing.media/articles/vue-case-study-migrating-headless-cms-system/2-migration-testing-excel-sheet.png" src="https://files.smashing.media/articles/vue-case-study-migrating-headless-cms-system/2-migration-testing-excel-sheet.png" width="800" height="370" sizes="100vw" caption="(<a href='https://files.smashing.media/articles/vue-case-study-migrating-headless-cms-system/2-migration-testing-excel-sheet.png'>Large preview</a>)" alt="An excel sheet with the migration testing" >}}

The final step in the migration from Vue 2 to Vue 3 was to put the new version of the app into production. Since we had two versions of our app, one in Vue 2 and one in Vue 3, which looked essentially the same, we decided to do a blue/green deployment. This means that we transferred a subset of the user traffic to the new app while the majority of the users were still using the stable old app. We then tested this in production for a week with only a small subset of our users. 

By slowly introducing the new version to just a percentage of the users, we could find more potential issues without disrupting all of our users. The essential part here was to have direct communication with our Sales and Support teams, who are in direct contact with important clients.

## Lessons Learnt

### Migration to Vue 2

The core lesson when we completely rebuilt Storyblok in Vue 2 was that migrating a large system can be a significant challenge for the development team that consists of new developers who are not familiar with the system yet. By handing the power over to the developers, they could be directly involved in forming the architecture, quality, and direction of the product. In any migration or significant change, the onboarding and training of developers will be an essential part of making the migration successful. 

Another big lesson was the involvement of the existing users to improve the quality of the newer version we were building. By slowly introducing the new design and features in different areas of the system, the customers had the opportunity to get used to the new version gradually. With this gradual change, they could give feedback and report any issues or problems they encountered. 

Overall, customers have a number of expectations when it comes to software, including:

- Reliability and stability,
- Ease of use,
- Regular updates and improvements,
- Support and assistance,
- Security and privacy.

Migrating a large system can impact these expectations, and it's important to carefully consider the potential impacts on customers and take steps to ensure a smooth transition for them.

### Migration to Vue 3

As we got more teams and more customers, it kept getting more critical to keep our production version of the app as stable as possible, so testing was an important part of making sure the quality was monitored and bugs were eliminated. All that time we had invested in unit and e2e testing in the Vue 2 version helped us to find problems and bugs during the migration process to Vue 3. 

We found that it was essential to test the migrated system extensively to ensure that it was functioning correctly and meeting all of the required specifications. By carefully planning and executing our testing process, we were able to identify and fix the majority of the issues before the migrated system was released to production. 

During the Vue 3 migration, we also saw the advantages of having a ‘separate’ part of the system, our design system, that could be migrated first. This allowed us to learn and study the migration guide there first and then move to the more complex migration of the app itself. 

Lastly, a big thing we learned was that **communication is essential**. We started creating internal communication channels on Slack to keep marketing and other teams up to date on all the functionality changes and new features. Certain people could then weigh in on the ways new features were built. 

## Conclusion

Migrating Storyblok from Vue 1 to Vue 2 to Vue 3 was a significant challenge for the whole organization. A well-formed migration plan should outline the steps to be taken, the areas and functionalities that need to be migrated and in what way (rebuild or create a new version), the people to be involved, and the expected timeline. 

For us, some key takeaways were the importance of involving the development team in forming the architecture and direction of the product, as well as **onboarding and training** them properly. It was also essential to communicate effectively with stakeholders, including users and other teams, to address their concerns and ensure their expectations were met. 

Testing plays a crucial role in ensuring the migrated system functions correctly, and the better your QA engineers, the more smoothly the migration will go. Gradually introducing the new version to a subset of users before a full release can help identify any potential issues without disrupting all users. Another approach is gradually introducing new parts of the system one by one. We made use of both of them. 

If you’re planning a large system migration, starting with a **well-defined plan** is important. Make sure to consider budget and time frame, build in time for testing and validation, continuously monitor the progress of the migration and adjust the plan as necessary. 

It’s also important to involve existing users in the migration process to gather feedback and identify any potential issues. Make sure your migration is *actually* improving the experience for the users or developers. **Internal communication** is key in this process, so ensure that all stakeholders are effectively communicated with throughout the migration to make sure everyone is on board. Consider gradually migrating different parts of the system to help manage complexity or introducing a new system only to a subset of users first. 

And lastly, work with your team. Migrating really takes a lot of hands and time, so the better your teams can work together, the smoother the transition will go. 

{{< signature "yk, il" >}}
