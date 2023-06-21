---
title: 'Smashing Podcast Episode 55 With Tejas Kumar: Is Technology Making Us Redundant?'
slug: smashing-podcast-episode-55
author: drew-mclellan
image: >-
  https://files.smashing.media/articles/smashing-podcast-episode-55/smashing-podcast-episode-55.png
date: 2023-01-24T08:00:00.000Z
summary: >-
  In this episode, we ask whether technology is making us redundant; will we all soon be replaced with AI? Vitaly Friedman talks to Tejas Kumar to find out.
description: >-
  In this episode, we ask whether technology is making us redundant; will we all soon be replaced with AI? Vitaly Friedman talks to Tejas Kumar to find out.
categories:
  - Smashing Podcast
---

In this episode, we ask whether technology is making us redundant; will we all soon be replaced with AI? Vitaly Friedman talks to Tejas Kumar to find out.

<iframe src="https://share.transistor.fm/e/fe6f3835/dark" width="100%" height="180" frameborder="0" scrolling="no" seamless="true" style="width:100%; height:180px;"></iframe>

### Show Notes

- Tejas Kumar [on Twitter](https://twitter.com/TejasKumar_)
- [Tejas’s homepage](https://tej.as/)

#### Weekly Update

- [Closed Captions And Subtitles UX](https://www.smashingmagazine.com/2023/01/closed-captions-subtitles-ux/) *written by Vitaly Friedman*
- [Top Front-End Tools Of 2022](https://www.smashingmagazine.com/2023/01/top-frontend-tools-2022/) *written by Louis Lazaris*
- [Optimizing The Image Element LCP](https://www.smashingmagazine.com/2023/01/optimizing-image-element-lcp/) *written by Eloïse Martin*
- [Code Documentation, Streamlined](https://www.smashingmagazine.com/2023/01/swimm-code-documentation-streamlined/) *written by Atila Fassina*
- [A Guide To Designing For Introverts](https://www.smashingmagazine.com/2023/01/guide-designing-for-introverts/) *written by Pratik Joglekar*

### Transcript

<p><a href="https://twitter.com/TejasKumar_"><img style="float: right; padding: 1em;border-radius: 110px;max-width: 50%;height:auto" src="https://files.smashing.media/articles/smashing-podcast-episode-55/tejas-kumar-200x200-opt.jpg" width="200" height="200" alt="Photo of Tejas Kumar" /></a> <span class="smashing-tv-host">Vitaly Friedman:</span> He has been writing code since the age of eight and still continues to do so today. He’s a DevRel leader, YouTuber, advisor, mentor, influencer, and has very, very strong opinions about pretty much everything.
Previously, he’s worked with G2L, Vercel, Spotify etc picking up things along the way, sometimes as a developer and sometimes as a manager.

<span class="smashing-tv-host">Vitaly:</span> Now he lives in Berlin, Germany, but most of the time travels the world equipping and encouraging developers to do their best work, aiming to make the world a better place for quality software. Beyond that, he’s extremely kind, passionate, friendly, and smart. And not that a passes by that him sharing his opinions again on everything Tailwind, JavaScript and people on Twitter. 

<span class="smashing-tv-host">Vitaly:</span> Now we know he’s a great product engineer and a kind human being, but did you know that he can easily type faster than 100 words per minute when writing code without a single mistake, especially if it’s a life coding session in front of thousands of developers? My smashing friends, please welcome Tejas Kumar. Hello, Tejas. How are you doing today?

<span class="smashing-tv-speaker">Tejas:</span> What’s up? I’m doing good. I’m smashing. I’m smashing things as we speak. I’m also doing smashing.

<span class="smashing-tv-host">Vitaly:</span> Oh, well&mdash;

<span class="smashing-tv-speaker">Tejas:</span> Smashing enough.

<span class="smashing-tv-host">Vitaly:</span> You always look smashing. Always. I always feel smashing when I see you being smashing in some way or the other.

<span class="smashing-tv-speaker">Tejas:</span> Yes, that’s what my grandpa always used to say. Smash them with kindness.

<span class="smashing-tv-host">Vitaly:</span> Oh, really? Wow. This is just the perfect beginning of the interview. Now it’s so nice to have you here. I remember everything from our strange bus trips to our walks in somewhere between Croatia and Germany, and what not, it’s always so, I don’t know. It’s so much fun to be around because you always have, again, opinions about things.

<span class="smashing-tv-speaker">Tejas:</span> Yes.

<span class="smashing-tv-host">Vitaly:</span> You always express them with a very strong kindness. Why is that, Tejas? Where is it coming from?

<span class="smashing-tv-speaker">Tejas:</span> Yeah, it comes from a lot. So when I do talks and things at conferences, a lot of people tell me... they come to me after and they’re like, "Hey, that was so genuine. I felt like that was very genuine."
And it comes from that. I’m a strong believer in speaking truth in love or kindly, and I guess that’s where it comes from. I do have strong opinions about things, right, but I feel like they have to come under an umbrella of kindness and respect. Otherwise, nobody wants to listen to some angry person with strong opinions who’s not friendly.

<span class="smashing-tv-host">Vitaly:</span> Well, you don’t know. I mean, I’m very happy to hear maybe not angry people, but like whenever someone has a very strong opinion, I’m totally fine with that. Actually, there is Lex Friedman, who is a podcaster. He’s doing all these videos with people on YouTube like you do as well. We’ll talk about it in a moment. But he had just posted recently one thing. He applauded to all the people who are attentive enough to listen to other people’s opinions and their arguments and be willing to change their minds.

<span class="smashing-tv-speaker">Tejas:</span> Yeah.

<span class="smashing-tv-host">Vitaly:</span> So I think that if you have a very strong opinion about things, as long as you are willing and open minded to change your mind based on the arguments that come your way, right? I think this is fine for me. This is actually a very important skill to have.

<span class="smashing-tv-speaker">Tejas:</span> Yes. Yes. I think the underlying skill there is critical thinking and being open and receptive. 100%. I was just watching the Welcome to Chippendales. I don’t know if you’ve heard of this show, right?

<span class="smashing-tv-host">Vitaly:</span> Not yet, no.

<span class="smashing-tv-speaker">Tejas:</span> It’s a great show. I can recommend it. And in that show you watch the founder of Chippendales repeatedly screw up his company and go into bankruptcy. And the common thread in his mistakes is that he just has a lot of this entrenched, close minded pridefulness where he refuses to have his mind changed despite his strong opinions.
So I agree with you. I think that’s something I try. I work hard at and try to maintain, and so I appreciate that you called it out here on this conversation.

<span class="smashing-tv-host">Vitaly:</span> Yeah, sure. Well, the reason why I wanted to have you on the show as well, because you have all these incredible experiences and stories you can share, right? And you also are very public about things that are important to you and you’re not afraid of strong words as well by doing so. And so maybe just for everybody to be kind of following your story to know who you are and what you’re coming from and so on, maybe you could just share a little bit of insight about how did you end up in this front end madness? Where is it coming from?
Did you wake up one day when you were eight and thought, "This is it. I went to write HTML, CSS, JavaScript for living now for the rest of my life."

<span class="smashing-tv-speaker">Tejas:</span> When I was eight years old, react was actually a thing. I’m joking. It wasn't.

<span class="smashing-tv-host">Vitaly:</span> Oh, who knows? Who knows?

<span class="smashing-tv-speaker">Tejas:</span> Yeah. No, but yeah, no, I was born with a disease that was really limiting and there’s a lot of things I couldn’t do. I had a ton of physical limitations. I made a whole 48 minute YouTube video about it, which you can watch if you’re more just interested or we could talk about it here. I don’t really care. But with the limitations I had, I couldn’t go to school every day. I couldn’t carry a backpack. I couldn’t open doors. I couldn’t walk upstairs. I couldn’t do a lot of things. The only thing I could do was take my fingers and type on keyboards with them. And thankfully my family was relatively low income at the time. I grew up quite poor, but we had just enough privilege to where we had a computer and a keyboard. And since this was the only thing I could do in many ways I feel like coding found me. And I was drawn to, I have a YouTube video coming about this coming out about this on Thursday, I was drawn to the quick feedback loop of JavaScript where you just write a little bit of code in your browsers console and it executes. And I was like, whoa. And it’s that kind of whoa, that kind of I found when I was eight just kind of playing with browsers and code. And it’s the same whoa that I chased today.

<span class="smashing-tv-host">Vitaly:</span> That’s interesting. So would you say that this was specifically then JavaScript that kind of spoke to you, or would you say that this just, if Flash was still a thing it’d still be running around building Flash websites?

<span class="smashing-tv-speaker">Tejas:</span> That’s an excellent question. No, it’s definitely not JavaScript at all. It was, well, it started with Photoshop, so I was-

<span class="smashing-tv-host">Vitaly:</span> Photoshop. What is Photoshop, Tejas?

<span class="smashing-tv-speaker">Tejas:</span> Yeah, I know, right? Nowadays with Figma and stuff, Photoshop’s a bit lost, but when I was young, Photoshop was the design tool. It wasn’t just for photo editing and manipulation, it was for at least I used it for creating stuff because Vector wasn’t so recommended at the time. And so when I was younger, Vitaly, we had Macro S Factor.

<span class="smashing-tv-host">Vitaly:</span> Even younger.

<span class="smashing-tv-speaker">Tejas:</span> Yeah?

<span class="smashing-tv-host">Vitaly:</span> Even younger.

<span class="smashing-tv-speaker">Tejas:</span> No, no, not even younger. When I was younger than I am now. When I was kind of just getting into it, Mac OS Aqua, the design principle aqua thing, was very in vogue and everybody was trying to design these shiny balls.

<span class="smashing-tv-host">Vitaly:</span> I remember them vividly, yeah, yeah. I remember.

<span class="smashing-tv-speaker">Tejas:</span> Yeah. The shiny balls. And so I did tutorials on Photoshop. I was like, I want to make a really shiny ball. And then from there I moved to Tux. They made these penguins with gloss effects, and that’s where I started and I was like, wow, this is so beautiful. And then I found the slicing tool where I could design something and make it html, and I was like, whoa. And then I was like, okay, this is cool, but how do I make it interactive? And then I found JavaScript. So the draw was really creating stuff without any physical damage to myself and without any financial requirement. I was able to create stuff without any barriers to entry other than the crappy old keyboard and computer we had. So that was it.

<span class="smashing-tv-host">Vitaly:</span> Yeah, the magic thing for me was really this moment when I realized that I can actually make it available to everybody else. That was that magic thing. I mean, I remember FTPing all the way, and&mdash;

<span class="smashing-tv-speaker">Tejas:</span> Yes.

<span class="smashing-tv-host">Vitaly:</span> I mean there were plenty of free servers out there with all the kind of advertising and all of that. And I was just, wow, there are 12 people who visited my website in the last three months. It was incredible. That was just really mind changing, like mind blowing, life changing for me. Yeah, that’s really incredible. And if I look at the industry now, the industry is so mature. There are so many incredible things. Like the thing that we’re building on the internet, on the web, it’s just unbelievable. It’s just the level of software engineering and all.

{{% feature-panel %}}

<span class="smashing-tv-speaker">Tejas:</span> Yeah but you know, Vitaly, I feel a bit sad that it’s so mature now that it’s ... when I was younger, not younger than when I started ...

<span class="smashing-tv-host">Vitaly:</span> I assumed that, yeah.

<span class="smashing-tv-speaker">Tejas:</span> As I was growing, I’ll put it this way, I was often terrified of being a mature adult because when I was younger and rebellious, being mature was being boring for me. I was like, oh, I have to put on a suit and tie and kind of be bored. Like my childlike wonder was lost in my definition of maturity many years ago. And I liken that to today.
You say the web is mature and I agree with you. It kind of makes me sad because I feel like in this maturity we’ve lost a lot of the awesome whimsy that we used to have. I don’t know if you remember these Geo cities, angel fire type of websites with under construction banner and like all of, you know?

<span class="smashing-tv-host">Vitaly:</span> I mean, you can still have them on the web. It’s just not many people do.

<span class="smashing-tv-speaker">Tejas:</span> Right. But it’s because it’s not cool anymore. And I want to bring that back. I remember the dancing baby for no ... like every website just had a dancing baby and a cursor that was a clock that would follow your cursor. Anyways, so all of this I feel like we’ve lost, and I’d like to see more of that. Anyway, sorry. Just a little rant.

<span class="smashing-tv-host">Vitaly:</span> No, I think that’s actually, in many ways, it’s like we’re always moving in circles. I have a very strong feeling that in many ways when I look at e-commerce websites, you probably don’t want to have it there necessarily unless it's, I don’t know. Maybe it’s a brand with a personality and things like that. That might be okay. But I do feel like we are a little bit too used to getting things done in a certain way. And I mean, very often we think about we have to be conventional. We need to follow particular guidelines and rules. And we probably should if you want to be conventional and we want to follow the rules and want things to be familiar to everyone.
But I mean, there’s also this notion of surprising people, and I’m not talking about delight necessarily, but just surprising them. Just making them think a little bit about where they are and what they’re doing. I mean, if I look at your website, well every time I come to the site for some reason I see a slightly different and sometimes slightly strange photo of yourself. Sometimes in very different outfits.

<span class="smashing-tv-speaker">Tejas:</span> Yes.

<span class="smashing-tv-host">Vitaly:</span> So is that the whimsical that you are kind of mentioning there? Speaking about?

<span class="smashing-tv-speaker">Tejas:</span> Yeah, yeah. If you drag your cursor, if you move your cursor around, you just cycle through a bunch of random photos of me. It’s open source. So I’ve lost control of ... so people will add pictures of me dressed as a flower, pictures of some muscular guy.

<span class="smashing-tv-host">Vitaly:</span> Look fantastic as a flower, if I may say.

<span class="smashing-tv-speaker">Tejas:</span> So. Yeah, thanks. Yeah, they’ll do some muscular guy shirtless with just my face photoshopped on him. They’ll do all kinds of weird things.
This is not me, this is the community who feel the need to add weird pictures of me on my website. But it’s exactly the whimsy I’m talking about. And as you drag your cursor across, you’ll see some of these. And I like that. And I feel like, to your point, smashing does the perfect balance of this with the cats. The cats are not ... like if you’re talking about content and great content, great tips, great, whatever smashing does, the cats are really non-essential. But I feel like they are essential because they bring that awesome whimsy. So I like that y'all do that as well. I think it’s much needed.

<span class="smashing-tv-host">Vitaly:</span> Yeah. So I think we do like cats. I mean it’s been quite a journey with all the cats. I mean, I don’t even know where they have been and have not been at this point, right?

<span class="smashing-tv-speaker">Tejas:</span> Yeah.

<span class="smashing-tv-host">Vitaly:</span> But also speaking about you, where you have been and where you have not been yet. I mean you’ve been working on so many different really cool companies. I mean, I look at Vercel, Spotify, Xata recently, right?
Maybe, I don’t know if you could share some insights about what did you learn from each of those things? Maybe there was some really interesting insights that you wish you’d known earlier in your career.

<span class="smashing-tv-speaker">Tejas:</span> Yeah, definitely. I was just talking to my good friend Fabian. I just had lunch with him and he mentioned he’s reading this book by an ex-Google engineer called Solve for Happy. Great book. And in that book he talks about how really nothing is really good or bad or happy or sad. It’s just what’s our perception of it. And I feel this way about the jobs that I’ve left because there’s lessons in there from each of them. Most recently from Zeta, I learned the, actually from Zeta and G2I, both of these companies combined, I’ve learned the value and importance of urgency, ownership and autonomy. I think that’s really important.

<span class="smashing-tv-speaker">Tejas:</span> In fact, there’s an old Steve Jobs interview when he was much younger. He had hair and was alive, but he said people tend to leave when they feel like they can’t have ideas. And I saw that, I saw it executed very, very well at G2I where I was reporting to the CTO. And he was just like, he would talk to me on Monday and ask me what my plan is. We’d align and he’d be like, "Awesome, make it happen. Goodbye. Come to me if you need anything, but I trust you."
And this phrase, "I trust you." I learned how powerful that can be in a position of leadership. And then I would continue to have multiple management leadership roles there, even as director of developer relations at Zeta. And that’s something I carried with me from G2I was this, “I trust you. Make it happen.” So I would talk to my team on Monday. We’d kind of plan for the week and then by Friday, well on Monday I would tell them, I would say, "See you Friday. Come to me if you need anything, but I trust you." And then we’d go to Friday where we would have just an end of week, what did we do, how do we feel check in. And this was excellent. We came up with this really nice rhythm that facilitated this kind of urgency and ownership without stress, urgency without stress. It was really, really nice.

<span class="smashing-tv-host">Vitaly:</span> I mean, one thing that I noticed recently is that many companies try to be very careful about how, on the one hand, to give people this sort of autonomy to just trust them and do the work. Because again, when you think about micromanagement, it’s such a bad kind of really bad pattern to use. And I mean there are probably plenty of companies that are still my micromanaging on some level. But I think there is this way of crystallizing, I guess in some way, those things that really work and things that do not work.
One thing that I saw companies were using, and it works seems to be working really well. This idea of, maybe you’ve heard about this as well, is the idea as a manual for me.

<span class="smashing-tv-host">Vitaly:</span> That means, for example, where you say, okay, every single individual contributor or anybody, manager. It doesn’t matter really. Every single person who is working in the company, you better go ahead and try to prepare a little Google Doc on Notion document or anything like that where you describe how do you work comfortably, what is important to you, like your calendar, your preferences, when do you work best? So is it okay to disturb you in the morning? Is it better to disturb you slightly later when it comes to an urgent meeting or things like that. And so everybody’s encouraged to create this as long as it can be a mural board or mural board or anything like that. And so everybody’s encouraged then to put the link to it in their Slack profile. And so everybody knows, okay, I don’t know who that person is. And especially in a big corporation, a big company, we have maybe tens of thousands of people working.

<span class="smashing-tv-host">Vitaly:</span> It might be very, very comfortable to be able to say, okay, I need to reach out to that person, that position from the team, but I don’t want to come across as in kind of pushing my ideas or whatever I want through their agenda in some way the other disrupting them. But I wanted to be more respectful. So that was really magical when I saw that and I thought, wow, I really appreciate it, especially in the remote first environment that where we are working.

<span class="smashing-tv-speaker">Tejas:</span> We did that at G2I as well. We had social contracts, they were called. These documents. And I remember them working really, really well.

<span class="smashing-tv-host">Vitaly:</span> Would you say that for your perspective would you... now I assume that you are looking, I don’t know, either maybe building something on your own, maybe kind looking what’s around and all. Is it important for you that you’re working remote first, remote only, or would you say that’s not a problem for me to go to the office every day?

<span class="smashing-tv-speaker">Tejas:</span> Yeah, it depends. It really depends on a number of factors. I could honestly make the office thing work if the other factors were appropriate. But, yeah, no, I don’t think remote’s a hard line for me.
I was, again, to cite my friend Fabian. I asked him the same question. I said, "Do you prefer remote or onsite?" And his response was a third option, which he tends to think outside the box. He is like, well, honestly, I prefer a choice. Being able to do a remote for a season and then onsite for a season. Like the choice is the magic to him. And I kind of agree with that. But I could do office if it’s required for sure.

<span class="smashing-tv-host">Vitaly:</span> But also looking in general at the IT industry, I know with a big eye and a big T, I guess at this point there is a lot of stuff going on and many people are concerned layoffs, and there isn’t a sense of uncertainty about where we’re going with ... Is it still a thing to be a project engineer? Is it a good thing to be a project engineer? I’m pretty sure it is, right? But where do you see all of this kind of being today? Is it just a natural way of the economy is not in a good shape, so sure there are layoffs after a season of hiring, or do you see this kind of becoming a trend where we have to be careful and cautious about not losing our jobs for AI by any means? What’s the take on this?

<span class="smashing-tv-speaker">Tejas:</span> Yeah, my take on this is it’s normal. I feel like look at the GDP curve of any country of any year and you’ll see is dips recessions are normal and predictable and they happen. And when recessions happen, layoffs happen. I feel like a recession is a sign of economic normalcy. If it lasts very long, then it’s a depression. That’s a huge problem. But I feel like it’s expected. I feel like layoffs unfortunately have their time and place. They’re not good. They affect families. I mean, I had the privilege of quitting, but I also feel the squeeze of unemployment. So I don’t think they’re good. But I think it happens. I don’t think the jobs will be taken by machines yet because machines and AI is being designed now to kind of be a helper.

<span class="smashing-tv-speaker">Tejas:</span> So I feel like it’ll help us. But I do think you give chat GPT, access to the internet, which it doesn’t have, and then it gets extra superpowers and gets more threatening. But I feel like there’s human beings with a vested interest in preserving human beings with jobs. So I’m not so sure the AI will take our jobs, but the state of the industry now I think is actually pretty cool, Vitaly, because when you and I started and I mean you probably started way before me, so I’ll just say when I started. I’m not calling you old. I’m just calling you experience.

<span class="smashing-tv-host">Vitaly:</span> That’s okay. That’s okay. We’re all friends here.

<span class="smashing-tv-speaker">Tejas:</span> No, but when I started, there was no front end and backend. There was webmaster. There was a web dev and it was the one guy or girl who would design, develop, and then drag things over to the FTP thing to upload to some shared hosts. Some of this is quite common.
But then over time you and I have had the privilege of watching higher specializations develop. So we went from webmaster to now front end and backend to DevOps. And then from that to now machine learning engineers, data scientists, and then an emerging part of this is DevRel, is developer relations, I feel like is still pretty young, but I think the industry has kind of a tree root with branches, has kind of branched off into specializations and I see more of them occurring.

<span class="smashing-tv-speaker">Tejas:</span> And I think it’s pretty great because that means more options for people to get jobs to maybe start at an abstract level, but I think it’s better for humanity. One fear of mine is that the world is becoming, the tech industry is taking over the world, right? We used to have clothing stores, now we have online companies that sell clothes. We used to have travel agents, now we have websites that sell tickets. Like everything’s becoming tech. And this is part of the reason why I used to have strong opinions. This is part of the reason why I campaign really hard for diversity, equality and inclusion because Plan A was heavily unequal of the world, so to speak.

{{% ad-panel-leaderboard %}}

<span class="smashing-tv-speaker">Tejas:</span> I watched a documentary on Columbus yesterday and made me hate the world a little bit more, right? And so I feel like if we’re undergoing some type of tech revolution where more companies are tech companies advocating for fairness, equality, diversity and inclusion is massively important so that people don’t get left out and equality doesn’t get as skew as it has been historically.

<span class="smashing-tv-host">Vitaly:</span> I think it’s also this notion in general of I think us focusing a bit too much on speed. I remember vividly having this conversation a while back about, "Oh wow, the technology is moving fast, so fast and we’re going to do less, which is going to do less because the technology is going to take over." It’s the same way we see AI now like oh ChatGPT can do so much. It can be giving us answers, better answers, faster answers, and&mdash;

<span class="smashing-tv-speaker">Tejas:</span> Can write code.

<span class="smashing-tv-host">Vitaly:</span> You can actually quote ... yeah, you can write code, it can debug and everything. So we are going to do less. But I think that reality, I mean at least in my life so far it has been very different. It becomes faster, but then we tend to do much more. We always find a way to fill in not necessarily the gaps, because these gaps don’t even have a chance to appear, right? We are just moving. It’s like it’s everything. I have the strong feeling in the past. Maybe it’s kind of similar to you as well, maybe not. I have a feeling that I was doing one thing and I was doing it interruptedly, and then I would spend two, three hours on that and I would be kind of done more or less. Now it seems like, well, maybe 23 things. And yeah, we don’t do them in peril. I don’t really believe in multitasking or maybe I’m just really bad at multitasking while other people are much better. But I do have a strong feeling that it’s all so fragmented and we do so many different things at the same time. And so I don’t believe that technology is making us redundant in any way. It’s just we are doing certain different things, right?

<span class="smashing-tv-speaker">Tejas:</span> Exactly.

<span class="smashing-tv-host">Vitaly:</span> But talking about that, one thing I do have to ask because we probably, I expect probably can hear the voices in the back asking, "Tejas, what about those frameworks and front? Let’s talk about phone time landscape in 2023." And one question that people ask me, and I want you to answer it is, we came from times when Jake worry was a big thing and it still is a big thing on many websites and legacy website and many websites in general. Do you expect this world of frameworks to change or are we at some level of maturity where a react is going to stay, view is going to stay, angle is going to stay? I mean, it’s impossible to answer that. That’s why I’m asking you now. What’s your take on this in general? Should we be talking ... like imagine 20 years from now we’re sitting in a podcast like this thinking, "Remember when React was a thing and look now?"

<span class="smashing-tv-speaker">Tejas:</span> Yeah, you say 20 years, I feel like one year from now someone’s going to listen to this and be like, "Oh my gosh, this stage Tejas was so wrong about his answer."

<span class="smashing-tv-speaker">Tejas:</span> No. So I think first of all, I think the web is held up by giants who are underappreciated. And by that I mean specifically jQuery and WordPress power more of the internet than React period.
So a lot of them people talk about, "Oh, they’re not cool." No, no, they power most of the internet and I think they should be acknowledged. But there was a time in the React story where React had enough momentum and critical mass to look cooler than jQuery.
It’s the new thing, it’s the new industry standard. And then jQuery kind of got diminished even though it’s usage didn’t, but it’s I guess perceived value got diminished and reacted over.
And I think in 2023 we’re starting to see some of that as well with React. Where React is used a lot. I mean I just put out a YouTube video about why React is unbeatable. And I do think it is unbeatable because here’s the deal: jQuery and WordPress have not been beaten.

<span class="smashing-tv-speaker">Tejas:</span> They’re also unbeatable to some degree. And now especially you have teams at Google investing in React, investing in how React works in Chrome, et cetera. So I think React is here to stay, but I think it’s perceived value is diminishing in 2023. And I feel like it will diminish further with the advent of awesome tools like Quick and solid specifically.

<span class="smashing-tv-host">Vitaly:</span> Right, right.

<span class="smashing-tv-speaker">Tejas:</span> And, of course, View and Svelt and Angular are around, so I think they’ll all stay. It’s always looking for this newer shinier thing. The big appeal, right, with the newer stuff with Solid and Quick is that they don’t ship a whole virtual dom implementation to the browser, which is heavy and slow. So React is objectively slower and heavier than Solid and Quick. And so there’s two sides, now it’s divided. Some would say, okay, but it’s just milliseconds. They don’t matter that much. It’s not true. It’s been proven by Google, by Chrome, that milliseconds make millions. And so I do think React is seeing its decline, maybe not in usage but in the popular vote in 2023.

<span class="smashing-tv-host">Vitaly:</span> But at the same time also see that there are all this kind of fine tuning almost coming in where, I don’t know when was that? I can’t track drug time anymore. But five, 10 years ago, oh, we have React and we have this full client side thing and off we go.
But then now when we can run React on the server, we can now be a bit more clever I guess, about what is going to happen on the server, how much of it do we need to ship to the client and when and when not, and all those things.

<span class="smashing-tv-host">Vitaly:</span> I think this is, in many ways we moved away from this notion of let’s have one single React application to let’s have, I don’t know, hundreds. Every single component we have might be a single standalone React application with its own life cycle and all that.
And it kind of really changes it. But I also think that, I don’t know, I learned that’s probably, there is no way to know for sure. So maybe just tomorrow there will be somebody coming up with a chat GPT query and this is going to take over both J query and also React. I don’t know.

<span class="smashing-tv-speaker">Tejas:</span> Yeah.

<span class="smashing-tv-host">Vitaly:</span> Do you feel like something like ChatGPTQuery it could exist or help us in some way? Like bending in body and making, I don’t know what can I do everything.

<span class="smashing-tv-speaker">Tejas:</span> I would be interested to ask chat GPT to write code for the best fastest UI library on earth. See what it comes up with. But on a more serious note, I feel like a big contributor to this shift from we’re doing things on the client to we’re doing things on the server that then influences the development of React and Solid and all the others to be more server oriented is these serverless platforms - Versa, Netlify, CloudFlare. These platforms have led to what I’m calling server liberation. Like nobody server rendered before, Veril, Netlify, CloudFlare, et cetera. Because servers were inaccessible. They were hard to configure for client side apps. You would need to do a rewrite on a 404 to go to your index or HTML so you can download the client.

<span class="smashing-tv-speaker">Tejas:</span> It was very complicated. And then these companies stepped in there like, “Hey wait, we’ll make servers easy.” And then if deploying a node server is easy, now you’re like, “Oh, now I can render on the server.” And so they kind of unlocked this. So I feel like if we want to predict where the libraries and frameworks will go next, we can kind of look at what is the adjacent surrounding supporting tech that would lead them. And I think that’s kind of a good indicator. But I’m not in a position to make such predictions accurately.

<span class="smashing-tv-host">Vitaly:</span> Well of course you are. Of course you are. You’re here on a podcast. You can predict anything, you can see the future. I’m sure you’ve seen it. So here we go. You can definitely report on that. But also moving maybe to slightly different topic, just to explore the landscape. I always fascinated by this feeling of community and by this feeling of bringing people together, the conferences, and we’ve been running conferences for many years now. And you’ve been to so many conferences as well, and I heard rumors, and maybe they’re not true, but I don’t know. I heard rumors that you might even be thinking about setting up a conference one day?

<span class="smashing-tv-speaker">Tejas:</span> Yeah, I’m actually starting ContagiousCon. It’s where everybody comes together and tells me how much they like me.

<span class="smashing-tv-host">Vitaly:</span> It’s like a contaga of the SmashingConfs. Thank you for that. But, dude, I’ve been to so many conferences, experienced so many things that I’ve kind of developed an intuition for what attendees want, what speakers want, and the pains that organizer. I’ve spoken to Charis also the pains that organizers have to deal with.

<span class="smashing-tv-host">Vitaly:</span> And so bringing this triquetra of experiences, kind of working in coordination with the organizers to provide something very rich for people. I think that’s something that I’m very excited for. Also connecting organizers to sponsors. A lot of conferences don’t have the privilege of money and with the amount of companies I talk to and et cetera, it looks like connecting the right sponsors to the right conferences for the best experience for attendees really. Right. But do you feel like we are at this point where in-person conferences are back for good?

<span class="smashing-tv-speaker">Tejas:</span> Yes, 100%.

<span class="smashing-tv-host">Vitaly:</span> Yeah. It feels like different parts of the world maybe, I don’t know, maybe it’s just me. Things a little bit slower. But I do know for sure is that there is this sense of enough of online stuff. We do so much stuff online anyway. If we do something then we do it in person. Now you having attended so many conferences last year, I think both virtually and in person, would you say that kind of online conferences are here to stay? There are still plenty of them around. We had to do it for a while and now we’re probably going to keep it as a live livestream in addition to an in-person? Or is it a good replacement still?

<span class="smashing-tv-speaker">Tejas:</span> I don’t think it’s a good replacement. Nothing will ever replace face-to-face interactions. I said, I’m not in a position to make predictions about front end stuff. I can make 100% an accurate prediction about this. Nothing will ever replace an in-person interaction face-to-face. No screen can substitute a warm flesh and blood person in front of you. And so I think in-person is here to stay, but a lot of companies and organization teams have invested time and money into getting the online part, right? That why should we throw it away? We have it now.

<span class="smashing-tv-speaker">Tejas:</span> So I feel like it will be a fallback and a second track, as it were. And it’s not bad for business. You can sell a lot of tickets by volume for just some livestream and people will join. And I think it’s good because there’s people who can’t travel that you get to include now, right? So it’s good. So yeah, I think that’s the future is in person, but also virtual.

<span class="smashing-tv-host">Vitaly:</span> What is your future though? So I mean, I’m very curious. You always have these ideas of things you want to do in general. I mean, again, having learned so much from all the different companies. There must have been some things that where you said to yourself, "Okay, I would’ve done it differently."

{{% ad-panel-leaderboard %}}

<span class="smashing-tv-speaker">Tejas:</span> Oh man, you can’t imagine.

<span class="smashing-tv-host">Vitaly:</span> Oh, yeah, please go ahead. I’m very curious to hear that.

<span class="smashing-tv-speaker">Tejas:</span> I’ve been in positions where I’ve been micromanaged to death, right, and I’m very, I look back at those and go like, oh my gosh, I would do this so differently the way I’ve done it by not micromanaging people. I think that’s probably the strongest one.
But also conferences. I’ve seen conferences do things wrong. I think the biggest mistake I’ve seen there is overselling. They’ll show you a venue that’s packed full of sunlight and everything and you get there and it’s just someone’s dark basement.

<span class="smashing-tv-host">Vitaly:</span> There is no sunlight.

<span class="smashing-tv-speaker">Tejas:</span> No, yeah, they turn off the sun for this one conference. So I’ve seen conferences that will just not record talks and they won’t tell you ahead of time. So I think the biggest mistake conference organizers have made is a lack of communication about important things. I want to know if I’m not going to be recorded, so then I don’t make the effort of going there. Because a big draw is this thing’s going to be recorded and visible for everybody after. And some conferences have made it known not at all that your thing’s not recorded and then months go by and you’re like, where’s that video? Oh, they didn’t record it. Oh no.

<span class="smashing-tv-speaker">Tejas:</span> So I would do those things differently, but what’s next for me? It’s funny you ask literally, because it’s a new year and I’ve dedicated this week, so I’m unemployed in case listeners are unaware.
And I’ve started to feel the squeeze of being unemployed, put it that way. And I don’t know what’s next. I’ve decided to take this week and figure it out. I think I do want to spend time creating YouTube content because I like communicating with people and reaching people and really, yeah, this will sound a bit narcissistic, but blessing them with whatever I can bless them with. So I think YouTube is one thing I want to keep. But really, I don’t know, man, do I join a company as an employee? Do I start my own company? Do I just remain a freelancer? I don’t know.
So I’m taking this week to talk to good friends and have them speak into my life and give me the best advice, who know me well. I’m currently leaning more towards starting a... I can’t say a company for legal reasons, but starting a type of company.

<span class="smashing-tv-host">Vitaly:</span> And enterprise.

<span class="smashing-tv-speaker">Tejas:</span> Sure, yes. Start starting an enterprises. Starting an enterprise somewhere around DevRel. That seems really attractive to me. And really you are an inspiration for that. Watching you lead smashing, right?
I want to be able to do that. To give people a place where they can be creative and do their best work, et cetera, while also earning a good amount of money. I want to create something like that. So I’m kind of leaning towards that. I don’t know if it’s sustainable or if I’m skilled enough to do that, but that’s kind of ... Plan B, listen to this privilege. Vitaly, listen to how ridiculous this sounds.

<span class="smashing-tv-speaker">Tejas:</span> My worst case scenario, my like fallback is I get a job at some tech company and earn a decent salary. That’s unbelievable. But that’s kind of plan B is just take a job somewhere. Of course, it would have to be in a field I’m passionate about, that I care about, et cetera. But yeah, that’s kind of where I’m at.

<span class="smashing-tv-host">Vitaly:</span> Where would you see yourself in general? I mean there are many companies, many people who are trying to get to the fan club, the big ones, the Facebook, the Apple, the Google, the Amazon and so on so forth.
Did you ever think about, okay, I’m going to do whatever is needed? And I know that, again, looking that you started coding back when you were eight, right? And you’re a software engineer.
I assume that that might be on your agenda to get to this top five, top 10 other companies on the world. Is it interesting to you or would you rather work in a smaller company?

<span class="smashing-tv-speaker">Tejas:</span> That’s a great question. Yeah, so it was interesting. I feel like the closest I’ve got to big company energy is Spotify. And just by virtue of working at Spotify with 4,000 employees, I learned very quickly that this isn’t for me. So maybe, but I’m leaning more towards, no, with the larger tech empire-type companies. I feel like it would be great if I had three children in a very busy personal life to go to work and kind of have that much structure and rigidity. But at this point in life it’s a no for me.

<span class="smashing-tv-host">Vitaly:</span> I think it’s interesting because I’m being asked that as well. And actually I was under a very strong impression at some point in my life when I was thinking that if I want to make a good career, I have to work in one of the big ones. I have to do whatever it takes.
But you know me a little bit. I like my freedom and I don’t want to be sitting day and night working or anything. I mean the work-life balance and I mean everybody’s talking more or less about work-life balance. But I mean it in a very ... it’s been hard to explain in a very personal way. Meaning I want to be able to say to myself, and this is kind of the ultimate test that I put for myself.

<span class="smashing-tv-host">Vitaly:</span> Never want to be in a position where at 2:00 PM on any given day, I have to tell me myself, "Okay, I don’t want to do this and I have to, no matter what it takes, I have to do it for the next four hours, whatever it takes." And I kind of always wanted to be in a position to say, okay, you know what? I’m going to go to cinema at 10:00 AM on Monday morning. Frankly, if I’m being very honest, it really never happened to me that I actually wanted that. And it never really happened to me that I made it or I did it. But I mean, this kind of sense of freedom is very important here, but not everybody can afford that. And it’s a lot of risk too.

<span class="smashing-tv-speaker">Tejas:</span> Yeah, it’s also an emerging trend in the industry. Zeta works this way when I was there at least. It’s more results-based than time-based. So on paper you have a 40 hour kind of work week, but you distribute those 40 hours. However, you could do two days straight and then the next day go to a movie theater in the morning. So they don’t care about when you work, it’s just that stuff gets done. I see that. That happens with full-time employment too. I feel like with the fan club, everyone I talked to at fan companies. My own experience at Spotify was, and this is not to speak ill of these companies, there are big companies with lots of things happening.
There’s a lot of meetings, a lot of meetings to where you will have a meeting blocked-

<span class="smashing-tv-host">Vitaly:</span> And you don’t like meetings.

<span class="smashing-tv-speaker">Tejas:</span> Me? I like meetings, but I feel like look, too much of any good thing becomes a bad thing. And I feel like, respectfully, Spotify when I was there, had too many meetings. It did. And it’s not their fault. There was a pandemic and they’re used to working in office. They were not remote ever. So the pandemic made them go remote. But then there was a lot of learning to do about how to be remote. And I joined just in the middle of that where async meetings were not really a thing and it was very complicated. And so I was just at my laptop all day in video calls because it’s kind of being in an office.

<span class="smashing-tv-speaker">Tejas:</span> So no, I didn’t enjoy the meetings. And I found not just me, but I have friends at Google, at Meta, they’ll accidentally around me be like, “Hey, look at my phone.” And they’ll show me a photo from their vacation, and I see notifications pop up, “Oh, you have meeting at 10 minutes?” And they tap on the notification, go to the calendar app and “Oh my God, the carnage in this calendar app.” You look at that once you’re like, okay, I do not envy you. So&mdash;

<span class="smashing-tv-host">Vitaly:</span> Yeah, I mean surely meetings are necessary, but it’s also a matter of how to organize it because for me, or for us and at Smashing for example, we don’t have many meetings. But also, most importantly, everybody can set boundaries in a way. So I like to have, for example, like for this call, right? I like to have two or three days blocked out when there are no meetings.

<span class="smashing-tv-speaker">Tejas:</span> Yes.

<span class="smashing-tv-host">Vitaly:</span> No meetings. Just almost, I mean, something must happen, something bad, or too good must happen for the day to have a meeting, right? And it’s also really just about having proper boundaries in place of this is when we work, and this is when we have meetings. Although of course meetings also work.

<span class="smashing-tv-speaker">Tejas:</span> Yeah. One lesson I learned working at so many different places is people. I say people because I know people, but even just speaking of myself, people suck at creating good and healthy boundaries in the workplace. I do. I did more when I was more inexperienced, but still it’s a struggle to have good, strong boundaries. I feel like it could work better if the employer enforced and enabled people to think more about boundaries and even suggested, “Hey, maybe you should do a no meeting day.”

<span class="smashing-tv-speaker">Tejas:</span> If managers push, not push boundaries, but how do you say? Establish boundaries on behalf of their people. Yeah, and that’s something I’d like to see more of. I haven’t seen the opposite. I’ve seen the lack of people’s ability to set boundaries be exploited far more often than I’ve seen healthy boundary setting from the top.

<span class="smashing-tv-host">Vitaly:</span> Right. Well, now I do have to ask though, I’m just curious at this point, do you then have a dream project that you’d like to work on one day, maybe, I don’t know, be building a, I don’t know, some sort of software for rocket ship or anything? Do you have any particular ambitions in that regard?

<span class="smashing-tv-speaker">Tejas:</span> I’m really thankful, Vitaly, to say that this year I’m actually spending all of my unemployed time working on three dream projects of my own. One of them is a secret. I can’t tell you about that.

<span class="smashing-tv-host">Vitaly:</span> Oh, come on. Just give us a little of a spoiler then.

<span class="smashing-tv-speaker">Tejas:</span> It’s a very social thing. There is the spoiler. But the other one is working on this DevRel startup co consultancy thing. I’m thinking of starting is the second one. And that’s really excited about that. Worst case, it fails and then I join a company as it were. But that’s something I’m excited about. And the third dream project is my YouTube channel, which I’ve wanted to be a YouTuber for years, mainly honestly, because I like reaching people, but also I’ve speaking about this Mac OS 10 Aqua Ball thing. I get to do that with video, create beautiful videos, and I’m really into cameras and making nice shots and everything. And that’s a cool project. It’s a dream project actually to be a good YouTuber, emphasis on the good because I don’t want to be an average YouTuber. And also to be able to turn it into a living. I feel like my dream would be to just kind of be a full-time YouTuber. Yeah.

<span class="smashing-tv-host">Vitaly:</span> But what about TikTok? We don’t see you on TikTok yet.

<span class="smashing-tv-speaker">Tejas:</span> Yeah, sadly. I’m not so good at dances.

<span class="smashing-tv-host">Vitaly:</span> Well, maybe that should be the next skill to learn.

<span class="smashing-tv-speaker">Tejas:</span> That could be my New Year’s resolution. Get good at shuffling. Every day I’m shuffling.

<span class="smashing-tv-host">Vitaly:</span> So we’ve been learning a little bit about front end and JavaScript and AI and the other companies and so on, but what have you been learning about lately, Tejas? What have you been reading or kind of the skill that you’ve been trying to get acquainted with recently?

<span class="smashing-tv-speaker">Tejas:</span> That’s a good question. For me, communication is probably the thing that I enjoy the most based on conference speaking and stuff. And one thing I’ve been learning is the difference in mode of communication.
What I mean by that is like what makes a great in-person conference talk does not actually make a great YouTube video. And I find this fascinating that when it’s a different modality of communication, people have different preferences. So like what I mean by that is if I come out at Smashing Conf New York or Freiburg, and I’m on stage and I’m like, "What’s up everybody?" High energy. People are like, wow, that’s awesome. But if I do the same thing on YouTube, they’re like, dude, what are you on? And that’s something I’ve been learning how to communicate effectively on different platforms. I’ve yet to learn the TikTok one, but I think it’s mostly through dance.

<span class="smashing-tv-host">Vitaly:</span> You’ll get there. I have no doubt about that. All right. Well if you, dear listener, would like to hear more from Tejas you can find him on Twitter where he’s at Tejas Kumar underscore.
We’ll probably have to have another call about why underscore. By the way, why underscore?

<span class="smashing-tv-speaker">Tejas:</span> Because the other one was taken. You know what&mdash;

<span class="smashing-tv-host">Vitaly:</span> That’s reasonable.

<span class="smashing-tv-speaker">Tejas:</span> If that Tejas could delete their handle and then email me I’d appreciate it.

<span class="smashing-tv-host">Vitaly:</span> Excellent. So that would be Tejas Kuma underscore. On YouTube where he’s just at Contagious K and potentially on TikTok, where he’s going to show his best dance moves and tips around Svelt and React eventually. But also on his website, Teg.as Where-

<span class="smashing-tv-speaker">Tejas:</span> T E J

<span class="smashing-tv-host">Vitaly:</span> T E J. Yes, indeed. T E J dot, yes. You can also find plenty of photos of Tejas as well. Well, thank you so much for joining us today, Tejas.
Do you have any parting words of wisdom you’d like to send to the universe for people who are going to watch us 20 years from now?

<span class="smashing-tv-speaker">Tejas:</span> Yes. I would say this: kindness and compassion is the most important.

{{< signature "il" >}}
