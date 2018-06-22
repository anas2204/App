This is a small NodeJS App which is dockerized.

<b>Docker Images</b> - Copy of the OS from Docker Hub or elsewhere (like Windows or Ubuntu ISO file)

<b>Docker Containers</b> - Running instances of the images

### Commands
* docker ps -> Only running instances
* docker ps -a -> Gives all instances (Running or Quit)
* docker images -> Lists all the current images
* docker logs <containerID> -> logs for installing the specific container

* docker pull <imageName> -> Pulls an official image from Docker hub (Eg: docker pull redis)
  Eg: docker pull ubuntu -> Pulls the official Ubuntu image from Docker hub

* docker build -> Create a docker image (small OS copy as an image)
  Eg: $ docker build -t <your username>/node-web-app .

* docker run -> Create a container from an image (an instance of the image)
  Eg: $ docker run -p 49160:8080 -d <your username>/node-web-app
-p maps the port (Public to private container port),
-d runs it in detached mode -> In background,
--name gives a specific name
--rm: removes the docker image after it is stopped

* docker stop <containerID> -> Stop a container
* docker rm <containerID> -> Removes a container
* docker rmi <imageID> -> Removes an image

* docker exec -it <container_id> /bin/bash -> Interactive bash in container

### Dockerfile
Used to build docker images
* RUN: Can be used multiple times -> Used to build the docker image
* CMD: Is the entry point of the application -> Only the LAST "CMD" statement is executed
* COPY -> Used to copy the local files to docker container
* EXPOSE -> Expose the port from container to host machine
