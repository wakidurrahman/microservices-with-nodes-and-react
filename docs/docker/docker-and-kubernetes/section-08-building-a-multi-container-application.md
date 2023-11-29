# Section 8: Building a Multi-Container Application

Multi container application with docker cli, docker compose, CI + CD workflow using Github, AWS.

- creating a pipeline that automatically deploys your code every time you push your latest changes to Github.
- Multi-Container Deployments on AWS.
- Multi-container deployments on Amazon Web Services. 
- Construct a multi-container application utilizing `Node`, `React`, `Redis`, and `Postgres`, and the amazing power of containers in action.



Multi container application project structure.

```
├── docker-multi-container-apps/
│ ├── .github
│ ├── client/
│ ├── nginx/
│ ├── server/
│ ├── worker/
│ ├── nginx/
│ ├── .gitignore
│ ├── docker-compose.yml
│ ├── docker-compose.yml
│ ├── Dockerrun.aws.json
│ └── README.md
```

## Client technology and library

- `axios`
- `jest`
- `react`
- `react-router-dom`
- `sass`
- `swiper`
- `tailwindcss`
- `typescript`


## Server technology and library

- `express`
- `jest`
- `postgres/pg`
- `redis`
- `cors`
- `nodemon`
- `parser`


## Worker technology and library

- `jest`
- `nodemon`
- `redis`
