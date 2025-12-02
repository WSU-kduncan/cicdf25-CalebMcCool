# Part 1

**EC2 Instance Details**

The AMI is Ubuntu Server 24.04 LTS

The Instance type is t2.medium

The recommended volume size is 30GB of Storage as well as 2 CPU Cores and 4GB of RAM.

I configured my security group to allow ssh and http connection through any IP. This is because the private key is only known by my system and so if I were to ssh into this on another network, it will be secure and safe still.

**Docker Setup on OS on the EC2 Instance**

To install docker, you can type:

- sudo apt update
- sudo apt install -y ca-certificates curl gnupg lsb-release
- sudo apt  install docker.io
- sudo usermod -aG docker ubuntu

To confirm docker is installed and can run containers you can type: 

- sudo docker run hello-world

**Testing on EC2 Instance**

To pull the container image from DockerHub you can type:

- sudo docker pull calebmccool/project3site

To start a new container from the image you can type:

- sudo docker run -it -p 80:80 calebmccool/project3site bash

Once you see that everything is working and you test things out, you can run it in detached mode which is the -d flag. The -it flag is only used to interact with the bash terminal and see what is going on. 

To determine if it is serving a web application you can type:

- (Within Ubuntu) - curl localhost:80
- (Within Host Computer) - curl http://13.218.110.25

