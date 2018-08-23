# Description

## Solution
A `REACT CLIENT` exposed Aby static server communicating with a separate `STORAGE API SERVER` [architecture diagram : https://drive.google.com/open?id=1nB_6Y6fM43p-RpKYn_R1aY-b94JODAap]. The reasoning here was to create a decoupled service/client pair that could be accessed and scaled=up without limitation. The architecture is reflected in the repo which is divided into two packages with their own `package.json` files.

## Recorded demo

Video summarising core functionalisties https://drive.google.com/file/d/1pDvnyJ_qwKkxWwfxd1qkBs0pltfXGxBb/view?usp=sharing

## Techstack
- general: docker, eslint, yarn 
- client: react, redux, thunk, react-bootstrap, jest, Immutable
- serverside: express, multer

## Implementation notes
- I've based the solution loosely on a couple of modern boilerplates but almost everything was coded by hand
- there are two dockerfiles composed into the top lvl docker-compose file
- both client and server are build based on data flow with strong separation of concerns
  - `client`: standard redux flow loop  .-> Reducers -> Store -> HOCs -> Containers -> Componenets -> Dispatch -> .
  - `server`: middlewares(request meta processing) -> api(request data processing) -> controllers(data processing) -> low level clients (low level system interaction)
- server has basic logging and error handling
- configuration ands constants are kept in separate files
- client users an `apiKey` for a simple server authorization
- eslint based on airbnb
- user can add / rename / delete and search through components via basic `startsWith` name match and type check

# Deploying application

## Prequisities
- Docker installed

## How to start the app

```
// From the `root` folder run 
docker-compose up
// start browser on localhost:8080, the apiServer is accessible under localhost:8989
// alternatively each package has a npm start script
```


## What I would add given more time:

General
- https communication
- persistent store solution to avoid hashbased id callculation
- typescript or flow for typechecking
- configuration through ENV

Serverside
- serverside validation
- tests & test coverage
- handle crashes gracefully
- pagination

Client
- server model/collection layer
- error handling and logging
- config injection
- more data sanitisation beyond the react one
- loaders
- tests & test coverage
- handle lack of connectivity via a worker
- separate chunks in webpack
- react router used for query handling
- translations
