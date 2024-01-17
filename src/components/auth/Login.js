import { Formik, Field, Form } from 'formik';
import { useMutation } from '@tanstack/react-query';
import { signIn } from "../../util/http";
import { AuthContext } from '../../store/auth-ctx';
import { useContext } from 'react';
import { useEffect } from 'react';
const Login = (props) => {
    
    const authCtx = useContext(AuthContext);
    useEffect(() => {
        console.log(authCtx.isLoggedIn);
    }, [authCtx.isLoggedIn]);

    const mutation = useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            console.log(data);
            const { token, userId, username } = data;
            // console.log("username is " + username);
            authCtx.signIn(token, userId, username);
            // console.log(authCtx.isLoggedIn);
            props.setShow(false);
        },
        onError: (error) => {
            // console.log(authCtx.isLoggedIn);
            console.log(error.message);
        }
    });
    const onSubmit = (values) => {
        // console.log(values);
        mutation.mutate(values);
    }
    return (
        <>
            <div className="mx-auto flex flex-col">

                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold mt-4">Welcome back</h1>
                    <p className="text-sm text-gray-500 mt-2">Please login to continue</p>
                </div>

                <Formik initialValues={{ email: '', password: '', }}
                    onSubmit={onSubmit}>
                    {() => (
                        <Form className="mx-4 md:mx-20">
                            <div className="flex flex-col mt-4">
                                <label htmlFor="email" className="text-sm text-gray-500">Email</label>
                                <Field id="email" type="text" name="email"
                                    className="input" />
                            </div>

                            <div className="flex flex-col mt-4">
                                <label htmlFor="password" className="text-sm text-gray-500">Password</label>
                                <Field id="password" type="password" name="password" className="input" />
                            </div>

                            <div className="flex flex-col mt-8">
                                <button type="submit" className="bg-red-700 hover:bg-red-900 text-white font-semibold py-2 rounded shadow-lg hover:shadow-xl transition duration-200">Sign In</button>
                            </div>
                        </Form>
                    )}
                </Formik>
                {/* <div className="flex justify-center items-center mt-4">
                    <a href="#" className="text-sm text-blue-500 hover:text-blue-600">Forgot password?</a>
                </div> */}
            </div>
        </>
    );
}
export default Login;