// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('date-time').textContent = `Current Date and Time: ${dateTimeString}`;
  }
  
  // Function to fetch weather data
  async function fetchWeather() {
    try {
      // Get user's geolocation
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
  
        // Fetch weather data from your backend
        const response = await fetch(`/weather?latitude=${latitude}&longitude=${longitude}`);
        const data = await response.json();
  
        // Display weather information
        document.getElementById('weather').textContent = `Temperature: ${data.main.temp}°C, Condition: ${data.weather[0].description}`;
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      document.getElementById('weather').textContent = 'Unable to retrieve weather data.';
    }
  }
  
  // Initialize functions
  updateDateTime();
  fetchWeather();
  
  // Update date and time every minute
  setInterval(updateDateTime, 60000);
  