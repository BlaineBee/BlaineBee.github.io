---
section: it-labs
title: 'Active Directory Part 4: Managing users with Group Policy'
short_title: Managing users with Group Policy
date: 2026-07-22
series: Active Directory home lab
part: 4
summary: Creating a customer service GPO that blocks Control Panel, then logging in as Sarah to prove it works.
difficulty: Medium
platform: Home Lab
environment: Windows Server 2022 · Windows 11 client
image: /assets/img/writeups/active-directory/part-4/12.png
tools:
- Group Policy Management
- GPO
skills:
- GPO creation and linking
- User restrictions
- Policy testing
tldr: Linked a FakeBank Customer Service Policy to the Customer Service Desk OU that prohibits Control Panel and PC settings. Sarah's first login forced a password change, and Control Panel was blocked, so both settings worked.
---

In this guide, I will show you how to manage Users and computers using group policy.

![Part 4, screenshot 1](/assets/img/writeups/active-directory/part-4/1.png)

First we will open our AD server. Select 'tools' and click 'group policy management'.

![Part 4, screenshot 2](/assets/img/writeups/active-directory/part-4/2.png)

In the Group policy management go to the correct group. For Sarah this is the Customer service group. Right click on it and select to create a GPO in the domain.

![Part 4, screenshot 3](/assets/img/writeups/active-directory/part-4/3.png)

Name your GPO. We will name ours 'FakeBank customer service policy'.

![Part 4, screenshot 4](/assets/img/writeups/active-directory/part-4/4.png)

Now right-click the new GPO and select edit.

![Part 4, screenshot 5](/assets/img/writeups/active-directory/part-4/5.png)

In this example we will make it to where our customer service agents cannot use control panel. Select the 'Prohibit access to control panel and pc settings' option.

![Part 4, screenshot 6](/assets/img/writeups/active-directory/part-4/6.png)

Enable this, optionally explain with a comment, and then hit apply.

![Part 4, screenshot 7](/assets/img/writeups/active-directory/part-4/7.png)

Now we will load into Sarah's computer and test the feature. First let's check if her @fakebank.local account is working!

![Part 4, screenshot 8](/assets/img/writeups/active-directory/part-4/8.png)

We know that everything we are setting up is working so far because Sarah is asked to change her password!!

![Part 4, screenshot 9](/assets/img/writeups/active-directory/part-4/9.png)

![Part 4, screenshot 10](/assets/img/writeups/active-directory/part-4/10.png)

Sarah enters her new desired password and hits enter.

![Part 4, screenshot 11](/assets/img/writeups/active-directory/part-4/11.png)

Now we attempt to open control panel to make sure the group policy is working. An error here is actually a good thing!

![Part 4, screenshot 12](/assets/img/writeups/active-directory/part-4/12.png)

Perfect! We see that she does not have access to control panel or PC settings. Now we will move to step Five and learn to make shared folders, setup NTFS permissions, and setup network drives.
