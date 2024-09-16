async function fetchAndUpdateUser() {
    try {
        // Fetch the data from the Random User API
        var result = await fetch("https://randomuser.me/api/");
        
        // Convert the result to JSON
        var data = await result.json();
        
        // Access the user data from the results
        var user = data.results[0];

        // Log the user data to the console (for debugging purposes)
        console.log(user);

        // Update the profile picture, name, email, and other user info in the DOM
        document.getElementById("profile-pic").src = user.picture.large;
        document.getElementById("user-name").textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
        document.getElementById("user-email").textContent = `Email: ${user.email}`;
        document.getElementById("user-dob").textContent = `DOB: ${new Date(user.dob.date).toLocaleDateString()}`;
        document.getElementById("user-gender").textContent = `Gender: ${user.gender}`;
        document.getElementById("user-address").textContent = `Address: ${user.location.street.name}, ${user.location.city}, ${user.location.country}`;
        document.getElementById("user-contact").textContent = `Contact: ${user.phone}`;
    } catch (error) {
        // Log any errors to the console
        console.error("Error fetching data: ", error);
    }
}

// Call the fetchAndUpdateUser function when the window loads
window.onload = fetchAndUpdateUser;

// Add an event listener to the "New" button to fetch a new user on click
document.getElementById("new-btn").addEventListener("click", fetchAndUpdateUser);
