#!/bin/bash

sudo docker stop calebmccool/project3site

sudo docker rm calebmccool/project3site

sudo docker pull calebmccool/project3site:latest

sudo run -d -p 80:80 calebmccool/project3site:latest

