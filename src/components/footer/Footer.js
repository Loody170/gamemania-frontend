import { Link } from 'react-router-dom';
import logo from '../../images/gamemania-logo-3.png';
import { useContext } from 'react';
import { AuthContext } from '../../store/auth-ctx';
function Footer() {
  const { isLoggedIn, signOut, setShowAuthentication } = useContext(AuthContext);

  return (
    <footer className="bg-gray-800">
      <div className='container max-w-6xl pt-8 pb-2 mt-8 mx-auto'>
        <div className='flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-center'>
          <div className='flex flex-col items-center space-y-8 md:items start md:space-y-4'>
            <div className='h-8'>
              <img src={logo} alt="Logo" className="w-64 md:ml-3" />
            </div>

            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              
              <div className="h-10 group">
                <Link to="/categories">Browse Games</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-sky-400" />
              </div>

              <div className="h-10 group">
               {/* {!isLoggedIn && <Link to="/">Sign In</Link>} */}
               {isLoggedIn && <Link to="/" onClick={signOut}>Sign Out</Link>}
               {!isLoggedIn && <Link to="/" onClick={()=> setShowAuthentication(true)}>Sign In</Link>}

                <div className="mx-2 group-hover:border-b group-hover:border-sky-400" />
              </div>

            </div>

          </div>

          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            <div className="font-bold mr-2">
              © 2024 GameMania.
              <p>Developed By Khalid Sharafaldeen. All Rights Reserved</p>
            </div>
          </div>

        </div>


      </div>
      {/* <div className="flex justify-center">
        <img src={logo} alt="Logo" className="w-64 m-8" />
        </div>
      <p>© 2023</p> */}
    </footer>
  )
}

export default Footer;