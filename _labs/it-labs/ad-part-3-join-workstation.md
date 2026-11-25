---
section: it-labs
title: 'Active Directory Part 3: Joining a workstation to the domain'
short_title: Joining a workstation to the domain
date: 2026-07-22
series: Active Directory home lab
part: 3
summary: Pointing Sarah's Windows 11 PC at the domain controller for DNS, testing connectivity, and joining it to FakeBank.local.
difficulty: Easy
platform: Home Lab
environment: Windows Server 2022 · Windows 11 client
image: /assets/img/writeups/active-directory/part-3/6.png
tools:
- ipconfig
- ping
- sysdm.cpl
- Windows 11
skills:
- DNS configuration
- Connectivity testing
- Domain join
tldr: Set the client's DNS to the server's IP, confirmed it could reach FakeBank.local by IP and by name with ping, then joined it to the domain as FB-WS01.
---

In this guide, I will show you how to add your employees device to the domain we created.

![Part 3, screenshot 1](/assets/img/writeups/active-directory/part-3/1.png)

Now we are setting up Sarah's PC. Create an admin account named whatever you'd like on the OS.

![Part 3, screenshot 2](/assets/img/writeups/active-directory/part-3/2.png)

And now we will go back to our server. Open the cmd prompt and type ipconfig to find the IP of our server.

![Part 3, screenshot 3](/assets/img/writeups/active-directory/part-3/3.png)

Open the control panel and navigate to the Network settings page. open our connection type and click properties.

![Part 3, screenshot 4](/assets/img/writeups/active-directory/part-3/4.png)

Click the IPv4 settings and hit properties.

![Part 3, screenshot 5](/assets/img/writeups/active-directory/part-3/5.png)

Click to use a custom DNS address and enter the IP of our server.

![Part 3, screenshot 6](/assets/img/writeups/active-directory/part-3/6.png)

Now try to ping our server, both by IP and the Local address. If both come back we are successfully connected!!

![Part 3, screenshot 7](/assets/img/writeups/active-directory/part-3/7.png)

Now hit the Windows key and R at the same time to open the RUN command box. Enter Sysdm.cpl to open the domain changes.

![Part 3, screenshot 8](/assets/img/writeups/active-directory/part-3/8.png)

Click Domain and change it to our servers domain.

![Part 3, screenshot 9](/assets/img/writeups/active-directory/part-3/9.png)

Enter the domain account info.

![Part 3, screenshot 10](/assets/img/writeups/active-directory/part-3/10.png)

We will now see a message telling us we are successfully connected!! You can now move to Step Four: Managing Users and Computers with Group Policy
