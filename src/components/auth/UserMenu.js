import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {UserMenuArrow, MyListsIcon, SignOutIcon} from "../icons/icons"

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
            <div className="group flex flex-col xl:flex-row xl:space-x-2 items-center">
                <span>
                    Welcome,
                </span>
                <div className="relative">
                    <span className='user-box'
                        onClick={toggleMenu}>
                        {props.username}
                        <UserMenuArrow />
                    </span>
                    {showMenu && (
                        <div ref={menuRef} className="user-menu">
                            <button className="mb-3 user-menu-button" onClick={handleUserLists}>
                                <MyListsIcon />
                                <span>My Lists</span>
                            </button>
                            <button className="mt-1 user-menu-button" onClick={handleSignOut}>
                                <SignOutIcon />
                                <span>
                                    Sign Out
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
    );
};

export default UserMenu;