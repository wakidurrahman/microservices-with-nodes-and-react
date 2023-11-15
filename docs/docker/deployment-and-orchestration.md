# Deployment and orchestration

## Overview 

Containerization provides an opportunity to move and scale applications to clouds and data centers.

Containers effectively guarantee that those applications run the same way anywhere, allowing us to quickly and easily take advantage of all these environments. 

Additionally, as we scale our applications up, we need some tooling to help 

- automate the maintenance of those applications, 
- enable the replacement of failed containers automatically, 
- and manage the roll-out of updates and reconfigurations of those containers during their lifecycle.

What is `orchestrators`?
Tools to `manage`, `scale`, and `maintain` containerized applications are called `orchestrators`.


**Two of the most popular orchestration tools are**

1. Kubernetes
2. Docker Swarm.

**Turn on Kubernetes**

Docker Desktop sets up Kubernetes for you quickly and easily. 

**Enable Docker Swarm**

Docker Desktop runs primarily on Docker Engine, which has everything you need to run a Swarm built in

Open a terminal, and initialize Docker Swarm mode:

## Deploy to Kubernetes 

Now that we've demonstrated that the individual components of our application run as stand-alone containers, it's time to arrange for them to be managed by an orchestrator like Kubernetes. 

Kubernetes provides many tools for

- scaling
- networking
- securing
- maintaining

your containerized applications, above and beyond the abilities of containers themselves.


In order to validate that our containerized application works well on Kubernetes, we'll use Docker Desktop's built in Kubernetes environment right on our development machine to deploy our application, before handing it off to run on a full Kubernetes cluster in production. 

The Kubernetes environment created by Docker Desktop is fully featured, meaning it has all the Kubernetes features your app will enjoy on a real cluster, accessible from the convenience of your development machine.


**Describing apps using Kubernetes YAML**

All containers in Kubernetes are scheduled as pods, which are groups of co-located containers that share some resources. Furthermore, in a realistic application we almost never create individual pods. Instead, most of our workloads are scheduled as deployments, which are scalable groups of pods maintained automatically by Kubernetes. Lastly, all Kubernetes objects can and should be described in manifests called Kubernetes YAML files. These YAML files describe all the components and configurations of your Kubernetes app, and can be used to easily create and destroy your app in any Kubernetes environment

`bb.yaml`

```
# The apiVersion, which indicates the Kubernetes API that parses this object
apiVersion: apps/v1
# The kind indicating what sort of object this is
kind: Deployment
# Some metadata applying things like names to your objects
metadata:
   name: bb-demo
   namespace: default
# The spec specifying all the parameters and configurations of your object.
spec:
   replicas: 1
   selector:
      matchLabels:
         bb: web
   template:
      metadata:
         labels:
            bb: web
      spec:
         containers:
            - name: bb-site
              image: getting-started
              imagePullPolicy: Never
---
apiVersion: v1
kind: Service
metadata:
   name: bb-entrypoint
   namespace: default
spec:
   type: NodePort
   selector:
      bb: web
   ports:
      - port: 3000
        targetPort: 3000
        nodePort: 30001
```


> `$ kubectl apply -f bb.yaml`

> `$ kubectl get deployments`

> `$ kubectl get services`

> `$ kubectl delete -f bb.yaml`


In addition to deploying to Kubernetes, we have also described our application as a Kubernetes YAML file. This simple text file contains everything we need to create our application in a running state. We can check it into version control and share it with our colleagues, allowing us to distribute our applications to other clusters (like the testing and production clusters that probably come after our development environments) easily.


## Deploy to Swarm 

> *** **Note**: Swarm mode is an advanced feature for managing a cluster of Docker daemons. 
Use Swarm mode if you intend to use Swarm as a production runtime environment.
If you're not planning on deploying with Swarm, use Docker Compose instead. If you're developing for a Kubernetes deployment, consider using the integrated Kubernetes feature in Docker Desktop.

***Introduction***

Now that we've demonstrated that the individual components of our application run as stand-alone containers and shown how to deploy it using Kubernetes, let's look at how to arrange for them to be managed by Docker Swarm. Swarm provides many tools for scaling, networking, securing and maintaining your containerized applications, above and beyond the abilities of containers themselves.

In order to validate that our containerized application works well on Swarm, we'll use Docker Desktop's built in Swarm environment right on our development machine to deploy our application, before handing it off to run on a full Swarm cluster in production. The Swarm environment created by Docker Desktop is fully featured, meaning it has all the Swarm features your app will enjoy on a real cluster, accessible from the convenience of your development machine.

**Describe apps using stack files**

Swarm never creates individual containers like we did in the previous step of this tutorial. Instead, 

- all Swarm workloads are scheduled as services, which are scalable groups of containers with added networking features maintained automatically by Swarm. 
- Furthermore, all Swarm objects can and should be described in manifests called stack files. 
- These YAML files describe all the components and configurations of your Swarm app, and can be used to easily create and destroy your app in any Swarm environment.

`bb-stack.yaml`

```
version: '3.7'

services: 
    bb-app: 
        image: getting-started
    ports: 
        - "8080:8080"
```


> Kubernetes Services and Swarm Services are very different

> Despite the similar name, the two orchestrators mean very different things by the term 'service'. In Swarm, a service provides both scheduling and networking facilities, creating containers and providing tools for routing traffic to them. In Kubernetes, scheduling and networking are handled separately, deployments (or other controllers) handle the scheduling of containers as pods, while services are responsible only for adding networking features to those pods.