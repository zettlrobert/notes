# FZF

[junegunn/fzf](https://github.com/junegunn/fzf#using-linux-package-managers)

Command-line fuzzy finder.
The fuzzy finder launches across the terminal window and we can search for whatever we want.
FZF is indexing files while typing.

## TLDR

- Start fzf on all files in the specified directory:
  `find {{path/to/directory}} -type f | fzf`

- Start fzf for running processes:
  `ps aux | fzf`

- Select multiple files with Shift + Tab and write to a file:
  `find {{path/to/directory}} -type f | fzf --multi > {{filename}}`

- Start fzf with a specified query:
  `fzf --query "{{query}}"`

- Start fzf on entries that start with core and end with either go, rb, or py:
  `fzf --query "^core go$ | rb$ | py$"`

- Start fzf on entries that not match pyc and match exactly travis:
  `fzf --query "!pyc 'travis"`

## Installation

```sh
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
```

The install script will add `[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh` to the .zshrc file

Checks for the existence of a file named ~/.fzf.zsh and, if it exists, sources (executes) the file.

## Upgrading

change into the fzf directory and git pull

### Base Shortcuts

- `CTRL-K` / `CTRL-J` (or `CTRL-P` / `CTRL-N`) to move cursor up and down
- Enter key to select the item, `CTRL-C` / `CTRL-G` / `ESC` to exit
- On multi-select mode (-m), `TAB` and `Shift-TAB` to mark multiple items

`Ctrl+t`
list files+folders in current directory (e.g., type git add , press Ctrl+t, select a few files using Tab, finally Enter)

`Ctrl+r`
search history of shell commands

`Alt+c`
fuzzy change directory

## Layout

fzf by default starts in fullscreen mode, but you can make it start below the cursor with --height option

`--reverse` and `--layout` options are for top-down instaed of default bototm-up layout

To apply defaults we export them in our shell config

`export FZF_DEFAULT_OPTS='--height 40% --layout=reverse --border'`

## Commands to make Aliases

- `fzf --preview --border 'bat --color=always {}'`

[fzf examples](https://github.com/junegunn/fzf/wiki/examples)
