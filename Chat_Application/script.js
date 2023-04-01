// Get DOM elements
const messageList = document.querySelector('.messages');
const input = document.querySelector('input');
const button = document.querySelector('button');

// Function to add a new message to the chat history
function addMessage(message, type) {
  const li = document.createElement('li');
  li.classList.add(type);
  li.innerHTML = `<p>${message}</p>`;
  messageList.appendChild(li);
}

// Event listener for the send button
button.addEventListener('click', function() {
  const message = input.value.trim();
  if (message !== '') {
    addMessage(message, 'sent');
    input.value = '';
  }
});

// Event listener for the enter key
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const message = input.value.trim();
    if (message !== '') {
      addMessage(message, 'sent');
      input.value = '';
    }
  }
});

// Add some initial messages to the chat history
addMessage('Hello, how are you doing today?', 'sent');
addMessage("I'm doing well, thanks for asking. How about you?", 'received');
addMessage('Not too bad, just working on this chat application. How about you?', 'sent');
addMessage('Same here! What features are you planning to add?', 'received');
