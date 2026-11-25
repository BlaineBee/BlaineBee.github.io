---
section: it-labs
title: 'Active Directory Part 6: Password policies and account lockout'
short_title: Password policies and account lockout
date: 2026-07-22
series: Active Directory home lab
part: 6
summary: Setting domain password and lockout policies, triggering a lockout on Sarah's account, and unlocking it.
difficulty: Medium
platform: Home Lab
environment: Windows Server 2022 · Windows 11 client
image: /assets/img/writeups/active-directory/part-6/8.png
tools:
- Default Domain Policy
- Account Lockout Policy
- Active Directory Users and Computers
skills:
- Password policy
- Account lockout
- Unlocking accounts
tldr: Edited the Default Domain Policy to set password rules and a 3-attempt lockout threshold, locked Sarah out with bad passwords to test it, then unlocked her account the way a help desk would.
---

In this guide, I will show you how to set up password policies and unlock a locked account. We begin by opening the Group policy manager on our server.

![Part 6, screenshot 1](/assets/img/writeups/active-directory/part-6/1.png)

Right click our default domain policy and select edit.

![Part 6, screenshot 2](/assets/img/writeups/active-directory/part-6/2.png)

Follow the dropdowns and select the password security settings.

![Part 6, screenshot 3](/assets/img/writeups/active-directory/part-6/3.png)

Here we will be editing the password settings. As an example I set the minimum password length to 7, but I recommend at least 12 characters

![Part 6, screenshot 4](/assets/img/writeups/active-directory/part-6/4.png)

Now let's edit the account lockout policy. This is how many attempts with a wrong password before the account is locked. I've set it to 3 for my example.

![Part 6, screenshot 5](/assets/img/writeups/active-directory/part-6/5.png)

Now we open Sarah's PC. Entering an incorrect password multiple times will give us this prompt.

![Part 6, screenshot 6](/assets/img/writeups/active-directory/part-6/8.png)

Awesome! So it clearly is working. Now let's unlock her account. Head over to Sarah's account and click the unlock account button. Sarah's account is now unlocked.

![Part 6, screenshot 7](/assets/img/writeups/active-directory/part-6/7.png)
