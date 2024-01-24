import { useState } from "react";
import Modal from "../UI/Modal";
import Login from "./Login";
import SignUp from "./SignUp";
import logo from '../../images/gamemania-logo-2.png';

const Authentication = (props) => {
    const [activeTab, setActiveTab] = useState('login');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Modal
            show={props.show}
            onClose={props.onClose}>
            <div className="flex flex-col justify-center">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-116 mt-8" />
                <div className="flex justify-between mx-20 mt-8 mb-1">
                    <div className="relative">
                        <button
                            onClick={() => handleTabChange('signup')}
                            className="text-xl font-semibold">
                            Register
                        </button>
                        {activeTab === 'signup' &&
                            <div className='auth-active-tab-border' />}
                    </div>

                    <div className="relative">
                        <button onClick={() => handleTabChange('login')} className="text-xl font-semibold">
                            Sign In
                        </button>
                        {activeTab === 'login' &&
                            <div className='auth-active-tab-border' />}
                    </div>
                </div>
                <div className="border border-gray-400" />
            </div>
            {activeTab === 'login' ?
                <Login setShow={props.setShow} /> :
                <SignUp />}
        </Modal>
    );
}
export default Authentication;