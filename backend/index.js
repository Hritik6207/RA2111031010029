const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/test/register', (req, res) => {

    console.log('Received data:', req.body);

    res.send('Data received successfully!');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is running on port ${port}");
});

const postData ={

    "companyName": "Vivek Mart",
    
    "ownerName": "Rahul",
    
    "rollNo": "RA2111031010029",
    
    "ownerEmail": "hs8985@srmist.edu.in",
    
    "accessCode": "bntKpm"
    
    };


// axios.post('http://20.244.56.144/test/register', postData)
//     .then(response => {
//         console.log('Response:', response.data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

const authdata={
    companyName: "Vivek Mart",
    clientID: "79c33173-0813-46f9-b639-fc585305de48",
    clientSecret: "XBpWkzqZPzDuTkfp",
    ownerName: "Rahul",
    ownerEmail: "hs8985@srmist.edu.in",
    rollNo: "RA2111031010029"
  }

  axios.post('http://20.244.56.144/test/auth', authdata)
  .then(response => {
      console.log('Response:', response.data);
  })
  .catch(error => {
      console.error('Error:', error);
  });

  const authtoken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU0OTkzLCJpYXQiOjE3MTIxNTQ2OTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijc5YzMzMTczLTA4MTMtNDZmOS1iNjM5LWZjNTg1MzA1ZGU0OCIsInN1YiI6ImhzODk4NUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiVml2ZWsgTWFydCIsImNsaWVudElEIjoiNzljMzMxNzMtMDgxMy00NmY5LWI2MzktZmM1ODUzMDVkZTQ4IiwiY2xpZW50U2VjcmV0IjoiWEJwV2t6cVpQekR1VGtmcCIsIm93bmVyTmFtZSI6IlJhaHVsIiwib3duZXJFbWFpbCI6ImhzODk4NUBzcm1pc3QuZWR1LmluIiwicm9sbE5vIjoiUkEyMTExMDMxMDEwMDI5In0.y8JxL1JX3VV9qJS7m6BFYMAgSREdHWGdVd57p7V3A_M';

axios.get('http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q',{
    headers: {
        'Authorization': `Bearer ${authtoken}`
      }
})
  .then(response => {
    // Handle successful response
    console.log('Response data:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching data:', error);
  });

  axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000',{
    headers: {
        'Authorization': `Bearer ${authtoken}`
      }
})
  .then(response => {
    // Handle successful response
    console.log('Response data:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching data:', error);
  });