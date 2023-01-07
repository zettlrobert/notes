# Docker

Run Software in Containers that are seperate from local Machine.

**App is the ame on every Machine**

### How it is Different from VM

We have 1 Server, 1 OS and a Container for each App

## Installation from offical Repository

apt install docker.io

Remove old installations before proceeding

      $ sudo apt-get remove docker docker-engine docker.io containerd runc

Install packages to allow apt to use a repository over HTTPS:

      sudo apt-get install \
      apt-transport-https \
      ca-certificates \
      curl \
      gnupg-agent \
      software-properties-common

Add Docker GPG Key

      $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

Verify with Fingerprint 0EBFCD88

Setup stable Repository

    $ sudo add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) \
    stable"

Update Repositories

Install latest Version of Docker Engine -Community and containered

      $ sudo apt-get install docker-ce docker-ce-cli containerd.io

Start and Automate Docker
Docker service needs to be setup to run at startup.

      $ sudo systemctl start docker

      $ sudo systemctl enable docker

Create docker goup

      $ sudo groupadd docker

Add user to docker gruop

      $ sudo usermod -aG docker ${USER}

Reevaluate user membership

      $ su -s ${USER}

[Docker Hub](https://hub.docker.com/search?image_filter=official&type=image) --> Offical Images and Information how to run X

## Commands

Version
$ docker version

Info about Dockers on System
$ docker info

Run Container(nginx) in interactive mode (it) -p(public) map port to 80:80 (second port is what is exposted from the container)

      $ docker container run -it -p 80:80 nginx

Show running Containers

      $ docker container ls

Show all Containers on System

      $ docker container ls -a

Remove Container

      $ docker container rm ID

Remove Docker Image

      $ docker image rm ID

Run docker container(ngnix) in Background with name

      $ docker container run -d -p 8080:80 --name mynginx nginx

Old Wax to show containers

      $ docker ps

Stop Container

      $ docker container stop name

## Container file manipulation

      $ docker container exec -it containername bash

Create bind Mount from Local Filesystem to Container

      $ docker contianer run -d -p 8080:80 -v $(pwd):/user/share/nginx/html --name nginx-website nginx

## Dockerfile

create file named Dockerfile

[Dockerfile](./docker/Dockerfile)

    $ docker image build -t zettlrobert/nginx-website .

## Push image to Dockerhub

    $ docker push imagename

### Example with Dockercompose

Look at Dockerfile in this directory
Dockerfile should be in root
create docker-compose.yml file

    $ docker-compose up
