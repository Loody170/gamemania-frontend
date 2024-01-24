import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UserMenu = (props) => {
    const navigate = useNavigate();

    const menuRef = useRef();

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleUserLists = () => {
       navigate('/users/lists');
        setShowMenu(false);
    };

    const handleSignOut = () => {
        props.onSignOut();
        setShowMenu(false);
    };

    return (
        <>
            <div className="group flex flex-col xl:flex-row xl:space-x-2 items-center">
                <span>Welcome, </span>
                <div className="relative">
                    <span className='user-box'
                        onClick={toggleMenu}>
                        {props.username}
                        {/* A bold facing down arrow */}
                        <svg className="w-4 h-4 inline-block" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 
                            011.414-1.414L10 11.586l3.293-3.293a1 1 0 
                            011.414 1.414l-4 4A1 1 0 0110 14z"
                                clipRule="evenodd" />
                        </svg>
                    </span>

                    {showMenu && (
                        <div ref={menuRef} className="dropdown-menu absolute right-3 bg-gray-100 border rounded shadow-2xl mt-2 w-48 px-4 py-2 ">
                            <button className="mt-1 mb-3 flex space-x-2 text-black hover:text-sky-700" onClick={handleUserLists}>
                                <svg width="26" height="28" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                                    <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                                    <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
                                </svg>
                                <span>My Lists</span>
                            </button>
                            <button className="mt-1 flex space-x-2 text-black hover:text-sky-700" onClick={handleSignOut}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-log-out">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                </svg>
                                <span>Sign Out</span>
                            </button>
                        </div>

                    )}
                </div>


            </div>
        </>
    );
};

export default UserMenu;