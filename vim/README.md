VIM Tutor.

- vimtutor

- Modal editor
  - Two Main Modes
    - Insert Mode
    - Normal Mode / Shortcut Mode
  - Many different Shortcuts

## VIMTUTOR NOTES

## VIM DIY NOTES

### .vimrc

1. create ~/.vimrc
2. defaults

| setting                                         | does                                     |
| ----------------------------------------------- | ---------------------------------------- |
| syntax on                                       | syntax on may need some extension        |
| set noerrorbells                                | no soundeffects                          |
| set tabstop=4 softtabstop=4                     | only 4 chars long only 4 spaces          |
| set shiftwidth=4                                | shift only by four spaces arrow key over |
| set expandtab                                   | converted from tab to spaces             |
| set smartindent                                 | indent for you                           |
| set nu                                          | nice line numbers                        |
| set nowrap                                      | no wrapping                              |
| set smartcase                                   | case sensitive searching                 |
| set noswapfile                                  | no swap files                            |
| set nobackup                                    | if you have undodir                      |
| set undodir=~/.vim/undodir                      | undo dir                                 |
| set undofile                                    | file per file to backup                  |
| set incsearch                                   | incremental search                       |
| set colorcolumn=80                              |                                          |
| highlight ColorColumn ctermbg=0 guibg=lightgrey |                                          |

- game for neovim vim-be-good to improve

| Key              | Does                                              | Good to know            |
| ---------------- | ------------------------------------------------- | ----------------------- |
| j                | move dowm                                         | --                      |
| k                | move up                                           | --                      |
| h                | move left                                         | --                      |
| l                | move right                                        | --                      |
| w                | move forward by word                              | --                      |
| b                | move backward by word                             | --                      |
| yy               | yank line                                         | --                      |
| p                | paste that line                                   | --                      |
| dd               | delete that line                                  | --                      |
| u                | undo last command                                 | --                      |
| shift + w        | highlight line visual line mode                   | --                      |
| v                | highlight were you are                            | --                      |
| i                | insert mode                                       | --                      |
| esc              | leave insert mode                                 | --                      |
| ctrl + c         | leave insert mode                                 | --                      |
| ctrl + [         | leave insert mode                                 | --                      |
| :w               | safe file                                         | --                      |
|                  |                                                   |                         |
|                  |                                                   |                         |
| o                | goes into insert mode and puts extra line         | --                      |
| O                | goes into insert mode and puts extra line upwards | --                      |
| shift + o        | goes into insert mode and puts extra line         | --                      |
| shift + p        | pastes one line up                                | --                      |
| a                | move over and move into insert mode               | --                      |
| shift + i        | move to first char in line                        | --                      |
| shift + a        | move to last char in line                         | --                      |
| /                | command mode and search for                       | --                      |
| n                | move through search results                       | --                      |
| shift + n        | move through search results in reverse            | --                      |
| \*               | next occurence of whatever is under cursor        | asterisk escaped in .md |
| #                | move backwards through search results in reverse  | --                      |
|                  |                                                   |                         |
|                  |                                                   |                         |
| ff               | jump on first char of commad mode select          | --                      |
| ft               | jump before first char of command mode selecht    | --                      |
| shift + F + char | jump to char                                      | --                      |
| ;                | jump thorugh results in line                      | --                      |
| x                | delete single char                                | --                      |
| shift + d        | delete rest of line                               | --                      |
| s                | delete single char go into insert mode            | --                      |
| c                | like d goes into insert mode                      | --                      |
| dt + char        | del up to the char                                | --                      |
| c                | like d goes into insert mode                      | --                      |
|                  |                                                   |                         |
|                  |                                                   |                         |
| gg               | go to top of file                                 | --                      |
| g                | go to end of file                                 | --                      |
| :integer         | move to specific line                             | --                      |
| integer + j      | execute j integer times                           | --                      |
| ctrl + u         | go up page                                        | --                      |
| ctrl + d         | go down page                                      | --                      |
| %                | move to matching pair                             | --                      |
|                  |                                                   | --                      |
|                  |                                                   | --                      |
