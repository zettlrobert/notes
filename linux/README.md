# Introduction to Linux

### Access to Linux System VM on Windows
Research setup on corresponding Documentation,  i recommend an actual Linux Machine or VM.
* Putty(Terminal Client to Connect)
* SecureCRT
* ssh

### Network Command
List available Interfaces
        
        $ ip addr 
        $ ifconfig


## Linux File System
#### Structure

|directory name| what it is for|
|--|--|
| bin/          |everyday user commands                                                                                                 |
| boot/         |files for the bootloader (grub/systemd)                                                                                |
| dev/          |system devices (peripherals)                                                                                           |
| etc/          |configuration files, always backup before changeing                                                                    |
| home/         |home directory for the user names after username                                                                       |
| lib/          |C programming library files needed by commands and apps                                                                |
| media/        |cd and disc mounts                                                                                                     |
| mnt/          |mount external filesystems                                                                                             |
| opt/          |optional add-on applications (Not part of the OS)                                                                      |
| root/         |root user home directory not the same as /                                                                             |
| run/          |System daemons that start very early (e.g. systemd and udev) store temporary runtime files like PID files              |
| sbin/         |System, filesystem commands                                                                                            |
| svr/          |                                                                                                                       |
| proc/         |running processes, only exists in memory                                                                               |
| tmp/          |directory for temporary files                                                                                          |
| usr/          |                                                                                                                       |
| var/          |system and application log                                                                                             |
|**IN usr/**    |                                                                                                                       |
| bin/          |everyday user commands                                                                                                 |
| include/      |                                                                                                                       |
| lib/          |C programming library files needed by commands and apps                                                                |
| sbin/         |System, filesystem commands                                                                                            |
|**In var/**    |       |
| cache/        |       |
| lob/          |       |
| spool/        |       |
| tmp/          |       |
|               |       |


## Navigate the Filesystem

#### cd
* change directory

#### pwd
* print working directory

#### ls
* list content of directory

#### ls -l

* list list as List

#### ltr
* list time(timestamp) reverse

#### There are two paths to navigate to a filesystem
* Absolute Path
 * An absolute path always begins with a "/". This indicates that the path starts at the root directory.
* Relative Path
 * A relative path does not begin with a "/". It identifies a location relative to your working directory


## Directory Listing Attributes
##### ls -l
  Type  |  # of Links | Owner |  Group |  Size | Month | Day | Time | Name
* dr
  * directory
* l
  * link
* regular file
  * regular file


### Creating Files and Directories
* Creating Files
  * touch
  * cp
  * vi

* Creating Directories
 * mkdir

* Copy
 * cp
    * cp target newFileName


### Linux File Types
| Starts with: | Meaning |
|---|---|
| - | Regular File |
| d | Directory |
| l | link |
| c | special file or device file |
| s | socket |
| p | named pipe |
| b | block device |


### Find Files and Directories
Two main commands
* find
  * search from root directory for file ifcfg-enp0s3
        $ find / -name "ifcfg-enp0s3"

* locate
  *  man find/locate --> list options for commands


#### Difference between find and locate:
locate
*  uses a prebuildt database, which should be regularly updated

find
* iterates over a filesystem to locate  files.

#### -->locate is faster than find, but can be inaccurate if the database is not updated.
        $ run updatedb


### Changing Password
        $ passwd userid


### Wild Cards
*
* represents zero or more characters

?
* represents a single character

[]
* represents a range of characters

#### Examples::
* Create 9 test files
      $ touch [0-9]test

\\
* escape character

^ (called: caret)
* beginning of the line

$
* the end of the line


### Soft and Hard Links(Shortcuts)
#### inode
* pointer or number of a file on the hard disk

#### soft link
* link will be removed if file is removed or renamed
  * ln -s

#### hard link
* !!Only work on same Partition
* deleting renaming or moving the original file will not affect the hard link
 * ln


### Commands Syntax
**Command options and arguments**

#### Commands typically have the syntax:
command option(s) argument(s)

#### Options:
* Modify the way that a command works
* Usually consist of a hyphen or dash followed by a single letter
* Some commands accept mult8iple options which can usually be grouped together after a signle hyphen

#### Arguments:
* Most commands are used together with one or more arguments
* Some commands assume a default argument if none is supplied
* Arguments are optional for some commands and required by others

  man command--> shows Options for command


### File Permissions
UNIX is a multi-user system. Every file and directory in your account can be protected from or made accessible to other users by changing its access permissions
Every user has responsibility for controlling access to their files.

#### Permissions for a file or directory may be restricted to by types
r
* read

w
* write

x
* execute

#### Each permission (rwx) can be controlled at three levels
u
* user = you

g
* group = can be people in the same project

o
* other = everyone on the system

#### File or Directory permission can be displayed by running ls -l command
* rwxrwxrwx

### Command to change permission
        $ chmod


## File Ownership
There are two owners of a file or directory
* User and group
  * chown changes the ownership of a file
  * chgrp changes the group ownership of a file


### Help Commands
3 types of help commands
*  whatis command
*  command --help
*  man command(for manual)


### TAB Completion and Up Arrow
* TAB key completes the available commands, files or directories
* up arrow key returns last run command


### Adding Text to Files (Redirects)
3 Simple ways to add text to a file
*  vi (integrated text editor)
*  redirect command output > or >>
  * example
    * result of ls -ltr to a file
      * ls -ltr > filename
    * echo > or >>
      * echo "exampletext in an example sentence" > filename(one '>' overwrites last file)
      * echo "this is another example sentence" > filename(two '>>' append test to file filename)


### Standard Output to a file (tee)
tee
* is used to store and vie the output of any command
  *  --> breaks output of a program so that it can be both displayed and saved in a file.(simultaneously)
    *  echo "This is a Teststring" | tee testfile -->overwrittes 'testfile'
    *  echo "This is a Teststring" | tee -a testfile --> appends to 'testfile'


### Pipes
A pipe is used by the shell to connect the output of one command directly to the input of another command
*  Symbol for pipe |
 * command1 [arguments] | command2 [arguments]

#### Example 1
Output One Page at a time::
        $ ls -ltr | more

####  Example 2
Gives you the last line of your output
* Tipp: ll shorthand for ls -l(not on 'every' unixsystem)
        $ ll | tail -1


### File Maintenance Commands
command selected file destination

| command | meaning |
|--|--|
| cp | copy |
| rm | remove |
| mv | move and rename |
| mkdir | create directory |
| rm dir | remove directory |
| rm -r | remove directory recursivly |
| rm -rf | forcefully removes sub-directories and its contents |
| chgrp | change ownership (on gruop level) |
| chown | change ownership (user level) |

**. is current destination**

        $ cp filename .

copys file to current location


### File Display Commands(display file content)
| command | what it does |
|---|---|
| cat | views the entire content of a file regardless of pages |
| more | views content of a file on page at a time |
| less | views content of a page in reverse order can view one line at a time|
| head | select how many lines you want to view from top of file|
| tail | select how many lines you want to view from bottom of file|


### Filters / Text Processors Commands
#### cut
cut parts of lines from specified files or piped data and prints to output
* cut filename != work
* man page for flags

    $ cut -flags filename


#### awk
for data extraction fields form a file or from an output
* man page
* get first column
     $ awk '{print $1}' filename
* list first and 3rd column of output ls -l
     $ ls -l | awk '{print $1,$3}'
* search for "Jerry string in a file"
     $ awk '/Jerry/  {print}' filename
* only first field of passwd-file
     $ awk -F: '{print $1}' /etc/passwd


#### grep and egrep
global regular expression print, processes text line by line and prints any lines which match a specified pattern
* search for keyword in a file
    $ grep Keyword filename

* egrep is for multiple keywords
    $ egrep "keyword1|keyword2" filename


#### sort
* sorts the file in alphabetical order
* sort -r sorts in reverse
    $ sort filename

#### uniq
sort before using uniq
* removes all duplicates from a file
* sort | uniq gives you one from each

#### wc
* wordcount
* counts the wordcount in file



### Compare Files

#### diff (compares line by line)
        $ diff file1 file2
#### cmp (compares byte by byte)
        $ cmp file1 file2


### Compress and un-Compress Files

#### tar
* compress

        $ tar cvf dirname.tar directoryName

* uncompress

        $ tar xvf directoryName

* gzip (compress)

        $ gzip directoryName

* gzip -d OR gunzip (uncompress)

        $ gzip -d directoryName


#### Truncate File Size(truncate)
is used to shrink or extend the size of a file to the specified size, CHOPS no compression
size specifies integer

        $ truncate -s 10 filename


#### Combining and splitting files
example:

        $ cat file1 file2 file3 > file4
        $ split file4

        $ split -1 300 file.txt childfile

**splits file.txt into 300 lines per file and outputs to childfileaa, cildfileab ...**

#### show lines:

        $ cat examplefile | wc -l

split every two lines and put in file:

        $ split -l 2 examplefile outputname


### Linux System Administration

#### Linux File Editors

available on most linux systems:
*  vi
 * --> visual editor
*  ed
 * --> standard line editor
*  ex
 * --> extended line editor
*  emacs
 * --> full screen editor
*  pico
 * --> beginners editor
*  vim
 * --> advanced version of vi


#### Most common commands vi(m)

* i
 * insert

* Esc
 * escape out of any mode

* r
 * replace

* d
 * delete

* :q!
 * quit without saving

* wq!
 * write and quit (write and safe)


### "sed" Command

* Replace a string in a file with a new string
* find and delete a line
* remove empty lines
* remove the first or n lines in a file
* replace tagbs with spaces
* show defined lines from a file
* substitute with vi editor

replace in file example:
sed -i 's/NameA/NameB/g' filename search for NameA replace with NameB replace in file.

* s - substitute
* d - delete


## User Account Management

### Commands

* useradd - crate new user
* groupadd - create new group
* userdel - delete user
* groupdel - delete group
* usermod - modify user

**Record is maintained in three different files**
* /etc/passwd
* /etc/group
* /etc/shadow

Example:
useradd -g superheros -s /bin/bash -c "user description" -m -d /homne/spiderman spiderman

1. create user --> useradd spiderman
1. check if created --> id spiderman --> go to home directory
1. create new group --> gruopadd superheros --> cat /etc/groups
1. delete user and home directory --> userdel -r spiderman
1. delete group --> gruopdel groupname
1. modify user --> usermod (look up manpage)
1. add user to group --> usermod -G groupname username --> check grep username /etc/group
1. chgrp for user and subsequent folders --> chgrp -R groupname username

#### Create user with all Parameters

* useradd -g usergroup -s /bin/bash -c "Description for User" -m -d /home/username username
* passwd username --> changes password


### Switch users and sudo Access
sudo access is a command which allows ordinary user to run root level commands

* su - username
* sudo command
* visudo - edits /etc/sudoers


### Monitor Users
#### Basic Commands
* who - tells you how many people are logged in --> if there is high load on system
* last - every user who has been logged in --> with time of login
* w - like who just with more information
* finger - more information about user...
* id - id username


### Talk to Users
* users - see all loggedin users
* wall - broadcasts message to everyone who is loggedin on the system
* write - writte to one specific user


### Linux Account Authentication
#### Types of Accounts
* Local accounts
* Domain/Directory accounts


### Difference between Active Directory, LDAP, IDM, WinBIND, OpenLDAP
* Active Directory = Microsoft --> for Windows
* DIM = Identity Manger --> Linux (Red Hat)
* WinBIND = Used in Linux to communicate with Windows (SAMBA)
* OpenLDAP(open source) --> Directory Service for Linux or Unix type of Envoirnment
* IBM Directory Server
* LDAP = Lightweight Directory Access Protocol


### System Utility Commands
* date - date and time
* uptime - how long the system has been up
* hostname - hostname of linux machine
* uname -a - details about system  
* which - location of command you run (which pwd) ls -l /usr/bin/pwd
* cal - calendar
* bc - binary calculator


## Processes and Jobs
* Appllication = Service --> programm that runs on computer
* Script = executalbe file
* Process = executed script or command creates a process
* Daemon = runs continously in the background, keeps listening
* Threads = every process could have multiple threads
* Job = created by scheduler to run application and services

## Process/Service Commands
* systemctl or service
* ps --> allows to see processes which are running on system
* top --> see all processes on system
* kill --> kills process by name or processid
* crontab --> schedule processes, applications and services
* at --> like crontab but only onetime

### Processes and Jobs
* systemctl -> start and stop an application + enable at boottime
 * systemctl restart chronysl --> check with ps -ef | grep ntpd
 * systemctl status process
* systemctl enable application --> creates syslink
* systemctl stop application --> stop systemctl
* top --> tell you about systemressources
* crontab -e


#### Cronjobs
* 4 different tyoes of cronjobs
 * houerly
 * daily
 * Weekly
 * Monthly
* setup in ./etc/cron.__ (directory)
* timig for each are set in ./etc/anacrontab -- expect hourly
* for hourly /etc/cron.d/0hourly


#### Process Management
##### Get prompt back and run Process
* Background = Ctrl-z, jobs and bg

* Foreground = fg

* Run process even after exit = nohup process &
  OR = nohup process > /dev/null 2>&1 & --> send information to dev null

* Kill a process by name = pkill

* Process priority = nice (e.g. nice -n 5 process)
  * The niceness scale goes form -20 to 19. The lower the number the more priority that task gets.

* Process monitoring = top

* List process = ps


### System Monitoring
* top  - CPU, Memory information ...

* df -a  - diskpartition information
 * du  - spacemangement

* dmesg  - output of the system related warnings
 * dmesg | more - anything related to systemhardware

* iostat 1  - how to communicate with disk refresh every second

* netstat -rnv  -
 * netstat | more  - wahts connected to system and additional information

* free  - gives you physical memory and swap

* cat /proc/cpuinfo  - read file cpuinfo

* cat /proc/meminfo | more


### Log Monitoring
Log Directory = /var/log

* boot -- system boot or reboot how memory is cleaned up if issues exist
* chronyd = NTP  -- any type of changes we make on the chronyd service
* cron  -- if a job or process the activity is logged here
* maillog  -- send mail daemon income and outgoing mails are recorded here
* secure  -- records all logging in and logging out activity
* **messages** - if there is an issue with the machine look at this log!!!
 * grep -i error messages
* httpd  --


### System Maintenance Commands

* shutdown
* init 0-7 --> man init
* reboot
* halt


### Changing System Hostname
hostname is safed in /etc/hostname

* hostnamectl - set-hostname newhostname


### Finding System Information
* cat /etc/operatingsystem-release (exchange for os ll | grep release)
* uname -a -- Linux, hostname, Kernelversion...
* dmidecode | more -- Bios information ...


### Terminal Control Keys
Some useful Keycombination usually with CTRL + Key

* CTRL - u  -- erase everything typed in the command line

* CTRL - c  --  stop/kill a command

* CTRL - z  -- suspend a command

* CTRL - d  -- exit from an interactive program (signals end of data)

* clear  -- clears screen

* exit  -- exit out of sheel, terminal or a user session

* script  -- commans stores terminal activities in a log file that can be named by a user, when a name is not provided, the default file name "typescript" is used


### Recover Root Password
* Restart your computer
* Edit grub
* Change password
* Restart

edit file to allow writte:
* rw init=/sysroot/bin/sh
* CTRL + X  -- start computer in singleusermode
* chroot /sysroot
* passwd root
* touch /.autorelabel
* reboot


### Environment Variables
Dynamic-named value that can affect the way running processes will behave. They are part of the environment in which a process runs

Defined rules and values to build an environment...

##### View all environment variables
 * env
 * printenv

##### view one environment variable
 * echo $shell

##### set environment variables
 * export TEST=1
 * echo $TEST

##### set environment variables
 * vi .bashrc
 * TEST='123'
 * export TEST

##### To set global environment variable
 * vi /etc/profile
 * TEST='123'
 * export TEST

check for mail variable
* echo $MAIL

#### System Variables
* /etc/profile
* /etc/bashrc


## Linux Kernel
Interface between hardware and Software

## Introduction to Shell
It's like a container, Interface between users and Kernel/OS, CLI is a Shell


#### Fidn your Shell
* Echo $0
* available Shells "cat /etc/shells"
* /etc/passwd

Windows GUI, KDE GUI, Linux sh, bash are shells


### Types of Shells
* Gnome
* KDE
* sh
* bash - born again shell
* csh
* tcsh
* ksh


### Shell Scripting
An executable file containing multiple shell commands thate are executed sequentially.

can contain:
* Shell (#!/bin/bash)
* # -- comments
* commands -- echo, cp, grep etc...
* statements -- if, while, for etc...

* Shell script should have executable permissions. -rwx r-x r-x
* Shell scirpt has to be called from absoute path (/home/userdir/script.bash)
* If called from curreent location ./script.bash


### Shell Script - Basic Scripts
* Output to screen "echo" or file ">"
* Creating tasks
 * get id, current location, your files directories, system info
 * creating files or directories
* Filters/Text processors through scripts (cut, awk, grep, sort, uniq, wc)
