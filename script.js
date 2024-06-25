const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const message = userInput.value;
        displayMessage("user", message);
        generateResponse(message);
        userInput.value = "";
    }

});

displayMessage = (sender, message) => {
    const messageContainer = document.createElement("div");
        messageContainer.classList.add(
            sender === 'user'? "user-message" : "bot-message"

        );
    messageContainer.innerText = message;
    chatOutput.appendChild(messageContainer);
};

generateResponse = (message) => {
    const response = getResponse(message);
    displayMessage("bot", response);
};

getResponse = (message) => {
    const responses = {
        hello: "Hi there! How can I help yoy!",
        "how are you?" : "Iam am doing well, Thank you"
        //add more responses here if needed
    };
    const lowercaseMessage = message.toLowerCase();
    for(const key in responses) {
        if(lowercaseMessage.includes(key)){
            return responses[key];
        }
    }
    return "I am sorry, I don't understand."
};