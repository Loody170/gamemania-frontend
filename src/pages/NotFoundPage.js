import { Link } from "react-router-dom";
import MainNavigation from "../components/main-navigation/MainNavigation";
import Footer from "../components/footer/Footer";
const NotFoundPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <MainNavigation />
            <div className="flex-grow mx-20 my-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">404 Page not found error</h1>
                <h2 className="text-xl font-semibold mb-4">Oh no, looks like you took a wrong turn :(</h2>
                <Link to="/" className="text-red-800 font-semibold text-xl">Go back to the Home page</Link>
            </div>
            <Footer />
        </div>
    );
};

export default NotFoundPage;