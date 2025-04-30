// Get the user's geolocation
navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Fetch weather data from the server
    const response = await fetch(`/weather?latitude=${lat}&longitude=${lon}`);
    const data = await response.json();

    // Update the page with fetched data
    document.getElementById('location').textContent = `Location: ${data.name}, ${data.sys.country}`;
    document.getElementById('date').textContent = `Date: ${new Date().toLocaleDateString()}`;
    document.getElementById('time').textContent = `Time: ${new Date().toLocaleTimeString()}`;
    document.getElementById('timezone').textContent = `Timezone: ${timezone}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('weather-condition').textContent = `Weather: ${data.weather[0].description}`;
});
