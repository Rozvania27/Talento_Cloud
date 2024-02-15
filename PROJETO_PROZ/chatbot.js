const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variável para armazenar a mensagem do usuário
const API_KEY = "PASTE-YOUR-API-KEY"; // Cole sua chave de API aqui
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Criar um elemento de bate-papo <li> com mensagem passada e className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">Usuário:</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // Elemento de <li> chat de retorno
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Definir as propriedades e a mensagem para a solicitação de API
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

    // Enviar solicitação POST para API, obter resposta e definir a resposta como texto de parágrafo
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Opa! Algo deu errado. Tente novamente.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Obter mensagem inserida pelo usuário e remover espaço em branco extra
    if(!userMessage) return;

    // Limpe a área de texto de entrada e defina sua altura como padrão
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Anexar a mensagem do usuário à caixa de bate-papo
    chatbox.appendChild(createChatLi(userMessage, "saindo"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        // Exibir "Pensamento..." enquanto aguarda a resposta
        const incomingChatLi = createChatLi("Procurando...", "Checando");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Ajustar a altura da área de texto de entrada com base em seu conteúdo
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // Se a tecla Enter for pressionada sem a tecla Shift e a janela 
    //  largura é maior que 800px, lidar com o bate-papo
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));