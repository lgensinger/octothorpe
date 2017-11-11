# octothorpe
A dockerized CSS system built on [SASS](http://sass-lang.com/). You can extract the [app/style/app](https://github.com/lgensinger/octothorpe/tree/master/app/style/app) directory and implement in your own project or use the basic webpack builds included in this project to build your project.

## Requirements

* [Node.js](https://nodejs.org)
* [Docker](https://www.docker.com) (if you choose to build with docker)

## Implementation options

1. [Active Development](#active-development): Actively develop the SCSS in this project.
1. [Docker Deployment](#docker-deployment): Use the dockerized conatainer as a volume in your network of containers. **SUGGESTED**
1. [Custom Deployment](#custom-deployment): Build and use the styles in your own project which does not use [webpack](https://webpack.js.org/) or [docker](https://www.docker.com).

## Active Development

Actively develop the SCSS in this project.

```
# clone this project
git clone git@github.com:lgensinger/octothorpe.git

# cd into project
cd octothorpe

# install dependencies
npm install

# host project via webpack dev server
npm start
```

## Docker Deployment

Use the dockerized conatainer as a volume in your network of containers.

---
**The following guidance assumes this directory structure**

---

```
| --- custom_project
|   | --- docker-compose.yml
| --- octothorpe
```

```
# clone this project
git clone git@github.com:lgensinger/octothorpe.git
```