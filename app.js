const jwt = require('jsonwebtoken');

// Define the payload for the JWT token
const payload = {
//Payload Data
};

// Replace it with the actual JWT key
const secretKey = 'SECRETKEY';

// Change algorithm,if you need
const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });

console.log('Generated JWT token:', token);
