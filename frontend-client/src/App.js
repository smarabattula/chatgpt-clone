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
  async function handleSubmit(e){
    e.preventDefault();
    setChatLog([...chatLog, {user: "me", message:`${input}
      `}])
    setInput("");
    // console.log("Kukka submit");
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
    <div className = {`chat-msg ${message.user == "gpt" && "chatgpt"}`}>
    <div className = {`avatar ${message.user == "gpt" && "chatgpt"}`}>
    </div>
    {message.user == "gpt" && <ChatGPTAvatar/>}
    <div className = "message">
    {message.message}
    </div>
  </div>
  )
}
