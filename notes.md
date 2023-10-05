1. Initialized npm, set entry as app.js
2. Installed packages
3. Updated package json to run start with nodemon using start
4. Inittialized express and express app
5. Setup the port variable and the listening port
6. Setup test basic route in app.js
7. Setup route and controller folders
8. Setup controller functions and exported them
9. Imported controller functions into routes file
10. Defined all routes and proceeded to setup postman collections

11. MongoDB Notes
    1. Create Cluster, create the user
    2. Setup Database Access and add new database user with read and write privileges
    3. Setup Network Access. Ensure to add IP when you deploy but for now, we'll allow access from anywhere
    4. Click connect, connect your application, select node version and get your connection string.

12. DB Connection
    1. Note, this will be moved to the env file but for now, we create db folder with connectdb.js file
    2. Create the connectionString variable and set it to the connection string copied. Note that the password usually is shown in plane text here but not inserted in this project. It'll be in the .env file which is git ignored
    
13. To connect the MongoDB to the NodeAPI, we'll be making use of Mongoose
    1. Install Mongoose using npm. (I manually downgraded from version 7 to 5)
    2. Import mongoose in the connectdb file. Initiate the mongoose.connect() method and include the connect string. It returns a promise so add the .then to print a connection message to the db and a .catch to catch errors

    3. Now import the connectdb file into your major app file. Import it without assigning a variable so it connects immediately upon starting the API

    The current setup works in such a way that it spins up the server before connecting to the DB. It ought to connect to the DB first before spinning up the server so we'll refactor the code, create a connectDB function that runs before starting the server.

    4. Create and setup the connectDB function (with the url parameter, which will be used later in the env file), move the mongoose.connect() function with all the parameters into the connectDB function

    5. Export the function using module.exports

14. Now we assign the connectDB variable to require the connect.js file in our app.js file
    1. Now in our app.js file, we setup a start() function which will connect the database, then start our app. 
    2. Note that the connectdb returns a promise, so we use the async await keywords, and also use the try, catch syntax in case of errors.
    3. Do not forget to call the start function.

15. Install the dotenv package, refactor the code to use the url string in the connectDB. In your .env file, input the key and the value of the connection string; remove it from connect.js.

16. 


// Detour

- Check JWT on the backend
- Compare bcrypt and simple crypt. (bycryptjs for Node)
- Check CORS 
- Check cookie-parser