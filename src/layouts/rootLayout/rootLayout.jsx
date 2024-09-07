import { Outlet, Link } from 'react-router-dom';
import './rootLayout.css';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const rootLayout = () => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <div className='rootLayout'>
        <header>
            <Link to = "/" className = "logo">
            <img src = "/logo.png" alt = "logo" />
            <span>LLM Dev AI</span>
            </Link>
            <div className='user'>
            <SignedOut>
        <SignInButton />
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
