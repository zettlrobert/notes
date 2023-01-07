# Create Bare Repository manage dotfiles

Creates folder which is a git bare repo

    $ git init --bare $HOME/.cfg

Creates alias config which will be used to interact with the git repository

    $ alias config='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'

Set flag -local to the repository to hide files which are not explictly tracked.

    $ config config --local status.showUntrackedFiles no

Add alias to .zshrc

    $ echo "alias config='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'" >> $HOME/.zshrc

**Now every file in the $HOME folder can ve versioned with commands replacing git with the created config alias**

## Install dotfiles onto new system

Make sure the alias is in .zshrc

    $ alias config='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'

Source Repo must ignore the folder where it will be cloned too

    $ echo".cfg" >> .gitignore

clone dotfiles into a bare repo

    $ git clone --bare <git-repo-url> $HOME/.cfg

Define alias in current shell scope

    alias config='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'

cHECKOUT THE CONTENT FROM THE BARE RPEO TO $HOME

    $ config checkout

Set flag showUntrackedFIles to no on local repo

    $ config config --local status.showUntrackedFiles no
