# Front end project structure and resource

https://github.com/ahsan-chy/React-JS-Advance-Folder-Structure


## client-app Catchup & Checkpoint

Client-App that was built in this section, here is what you should do:

1. Close Skaffold down by pressing Control-C in the terminal window that is running it.

2. Step to do only if you are running Docker/Kubernetes on your local machine (if you are using Google Cloud then skip this)

    - Change into the client directory at your terminal

    - Run `docker build -t YOURDOCKERID/client` .

    - Run `docker push YOURDOCKERID/client`

3. Change back to the root project directory.

4. Run `skaffold dev`

Give Skaffold a little time to start up. You should then be able to access the app in your browser at ticketing.dev.

Important - You can also use this zip file as a checkpoint. It includes all updates and fixes from previous lecture notes including the Auth service, Ingress, and Client service. If you would rather not code along, you can simply download the zip file, extract and run `skaffold dev`. This assumes that your ticketing secret had previously been set. If not, you will need to run:

`kubectl create secret generic jwt-secret --from-literal JWT_KEY=asdf` 