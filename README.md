[![Deploy Jekyll site to Pages](https://github.com/velaia/velaia.github.io/actions/workflows/jekyll.yml/badge.svg)](https://github.com/velaia/velaia.github.io/actions/workflows/jekyll.yml)

# Repository for the tfc.ai website

## Build locally
Run the following command:

    docker compose up

## Start existing container

Check whether a container has already been created:

    docker container ls -f name="velaiagithubio-jekyll-1" -a

If so, you can start it using:

    docker start "velaiagithubio-jekyll-1"

## Development

Open your browser to [localhost:8080](http://localhost:8080) for development.

## Deployment

As soon as you push the changes to GitHub a workflow will run and build the website.