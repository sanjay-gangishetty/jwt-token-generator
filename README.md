# JWT Token Generator

This simple Node.js script (`app.js`) demonstrates how to generate a JSON Web Token (JWT) using the `jsonwebtoken` library. This token can be used for various authentication and authorization purposes in web applications.

#### Instructions:

1. **Install Dependencies:**
   Make sure you have Node.js installed on your machine. If not, you can download it from [nodejs.org](https://nodejs.org/). Then, install the required `jsonwebtoken` library by running:
   ```bash
   $ npm i jsonwebtoken

3. **Replace Placeholder:**
In the `app.js` file, replace the `'SECRETKEY'` with your actual secret key. This key is used to sign the JWT and should be kept secure.

4. **Run the Script:**
Execute the script by running:
   ```bash
   $ node app.js

6. **Generated Token:**
The script will output the generated JWT token to the console.
   ```bash
   $ Generated JWT token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDc3MjM3OTIsImV4cCI6MTY0NzcyNzQ5Mn0.b_5x19Z-1mKhWi7H8x4bS8sx8VfTW0HXhbI5u7yVtIg

#### File Structure:
- `app.js`: Node.js script for generating JWT token.
- `README.md`: This file containing instructions and information about the script.

#### Dependencies:
- `jsonwebtoken`: Library for generating JSON Web Tokens.

#### Example Usage:
```bash
$ node app.js
Generated JWT token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDc3MjM3OTIsImV4cCI6MTY0NzcyNzQ5Mn0.b_5x19Z-1mKhWi7H8x4bS8sx8VfTW0HXhbI5u7yVtIg
