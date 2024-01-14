import { Outlet } from "react-router-dom";
import MainNavigation from "../components/main-navigation/MainNavigation";
import Footer from "../components/footer/Footer";
function RootLayout(){
return (
    <>
    <MainNavigation />
    <Outlet />
    <Footer />
    
    </>
);
}

export default RootLayout;