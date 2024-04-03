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

    "companyName": "vivek-mart",
    
    "ownerName": "rahul",
    
    "rollNo": "RA2111031010029",
    
    "ownerEmail": "hs8985@srmist.edu.in",
    
    "accessCode": "kJtfKH"
    
    };




 const authdata={
            "companyName": "vivek-mart",
            "clientID": "c51a8128-d713-4597-8905-8214005c4eec",
            "clientSecret": "cWLNjZOiWzGIrdER",
            "ownerName": "Rahul",
            "ownerEmail": "hs8985@srmist.edu.in",
          "rollNo":"RA2111031010029"
    }

axios.post('http://20.244.56.144/test/auth', authdata)
.then(response => {
    console.log('Response:', response.data);
})
.catch(error => {
    console.error('Error:', error);
});

const authtoken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU5ODkzLCJpYXQiOjE3MTIxNTk1OTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImM1MWE4MTI4LWQ3MTMtNDU5Ny04OTA1LTgyMTQwMDVjNGVlYyIsInN1YiI6ImhzODk4NUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoidml2ZWstbWFydCIsImNsaWVudElEIjoiYzUxYTgxMjgtZDcxMy00NTk3LTg5MDUtODIxNDAwNWM0ZWVjIiwiY2xpZW50U2VjcmV0IjoiY1dMTmpaT2lXekdJcmRFUiIsIm93bmVyTmFtZSI6InJhaHVsIiwib3duZXJFbWFpbCI6ImhzODk4NUBzcm1pc3QuZWR1LmluIiwicm9sbE5vIjoiUkEyMTExMDMxMDEwMDI5In0.TxlWOhAx2zrSAlTfvrezOwjbrcNx70jwrEsamjsKMYw';

// axios.get('http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q',{
//     headers: {
//         'authorization': `Bearer ${authtoken}`
//       }
// })
//   .then(response => {
//     // Handle successful response
//     console.log('Response data:', response.data);
//   })
//   .catch(error => {
//     // Handle error
//     console.error('Error fetching data:', error);
//   });


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