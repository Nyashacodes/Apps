<!-- - in this project i'm learing/revising building a REST api with node and express "CRUD API" 
- we will run npm init -y to initialize our backend javascript application, this will create an empty package.json (just basic info).
- thn we are having "index.js" file as the starting point of the server, inside that we will be having express with command "npm install --save express" will add node modules
- after setting up express in index.js run the server with command "node index.js"
- installed nodemon
- update scripts in "scripts": {
    "start":"nodemon index.js"
  },
  - we get "Cannot GET /" error
  - why?
  - as we know we have not yet created routes, and node and express are all about routing, need to create routes now
  - so we can visit or send request -->

## 📘 Learning Log – Building a REST API with Node.js and Express

This project is focused on learning and revising how to build a REST API using **Node.js** and **Express**, implementing basic **CRUD operations**.

---

## 🧱 Project Setup

- Initialized the backend JavaScript application:

  ```bash
  npm init -y
This creates a default package.json file with basic information.

Created index.js as the entry point of the server.

📦 Installing Express
Installed Express to set up the server:

bash
Copy
Edit
npm install express
This command installs Express and creates the node_modules folder.

🖥️ Basic Server Setup
Wrote basic server setup in index.js:

js
Copy
Edit
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
Ran the server using:

bash
Copy
Edit
node index.js
🔄 Installing Nodemon
Installed Nodemon to automatically restart the server on file changes:

bash
Copy
Edit
npm install --save-dev nodemon
Updated the scripts section in package.json:

json
Copy
Edit
"scripts": {
  "start": "nodemon index.js"
}
Started the server with:

bash
Copy
Edit
npm start
❓ Got "Cannot GET /" Error
Why?
We haven't defined any routes yet.

By default, Express doesn't know what to return for /.

What’s Next?
Since Express is all about routing, we now need to define routes.

Once routes are created, we can visit endpoints or send requests using tools like Postman or Thunder Client.

✅ Next Task: Create basic routes to respond to API requests.


