document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Validation du prénom
    const firstName = document.getElementById('firstName');
    const firstNameError = document.getElementById('firstNameError');
    if (firstName.value.trim() === '') {
        isValid = false;
        firstNameError.style.display = 'block';
        firstName.setAttribute('aria-invalid', 'true');
    } else {
        firstNameError.style.display = 'none';
        firstName.removeAttribute('aria-invalid');
    }

    // Validation du nom
    const lastName = document.getElementById('lastName');
    const lastNameError = document.getElementById('lastNameError');
    if (lastName.value.trim() === '') {
        isValid = false;
        lastNameError.style.display = 'block';
        lastName.setAttribute('aria-invalid', 'true');
    } else {
        lastNameError.style.display = 'none';
        lastName.removeAttribute('aria-invalid');
    }

    // Validation de l'email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRequiredError = document.getElementById('emailRequiredError');
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email.value.trim() === '') {
        isValid = false;
        emailRequiredError.style.display = 'block';
        emailError.style.display = 'none';
        email.setAttribute('aria-invalid', 'true');
    } else if (!emailPattern.test(email.value.trim())) {
        isValid = false;
        emailRequiredError.style.display = 'none';
        emailError.style.display = 'block';
        email.setAttribute('aria-invalid', 'true');
    } else {
        emailRequiredError.style.display = 'none';
        emailError.style.display = 'none';
        email.removeAttribute('aria-invalid');
    }

    // Validation du type de requête
    const queryTypeDiv = document.getElementById('queryType');
    const queryTypeRadios = document.querySelectorAll('.radio-checkbox');
    const queryTypeError = document.getElementById('queryTypeError');
    let queryTypeSelected = false;

    queryTypeRadios.forEach(radio => {
        if (radio.classList.contains('checked')) {
            queryTypeSelected = true;
        }
    });

    if (!queryTypeSelected) {
        isValid = false;
        queryTypeError.style.display = 'block';
        queryTypeDiv.setAttribute('aria-invalid', 'true'); // Utiliser l'ID correct ici
    } else {
        queryTypeError.style.display = 'none';
        queryTypeDiv.removeAttribute('aria-invalid');
    }

    // Validation du message
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim() === '') {
        isValid = false;
        messageError.style.display = 'block';
        message.setAttribute('aria-invalid', 'true');
    } else {
        messageError.style.display = 'none';
        message.removeAttribute('aria-invalid');
    }

    // Validation du consentement
        const consent = document.getElementById('consentCheckbox');
        const consentError = document.getElementById('consentError');
        if (!consent.classList.contains('checked')) {
            isValid = false;
            consentError.style.display = 'block';
            consent.setAttribute('aria-invalid', 'true');
        } else {
            consentError.style.display = 'none';
            consent.removeAttribute('aria-invalid');
        }

    // Afficher le message de succès si tout est valide
    if (isValid) {
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'flex';
    }
});

// Ajout d'écouteurs d'événements pour les boutons radio et les cases à cocher
document.querySelectorAll('.radio-div').forEach(radioDiv => {
    radioDiv.addEventListener('click', function() {
        document.querySelectorAll('.radio-div').forEach(rd => rd.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.radio-checkbox').forEach(rc => rc.classList.remove('checked'));
        this.querySelector('.radio-checkbox').classList.add('checked');
    });
});

document.querySelector('.checkbox').addEventListener('click', function() {
    this.classList.toggle('checked');
});
