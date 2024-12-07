import { Link } from 'react-router-dom';
import './ChatList.css';

const ChatList = () => {
    return (
        <div className='ChatList'>
            <span className='title'>Dashboard</span>
            <Link to='/dashboard'> New Chat <span className='addSign'>+</span></Link>
            <Link to='/'>Contact</Link>
            <hr />
            <span className='title'>Recent Chats</span>
            <div className='list'>
            <Link to="/dashboard">My Chat 1</Link>
                <Link to="/dashboard">My Chat 2</Link>
                <Link to="/dashboard">My Chat 3</Link>
                <Link to="/dashboard">My Chat 4</Link>
                <Link to="/dashboard">My Chat 5</Link>

            </div>
            <hr />
        </div>
    );
};

export default ChatList;
