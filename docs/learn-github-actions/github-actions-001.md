# Understanding GitHub Actions

The basics of GitHub Actions, including core concepts and essential terminology.

## Overview of github actions

GitHub Actions is a `continuous integration` and `continuous delivery` (`CI/CD`) platform that allows you to 

- automate your build, 
- test, 
- and deployment pipeline. 

You can create `workflows` that `build` and `test` every `pull request` to your `repository`, or deploy `merged` `pull requests` to `production`.

GitHub Actions goes beyond just DevOps and lets you run workflows when other events happen in your repository. For example, you can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository.

GitHub provides Linux, Windows, and macOS virtual machines to run your workflows, or you can host your own self-hosted runners in your own data center or cloud infrastructure.

## The components of GitHub Actions

You can `configure` a GitHub Actions `workflow` to be triggered when an event occurs in your `repository`, such as a `pull request` being opened or an `issue` being created.

Your `workflow` contains one or more `jobs` which can `run` in sequential order or in parallel.

Each `job` will run inside its own virtual machine `runner`, or inside a container, and has one or more steps that either run a `script` that you define or run an `action`, which is a reusable `extension` that can simplify your `workflow`.


## Workflows

A workflow is a configurable automated process that will run one or more jobs.

Workflows are defined in the `.github/workflows` directory in a repository, and a repository can have `multiple` workflows, each of which can perform a different set of tasks. 

For example, you can have one workflow to 
- build and test pull requests, 
- another workflow to deploy your application every time a release is created,
-  and still another workflow that adds a label every time someone opens a new issue.


## Events

An event is a specific activity in a repository that triggers a workflow run. For example, activity can originate from GitHub when someone creates a pull request, opens an issue, or pushes a commit to a repository. 


## Jobs

A job is a set of `steps` in a `workflow` that is executed on the same runner.
Each step is either a shell script that will be executed, or an action that will be run. Steps are executed in order and are dependent on each other. Since each step is executed on the same runner, you can share data from one step to another. For example, you can have a step that builds your application followed by a step that tests the application that was built.

## Actions 

An action is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task. Use an action to help reduce the amount of repetitive code that you write in your workflow files. An action can pull your git repository from GitHub, set up the correct toolchain for your build environment, or set up the authentication to your cloud provider.

You can write your own actions, or you can find actions to use in your workflows in the GitHub Marketplace.


## Runners

A runner is a `server` that runs your workflows when they're triggered. Each runner can run a `single` `job` at a time. GitHub provides `Ubuntu Linux`, `Microsoft Windows`, and `macOS` runners to run your workflows; each workflow run executes in a fresh, newly-provisioned virtual machine.