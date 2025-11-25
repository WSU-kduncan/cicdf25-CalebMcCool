# Part 1

**Website and Dockerfile**

The web content is a folder with an index, css, and javascript hosting more than 1 html page on one of the 3 backend through the instance with Haproxy holding the elastic IP. 

- The link to the web content when reaching it as a user is:
  - http://98.90.170.238

- The link to the web content within the github repo is:
  - https://github.com/WSU-kduncan/ceg3120f25-CalebMcCool/tree/main/Project3/web-content

The Dockerfile is explaning the configurations within docker and the machine where the web content is stored. It is copying the current directory to the haproxy directory within the instance. 

- The link to the docker file within the github repo is:
  - https://github.com/WSU-kduncan/ceg3120f25-CalebMcCool/blob/main/Project3/web-content/Dockerfile

**Building and Pushing a container image to Dockerhub**

To build and push a container image to your dockerhub repo, you would type:

- Docker build -t project3site:latest
  - The -t flag is tagging and naming the image."calebmccool/project3site" is the name and ":latest" is the tag. 
- Docker push calebmccool/project3site:latest
  - This pushes the docker container to dockerhub under your specific login. 

**Running a Container Serving a Web Application**

To run a container serving a web application specifically on port 8080. You can use:

- docker run -d -p 8080:80 project3site

# Part 2

To create a PAT on Dockerhub, go to their website and login. Then you can go to settings and find the PAT section and create one. Then go to you Github repo and go to settings then secrets and variables. Then you can create a secret and name it. The secrets for this specific project is your github username and the personal access token to sign in.

The workflow is located within the .github/workflows folder and is titled project-workflow.yml. This workflow pushes your current repository onto docker when something is commited to the main branch or it is manually triggered. If you use this workflow in a different repository, you would need to change the branch name you are specifying.

Link to workflow file:

- 

# Sources

**Part 2:**

- Assistance with creating the .yml file: Chatgpt 
  - prompt: "Give me an example .yml github workflow which logs in and builds a docker image"
