document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    var sendMailDiv = document.getElementById('sendMail');
    if (sendMailDiv) {
        sendMailDiv.addEventListener('click', openEmail);
    }
    function openEmail() {
        // Replace 'info@velichamfinance.com' with the recipient's email address
        var recipientEmail = 'demo@sendmail.com';
    
        // Create the mailto link
        var mailtoLink = 'mailto:' + recipientEmail;
    
        // Open the default email client
        window.location.href = mailtoLink;
    }
    
    // Attach the openEmail function to the click event of the parent div
    var sendMailDiv = document.getElementById('sendMail');
    sendMailDiv.addEventListener('click', openEmail);
    
    function openGoogleMaps() {
        // Replace 'latitude' and 'longitude' with the actual coordinates or 'address' with the desired location address
        var latitude = '28.6437209'; // Example latitude (San Francisco, CA)
        var longitude = '77.2126202'; // Example longitude (San Francisco, CA)
        var address = 'Delhi'; // Example address (Googleplex)

        // Create the Google Maps URL
        var googleMapsLink = 'https://www.google.com/maps?q=' + encodeURIComponent(address);

        // Open Google Maps in a new tab or window
        window.open(googleMapsLink, '_blank');
    }

    // Attach the openGoogleMaps function to the button click event
    var openGoogleMapsBtn = document.getElementById('Location');
    openGoogleMapsBtn.addEventListener('click', openGoogleMaps);

});

 


console.log("hi");

