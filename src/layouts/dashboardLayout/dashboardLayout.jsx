import './dashboardLayout.css';
import {Outlet} from 'react-router-dom';

const dashboardLayout = () => {
    return (
        <div className='dashboardLayout'>
            <div className='menu'>Menu</div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
};

export default dashboardLayout;
