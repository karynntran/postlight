# Postlight Employee Directory
### Karynn Tran (karynn.tran@gmail.com)


An employee directory built with:

  - Create-React-App - Front End
  - [Redux Form](https://redux-form.com/8.3.0/)
  - Redux - State Management
  - [json-server](https://www.npmjs.com/package/json-server) - Mock Api Server
  - Sass / CSS - Styling
  - [Faker API](https://github.com/marak/Faker.js/) - Mock data

## Server
This will run the `getEmployees.js` file which generates an array of 25 mock data objects and writes this data to the db.json object
  - To start the server:
```
$ cd in to the `api` directory
$ `npm install`
$ `npm start`
- open `localhost:8000` in your browser
```

## Client
This will render the app, which allows filter functionality and CRUD operations for employees
  - To start the app:
```
$ cd in to the `employees` directory
$ `npm install`
$ `npm start`
- open `localhost:3000` in your browser
```

# Beyond 8 hours...
I would have loved to focus on:
  - Testing
  - Separating out reusable code into new functions / more cleanup
  - Address performance issues (lazy loading images, pagination)
  - UX (better design across devices, organizing data by position)

