const Login = (props) => {
    return (
        <>
            <div className="mx-auto flex flex-col">
                
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold mt-4">Welcome back</h1>
                    <p className="text-sm text-gray-500 mt-2">Please login to continue</p>
                </div>

                <div className="flex flex-col mt-4 mx-20">
                    <label htmlFor="email" className="text-sm text-gray-500">Email</label>
                    <input id="email" type="email" className="input" />
                </div>
                <div className="flex flex-col mt-4 mx-20">
                    <label htmlFor="password" className="text-sm text-gray-500">Password</label>
                    <input id="password" type="password" className="input" />
                </div>

                <div className="flex flex-col mt-8 mx-20">
                    <button className="bg-red-700 hover:bg-red-900 text-white font-semibold py-2 rounded shadow-lg hover:shadow-xl transition duration-200">Login</button>
                </div>
                {/* <div className="flex justify-center items-center mt-4">
                    <a href="#" className="text-sm text-blue-500 hover:text-blue-600">Forgot password?</a>
                </div> */}
            </div>
        </>
    );
}
export default Login;