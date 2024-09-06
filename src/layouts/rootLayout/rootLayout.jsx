import { Outlet, Link } from 'react-router-dom';
import './rootLayout.css';

const rootLayout = () => {
    return (
        <div className='rootLayout'>
        <header>
            <Link to = "/" className = "logo">
            <img src = "/public/logo.png" alt = "logo" />
            <span>LLM Dev AI</span>
            </Link>
            <div className='user'>User</div>
        </header>
        <main>
            <Outlet />
        </main>
        </div>
    );
};

export default rootLayout;
