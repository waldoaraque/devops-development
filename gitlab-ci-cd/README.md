# Gitlab for CI/CD

### High level architecture.
![N|Solid](resources/img/gitlab-workflow.png)

### Requirements
- Gitlab Project
- Docker Container Engine

### Introduction
The gitlab application for CI / CD is based on two important parts, that is, the `pipeline` will follow the instructions of the `.gitlab-ci.yml` file and the `runner` is the environment where the pipeline will be executed, this can be a local server or a docker container.

In addition, it is supported by a `registry` whose main objective is to store the images that the pipeline must construct when executed.

### Gitlab Runner with Docker
The first step is download the image from docker hub repository to use `gitlab-runner`:

```shell
$ docker pull gitlab-runner
```
Now, we need to mount a config volume into the `gitlab-runner` to be used for configs and other resources:
```shell
$ docker run -d --name gitlab-runner --restart always \
   -v /srv/gitlab-runner/config:/etc/gitlab-runner \
   -v /var/run/docker.sock:/var/run/docker.sock \
   gitlab/gitlab-runner:latest
```
Once the configuration is ready, we run the `runner`:
```shell
$ docker run -d --name gitlab-runner --restart always \
     -v /var/run/docker.sock:/var/run/docker.sock \
     --volumes-from gitlab-runner-config \
     gitlab/gitlab-runner:latest
```


### Register the `runner`.


### Create demo application.



