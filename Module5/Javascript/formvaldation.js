//handleFormSubmit is Function 1: Handles form submission event
function handleFormSubmit(event) {
    // Prevent the contactUs.html page from reloading
    event.preventDefault();

    // Call Function 2 (validation)
    var isValid = validateForm(); // Function 2

    // If validation fails, exit and do not continue
    if (!isValid) {
        return; // exit the function
    }

   
    var total = calculateTotal(); // Function 3

    // Get the form input values
    var firstName = document.getElementById('fname').value.trim(); 
    var lastName = document.getElementById('lname').value.trim();
    var comments = document.getElementById('comments').value.trim();
    var classTime = document.getElementById('class_time').value;

    // Age radio buttons
    var ageRadio = document.querySelector('input[name="age_confirmation"]:checked');
    var ageAnswer = ageRadio ? ageRadio.value : 'not selected';
 console.log(' Form Submission'); // For demonstration, log the values to the console
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Comments:', comments);
    console.log('Class Time:', classTime);
    console.log('Age Confirmation:', ageAnswer);
    console.log('Estimated Total:', '$' + total.toFixed(2));


    //show a confirmation
    alert('Form submitted successfully!');
}

// FUNCTION 2: Validates at least two text inputs (fname and lname)
function validateForm() { 
    var firstNameInput = document.getElementById('fname'); // first name input field
    var lastNameInput = document.getElementById('lname');

    // Check First Name
    if (firstNameInput.value.trim() === '') {
        alert('First name is required.');
        firstNameInput.focus(); // set focus to the first name input
        return false; // validation failed
    }

    // Check Last Name
    if (lastNameInput.value.trim() === '') {
        alert('Last name is required.');
        lastNameInput.focus();
        return false; // validation failed
    }

    // If we get here, validation was successful
    return true;
}

// FUNCTION 3: Calculates total from checked checkboxes (and updates the estimate field)
function calculateTotal() {
    var total = 0;

    // Get references to checkboxes
    var nutrition = document.getElementById('nutrition');
    var personalTraining = document.getElementById('personal_training');
    var groupClasses = document.getElementById('group_classes');

    // If you left the values as "$10", "$50", etc, use this helper:
    function toNumber(val) {
        // remove any $ and convert to float
        return parseFloat(String(val).replace('$', '')) || 0;
    }

    if (nutrition && nutrition.checked) {
        total += toNumber(nutrition.value);
    }
    if (personalTraining && personalTraining.checked) {
        total += toNumber(personalTraining.value);
    }
    if (groupClasses && groupClasses.checked) {
        total += toNumber(groupClasses.value);
    }

    // Update the Estimated Total Price field on the page
    var estField = document.getElementById('class_est');
    if (estField) {
        estField.value = '$' + total.toFixed(2);
    }

    // Return the result of the calculation as required
    return total;
}

// Attach Function 1 to the form submit event
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('fillform');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    //Make the total button use Function 3 without submitting the form
    var totalButton = document.getElementById('prices');
    if (totalButton) {
        totalButton.addEventListener('click', function () {
            calculateTotal();
        });
    }
});
