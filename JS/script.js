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

// Inicializa EmailJS con tu API Key
emailjs.init('O5fNT_7RKdegz9ZLg');

// Función para enviar el correo cuando el formulario es enviado
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío normal del formulario

    // Parámetros de la plantilla de correo
    var templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Enviar el correo electrónico
    emailjs.send('service_rpccx7g', 'template_tyh7h41', templateParams)
        .then(function(response) {
           alert('Correo enviado con éxito!');
           console.log('Correo enviado con éxito!', response.status, response.text);
        }, function(error) {
           alert('Error al enviar el correo.');
           console.error('Error al enviar el correo:', error);
        });
});
