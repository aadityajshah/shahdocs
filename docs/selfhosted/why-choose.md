---
sidebar_position: 2
---

# A Tale As Old as Time... Proxmox vs Docker vs VPS

Everyone seems to want to be in one house. ProxMox, Docker, or VPS. Personally, I say, why choose? The point of Self Hosting to me is to be able to test out different technologies, and different methods, and tooling to accomplish like or different goals. Personally, I have multiple ProxMox instances, and one of which has a Docker Instance, which I am running multiple other services off of. 

The one thing I haven't done is getting a VPS. Because, why? None of my stuff needs crazy HIGH AVAILABILITY (HA) or anything like that at all. And also, I am adverse to paying for things. I like free things. I like things. I control. You might say, well AJ, you had to buy the systems you are running things off of locally. To which my response is, these are all OLD systems, and OLD Raspberry Pis I've had laying around. My instance where I need HA? That's an old MacBook Pro I have. The only thing I really need with HA is DNS, Reverse Proxy, Authentication, and my Cloudflared Tunnel. I'll have more on those soon. 

Docker is cool, and a fun way to spin things up quickly from pre-built images. ProxMox is the same really, but each instance seems to run better (to me at least) and actually behaves like it's own machine each time. I find ProxMox to be much easier to configure, although people argue that Docker is easier, as there is one config file per image. 

## Setting Up ProxMox

I think there are a few Pre-requisites to just jumping in and going for ProxMox. First, make sure you have your IP Table that you want to use figured out. Knowing what Subnet you want to use, and having them divided out for different apps you want to serve will save you loads of headache when you are trying to remember things.