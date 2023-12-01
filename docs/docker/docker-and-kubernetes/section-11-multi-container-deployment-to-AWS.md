# Section 11: Multi-Container Deployments to AWS

## Required AWS Elastic Beanstalk Environment Setup Updates

The process for creating an Elastic Beanstalk environment has changed (this is very common, as the AWS UI changes frequently). There is now a flow of 6 steps that you will be taken through.

**Step 1:**

You will need to select the Platform of Docker. You then must manually change from `Docker running on 64bit Amazon Linux 2023` to Docker running on 64bit Amazon Linux 2. The 2023 platform was just released in early August and is currently not compatible with our `CI/CD` automation.

## Required Updates for Docker Compose

1. Rename the current docker-compose file

Rename the `docker-compose.yml` file to `docker-compose-dev.yml`. Going forward you will need to pass a flag to specify which compose file you want to build and run from:

```
docker-compose -f docker-compose-dev.yml up
docker-compose -f docker-compose-dev.yml up --build
docker-compose -f docker-compose-dev.yml down
```

2. Create a production-only docker-compose.yml file

The production compose file will follow closely what was written in the `Dockerrun.aws.json`. There are two major differences:

`No Container Links`: In the "Forming Container Links" lecture we add the client and server services to the links array of the nginx service. Docker Compose will handle this container communication automatically for us.

`Environment Variables`: When using a compose file we will need to explicitly specify the environment variables each service will need access to. The value for each variable must match the corresponding variable names you have specified in the Elastic Beanstalk environment. The AWS variables are created in the "Setting Environment Variables" lecture.

Note - ***You must not have a `Dockerrun.aws.json` file in your project directory.*** If AWS EBS sees this file the deployment will fail. If you have previously followed this course and deployed to the old Multi-container platform you will need to delete this file before moving to the new platform!!!

Complete docker-compose.yml file:

---


## Production

Elastic Beanstalk Instance
|-- Nginx
|-- Nginx W/Prod files
|-- Worker
|-- Express server

AWS Elastic Cache
AWS Relational Database Service

AWS VPC's and security group

- Default Virtual Private Cloud (VPC)

- - EB Instance
- - RDS (Postgres)
- - EC (Redis)