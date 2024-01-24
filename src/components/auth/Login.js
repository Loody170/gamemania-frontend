import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Formik, Field, Form } from 'formik';
import { AuthContext } from '../../store/auth-ctx';
import { signIn } from "../../util/http";

const Login = (props) => {
    const authCtx = useContext(AuthContext);

    const mutation = useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            const { token, userId, username } = data;
            authCtx.signIn(token, userId, username);
            props.setShow(false);
        },
        onError: (error) => {
            // console.log(error.message);
        }
    });

    const onSubmit = (values) => {
        mutation.mutate(values);
    }

    return (
        <>
            <div className="mx-auto flex flex-col">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold mt-4">
                        Welcome back
                    </h1>
                    <p className="text-sm text-gray-500 mt-2">
                        Please login to continue
                    </p>
                    {mutation.isError &&
                        <p className='text-red-500 font-semibold'>
                            {mutation.error.message}
                        </p>}
                </div>
                <Formik initialValues={{ email: '', password: '', }}
                    onSubmit={onSubmit}>
                    {() => (
                        <Form className="mx-4 md:mx-20">
                            <div className="flex flex-col mt-4">
                                <label htmlFor="email" className="text-sm text-gray-500">
                                    Email
                                </label>
                                <Field id="email" type="text" name="email" className="input" />
                            </div>

                            <div className="flex flex-col mt-4">
                                <label htmlFor="password" className="text-sm text-gray-500">
                                    Password
                                </label>
                                <Field id="password" type="password" name="password" className="input" />
                            </div>

                            <div className="flex flex-col mt-8">
                                <button type="submit" className="auth-submit-button">
                                    Sign In
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default Login;