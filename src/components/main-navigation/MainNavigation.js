import { Link } from 'react-router-dom';
import logo from '../../images/gamemania-logo-3.png';
import SearchBar from './SearchBar';
import { useContext } from 'react';
import { AuthContext } from '../../store/auth-ctx';
import Authentication from '../auth/Authentication';
import { useState } from 'react';
import UserMenu from '../auth/UserMenu';
function MainNavigation(props) {
    const { isLoggedIn, signOut, username } = useContext(AuthContext);
// console.log(username);
    const [showAuthentication, setShowAuthentication] = useState(false);
    console.log(props.className);

    return (
        <header className="bg-gray-800 container max-w-full mx-auto px-6 py-4 pt-6">
            <div className='flex justify-center'>

            </div>
            <nav className="flex items-center justify-between font-bold text-white">
                {/* logo */}
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-64 lg:ml-16" />
                </Link>
                {/* menu */}
                <div className="hidden lg:flex lg:space-x-8 ml-15">
                    <div className="group">
                        <Link to="/" className='text-xl'>Home</Link>
                        <div className="mx-2 group-hover:border-b group-hover:border-sky-400" />
                    </div>

                    <div className="group">
                        <Link to="/categories" className='text-xl'>Browse Games</Link>
                        <div className="mx-2 group-hover:border-b group-hover:border-sky-400" />
                    </div>
                    <SearchBar />

                    {!isLoggedIn && <button className="group" onClick={() => setShowAuthentication(true)}>
                        <span className='px-8 py-2 text-white
                         bg-red-800 border border-red-800
                          rounded-full shadow-md hover:text-red-800 hover:border-gray-200
                           hover:bg-gray-200 whitespace-nowrap'>Sign In</span>
                    </button>}
                    {/* 
                    {isLoggedIn && <button className="group" onClick={signOut} >
                        <span className='px-8 py-2 text-white
                         bg-red-800 border border-red-800
                          rounded-full shadow-md hover:text-red-800 hover:border-gray-200
                           hover:bg-gray-200'>Sign Out</span>
                    </button>} */}

                    {isLoggedIn && (<UserMenu username={username} onSignOut={signOut} />)}
                </div>
            </nav>
            {showAuthentication && <Authentication show={showAuthentication} setShow={setShowAuthentication} onClose={() => setShowAuthentication(false)} />}
        </header>
    );
}

export default MainNavigation;