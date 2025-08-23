const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.getElementById('emailSendButton').addEventListener('click', function() {
    var subject = document.getElementById('emailTitleInput').value;
    var email = 'bruno08rodriguez@gmail.com';
    var emailSubject = encodeURIComponent(subject);
    var mailtoLink = 'mailto:' + email + '?subject=' + emailSubject;
    window.open(mailtoLink, '_blank');
});

document.getElementById('whatsappSendButton').addEventListener('click', function() {
    var message = document.getElementById('whatsappTitleInput').value;
    var phoneNumber = '+34652139111'; // Número de teléfono de destino
    var messageText = encodeURIComponent(message);
    var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + messageText;
    window.open(whatsappLink, '_blank');
});

AOS.init();