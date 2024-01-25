import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../store/auth-ctx';
import Authentication from '../auth/Authentication';
import UserMenu from '../auth/UserMenu';
import SearchBar from './SearchBar';
import logo from '../../images/gamemania-logo-3.png';
import MobileMenu from './MobileMenu';

function MainNavigation(props) {
    const [isOpen, setIsOpen] = useState(false);

    const {
        isLoggedIn,
        signOut,
        username,
        showAuthentication,
        setShowAuthentication
    } = useContext(AuthContext);

    const handleOpenMobileMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <header className="bg-DarkBlue container max-w-full mx-auto px-6 py-4 pt-6">
            <div className='flex justify-center' />
            <nav className="flex items-center justify-between font-bold text-white">
                {/* logo */}
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-52 md:w-64 xl:ml-16" />
                </Link>
                {/* menu */}
                <div className="hidden lg:flex lg:space-x-8 ml-15">
                    <div className="group">
                        <Link to="/" className='text-xl'>
                            Home
                        </Link>
                        <div className="nav-footer-hover" />
                    </div>

                    <div className="group">
                        <Link to="/categories" className='text-xl'>
                            Browse Games
                        </Link>
                        <div className="nav-footer-hover" />
                    </div>

                    <SearchBar />

                    {!isLoggedIn && <button className="group" onClick={() => setShowAuthentication(true)}>
                        <span className='navigation-signin-button rounded-full px-8 py-2'>
                            Sign In
                        </span>
                    </button>}

                    {isLoggedIn && (<UserMenu username={username} onSignOut={signOut} />)}
                </div>
                {/* Small and medium screens navbar */}
                <div className="flex space-x-10 items-center lg:hidden">
                    <div className='hidden md:block mx-6'>
                        <SearchBar />
                    </div>

                    {/* Mobile hamburger menu */}
                    <button onClick={handleOpenMobileMenu}
                        className={` hamburger focus:outline-none ${isOpen ? "open" : ""}`}>
                        <span className="hamburger-top" />
                        <span className="hamburger-middle" />
                        <span className="hamburger-bottom" />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}

            {showAuthentication &&
                <Authentication
                    show={showAuthentication}
                    setShow={setShowAuthentication}
                    onClose={() => setShowAuthentication(false)} />}
        </header>
    );
};

export default MainNavigation;