# Introduction to Linux

### Access to Linux System VM on Windows

Research setup on corresponding Documentation, i recommend an actual Linux Machine or VM.

- Putty(Terminal Client to Connect)
- SecureCRT
- ssh

### Network Command

List available Interfaces

        $ ip addr
        $ ifconfig

## Linux File System

#### Structure

| directory name | what it is for                                                                                            |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| bin/           | everyday user commands \                                                                                  |
| boot/          | files for the bootloader (grub/systemd)                                                                   |
| dev/           | system devices (peripherals)                                                                              |
| etc/           | configuration files, always backup before changeing                                                       |
| home/          | home directory for the user names after username                                                          |
| lib/           | C programming library files needed by commands and apps                                                   |
| media/         | cd and disc mounts                                                                                        |
| mnt/           | mount external filesystems                                                                                |
| opt/           | optional add-on applications (Not part of the OS)                                                         |
| root/          | root user home directory not the same as /                                                                |
| run/           | System daemons that start very early (e.g. systemd and udev) store temporary runtime files like PID files |
| sbin/          | System, filesystem commands                                                                               |
| svr/           |                                                                                                           |
| proc/          | running processes, only exists in memory                                                                  |
| tmp/           | directory for temporary files                                                                             |
| usr/           |                                                                                                           |
| var/           | system and application log                                                                                |
| **IN usr/**    |                                                                                                           |
| bin/           | everyday user commands                                                                                    |
| include/       |                                                                                                           |
| lib/           | C programming library files needed by commands and apps                                                   |
| sbin/          | System, filesystem commands                                                                               |
| **In var/**    |                                                                                                           |
| cache/         |                                                                                                           |
| lob/           |                                                                                                           |
| spool/         |                                                                                                           |
| tmp/           |                                                                                                           |
|                |                                                                                                           |

## Navigate the Filesystem

- change directory

        $ cd

- print working directory

        $ pwd  * list content of directory

        $ ls

- list everything in directory as list

        $ ls -la

- list time(timestamp) reverse

        $ ltr

### There are two paths to navigate to a filesystem

| Absolute Path                                                                                    | Relative Path                                                                                         |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| An absolute path always begins wwith a "/" This indicates that path starts at the root directory | A relativ path does not begin with a "/", it identifies a location relative to your working directory |

### Directory Listing Attributes

        $ ls -l

**Example**

| Type       | Number of Links | Owner | Group     | Size | Month | Day | Time  | Name    |
| ---------- | --------------- | ----- | --------- | ---- | ----- | --- | ----- | ------- |
| drwxr-xr-x | 3               | name  | groupname | 4096 | Feb   | 7   | 15:11 | Android |

### Linux File Types

| Starts with: | Meaning                     |
| ------------ | --------------------------- |
| -            | Regular File                |
| d            | Directory                   |
| l            | link                        |
| c            | special file or device file |
| s            | socket                      |
| p            | named pipe                  |
| b            | block device                |

### Creating Files and Directories

- Creating Files

        $ touch

        $ cp

        $ vi

- Creating Directories

        $ mkdir

- Copy

        $ cp

### Find Files and Directories

- search from root directory for file ifcfg-enp0s3

        $ find / -name "examplename"

- locate (list options with man command)

        $ find/locate

#### Difference between find and locate:

- locate uses a prebuildt database, which should be regularly updated
- find iterates over a filesystem to locate files.

**locate is faster than find, but can be inaccurate if the database is not updated**

        $ run updatedb

### Changing Password

        $ passwd username

### Wild Cards

| \*                   | ?                | []                  | \                           | ^                         | $           |     |     |     |     |     |     |
| -------------------- | ---------------- | ------------------- | --------------------------- | ------------------------- | ----------- | --- | --- | --- | --- | --- | --- |
| 0 or more characters | single character | range of characters | escapes following character | (caret) beginning of line | end of line |     |     |     |     |     |     |
|                      |                  |                     |                             |                           |             |     |     |     |     |     |     |

**Example**

- Create 9 test files

      $ touch [0-9]test

### Soft and Hard Links(Shortcuts)

| inode                                        | soft link                                                  | hard link                                                                                |
| -------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| pointer or number of a file on the hard disk | link will be removed if file is removed or renamed (ln -s) | only work on same partition (renaming or moving original file will not affect hard link) |

## Commands Syntax

**Command options and arguments**

        $ command option(s) argument(s)

### Options:

- Modify the way that a command works
- Usually consist of a hyphen or dash followed by a single letter
- Some commands accept mult8iple options which can usually be grouped together after a signle hyphen

### Arguments:

- Most commands are used together with one or more arguments
- Some commands assume a default argument if none is supplied
- Arguments are optional for some commands and required by others
- show options for command:
-       $ man command

### File Permissions

UNIX is a multi-user system. Every file and directory in your account can be protected from or made accessible to other users by changing its access permissions
Every user has responsibility for controlling access to their files.

#### Permissions for a file or directory may be restricted to by types

| r    | w     | x       |
| ---- | ----- | ------- |
| read | write | execute |

### Each permission (rwx) can be controlled at three levels

| u    | g     | o                      |
| ---- | ----- | ---------------------- |
| user | group | other                  |
| you  | group | everyone on the system |

**File or Directory permission can be displayed by running ls -l command**

## Command to change permission

        $ chmod

### File Ownership

There are two owners of a file or directory

- User and group

  - changes the ownership of a file

        $ chown

- changes the group ownership of a file

        $ chgrp

### Help Commands

3 types of help commands

        $ whatis

        $ help

        $ man

### TAB Completion and Up Arrow

- TAB key completes the available commands, files or directories
- up arrow key returns last run command

### Adding Text to Files (Redirects)

3 Simple ways to add text to a file

| vi                     | >                    | >>                    |
| ---------------------- | -------------------- | --------------------- |
| integrated text editor | redirect output      | redirect output       |
|                        | overwrites last file | append to end of file |

**Example**

        $ ls -ltr > filename

        $ echo "example" > filename

        $ echo "other example" >> filename

### Standard Output to a file (tee)

        $ tee

- is used to store and view the output of any command

  - breaks output of a program so that it can be both displayed and saved in a file.(simultaneously)

  - overwrittes 'testfile'

        $ echo "This is a Teststring" | tee testfile

  - appends to 'testfile'

        $ echo "This is a Teststring" | tee -a testfile

### Pipes

A pipe is used by the shell to connect the output of one command directly to the input of another command

- Symbol for pipe |

       $ command1 [arguments] | command2 [arguments]

**Example 1**

- Output One Page at a time::
  $ ls -ltr | more

**Example 2**
Gives you the last line of your output

- Tipp: ll shorthand for ls -l(not on 'every' unixsystem)

        $ ll | tail -1

### File Maintenance Commands

command selected file destination

| command   | meaning                                             |
| --------- | --------------------------------------------------- |
| cp        | copy                                                |
| rm        | remove                                              |
| mv        | move and rename                                     |
| mkdir     | create directory                                    |
| rm -r dir | remove directory recursivly                         |
| rm -rf    | forcefully removes sub-directories and its contents |
| chgrp     | change ownership (on gruop level)                   |
| chown     | change ownership (user level)                       |

**. is current destination**

- copys file to current location

        $ cp filename .

### File Display Commands(display file content)

| command | what it does                                                         |
| ------- | -------------------------------------------------------------------- |
| cat     | views the entire content of a file regardless of pages               |
| more    | views content of a file on page at a time                            |
| less    | views content of a page in reverse order can view one line at a time |
| head    | select how many lines you want to view from top of file              |
| tail    | select how many lines you want to view from bottom of file           |

### Filters / Text Processors Commands

| cut                                                                        | awk                                                      | grep and egrep                                                                                                   |
| -------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| cut parts of lines form specified files or piped data and prints to output | for data extraction fields from a file or from an output | global regular exprssion print, processes text line by line and prints any lines which match a specified pattern |
| cut filename != work                                                       |                                                          |                                                                                                                  |

    $ cut -flags filename

- get first column

        $ awk '{print $1}' filename

- list first and 3rd column of output ls -l

        $ ls -l | awk '{print $1,$3}'

- search for "Jerry string in a file"

        $ awk '/Jerry/  {print}' filename

- only first field of passwd-file

        $ awk -F: '{print $1}' /etc/passwd

- search for keyword in a file

        $ grep Keyword filename

- egrep is for multiple keywords
  $ egrep "keyword1|keyword2" filename

### sort

- sorts the file in alphabetical order
- sort -r sorts in reverse

        $ sort filename

### uniq

- sort before using uniq
- removes all duplicates from a file
- sort | uniq gives you one from each

### wc

- wordcount
- counts the wordcount in file

### Compare Files

- diff (compares line by line)

        $ diff file1 file2

### cmp (compares byte by byte)

        $ cmp file1 file2

### Compress and un-Compress Files

| compress | uncompress      |
| -------- | --------------- |
| $ tar    | $ tar xvfz      |
| gzip     | gzip -d / unzip |

        $ tar cvf dirname.tar directoryName

        $ tar xvf directoryName

        $ gzip directoryName

        $ gzip -d directoryName

### Truncate File Size(truncate)

is used to shrink or extend the size of a file to the specified size, CHOPS no compression
size specifies integer

        $ truncate -s 10 filename

### Combining and splitting files

example:

        $ cat file1 file2 file3 > file4
        $ split file4

        $ split -1 300 file.txt childfile

**splits file.txt into 300 lines per file and outputs to childfileaa, cildfileab ...**

#### show lines:

        $ cat examplefile | wc -l

split every two lines and put in file:

        $ split -l 2 examplefile outputname

## Linux System Administration

#### Linux File Editors

| vi            | ed                   | ex                   | emacs              | pico | vim              |
| ------------- | -------------------- | -------------------- | ------------------ | ---- | ---------------- | ---------------------- |
| visual editor | standart line editor | extended line editor | full screen editor |      | beginners editor | advanced version of vi |

#### Most common commands vi(m)

| i      | Esc                    | r       | d      | :q!                 | wq!            |
| ------ | ---------------------- | ------- | ------ | ------------------- | -------------- |
| insert | escape out of any mode | replace | delete | quit without saving | write and quit |

### "sed" Command

- Replace a string in a file with a new string
- find and delete a line
- remove empty lines
- remove the first or n lines in a file
- replace tagbs with spaces
- show defined lines from a file
- substitute with vi editor

replace in file example:
sed -i 's/NameA/NameB/g' filename search for NameA replace with NameB replace in file.

- s - substitute
- d - delete

## User Account Management

### Commands

| useradd         | groupadd         | userdel     | groupdel     | usermod     |
| --------------- | ---------------- | ----------- | ------------ | ----------- |
| create new user | create new group | delete user | delete group | modify user |

**Record is maintained in three different files**

- /etc/passwd
- /etc/group
- /etc/shadow

Example:

        $ useradd -g superheros -s /bin/bash -c "user description" -m -d /homne/spiderman spiderman

1. create user --> useradd spiderman
2. check if created --> id spiderman --> go to home directory
3. create new group --> gruopadd superheros --> cat /etc/groups
4. delete user and home directory --> userdel -r spiderman
5. delete group --> gruopdel groupname
6. modify user --> usermod (look up manpage)
7. add user to group --> usermod -G groupname username --> check grep username /etc/group
8. chgrp for user and subsequent folders --> chgrp -R groupname username

### Create user with all Parameters

        $ useradd -g usergroup -s /bin/bash -c "Description for User" -m -d /home/username username

        $ passwd username --> changes password

### Switch users and sudo Access

sudo access is a command which allows ordinary user to run root level commands

| su       | sudo    | visudo             |
| -------- | ------- | ------------------ |
| username | command | edits /etc/sudoers |

### Monitor Users

| who                                     | last                              | w                                    | finger                      | id          |
| --------------------------------------- | --------------------------------- | ------------------------------------ | --------------------------- | ----------- |
| tells you how many people are logged in | every user who has been logged in | elike who just with more information | more information about user | id username |
| if there is high load on system         | with time of login                |

### Talk to Users

| $ users                | $ wall                                                        | $ write                     |
| ---------------------- | ------------------------------------------------------------- | --------------------------- |
| see all loggedin users | broadcasts message to everyone who is logged in on the system | writte to one specific user |

### Linux Account Authentication

#### Types of Accounts

- Local accounts
- Domain/Directory accounts

### Difference between Active Directory, LDAP, IDM, WinBIND, OpenLDAP

| Active Directory | DIM             | WinBIND                                           | OpenLDAP(open source)                                  | IBM Directory Server | LDAP |
| ---------------- | --------------- | ------------------------------------------------- | ------------------------------------------------------ | -------------------- | ---- |
| Microsoft        | Identity Manger | Used in Linux to communicate with Windows (SAMBA) | Directory Service for Linux or Unix type of Envoirment |
| Windows          | Linux(Red Hat)  |                                                   |                                                        |                      |      |

### System Utility Commands

| $ date        | $ uptime                        | $ hostname                | $ uname -a           | $ which                                                  | $ cal    | $ bc              |
| ------------- | ------------------------------- | ------------------------- | -------------------- | -------------------------------------------------------- | -------- | ----------------- |
| date and time | how long the system has been up | hostname of linux machine | details about system | location of command you run which pwd ls -l /usr/bin/pwd | calendar | binary calculator |

## Processes and Jobs

| Application                            | Script          | Process                                     | Daemon                                              | Threads                                   | Job                                                  |
| -------------------------------------- | --------------- | ------------------------------------------- | --------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------- |
| Service(Program that runs on computer) | executable file | execute script or command creates a process | runs continously in the background, keeps listening | every process could have multiple threads | created by scheduler to run application and servoces |

## Process/Service Commands

| $ systemctl | $ ps                                                | $ top                       | $ kill                             | $ crontab                                    | $ at                          |
| ----------- | --------------------------------------------------- | --------------------------- | ---------------------------------- | -------------------------------------------- | ----------------------------- |
|             | allows to see processes which are running on system | see all processes on system | kills process by name or processid | schedule processes, applicaitons and servics | like crontab but only onetime |

### Processes and Jobs

**systemctl**

| start                                              | restart chronysl | status process | enable         | stop                             | top | crontab-e |
| -------------------------------------------------- | ---------------- | -------------- | -------------- | -------------------------------- | --- | --------- |
| start and stop an applicaiton + enable at boottime |                  |                | create syslink | tell you agbout systemressources |     |           |

#### Cronjobs

- 4 different tyoes of cronjobs
- houerly
- daily
- Weekly
- Monthly
- setup in ./etc/cron.\_\_ (directory)
- timig for each are set in ./etc/anacrontab -- expect hourly
- for hourly /etc/cron.d/0hourly

## Process Management

#### Get prompt back and run Process

- Background = Ctrl-z, jobs and bg

- Foreground = fg

- Run process even after exit = nohup process &
  OR = nohup process > /dev/null 2>&1 & --> send information to dev null

- Kill a process by name = pkill

- Process priority = nice (e.g. nice -n 5 process)

  - The niceness scale goes form -20 to 19. The lower the number the more priority that task gets.

- Process monitoring = top

- List process = ps

### System Monitoring

- CPU, Memory information ...

        $ top

- Diskpartition information

        $ df -a

- Spacemangement - careful!

       $ du

- output of the system related warnings

        $ dmesg

- anything related to systemhardware

        $ dmesg | more -

- how to communicate with disk refresh every second

        $ iostat 1

- waht is connected to system and additional information

        $ netstat | more

        $ netstat -rnv  -

- gives you physical memory and swap

        $ free

- read file cpuinfo

        $ cat /proc/cpuinfo

- cat /proc/meminfo | more

### Log Monitoring

Log Directory = /var/log

- boot
  - system boot or reboot how memory is cleaned up if issues exist
- chronyd = NTP
  - any type of changes we make on the chronyd service
- cron
  - if a job or process the activity is logged here
- maillog
  - send mail daemon income and outgoing mails are recorded here
- secure
  - records all logging in and logging out activity
- **messages**
  - if there is an issue with the machine look at this log!!!
- grep -i
  - rror messages
- httpd

### System Maintenance Commands

- shutdown
- init 0-7 --> man init
- reboot
- halt

### Changing System Hostname

hostname is safed in /etc/hostname

        $ hostnamectl - set-hostname newhostname

### Finding System Information

- cat /etc/operatingsystem-release (exchange for os ll | grep release)

- Linux, hostname, Kernelversion...

        $ uname -a

- Bios information

        $ dmidecode | more

### Terminal Control Keys

Some useful Keycombination usually with CTRL + Key

| CTRL - u                                   | CTRL - c            | CTRL - z          | CTRL - d                                               | clear         | exit                                          | script                                                                                                                                                |
| ------------------------------------------ | ------------------- | ----------------- | ------------------------------------------------------ | ------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| erase everything typed in the command line | stop/kill a command | suspend a command | exit from an interactive program (signals end of data) | clears screen | exit out of sheel, terminal or a user session | command stores terminal activities in a log file that can be named by a user, when a name is not provided, the default file name "typescript" is used |

### Recover Root Password

- Restart your computer
- Edit grub
- Change password
- Restart

edit file to allow writte:

- rw init=/sysroot/bin/sh
- CTRL + X -- start computer in singleusermode
- chroot /sysroot
- passwd root
- touch /.autorelabel
- reboot

## Environment Variables

Dynamic-named value that can affect the way running processes will behave. They are part of the environment in which a process runs

Defined rules and values to build an environment...

### View all environment variables

- env
- printenv

### view one environment variable

- echo $shell

### set environment variables

- export TEST=1
- echo $TEST

### set environment variables

- vi .zshrc
- TEST='123'
- export TEST

## To set global environment variable

- vi /etc/profile
- TEST='123'
- export TEST

## System Variables

- /etc/profile
- /etc/zshrc

## Linux Kernel

Interface between hardware and Software

## Introduction to Shell

It's like a container, Interface between users and Kernel/OS, CLI is a Shell

#### Find your Shell

- Echo $0
- available Shells "cat /etc/shells"
- /etc/passwd

Windows GUI, KDE GUI, Linux sh, bash, zsh are shells

### Shell Scripting

An executable file containing multiple shell commands thate are executed sequentially.

can contain:

- Shell (#!/bin/bash)
- # -- comments
- commands -- echo, cp, grep etc...
- statements -- if, while, for etc...

- Shell script should have executable permissions. -rwx r-x r-x
- Shell scirpt has to be called from absoute path (/home/userdir/script.bash)
- If called from curreent location ./script.bash

### Shell Script - Basic Scripts

- Output to screen "echo" or file ">"
- Creating tasks
- get id, current location, your files directories, system info
- creating files or directories
- Filters/Text processors through scripts (cut, awk, grep, sort, uniq, wc)
