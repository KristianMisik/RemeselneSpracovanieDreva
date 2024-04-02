document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(this);
    emailjs.sendForm('service_igfmp9g', 'template_6fckm6i', this)
        .then(function (result) {
            alert("Vaša objednávka bola odoslaná");
            console.log(result.text);
            document.getElementById('contactForm').reset();
        }, function(error) {
            alert("Chyba! Niečo nie je v poriadku");
            console.log(error.text);
        });
});