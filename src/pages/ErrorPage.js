import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import MainNavigation from "../components/main-navigation/MainNavigation";

const ErrorPage = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const message = location.state?.message || "An error occurred";

    useEffect(() => {
        if (!location.state?.message) {
            navigate('/');
        }
    }, [location, navigate]);

    return (
        <div className="flex-grow mx-20 my-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Error</h1>
            <h2 className="text-xl font-semibold mb-4">{message}</h2>
            <a href="/" className="text-red-800 font-semibold text-xl">Go back to the Home page</a>
        </div>
    );
};

export default ErrorPage;
