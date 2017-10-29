# use an official ubuntu runtime as parent image
FROM ubuntu

# set root as user
USER root

# update os
RUN apt-get update

# install nodejs
RUN apt-get install -y nodejs

# install npm
RUN apt-get install -y npm

# set up link so invoking node commands work
RUN ln -s /usr/bin/nodejs /usr/bin/node

# install webpack globally inside the container so invoking webpack commands work
RUN npm install webpack -g

# copy needed directories into container
ADD . /

# install needed node modules
RUN npm install

# compile JS, CSS, HTML using webpack
RUN webpack -p --config app/config/webpack.config.prod.js