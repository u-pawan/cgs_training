function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const todayDate = document.getElementById("todayDate").value;

    if (birthdate && todayDate) {
        const today = new Date(todayDate);
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
            document.getElementById("result").innerHTML = `<h4>Your age is: ${age} years</h4><p style "color: white;">Hurray! It's your birthday! 🎉</p>`;
        } else {
            document.getElementById("result").innerHTML = `<h4>Your age is: ${age} years</h4>`;
        }
    } else {
        document.getElementById("result").innerHTML = `<p class="text-danger">Please enter both dates!</p>`;
    }
}
 