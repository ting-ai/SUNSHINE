const messages = [];

        function submitMessage() {
            // Get form values
            const sender = document.getElementById('sender').value;
            const messageText = document.getElementById('messageText').value;

            // Create a new message object with the current date
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().slice(0, 10);
            const newMessage = {
                date: formattedDate,
                sender: sender,
                message: messageText
            };

            // Add the new message to the array
            messages.push(newMessage);

            // Display the last 7 messages on the page
            displayMessages();

            // Clear the form
            document.getElementById('sender').value = '';
            document.getElementById('messageText').value = '';
        }

        function displayMessages() {
            // Get the message body container
            const messageBody = document.getElementById('messageBody');

            // Clear existing messages
            messageBody.innerHTML = '';

            // Display the last 7 messages or all if there are fewer than 7
            const startIdx = Math.max(0, messages.length - 7);
            const endIdx = messages.length;

            // Iterate through the selected messages and create divs
            for (let i = startIdx; i < endIdx; i++) {
                const message = messages[i];
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.innerHTML = `
                    <h3 class="message-date">${message.date}</h3>
  <p class="message-sender"><strong>昵称:</strong> ${message.sender}</p>
  <p class="message-content"><strong>请求信息:</strong> ${message.message}</p>
                `;
                messageBody.appendChild(messageDiv);
            }
        }