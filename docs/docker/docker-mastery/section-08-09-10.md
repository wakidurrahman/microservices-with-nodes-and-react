# Section 8: Swarm Intro and Creating a 3-Node Swarm Cluster

Swarm is actually a server clustering solution that brings together different operating systems or hosts, or nodes, or whatever you want to call them, into a single manageable unit that you can then orchestrate the lifecycle of your containers in. 

`$ docker swarm init`

# Section 9: Swarm Basic Features and How to Use Them In Your Workflow

`$ docker network ls`
`$ docker service create --name search --replicas 3 -p 9200:9200 elasticsearch:2`

# Section 10: Swarm App Lifecycle