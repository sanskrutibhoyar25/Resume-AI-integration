function toggleChat() {
    const chat = document.getElementById("chatContainer");

    if(chat.style.display === "flex"){
        chat.style.display = "none";
    }else{
        chat.style.display = "flex";
    }
}

function sendMessage() {

    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const text = input.value.trim();

    if(text === "") return;

    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = text;

    chatBox.appendChild(userMsg);

    const msg = text.toLowerCase();

    let reply = "";

    if(msg.includes("hi") || msg.includes("hello")){
        reply = "Hello 👋 Welcome to Sanskruti's Resume.";
    }

    else if(msg.includes("name")){
        reply = "My name is Sanskruti Bhoyar.";
    }

    else if(msg.includes("education") || msg.includes("college")){
        reply = "I am pursuing B.Tech in Information Technology from JD College of Engineering and Management. Expected graduation year is 2028.";
    }

    else if(msg.includes("cgpa")){
        reply = "My current CGPA is 8.83.";
    }

    else if(msg.includes("hsc") || msg.includes("percentage")){
        reply = "My HSC percentage is 66.17%.";
    }

    else if(msg.includes("skill")){
        reply = "I know HTML, CSS, JavaScript, Basics of C Programming, Python and VS Code.";
    }

    else if(msg.includes("project")){
        reply = "My projects include Canteen Billing System and Peer-to-Peer Skill Exchange Platform.";
    }

    else if(msg.includes("canteen")){
        reply = "The Canteen Billing System simplifies billing, order processing and invoice generation.";
    }

    else if(msg.includes("skill exchange")){
        reply = "The platform helps community members exchange skills and learn collaboratively.";
    }

    else if(msg.includes("certificate") || msg.includes("certification")){
        reply = "I completed NPTEL Enhancing Soft Skills and Personality and Google Android Developer Virtual Internship.";
    }

    else if(msg.includes("email")){
        reply = "Email: sanskrutibhoyar25@gmail.com";
    }

    else if(msg.includes("phone") || msg.includes("contact")){
        reply = "Phone: 7498066645";
    }

    else if(msg.includes("location") || msg.includes("address")){
        reply = "I am from Wani, Maharashtra.";
    }

    else if(msg.includes("objective")){
        reply = "My objective is to enhance technical and problem-solving skills while gaining practical experience in software development.";
    }

    else{
        reply = "You can ask me about my education, CGPA, projects, skills, certifications, objective, email or contact details.";
    }

    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";
    botMsg.innerText = reply;

    chatBox.appendChild(botMsg);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}

document.addEventListener("DOMContentLoaded", function(){

    const input = document.getElementById("userInput");

    input.addEventListener("keypress", function(e){

        if(e.key === "Enter"){
            sendMessage();
        }

    });

});