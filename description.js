// // Import necessary libraries
// const express = require('express'); // Express framework for handling HTTP requests
// const bodyParser = require('body-parser'); // Middleware to parse form data
// const path = require('path'); // Utility for working with file and directory paths

// // Create an instance of an Express application
// const app = express();
// const port = 3000; // Port number where the server will listen

// // In-memory storage to keep track of names
// let namesList = [];

// // Set up the view engine for rendering HTML templates
// app.set('view engine', 'ejs'); // Use EJS for rendering views
// app.set('views', path.join(__dirname, 'views/pages')); // Directory for EJS templates

// // Middleware to parse URL-encoded form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Route to display the form and names list
// app.get('/', (req, res) => {
//   res.render('index'); // Render the 'index' view (form for adding names)
// });

// // Route to display the list of names
// app.get('/list', (req, res) => {
//   res.render('list', { names: namesList }); // Render the 'list' view with the names list
// });

// // Route to add a new name to the list
// app.post('/add', (req, res) => {
//   const name = req.body.name; // Retrieve the name from the form data
//   if (name) {
//     namesList.push(name); // Add the name to the namesList array
//   }
//   res.redirect('/list'); // Redirect to the names list page to see the updated list
// });

// // Route to delete a name from the list
// app.post('/delete', (req, res) => {
//   const name = req.body.name; // Retrieve the name to delete from the form data
//   namesList = namesList.filter(n => n !== name); // Remove the name from the namesList array
//   res.redirect('/list'); // Redirect to the names list page to see the updated list
// });

// // Start the server and listen for incoming requests
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`); // Log a message indicating the server is running
// });
