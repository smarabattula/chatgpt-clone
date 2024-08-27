import './App.css';
import './normal.css';
import ChatGPTAvatar from './ChatGPTAvatar';
import {useState } from "react";
function App() {

  // Add state for input and chat log

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: "How can I help you today?"
  },
  {
    user: "me",
    message: "Hello World! I'm human prompt"
  }]);

  async function handleSubmit(e) {
    e.preventDefault();

    // Create the updated chat log including the new user message
    const updatedChatLog = [
      ...chatLog,
      { user: "me", message: `${input}` },
    ];

    // Update the state with the new chat log
    setChatLog(updatedChatLog);
    setInput("");

    // Now send the updated chat log to the server
    const response = await fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: updatedChatLog.map((message) => message.message).join(" "),
      }),
    });

    const data = await response.json();

    // Update the chat log with the GPT response
    setChatLog([
      ...updatedChatLog,
      { user: "gpt", message: `${data.message}` },
    ]);

    console.log(data.message);
  }


  return (
    <div className="App">
      <aside className = "sidemenu">
        <div className = "sidemenu-button">
          <span> + </span>
          New Chat
        </div>
      </aside>
      <section className = "chatbox">
        {chatLog.map((message, index) => (
        <ChatMessage key = {index} message = {message}/>
        ))}

      <div className = "chat-input-box">
      <form onSubmit={handleSubmit}>
      <input rows = "1"
      value = {input}
      onChange = {(e) => setInput(e.target.value)} className = "chat-input-textarea" placeholder = "Type your message here"></input>
      </form>
      </div>
      </section>

    </div>
  );
}

export default App;

const ChatMessage = ({message}) => {
  return (
<div className = {`chat-msg ${message.user === "gpt" && "chatgpt"}`}>
{message.user === 'gpt' ? (
        <ChatGPTAvatar />
      ) : (
        <div className="avatar"></div>
      )}
    <div className = "message">
      {message.message}
    </div>
  </div>
  )
}
