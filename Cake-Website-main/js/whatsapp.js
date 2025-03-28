function sendToWhatsapp() {
    let phoneNumber = "+917489733426"; // Replace with your WhatsApp number

    // Get form values using IDs
    let name = document.getElementById("customer_name").value;
    let email = document.getElementById("customer_email").value;
    let address = document.getElementById("customer_address").value;
    let phone = document.getElementById("customer_phone").value;
    let date = document.getElementById("order_date").value;
    let time = document.getElementById("order_time").value;
    let flavour = document.getElementById("cake_flavour").value;
    let weight = document.getElementById("cake_weight").value;
    let message = document.getElementById("cake_message").value;
    let price = document.getElementById("price_range").value;

    // Ensure fields are not empty
    if (!name || !phone || !flavour || !weight) {
        alert("Please fill all required fields!");
        return;
    }

    // Construct the WhatsApp message
    let whatsappMessage = `Hello Ayushi, I want to order a cake:
🎂 Name: ${name}
📧 Email: ${email}
🏠 Address: ${address}
📞 Phone: ${phone}
📅 Date: ${date}
⏰ Time: ${time}
🍰 Flavour: ${flavour}
⚖️ Weight: ${weight} Kg
📝 Message: ${message}
💰 Price Range: ${price}`;

    // Encode the message properly
    let encodedMessage = encodeURIComponent(whatsappMessage);


    // Open WhatsApp with pre-filled message
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
}