import { Link } from 'react-router-dom';
import logo from '../../images/gamemania-logo-3.png';
import SearchBar from './SearchBar';

function MainNavigation() {
   
    return (
        <header className="bg-gray-800 container max-w-full mx-auto px-6 py-4 pt-6">
            <div className='flex justify-center'>

            </div>
            <nav className="flex items-center justify-between font-bold text-white">
                {/* logo */}
                <Link to="/">
                <img src={logo} alt="Logo" className="w-64 lg:ml-16" />
                </Link>
                {/* menu */}
                <div className="hidden lg:flex lg:space-x-8 ml-15">
                    <div className="group">
                        <Link to="/" className='text-xl'>Home</Link>
                        <div className="mx-2 group-hover:border-b group-hover:border-sky-400" />
                    </div>

                    <div className="group">
                        <Link to="/categories" className='text-xl'>Browse Games</Link>
                        <div className="mx-2 group-hover:border-b group-hover:border-sky-400" />
                    </div>
                    <SearchBar />
                    
                    <div className="group">
                        <Link href="#" className='px-8 py-2 text-white
                         bg-red-800 border border-red-800
                          rounded-full shadow-md hover:text-red-800 hover:border-gray-200
                           hover:bg-gray-200'>Login</Link>
                        {/* <div className="mx-2 mt-2 group-hover:border-b group-hover:border-blue-500" /> */}
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default MainNavigation;