async function fetchAndUpdateUser() {
    try {
        var result = await fetch("https://randomuser.me/api/");
        
        var data = await result.json();
        
        var user = data.results[0];

        console.log(user);

        document.getElementById("profile-pic").src = user.picture.large;
        document.getElementById("user-name").textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
        document.getElementById("user-email").textContent = `Email: ${user.email}`;
        document.getElementById("user-dob").textContent = `DOB: ${new Date(user.dob.date).toLocaleDateString()}`;
        document.getElementById("user-gender").textContent = `Gender: ${user.gender}`;
        document.getElementById("user-address").textContent = `Address: ${user.location.street.name}, ${user.location.city}, ${user.location.country}`;
        document.getElementById("user-contact").textContent = `Contact: ${user.phone}`;
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

window.onload = fetchAndUpdateUser;

document.getElementById("new-btn").addEventListener("click", fetchAndUpdateUser);
