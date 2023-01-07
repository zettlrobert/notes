# Vim

you should remap esc to capslock

- vimtutor

- Modal editor
  - Two Main Modes
    - Insert Mode
    - Normal Mode / Shortcut Mode
  - Many different Shortcuts

## VIMTUTOR NOTES

- move to end of line $
- move to beginning of line 0
- force quit: shift + z + q
- quit current file and exit: shift + ZQ
- safe current file and exit: shift + ZZ
- insert at start of line: I
- append where you are: a
- append at end of line: A
- delete word: dw
- delete to end of line: d$ OR D
- delete to the end of the word: de
- delete word: dw
- delete the word before: db
- but number before of movement key to move number in key
- delete 5 words forward: d5w
- undo last command: u
- fix whole line: U
- delete if cursor is in middle of word: daw - a for around
- delete everything in parentheses: di(
- delete everything including parentheses: da(
- insert mode until end of the word: cU
- replace parentheses content: ci(
- changte till end of the line: C or c$
- show location in the file: ctrl + g
- move to % of file: 25%
- move to bottom of file: G
- move to top of file: gg
- to search through the file: /
- start new paragraph: o
- jump to matching place cursor on any parentheses type % to find closing parentheses
- substitute something: :s/thee/the (replace thee with the /g at end replaces globally in the line)
- replace in range of lines where the substitution is to be done: :#,#s/old/new/g
- replace every occurrence in the whole file: :%s/old/new/g
- find every occurrence in the whole file with prompt whether to substitute or not: :%s/old/new/gc
- execute shell command: :!
- get listing of files: :!ls
- enter visual selection mode: v
- visually select paragraph: vap
- copy whole paragrahp: yap
- select line by line: V
- block selection: ctrl v
- redoes the last command: .
- yank whole line: yy
- run sequence in normal mode: :norm
- replace more than one char: R (overwrite)
- ignore case sensitive: :set ic
- set highlight and incsearch options: :set hls is --> set into .vimrc
-

## Summary

1. The cursor is moved using either the arrow keys or the hjkl keys.
   h (left) j (down) k (up) l (right)

2. To start Vim from the shell prompt type: vim FILENAME <ENTER>

3. To exit Vim type: <ESC> :q! <ENTER> to trash all changes.
   OR type: <ESC> :wq <ENTER> to save the changes.

4. To delete the character at the cursor type: x

5. To insert or append text type:
   i type inserted text <ESC> insert before the cursor
   A type appended text <ESC> append after the line

NOTE: Pressing <ESC> will place you in Normal mode or will cancel
an unwanted and partially completed command.

1. To delete from the cursor up to the next word type: dw
2. To delete from the cursor to the end of a line type: d$
3. To delete a whole line type: dd

4. To repeat a motion prepend it with a number: 2w
5. The format for a change command is:
   operator [number] motion
   where:
   operator - is what to do, such as d for delete
   [number] - is an optional count to repeat the motion
   motion - moves over the text to operate on, such as w (word),
   $ (to the end of line), etc.

6. To move to the start of the line use a zero: 0

7. To undo previous actions, type: u (lowercase u)
   To undo all the changes on a line, type: U (capital U)
   To undo the undo's, type: CTRL-R

8. To put back text that has just been deleted, type p . This puts the
   deleted text AFTER the cursor (if a line was deleted it will go on the
   line below the cursor).

9. To replace the character under the cursor, type r and then the
   character you want to have there.

10. The change operator allows you to change from the cursor to where the
    motion takes you. eg. Type ce to change from the cursor to the end of
    the word, c$ to change to the end of a line.

11. The format for change is:

    c [number] motion

12. CTRL-G displays your location in the file and the file status.
    G moves to the end of the file.
    number G moves to that line number.
    gg moves to the first line.

13. Typing / followed by a phrase searches FORWARD for the phrase.
    Typing ? followed by a phrase searches BACKWARD for the phrase.
    After a search type n to find the next occurrence in the same direction
    or N to search in the opposite direction.
    CTRL-O takes you back to older positions, CTRL-I to newer positions.

14. Typing % while the cursor is on a (,),[,],{, or } goes to its match.

15. To substitute new for the first old in a line type :s/old/new
    To substitute new for all 'old's on a line type :s/old/new/g
    To substitute phrases between two line #'s type :#,#s/old/new/g
    To substitute all occurrences in the file type :%s/old/new/g
    To ask for confirmation each time add 'c' :%s/old/new/gc

16. Type o to open a line BELOW the cursor and start Insert mode.
    Type O to open a line ABOVE the cursor.

17. Type a to insert text AFTER the cursor.
    Type A to insert text after the end of the line.

18. The e command moves to the end of a word.

19. The y operator yanks (copies) text, p puts (pastes) it.

20. Typing a capital R enters Replace mode until <ESC> is pressed.

21. Typing ":set xxx" sets the option "xxx". Some options are:
    'ic' 'ignorecase' ignore upper/lower case when searching
    'is' 'incsearch' show partial matches for a search phrase
    'hls' 'hlsearch' highlight all matching phrases
    You can either use the long or the short option name.

22. Prepend "no" to switch an option off: :set noic

23. Type :help or press <F1> or <HELP> to open a help window.

24. Type :help cmd to find help on cmd .

25. Type CTRL-W CTRL-W to jump to another window.

26. Type :q to close the help window.

27. Create a vimrc startup script to keep your preferred settings.

28. When typing a : command, press CTRL-D to see possible completions.
    Press <TAB> to use one completion.

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
