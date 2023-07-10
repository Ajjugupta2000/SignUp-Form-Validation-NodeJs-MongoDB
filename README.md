# SignUp-Form-Validation-NodeJs-MongoDB
# Project Summary
This Node.js project is a web application with a front-end user interface, built using Express.js framework and MongoDB as the database. The application allows users to register as restaurants and provides features such as restaurant submissions, login, and validation of user inputs.

# Tech Stacks
- HTML/CSS/JavaScript/Bootstrap(Front-end)
- Node.js
- Express.js
- MongoDB


# Features
1. Restaurant Submissions: Users can submit their restaurant details, including name, pincode, location, website, phone number, email, password, and average daily transactions.
2. Validation of Inputs:
- Mobile Number: Validates if the mobile number is a valid 10-digit number.    
- Email Address: Validates if the email address is in a valid format.      
- Existing Email Check: Checks if the entered email already exists in the database.    
3. User Registration: Stores the submitted restaurant details in the MongoDB database after successful validation.
4. Login: Allows registered users to log in with their email and password.
- Password Verification: Verifies the entered password against the stored password for the corresponding email.    
- Login Success/Failure: Displays appropriate messages based on the password validation result.

# How to Use
1. Clone the Repository: git clone `https://github.com/Ajjugupta2000/SignUp-Form-Validation-NodeJs-MongoDB`
2. Install Dependencies: `npm install`
3. Set up MongoDB: Make sure you have MongoDB installed and running.
4. Configure Database Connection: Update the MongoDB connection details in the conn.js file.
5. Start the Server: `node server.js` or `npm start`
6. Open the Application: Visit `http://localhost:3000` in your web browser.
7. Sign Up: Fill out the restaurant registration form and click the submit button.
- Ensure a valid 10-digit mobile number and a valid email address are provided.   
- If the email already exists, a message will be displayed.   
- Upon successful submission, a "Thanks for Registration" message will be shown.
8. Log In: Fill out the login form with your registered email and password, and click the login button.
- If the password is correct, a "Login Success" message will be displayed.
- If the password is incorrect, a "Wrong Password" message will be shown.
- If the email is not registered, an "Invalid Email, Please Create Your Account" message will be displayed.

# Project Demo



https://github.com/Ajjugupta2000/SignUp-Form-Validation-NodeJs-MongoDB/assets/72141908/ff612179-06fd-4fa5-9819-2acd90ee4169



Feel free to explore the application and customize it further to suit your needs

## That's it 🎉

# Happy Coding !🙂🙂  
