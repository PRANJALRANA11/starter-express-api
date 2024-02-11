const express = require('express');
const app = express();

app.all('/', (req, res) => {
    console.log("Just got a request!");

    async function hitURL() {
        try {
            const response = await fetch('https://text-to-speech-uajn.onrender.com/');
            const movies = await response.json();
            console.log(movies);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
  
    // Call the function immediately
    hitURL();
  
    // Call the function every 30 minutes
    setInterval(hitURL, 30*60*1000);
  
    res.send('Yo!');
});

app.listen(process.env.PORT || 3000);
