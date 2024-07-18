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

        // Verificar si el mensaje del usuario es una cadena (String)
        if (isNaN(userMessage)) {
            switch (userMessage.toLowerCase()) {
                case 'hablarnos al whatsapp':
                    setTimeout(function() {
                        appendMessage('bot', '¡Claro! Puedes contactarnos a través de WhatsApp al número +123456789.');
                    }, 500);
                    break;
                case 'llámanos':
                    setTimeout(function() {
                        appendMessage('bot', 'Si prefieres llamarnos, nuestro número de teléfono es +987654321. Estamos disponibles para ayudarte.');
                    }, 500);
                    break;
                case 'envíanos un correo':
                    setTimeout(function() {
                        appendMessage('bot', 'Si prefieres comunicarte por correo electrónico, puedes escribirnos a info@workhomechile.com. Te responderemos lo antes posible.');
                    }, 500);
                    break;
                default:
                    // Si el mensaje del usuario no coincide con ninguna opción, dar la bienvenida
                    setTimeout(function() {
                        appendMessage('bot', '¡Bienvenidos a WorkHomeChile! ¿En qué puedo ayudarte? Puedes decirme "Hablarnos al WhatsApp", "Llámanos" o "Envíanos un correo".');
                    }, 500);
            }
        } else {
            // Si el mensaje del usuario es un número entero
            const option = parseInt(userMessage);
            switch (option) {
                case 1:
                    setTimeout(function() {
                        appendMessage('bot', 'Si prefieres llamarnos, nuestro número de teléfono es +56931462301. Estamos disponibles para ayudarte.');
                    }, 500);
                    break;
                case 2:
                    setTimeout(function() {
                        appendMessage('bot', '¡Claro! Puedes contactarnos a través de WhatsApp al número +56931462301');
                    }, 500);
                    break;
                case 3:
                    setTimeout(function() {
                        appendMessage('bot', 'Si prefieres comunicarte por correo electrónico, puedes escribirnos a info@workhomechile.com. Te responderemos lo antes posible.');
                    }, 500);
                    break;
                default:
                    // Si el usuario ingresa un número que no coincide con ninguna opción
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