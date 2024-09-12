import { Link } from 'react-router-dom';
import './ChatList.css';

const ChatList = () => {
    return (
        <div className='ChatList'>
            <span className='title'>Dashboard</span>
            <Link to='/dashboard'> + Create a New Chat</Link>
            <Link to='/'>Contact</Link>
            <hr />
            <span className='title'>Recent Chats</span>
            <div className='list'>
                <Link to="/">My Chat 1</Link>
                <Link to="/">My Chat 2</Link>
                <Link to="/">My Chat 3</Link>
                <Link to="/">My Chat 4</Link>
                <Link to="/">My Chat 5</Link>

            </div>
            <hr />
        </div>
    );
};

export default ChatList;
