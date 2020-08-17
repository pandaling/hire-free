# Get Started
---

### Content
  - login
  - home
  - add

### Something
  - backend using nodejs, expressjs, graphql, mongodb
  - frontend - angular


Get user
```js
url: "localhost:6001/graph-api/get-user?query={user(_id:'5f3903bb98175d5e0c4c62e7') {username email}}"
```


Get all user
```js
url: "localhost:6001/graph-api/get-all-users"
method: 'get'
```

Create User
```js
mutation {
    createUser(user: { username: "Polar", email: "mail1@example.com", phoneNumber: "12345678", skillSets: "nodejs, javascript, dart, mongodb", hobby: "play badminton" }) {
        username
        email
        phoneNumber
        skillSets
        hobby
    }
}

another way
body => mutation: {username:"${kaka}", email:"${kaka@mail.com}"}
```

update user
```js
mutation {
    updateUser(_id: "5f3903bb98175d5e0c4c62e7", user: {username: "Panda", phoneNumber:"66666666", email: "mail@example.com", skillSets: "node", hobby: "badminton"}) {
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
    deleteUser(_id: "5f3903e398175d5e0c4c62e8") {
        username
    }
}
```
