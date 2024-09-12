document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginAs = document.querySelector('input[name="loginAs"]:checked').value.toLowerCase();

    if (!email || !password) {
        alert('Please fill in all required fields.');
        return;
    }

    // Fetch the credentials from the JSON file
    fetch('credentials.json')
        .then(response => response.json())
        .then(credentials => {
            let isValid = false;
            let userInfo = null;

            // Validate based on loginAs (admin or user)
            const role = loginAs === 'admin' ? credentials.admin : credentials.users;

            // Find matching user or admin
            userInfo = role.find(person => person.email === email && person.password === password);
            if (userInfo) {
                isValid = true;
            }

            // Get toast elements
            const successToast = new bootstrap.Toast(document.getElementById('successToast'));
            const failureToast = new bootstrap.Toast(document.getElementById('failureToast'));

            if (isValid) {
                // Save user info (including name) to localStorage
                localStorage.setItem('userId', userInfo.employeeId);
                localStorage.setItem('userEmail', userInfo.email);
                localStorage.setItem('userName', userInfo.name); // Store the user's name
                localStorage.setItem('loginSuccess', 'true');
                localStorage.setItem('userPhone', userInfo.phoneNo)
                localStorage.setItem('userInfo', JSON.stringify(userInfo));

                successToast.show();  // Show success toast

                setTimeout(() => {
                    window.location.href = 'demo_dash.html';
                }, 500);
            } else {
                failureToast.show();  // Show error toast
            }
        })
        .catch(error => {
            console.error('Error fetching the credentials:', error);
            alert('Error loading credentials. Please try again later.');
        });
});
