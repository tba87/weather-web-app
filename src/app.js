const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS) from 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

// Endpoint to fetch weather data
app.get('/weather', async (req, res) => {
    try {
        // Geolocation parameters (could be set dynamically later)
        const { latitude, longitude } = req.query; // Get from query params (like ?lat=123&lon=456)

        // OpenWeatherMap API request
        const apiKey = '4271f9eca3b7a15fd663948149d38fba'; // Replace with your API key
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);

        // Send weather data as JSON response
        res.json(weatherData.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
