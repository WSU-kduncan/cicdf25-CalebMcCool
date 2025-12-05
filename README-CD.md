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

The link to the bash script within the repo is:

- https://github.com/WSU-kduncan/cicdf25-CalebMcCool/blob/main/deployment/deploymentCopy.sh

# Part 2

**Configuring webhook listener on EC2 Instance**

To install adnanh's webhook, you can just run the command:

- sudo apt-get install webhook

Verify its installed by checking the version:

- webhook --version

The webhook definition file defines the id of the webhook itself, the path to the executeable .sh script. And the path to the working directory where the webhook is located. To determine if the definition file was loaded by webhook you can type:

- webhook -hooks ~/webhooks/hooks.json -verbose

To check if the webhook is recieving payloads that trigger, we can type 

- sudo journalctl -u webhook -f

When you are looking at docker processes with "docker ps", you can check to see the correctly labeled container running on port 80. 

Link to definition file:

- https://github.com/WSU-kduncan/cicdf25-CalebMcCool/blob/main/deployment/hooks.json

**Configure a Webhook Service on EC2 Instance**

The webhook service file holds the configuration for the webhook service. It contains the ExecStart section which loads the config file that defines the hooks. To completely start the webhook service, you can run the following commands:

- sudo systemctl daemon-reload
- sudo systemctl enable webhook
- sudo systemctl start webhook
- sudo systemctl status webhook

To verify the webhook service is capturing payloads, you need to look at the information provided when you run the ''sudo journalctl -u webhook -f" command.

Link to the service file:

- 

**Sources**

Chatgpt - "How to create a systemd service to run webhooks all the time"

Chatgpt - "Explain the webhook service file and where it is"

# Part 3

Dockerhub is the payload sender I used because that is the last thing reached before the everything is done deploying. This ensures that it redeploys only when a new valid image exists. Within dockerhub, you can enable payloads by going into your project repo and selecting the webhook tab and setting up the url within this tab to your ec2 instance with the port and webhook extension. To varify this is working correctly, you need to look for the word POST followed by dockerhub's ip whenever you run the ''sudo journalctl -u webhook -f". To validate your script not running when you type anything else, you can test it using the curl command on a terminal, it should not run. 

# Part 4

The goal of this project is to automatically launch a new docker container whenever a new version of the repo is commited to github. The tools used for this is Github for repo change tracking and triggering, and Dockerhub which builds an destroys the images themselves. The rest of this project is creating configuration files an scripts to perform tasks upon triggering. 

The sources I used were mainly my class notes and chatGPT whenever I got stuck. 

![](Project5Diagram.png)
