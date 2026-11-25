---
section: it-labs
title: 'Active Directory Part 5: Shared folders and GPO shortcuts'
short_title: Shared folders and GPO shortcuts
date: 2026-07-22
series: Active Directory home lab
part: 5
summary: Sharing call scripts read-only with the customer service group and pushing a desktop shortcut to them with Group Policy.
difficulty: Medium
platform: Home Lab
environment: Windows Server 2022 · Windows 11 client
image: /assets/img/writeups/active-directory/part-5/10.png
tools:
- File sharing
- Share permissions
- Group Policy Preferences
skills:
- Share permissions
- Read-only access control
- Deploying shortcuts with GPO
tldr: Shared a CSScripts folder as \\FB-DC01\CSScripts with read-only access for G_CustomerService, then used Group Policy Preferences to drop a shortcut to it on every agent's desktop.
---

In this guide, I will show you how to set up a shared folder / shortcut / GPO deployment. First we create a folder on our server that includes call scripts for employees.

![Part 5, screenshot 1](/assets/img/writeups/active-directory/part-5/1.png)

I have created scripts for each employee type.

![Part 5, screenshot 2](/assets/img/writeups/active-directory/part-5/2.png)

Now, for Sarah, I will place the call scripts she needs.

![Part 5, screenshot 3](/assets/img/writeups/active-directory/part-5/3.png)

Now we will go to the folder for the customer service call scripts and click properties.

![Part 5, screenshot 4](/assets/img/writeups/active-directory/part-5/4.png)

Under properties click share then advanced sharing.

![Part 5, screenshot 5](/assets/img/writeups/active-directory/part-5/5.png)

Under share create the shared name and apply.

![Part 5, screenshot 6](/assets/img/writeups/active-directory/part-5/6.png)

Then go back to share properties and hit sharing.

![Part 5, screenshot 7](/assets/img/writeups/active-directory/part-5/7.png)

Add the customer service group we created earlier. We will set the permissions to read only.

![Part 5, screenshot 8](/assets/img/writeups/active-directory/part-5/8.png)

![Part 5, screenshot 9](/assets/img/writeups/active-directory/part-5/9.png)

We then see a message confirming the file share.

![Part 5, screenshot 10](/assets/img/writeups/active-directory/part-5/10.png)

Now in our server we will go to tools and select group policy.

![Part 5, screenshot 11](/assets/img/writeups/active-directory/part-5/12.png)

Select our customer service GP and hit edit. What we are doing now is forcing a shortcut onto the customer service agents desktop.

![Part 5, screenshot 12](/assets/img/writeups/active-directory/part-5/13.png)

Navigate to this path to create the shortcut.

![Part 5, screenshot 13](/assets/img/writeups/active-directory/part-5/17.png)

input the file location that we shared.

![Part 5, screenshot 14](/assets/img/writeups/active-directory/part-5/18.png)

Now we load into Sarah's desktop. We can see that the file is placed on her desktop as a shortcut.

![Part 5, screenshot 15](/assets/img/writeups/active-directory/part-5/19.png)

and if we click the file we can see that the files are successfully on her desktop for her to use!

![Part 5, screenshot 16](/assets/img/writeups/active-directory/part-5/20.png)

Next we will be learning to create password Policies and setup account security features!
