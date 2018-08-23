# Description

## Solution
A `REACT CLIENT` exposed Aby static server communicating with a separate `STORAGE API SERVER` [architecture diagram : https://drive.google.com/open?id=1nB_6Y6fM43p-RpKYn_R1aY-b94JODAap]. The reasoning here was to create a decoupled service/client pair that could be accessed and scaled=up without limitation. The architecture is reflected in the repo which is divided into two packages with their own `package.json` files.

## Techstack
- general: docker, eslint, yarn 
- client: react, redux, thunk, react-bootstrap, jest, 
- serverside: express, 

### Implementation notes
- I've based the solution loosely on a couple of modern boilerplates but almost everything was coded by hand
- there are two dockerfiles composed into the top lvl docker-compose file
- both client and server are build based on data flow with strong separation of concerns
  - `client`: standard redux flow loop  .-> Reducers -> Store -> HOCs -> Containers -> Componenets -> Dispatch -> .
  - `server`: middlewares(request meta processing) -> api(request data processing) -> controllers(data processing) -> low level clients (low level system interaction)
- server has basic logging and error handling
- configuration is kept in separate files
  

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
- typescript or flow 
- configuration through ENV

Serverside
- serverside validation
- tests & test coverage
- handle crashes gracefully

Client
- server model/collection layer
- error handling and logging
- config injection
- more data sanitisation beyond the react one
- loaders
- tests & test coverage
- handle lack of connectivity via a worker
