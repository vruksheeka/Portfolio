document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    console.log("Function is working");

    var params = {
        name: document.getElementById("name-field").value,
        email: document.getElementById("email-field").value,
        subject: document.getElementById("subject-field").value,
        message: document.getElementById("message-field").value,
    };

    console.log("Params:", params);

    const serviceID = "service_3do6ehf";
    const templateID = "template_7arrxvo";

    emailjs
        .send(serviceID, templateID, params)
        .then(res => {
            console.log("Email Sent!", res);
            alert("Your message was sent successfully!");
            document.getElementById("contact-form").reset();
        })
        .catch(err => {
            console.error("EmailJS Error:", err);
            alert("Failed to send message. Check console for details.");
        });
});
