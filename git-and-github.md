# Git and GitHub

### Vocabulary
- git
- GitHub
- version control
- repo
- clone
- push
- pull
- GUI

Checking the configuration for user name and password:  
- $ git config --global user.name
- $ git config --global user.email

### Git and GitHub
Git - software that tracks version control
GitHub - GUI for git technology


Process:
1) From GitHub to local
  - green code button
  - copy the url (clipboard icon)
  `$ git clone <paste url>`
  
2) Changes to the code
  - $ git branch (informational command)
  - Checkout a new branch
  - $ git checkout -b git-sandbox-sp
  - Code!
  - $ touch hello-world-sarah.md
3) From local back to GitHub
  - $ git status (informational command, check the branch, what changes have been made)
  - $ git add .
  - $ git commit -m "initial commit"
  - $ git push origin <branch-name>
4) Updating local from changes on GitHub
  - merge code on gitHub
  - delete branch on GitHub
  - $ git checkout main
  - $ git pull origin main
  - $ git branch -d <branch-name>
