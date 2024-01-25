import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../store/auth-ctx';
import SearchBar from './SearchBar';
import { MyListsIcon, SignOutIcon } from '../icons/icons';
const MobileMenu = (props) => {
    const {
        isLoggedIn,
        signOut,
        username,
        setShowAuthentication
    } = useContext(AuthContext);

    const handleSignInButton = () => {
        setShowAuthentication(true);
        props.setIsOpen(false);
    };

    const handleSignOut = () => {
        props.setIsOpen(false);
        signOut();
    };

    return (
        <>
            {props.isOpen && (
                <div className="flex flex-col items-start justify-start border-t mt-2 space-y-3 text-lg text-white bg-DarkBlue lg:hidden">
                    <div className='block md:hidden mt-4'>
                        <SearchBar />
                    </div>
                    <Link to="/"
                        className='text-xl hover:text-red-500'
                        onClick={() => props.setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to="/categories"
                        className='text-xl hover:text-red-500'
                        onClick={() => props.setIsOpen(false)}>
                        Browse Games
                    </Link>
                    {!isLoggedIn &&
                        <button className="mt-5 mb-2"
                            onClick={handleSignInButton}>
                            <span className='navigation-signin-button rounded-lg px-4 py-1.5 text-sm font-semibold'>
                                Sign In
                            </span>
                        </button>
                    }
                    <div className='flex lg:hidden mt-4 text-white font-bold'>
                        {isLoggedIn &&
                            <div>
                                <p>
                                    Welcome, {username}
                                </p>
                                <Link className="mb-3 user-menu-button"
                                    to="/users/lists"
                                    onClick={() => props.setIsOpen(false)}>
                                    <MyListsIcon />
                                    <span>
                                        My Lists
                                    </span>
                                </Link>
                                <button className="mt-1 user-menu-button"
                                    onClick={handleSignOut}>
                                    <SignOutIcon />
                                    <span>
                                        Sign Out
                                    </span>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileMenu;

// <a className="hover:text-pink-500" href="/">Careers</a>
