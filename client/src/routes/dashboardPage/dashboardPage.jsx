import './dashboardPage.css';
import { AppConfigContext } from '../../AppConfigContext'; // Import the context, not the provider
import { useContext } from 'react';

const dashboardPage = () => {
  const { app_name, } = useContext(AppConfigContext);
  console.log(app_name);
  return (
    <div className = 'dashboardPage'>DashboardPage
      <div className='texts'>
        <div className='logo'>
          <img src = "/logo.png" alt = "LLM Dev AI" />
          <h1>{app_name}</h1>
        </div>
        <div className='options'>
          <div className = "option">
            <img src = '/chat.png' alt = "Create new Chat" />
            <span>Create new Chat</span>
          </div>
          <div className = "option">
            <img src = '/image.png' alt = "Analyze Images" />
            <span>Analyze Images</span>
          </div>
          <div className = "option">
            <img src = '/code.png' alt = "Code Help" />
            <span>Help with Code</span>
          </div>
        </div>
      </div>

      <div className='formContainer'>
        <form>
          <input type = "text" placeholder='Ask me Anything'></input>
          <button>
            <img src = "/arrow.png" alt = "Arrow"></img>
          </button>
        </form>
      </div>
    </div>
  );
}

export default dashboardPage;
