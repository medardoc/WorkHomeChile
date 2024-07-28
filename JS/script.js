// Inicializa EmailJS con tu ID de usuario
emailjs.init('service_u2ucdmo');
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtén los valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Prepara el objeto de parámetros para EmailJS
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'trabajo_tony@hotmail.com'
        };

        // Enviar el correo electrónico
        emailjs.send('service_u2ucdmo', 'template_vp33xej', templateParams)
            .then((response) => {
                console.log('Correo enviado con éxito!', response.status, response.text);
                alert('¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.');
            }, (error) => {
                console.error('Error al enviar el correo:', error);
                alert('Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.');
            });
    });
});

// para que las tarjetas de sercios.html puedan redirigir a contactos.html

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        if (card.dataset.contact) {
            card.addEventListener('click', () => {
                window.location.href = 'contactanos.html';
            });
        }
    });
});



// JavaScript para controlar el slider
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Cambiar imagen cada 3 segundos
}

document.addEventListener('DOMContentLoaded', function() {
    const chatBubble = document.getElementById('chat-bubble');
    const chatContainer = document.getElementById('chat-container');
    const sendButton = document.getElementById('send-button');
    const chatDisplay = document.getElementById('chat-display');
    const userInput = document.getElementById('user-input');

    chatBubble.addEventListener('click', function() {
        chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
    });

    sendButton.addEventListener('click', function() {
        const userMessage = userInput.value;
        appendMessage('user', userMessage);

        if (isNaN(userMessage)) {
            switch (userMessage.toLowerCase()) {
                case 'whatsapp':
                    setTimeout(function() {
                        appendMessage('bot', '¡Claro! Puedes contactarnos a través de WhatsApp al número +123456789.');
                    }, 500);
                    break;
                case 'llámanos':
                    setTimeout(function() {
                        appendMessage('bot', 'Si prefieres llamarnos, nuestro número de teléfono es +987654321. Estamos disponibles para ayudarte.');
                    }, 500);
                    break;
                case 'correo':
                    setTimeout(function() {
                        appendMessage('bot', 'Si prefieres comunicarte por correo electrónico, puedes escribirnos a info@workhomechile.com. Te responderemos lo antes posible.');
                    }, 500);
                    break;
                default:
                    setTimeout(function() {
                        appendMessage('bot', 
                            '¡Bienvenidos a WorkHomeChile!' +
                            '¿En qué puedo ayudarte?'+ 
                            'Presiona 1: Envianos un WhatsApp, Presiona 2: Envianos un correo, Presiona 3: Llamanos.');
                        }, 500);
            }
        } else {
            const option = parseInt(userMessage);
            switch (option) {
                case 1:
                    setTimeout(function() {
                        appendMessage('bot', '¡Claro! Puedes contactarnos a través de WhatsApp al número +123456789.');
                    }, 500);
                    break;
                case 2:
                    setTimeout(function() {
                        appendMessage('bot', 'Si prefieres comunicarte por correo electrónico, puedes escribirnos a info@workhomechile.com. Te responderemos lo antes posible.');
                    }, 500);
                    break;
                case 3:
                    setTimeout(function() {
                        appendMessage('bot', 'Si prefieres llamarnos, nuestro número de teléfono es +987654321. Estamos disponibles para ayudarte.');
                    }, 500);
                    break;
                default:
                    setTimeout(function() {
                        appendMessage('bot', 'No comprendo tu mensaje. ¿Puedes ser más específico?');
                    }, 500);
            }
        }

        userInput.value = ''; // Limpiar el campo de entrada después de enviar el mensaje
    });

    function appendMessage(sender, message) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('chat-message');
        messageContainer.innerHTML = `<div class="${sender}-message">${message}</div>`;
        chatDisplay.appendChild(messageContainer);
        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Desplazar hacia abajo para mostrar el último mensaje
    }
});
