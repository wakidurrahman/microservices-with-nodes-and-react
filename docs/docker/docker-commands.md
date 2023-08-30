# Docker Commands 

- $ docker build .
- $ docker build -t wakidur/posts . //*Build an image based on the dockerfile in the current directory. Tag it as 'wakidur/posts'*/
- $ docker run "image id or image tag" //*Create an start a container based on the provided image id or tag*/
- $ docker run -it "image id or image tag" "cmd" //*Create and start container , but also overried the defautl command*/
- $ docker ps //*Print out information about all of the running containers*/
- $ docker exect -it "container id" "cmd" /*Execute the given command in a running container*/
- $ docker logs "container id" /*Print out logs from the given container*/