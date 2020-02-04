# Git
Version Control with Git



## Initialize Git Repository

    $ git init


## Get information about included files
What has changes since last commit

    $ git status


## Untracked files
All files are untracked, to stage them use:

    $ git add filename

To get More information about what has changed 

    $ git add -p

## Staged changes
Staged files need to be commited with a message

    $ git commit -m "commit message"


## Commits
Every commit has a unique identifier


## Basic workflow
1. git init
1. create .gitignore
1. git add . 
1. git commit -m "Commit Message"
1. git remote add origin git@github.com...
1. git push -u origin master



## Additional Commands
* git branch -a
  * lists out all branches
* git checkout branchname
  * create or switch to an available branch 
* git stash
  * save changes that should not be commited immideately
* git merge
  * switch to branch you want to merge into, git merge branchnametomerge
* git reset
  * resets to the latest comit you want tow ork with git reset mode commit
* git remote
  * check what remotes you have or add a new one      