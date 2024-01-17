import { useState } from "react";

const UserMenu = (props) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu);
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
                        <div className="dropdown-menu absolute right-3 bg-gray-100 border rounded shadow-2xl mt-2 w-48 px-4 py-2 ">
                            {/* Sign out svg */}
                            <button className="flex space-x-2 text-black hover:text-sky-700" onClick={handleSignOut}>
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