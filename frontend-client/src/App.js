import './App.css';
import './normal.css';
function App() {
  return (
    <div className="App">
      <aside className = "sidemenu">
        <div className = "sidemenu-button">
          <span> + </span>
          New Chat
        </div>
      </aside>
      <section className = "chatbox">
        <div className = "chat-msg chatgpt">
          <div className = "avatar">
          </div>
          <div className = "message chat-log">
          Welcome! I am ChatGPT response.
          </div>
        </div>

        <div className = "chat-msg">
          <div className = "avatar">
          </div>
          <div className = "message">
          Hello World! I am human prompt.
          </div>
        </div>
      <div className = "chat-input-box">
      <textarea className = "chat-input-textarea" placeholder = "Type your message here"></textarea>
      </div>
      </section>

    </div>
  );
}

export default App;
