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
    2. Create the connectionString variable and set it to the connection string copied
    
13. To connect the MongoDB to the NodeAPI, we'll be making use of Mongoose
    1. Install Mongoose using npm. (I manually downgraded from version 7 to 5)
    2. 
