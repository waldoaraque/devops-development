# Gitlab for CI/CD

### 1. High level architecture.
![N|Solid](resources/img/gitlab-workflow.png)

### 2. Gitlab Runner.
We going to download one of the binaries for our machine:
```shell
$ sudo wget -O /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64
```
Now, give it permissions to execute:
```shell
$ sudo chmod +x /usr/local/bin/gitlab-runner
```

Create a `GitLab CI` user:
```shell 
$ sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash
```

### 3. Gitlab Registry.


### 4. Create demo application.


### 5. CI/CD using plain `ssh` (Not dockerized approach).


### 6. CI/CD using `runner shell executor`.


### 7. CI/CD using `runner docker executor`.

