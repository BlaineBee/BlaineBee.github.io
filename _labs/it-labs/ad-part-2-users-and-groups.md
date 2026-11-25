---
section: it-labs
title: 'Active Directory Part 2: Creating users, OUs, and groups'
short_title: Creating users, OUs, and groups
date: 2026-07-22
series: Active Directory home lab
part: 2
summary: Organizing FakeBank into departments with OUs and security groups, then onboarding customer service agent Sarah M. Smith.
difficulty: Easy
platform: Home Lab
environment: Windows Server 2022 · FakeBank.local
image: /assets/img/writeups/active-directory/part-2/6.png
tools:
- Active Directory Users and Computers
- Security groups
skills:
- OU design
- Security groups
- User provisioning
- Least privilege
tldr: Created an OU per department and a security group for each, then added Sarah with a must-change-at-first-login password and only the group access her job needs.
---

In this guide, I will show you how to add employees and groups to your Active directory server. We will start by loading into our dashboard. A blue box indicates a right click, red is a left, and green indicates you should hover. We will start by clicking the tools menu at the top right.

![Part 2, screenshot 1](/assets/img/writeups/active-directory/part-2/1.png)

After clicking tools, navigate to 'Active Directory Users and Computers'.

![Part 2, screenshot 2](/assets/img/writeups/active-directory/part-2/2.png)

find your server, right click it and create a new OU. (organizational unit).

![Part 2, screenshot 3](/assets/img/writeups/active-directory/part-2/3.png)

Create an employees folder. Mine will be FakeBank Employees.

![Part 2, screenshot 4](/assets/img/writeups/active-directory/part-2/4.png)

Now navigate to the OU you created and create another OU. These will be employee types.

![Part 2, screenshot 5](/assets/img/writeups/active-directory/part-2/5.png)

Create your employee types. I have IT, HR, Management, and our regular employees/ customer service agents.

![Part 2, screenshot 6](/assets/img/writeups/active-directory/part-2/6.png)

We will click our server again and make another OU. OU or organizational units are similar to branches of a folder. This one will hold our groups.

![Part 2, screenshot 7](/assets/img/writeups/active-directory/part-2/7.png)

![Part 2, screenshot 8](/assets/img/writeups/active-directory/part-2/8.png)

Now right click the groups folder, select new, and create a new group.

![Part 2, screenshot 9](/assets/img/writeups/active-directory/part-2/9.png)

![Part 2, screenshot 10](/assets/img/writeups/active-directory/part-2/20.png)

I have created groups for each employee type.

![Part 2, screenshot 11](/assets/img/writeups/active-directory/part-2/11.png)

Now all we have to do is place our new customer service worker, Sarah M. Smith, into her correct folder and group! Let's add her by creating new, then user.

![Part 2, screenshot 12](/assets/img/writeups/active-directory/part-2/12.png)

We will fill in Sarah's info into the boxes and hit next to continue.

![Part 2, screenshot 13](/assets/img/writeups/active-directory/part-2/13.png)

Then we will create her password. This password is a one time use password due to me checking the box that says she has to change it at time of login. This gives her easy access to the system and allows her to set a more secure password.

![Part 2, screenshot 14](/assets/img/writeups/active-directory/part-2/14.png)

Now we will hit next, where we will see Sarah's login name.

![Part 2, screenshot 15](/assets/img/writeups/active-directory/part-2/15.png)

Now we will give Sarah her group! Groups decide what employees are actually able to do on their systems! Do we want Sarah having access to records she shouldn't Or being able to see other employees sensitive information??? To prevent this we will place her in the G_CustomerService group.

![Part 2, screenshot 16](/assets/img/writeups/active-directory/part-2/16.png)

![Part 2, screenshot 17](/assets/img/writeups/active-directory/part-2/17.png)

![Part 2, screenshot 18](/assets/img/writeups/active-directory/part-2/18.png)

Now where it says 'Enter the object names to select' we enter Sarah's Group name.

![Part 2, screenshot 19](/assets/img/writeups/active-directory/part-2/19.png)

![Part 2, screenshot 20](/assets/img/writeups/active-directory/part-2/20.png)

Now we just hit apply and Sarah is in her correct place and will have the permissions she needs to complete her work!
