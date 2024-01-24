import { Outlet } from "react-router-dom";
import MainNavigation from "../components/main-navigation/MainNavigation";
import Footer from "../components/footer/Footer";

function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <MainNavigation />
            <div className="flex-grow mb-20">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default RootLayout;

// <MainNavigation />
// <Outlet />
// <Footer />