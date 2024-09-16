let currentStep = 0;

        const steps = [
            {
                label: "First Name",
                id: "firstName",
                type: "text",
                placeholder: "Enter your first name",
                validationMsg: "Please enter your first name."
            },
            {
                label: "Last Name",
                id: "lastName",
                type: "text",
                placeholder: "Enter your last name",
                validationMsg: "Please enter your last name."
            },
            {
                label: "Email",
                id: "email",
                type: "email",
                placeholder: "Enter your email address",
                validationMsg: "Please enter a valid email."
            },
            {
                label: "Phone Number",
                id: "phone",
                type: "tel",
                placeholder: "Enter your phone number",
                validationMsg: "Please enter a valid phone number."
            },
            {
                label: "Password",
                id: "password",
                type: "password",
                placeholder: "Create a password",
                validationMsg: "Please enter a password."
            }
        ];

        function showNextInput() {
            const currentInput = document.getElementById(steps[currentStep - 1]?.id);
            if (currentInput && !currentInput.checkValidity()) {
                currentInput.reportValidity();
                return;
            }

            if (currentStep < steps.length) {
                const form = document.getElementById('registrationForm');
                const step = steps[currentStep];

                const inputDiv = document.createElement('div');
                inputDiv.className = 'mb-3';
                inputDiv.innerHTML = `
                    <label for="${step.id}" class="form-label">${step.label}</label>
                    <input type="${step.type}" class="form-control" id="${step.id}" placeholder="${step.placeholder}" required>
                    <div class="invalid-feedback">${step.validationMsg}</div>
                `;
                form.appendChild(inputDiv);

                currentStep++;

                if (currentStep < steps.length) {
                    document.getElementById('nextButton').classList.remove('hidden');
                } else {
                    const submitButton = document.createElement('button');
                    submitButton.type = 'submit';
                    submitButton.className = 'btn btn-primary w-100';
                    submitButton.textContent = 'Submit';
                    form.appendChild(submitButton);
                    document.getElementById('nextButton').classList.add('hidden');
                }
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            showNextInput(); 
            document.getElementById('nextButton').classList.remove('hidden');
        });

        document.getElementById('registrationForm').addEventListener('submit', function (event) {
          event.preventDefault(); 
            const toastEl = document.getElementById('successToast');
            const toast = new bootstrap.Toast(toastEl);
            toast.show(); 
        });