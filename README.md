# Inventory-API-

An Inventory tracking web application api for a logistic company

## API Functionalities

- Create an Inventory item
- Read an Inventory item
- Read all Inventory items
- Update an Inventory item
- Delete an Inventory item
- Create a Warehouse item
- Add an Inventory item to a Warehouse

## Tech Stacks

- Programming Language - Javascript(Node.js)
- Web Server - Express.js
- Database - MongoDB
- ODM - Mongoose
- Image File Utility - AWS S3

## How to Setup and Run the Application

Follow the under-listed procedures to setup locally and to test this project on your local machine.

\* **Clone the project files into a directory on your local machine**  
`git clone https://github.com/Timothy-py/Inventory-API-.git`

\* **cd into the Project directory**  
`cd Inventory-API`

\* **Install the dependencies**  
`npm install`

## Start the Server

- Open a console in the project directory and run
  `node server.js` or `nodemon`  
  if everyting goes well, you must see a log message that states - _Server is running on PORT: 8000_ and _MongoDB Database connection established successfully_

## Testing the Routes

Open your Postman or any other api testing tool and check out the following routes

- Create Inventory - POST http://localhost:8000/api/v1/inventory
- Read an Inventory - GET http://localhost:8000/api/v1/inventory
- Read all Inventories - GET http://localhost:8000/api/v1/inventory/all
- Update an Inventory - PATCH http://localhost:8000/api/v1/inventory/{inventory_id}
- Delete an Inventory - DELETE http://localhost:8000/api/v1/inventory/{inventory_id}
- Create Warehouse - POST http://localhost:8000/api/v1/warehouse
- Add an Inventory to a Warehouse- POST http://localhost:8000/api/v1/inventory/add-to-warehouse/{inventory_id}/{warehouse_id}

###### _contact me @ adeyeyetimothy33@gmail.com_
