# SSH

Secure Shell

- Protocol to communicate with Computers
- control remote computer/server
- traffic is encrypted

## Client/Server Communication

- Server or Client you loginto needs a "daemon"
- SSH is the client
- SSHD is the server(Open SSH Daemon)
- The server must have SSHD installed and running or you will not be able to connect using SSH

## Authentication Methods

ssh name@192.168.1.X

Password
Public/Private Key Pair

- generate ssh key on Machine --> safer than Passwords

Host Based

- file which stores all known hosts

## Generating Keys

greate public and private key

    $ ssh-keygen

- ~/.ssh/id_rsa (Private Key)

- ~/.ssh/id_rsa.pub (Public Key) --> needs to go on service

Public key goes into server "authorized_keys" file

## What about Windows

- windows 10 now suppports native ssh
- putty is used in older versions of windows
- git bash & other terminal programs include the SSH command & other Unix tools

## LOCAL SERVER THAT IS ON NETWORK

1.  ssh robert@hostname
    -> first time asks for password to authenticate user on host

1.  ssh-keygen --> on local machine

1.  ssh-copy-id user@hostname (use -i for other identities)

#### Manual Way:

1. ls .ssh --> shows all keys in ~/.ssh

1. cat .ssh/id_rsa.pub --> display key

1. id_rsa.pub nees to be copyed to the server
   -->

1. cat .ssh/authorized_keys to see key on server

### SEPERATE KEYS

add identity

    $ ssh-add ~/.ssh/id_rsa_do

-->digital ocean example

Public Key needs to be in authorized_keys folder on server!

Disable root Password Login for Server

    $ sudo nano /etc/ssh/sshd_config

Edit:
PermitRootLogin no
