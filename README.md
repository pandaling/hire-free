# Get Started
---

### Content
  - login
  - home
  - add

### Something
  - backend using nodejs, expressjs, graphql, mongodb
  - frontend - angular
  - **TODO**
    - Test


### How To Start
---
##### For Development
1. Start server
  - go to `server` directory, run `npm i`
  - configure the database details, edit the file `config.js` to suit your preference
  - Then run `npm start` to start the service
  - service will available in `http://localhost:6001` by **default**

2. Start client side
  - go to directory `client`, run `npm i`
  - **NOTE:** if you change the server port, you will also need to change here `path to/environments/environment.ts`
  - Then run `npm start` to start the client service
  - now open `http://localhost:4200` in the browser

##### For prod
1. Client
  - configure the `path to environments/environment.ts` to suit your environment
  - run `npm run prod` to build for production

2. Server
  - do some configuration as step **Start server** above
  - Then run `npm start` to start the service
  - After the server started successfully, go to the browser by opening `http://localhost:6001`


### Some Api
---
Get user
```js
url: "localhost:6001/graph-api/get-user?query={user(_id:'XXXXX') {username email}}"
```

Get all user
```js
url: "localhost:6001/graph-api/get-all-users"
```

Create User
```js
mutation {
    createUser(user: { username: "panda", email: "mail@example.com", phoneNumber: "12345678", skillSets: "nodejs, javascript, dart, mongodb", hobby: "play badminton" }) {
        username
        email
        phoneNumber
        skillSets
        hobby
    }
}
```

update user
```js
mutation {
    updateUser(_id: "_id_to_replace", user: {username: "Panda", phoneNumber:"66666666", email: "mail@example.com", skillSets: "node", hobby: "badminton"}) {
        username
        email
        phoneNumber
        skillSets
        hobby
    }
}
```

delete user
```js
mutation {
    deleteUser(_id: "_id_to_delete") {
        username
    }
}
```
