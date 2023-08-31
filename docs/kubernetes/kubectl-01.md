# Kubernetes pieces of terminology

kubernetes Cluster
  - A collections of nodes + a master to manage them

Node 
 - A virtula machine that will run our containers

Pod
 - More or less a running container. Technically, a pod can run multiple containers

Deployment
  - Monitores a set to pods, make sure they are running and restarts them if they crash 

Service 
 - Provides an easy-to-remember URL to access a running container.


## command
`$ kubectl apply -f posts.yaml`

## Deployment
A deployment is a Kubernetes object that is intended to manage a set of pods, so it might be just one

## Updating the image using by a Deployment
1. The deployment must be uisng the 'latest' tag in the pod spec section
2. Make an update to your code
3. Build the image
4. Push the image to docker hub
5. Run the command
`$ kubectl rollout restart deployment [depl_name]`