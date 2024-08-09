# Repository for the tfc.ai website

## Build locally
Run the following command:

    docker compose up

## Start existing container

Check whether a container has already been created:

    docker container ls -f name="velaiagithubio-jekyll-1" -a

If so, you can start it using:

    docker start "velaiagithubio-jekyll-1"
