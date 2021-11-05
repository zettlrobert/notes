# Everyday git tricks and Tips

Git aliases are always useful...

````git commit -am 'commit message'````
Will add and commit all files in the current working directory


````git commit --amend -m 'new message'````
Will update the last commit message wit a new one

````
git add .
git commit --amend --no-edit
````
Add files to previous commit + message without changing commit message - Only works locally (do not force)

````
git revert better-days
````
Undo a commit with a new commit

````
git stash save coolstuff
````
Stash  changes with a safename

````
git stash list
git stash apply 
````
List all changes and apply the desired (named) one.

````
git branch -M new-name
````
Rename git branch

````
git log --graph --oneline --decorate
````
Better more concise visual output for git log

````
git bisect commit
git bisect good
git bisect bad
````
Binary Search to walk between commits
git bisect good to continue to next commit
git bisect bad

````
git rebase main --interactive
````
Squash commits together, when on the feature branch.
usepick to use the commit message
use `squash` to squash the message

````
git chckout -
````
Switch back to previous branch

*Overwrite local changes with remote*
````
git fetch origin
git reset --hard origin/master
git clean -df
````




## Git hooks
For JS husky is a good way to lint code before commiting it.









