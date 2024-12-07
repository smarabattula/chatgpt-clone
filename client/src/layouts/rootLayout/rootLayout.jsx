import { Outlet, Link } from 'react-router-dom';
import './rootLayout.css';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { useContext } from 'react';
import { AppConfigContext } from '../../AppConfigContext';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const rootLayout = () => {
    const {app_name} = useContext(AppConfigContext);

    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <div className='rootLayout'>
        <header>
            <Link to = "/" className = "logo">
            <img src = "/logo.png" alt = "logo" />
            <span>{app_name}</span>
            </Link>
            <div className='user'>
            <SignedOut>

            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
        </div>
        </ClerkProvider>
    );
};

export default rootLayout;
