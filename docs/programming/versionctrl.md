---
sidebar_position: 2
---

# Version Control - Start from the beginning! 

Version control! This is needed for ANY project. Period. No exceptions. There are certain nuances, and different types of it, but you need it. Don't think you don't. 

## Choose your flavor

When we think fo Version Control, most of the time you think of a GIT repository (git repo), not Subverion (SVN). When I was first starting out, both were in their early stages, and GIT had not quite taken off to the extent it has today. I remember my first couple of jobs used SVN. SVN would allow a developer to check out a single file, and would issue a lock on that file in a central server. The developer could make their changes, and when they save/checked in the file, it would be updated on the server, and then copy itself down to anyone running a local copy. It's great if you have different people working on different pieces, but not so great when the code starts getting intertwined and co-mingling. GIT on the other hand, let you pull down a whole repo, make your changes and edits in your own version (branch) and then push it back to your central repository. There it could be peer reviewed before your changes were brought into the MAIN version of your code. 

Nowadays, when people here GIT, they immediately think of GitHub. There are other options too, GitLab, Gitea, etc. Personally, I run Gitea on in my homelab, and have that mirror to my GitHub public instance. 

## What does AI Say?

Since we live in the new age of AI, I decided to ask Gemini, through Google Search, "what is the difference between svn and git?" Here is what the response was:

> The fundamental difference between SVN (Subversion) and Git lies in their architectural models:
> 1. Architecture:
> SVN (Centralized Version Control System): SVN operates on a client-server model where a single, central repository holds the entire project history. Developers "check out" copies of files, make changes, and then "commit" those changes back to the central server. All operations, including committing and viewing history, require a connection to the central server.
> Git (Distributed Version Control System): Git uses a distributed model where every developer has a complete copy of the entire repository, including the full history, on their local machine. Developers work locally, commit changes to their local repository, and then "push" those changes to a shared, remote repository (like GitHub or GitLab) when ready to collaborate. 
> 2. Offline Capabilities:
> SVN: Limited offline capabilities. Most operations, especially committing, require an active connection to the central server.
> Git: Excellent offline capabilities. Developers can work and commit changes to their local repository even without an internet connection, pushing them to the remote repository later.
> 3. Branching and Merging:
> SVN: Branching and merging are generally more complex and resource-intensive in SVN, often involving copying directories on the server.
> Git: Branching and merging are core features and are designed to be fast, lightweight, and easy to perform locally. This facilitates more flexible workflows and feature development in isolation.
> 4. Repository Content Storage:
> SVN: Stores content as a series of changes to individual files.
> Git: Stores content as a series of snapshots of the entire repository at each commit.
> 5. Performance:
> SVN: Can be slower, especially with large repositories or when performing operations like branching and merging, due to its centralized nature and reliance on server communication.
> Git: Generally faster, particularly for local operations, due to its distributed nature and optimized handling of repository content.
> In essence, SVN offers a more controlled, centralized approach suitable for projects where a single point of truth and strict access control are paramount. Git, on the other hand, provides greater flexibility, speed, and offline capabilities, making it highly popular for collaborative software development and projects requiring agile workflows.

See! That's what I said! 