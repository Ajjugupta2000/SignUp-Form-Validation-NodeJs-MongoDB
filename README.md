# SignUp-Form-Validation-NodeJs-MongoDB
# Project Summary
This Node.js project is a web application with a front-end user interface, built using Express.js framework and MongoDB as the database. The application allows users to register as restaurants and provides features such as restaurant submissions, login, and validation of user inputs.

# Tech Stacks
Node.js
Express.js
MongoDB
HTML/CSS/JavaScript (Front-end)

# Features
1. Restaurant Submissions: Users can submit their restaurant details, including name, pincode, location, website, phone number, email, password, and average daily transactions.
2. Validation of Inputs:    
Mobile Number: Validates if the mobile number is a valid 10-digit number.
Email Address: Validates if the email address is in a valid format.
Existing Email Check: Checks if the entered email already exists in the database.
3. User Registration: Stores the submitted restaurant details in the MongoDB database after successful validation.
4. Login: Allows registered users to log in with their email and password.     
   Password Verification: Verifies the entered password against the stored password for the corresponding email.
   Login Success/Failure: Displays appropriate messages based on the password validation result.
