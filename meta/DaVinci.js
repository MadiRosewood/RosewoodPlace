
        // API Endpoint and API Key
        const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
        const apiKey = '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';  // Replace with your actual API key securely

        // DOM elements
        const chatForm = document.getElementById('chat-form');
        const userInput = document.getElementById('user-input');
        const chatContainer = document.querySelector('.chat-container');

        chatForm.addEventListener('submit', function (event) {
          event.preventDefault();
      
          const userMessage = userInput.value;
          displayUserMessage(userMessage);
      
          const messages = [
              { role: "user", content: userMessage }
          ];
      
          axios.post(apiEndpoint, {
              model: "gpt-3.5-turbo",  // Or "gpt-4"
              messages: messages,
              max_tokens: 50,
              temperature: 0.7,  // Adjust creativity level
          }, {
              headers: {
                  'Authorization': `Bearer ${apiKey}`,
                  'Content-Type': 'application/json',
              }
          })
          .then(response => {
              const aiMessage = response.data.choices[0].message.content.trim();
              displayBotMessage(aiMessage);
          })
          .catch(error => {
              if (error.response) {
                  console.error('Error response:', error.response.data);  // Logs the full error response
              } else {
                  console.error('Error:', error.message);
              }
              displayBotMessage('Sorry, there was an error. Please try again later.');
          });
      
          userInput.value = '';  // Clear the input field
      });

        // Function to display user message
        function displayUserMessage(message) {
            const userMessageDiv = document.createElement('div');
            userMessageDiv.classList.add('message', 'user');
            userMessageDiv.innerHTML = `<p>${message}</p>`;
            chatContainer.appendChild(userMessageDiv);
        }

        // Function to display bot message
        function displayBotMessage(message) {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('message', 'chatgpt');
            botMessageDiv.innerHTML = `<strong>ChatGPT: </strong> ${message}`;
            chatContainer.appendChild(botMessageDiv);
        }