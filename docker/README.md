# Docker
You can run every Application in a Container with all dependencies and required librarys on one System


### What are containers
Containers are completely isolated processes.
They share the Kernel of the host System. 


## Container vs image

|Docker Image|Docker Container|
|--|--|
|packge/template|running instances of images that are isolated|
|is used to create containers|have own envoiement and processes|


## [Get started with Docker](https://docs.docker.com/install)


Uninstall any older version

    $ sudo apt-get remove docker docker-engine docker.io containerd runc

Either install dependencies and Docker from Repos or use the convienience script(end of page)


#### [Test Installaiton](https://hub.docker.com/)

* whalesay

    $ docker run docker/whalesay cowsay Hello World


## Docker Commands

#### docker run
* is used to run a container from an image
* if image is not present it will pull image from docker hub

#### docker ps
* lists all running container with additional information

#### docker ps -a
* lists all containers

#### docker stop name/id
* stops container, needs a name or id of container

#### docker rm identifier
* permanently deletes container

#### docker images
* lists available images

#### docker rmi identifier
* removes image from system
* ensure that no containers are running from that image

#### docker pull identifier
* dowloads image


**Container only live as long as the process inside the container is alive**


### Exec
* Execute command on running container

      docker exec containeridentifier cat /etc/host


### Attach and detach
* attached and detachted mode exists
* running in attached mode binds you to the console, ctrl+c to exit
* run container in detatched mode providing -d
* docker attach identifier


### -i
* interactive mode

### -t
* terminal

### Port mapping
* use ip of docker container(every docker container gets ip assigned by default, only internal IP)
* map host port to application
* docker run **-p 80:5000** identifier


### Volume Mapping
(sql example)
* docker container has own isolated file system
* sql /var/lib/mysql/
* if container is deleted data is lost
* create dir /host/myData and map it to container

      $ docker run -v /host/myData:/var/lib/mysql/ mysql

* stores data in external volume


#### docker inspect container identifier
* gives more detailed information about container

### Container Logs


## Environment Variables -e

      $ docker run -e ENV_VAR=value containeridentifier

Find Env Variables
* docker inspect


## Docker Images
How to create own Docker Image

1. create docker file named docker file
2. write down instructions for setting up application in that file
3. built image

        $ docker build Dockerfile -t zerodev/example-app

4. docker push to make public

### Dockerfile:
Instructions and Argument notation style.

FROM Ubuntu

RUN apt-get update
RUN apt-get install python

RUN pip install flask
RUN pip install flask-mysql

Copy . /opt/source-code

ENTRYPOINT FLASK_APPP=/opt/source-code/app.py flask run


* each instruction creates new layer in the docker.


### What can be containerized
Basically everything can be containerized


## Command vs Entrypoint


## Docker Networks
Docker creates three Networks automatically

|Bridge|none|host|
|--|--|--|
|$ docker run identifier|docker run identifier --network=none|docker run identifier --network=host|
|private internal network on the host|attach here by default (127.17.0.X)|not attached to any network and doesn't have access to network or other containers|associate to host network, takes out any network isolation between host and container|
||not be able to run multiple containers on the port|
|to access map to ports from the host|||


## User-defined networks
docker network create \
  --driver bridge \
  --subnet 182.18.0.0/16
  custom-isolated-network

      $ docker network ls

      $ docker inspect identifier

### Embedded DNS
Use container name, all containers in a docker host can resolve each other with the name of the container

**DNS server always runs on 127.0.0.11**


## Storage
Docker stores data on the local filesystem, it creaes
* /var/lib/docker
  * aufs
  * containers
  * image
  * volumes

Docker builds layer when built is run.
If containers need the same layer these layers are reused.

* files in image layers are read only

## Volumes 
|Volume Mount|Bind Mounting|
|--|--|
|mounts volume from volumes dir|mounts dir from any location on docker host|

If we want to preserve Data created by a container, volumes need to be created.

    $ docker volume create data_volume

* creates folder data_volume under /var/lib/docker/volumes (Volume Mounting)

    $ docker run -v data_volume:/var/lib/mysql mysql

* will create new data container and mount the folder inside teh container
* store data somewhee else bind mounting

    $ docker run -v /complete/path:/var/lib/mysql mysql

    $ docker run \
    --mount type=bind,source=/data/mysql,target=/var/lib/mysql mysql

* Docker uses storage drivers to enable layered architectured
(AUFS, ZFS, BTRFS, Device Mapper, Overlay, Overlay2)
* selection depends on underlying OS
* docker will choose best storage driver based on OS


## Docker Compose
Dockercompose files are written in yml
docker-compose.yml

Example
|docker run|docker compose|
|--|--|
|--link is deprecated| example file composition below table|
|docker run -d --name=redis redis||
|docker run -d --name=db postgres:9.4 --link db:db||
|docker run -d --name=vote -p 5000:80  --link redis:redis voting-app||
|docker run-d --name=result -p 5001:80||
|docker run -d --name=worker worker  ----link redis:redis||
|||

#### Version 1


      redis:
        image: redis
      db:
        image: postgres:0.4
      vote:
        build: ./vote
        ports:
          - 5000:80
        links:
          -redis
      result:
        build: ./result-app
        ports:
          - 5001:80
        links:
          -db
      worker:
        build: ./worker
        links:
          - redis
          - db (db == db:db)


      $ docker compose up


* docker compose evolved over time and contains more features now --> different files. nees to be specified in top of file
* 


#### Version 2
if networks are used they need to be specified

    version: 2
    services:
      redis:
        imag: redis
      db:
        image: postgres:9.4
        networks:
          - back-end

      vote:
        image: voting-app
        networks:
          - front-end
          - back-end
      
      ports:
        - 5000:80
      
      depends_on:
        - redis

      result:
        image: result
        networks:
          - front-end
          - back-end
    
    networks:
      front-end:
      back-end:



#### Version 3

    version: 3
    services:
      redis:
        imag: redis
      db:
        image: postgres:9.4
      vote:
        image: voting-app
        ports:
        - 5000:80


### docker registry
central repository for docker containers

### Docker engine
Docker isntalls Docker CLI, REST API, Docker Daemon.

docker cli can work with remote docker engines

      $ docker -H=remote-docker-engine:2375

      $ docker -H=10.123.2.21:2375 run nginx


## Restrictions
use cgroups - controll groups to controll the ressources provided to each container.

