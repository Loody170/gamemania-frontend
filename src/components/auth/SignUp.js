import { useMutation } from '@tanstack/react-query';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { SignupSchema } from "../../util/validation";
import { signup } from "../../util/http";

const SignUp = () => {
    const mutation = useMutation({
        mutationFn: signup,
        onSuccess: (data) => {
            // console.log(data);
        },
        onError: (error) => {
            // console.log(error.data);
        }
    });

    const onSubmit = (values) => {
        mutation.mutate(values);
    }

    return (
        <div className="mx-auto flex flex-col">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-semibold mt-4">
                    Welcome to GameMania!
                </h1>
                <p className="text-sm text-gray-500 mt-2 text-center">
                    Sign up to be able to create custom lists to save and organaize games inside them
                </p>
                {mutation.isError &&
                    <p className='text-red-500 font-semibold'>
                        {mutation.error.message}
                    </p>}
            </div>

            <Formik initialValues={{ username: '', email: '', password: '', confirmPassword: '', }}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}>
                {() => (
                    <Form className="mx-4 md:mx-20">
                        <div className="flex flex-col mt-4">
                            <label htmlFor="username" className="text-sm text-gray-500">
                                Username
                            </label>
                            <Field id="username" type="text" name="username" className="input" />
                            <ErrorMessage name="username" component="div" className='input-error' />
                        </div>

                        <div className="flex flex-col mt-4">
                            <label htmlFor="email" className="text-sm text-gray-500">
                                Email
                            </label>
                            <Field id="email" type="email" name="email" className="input" />
                            <ErrorMessage name="email" component="div" className='input-error' />
                        </div>

                        <div className="flex flex-col mt-4">
                            <label htmlFor="password" className="text-sm text-gray-500">
                                Password
                            </label>
                            <Field id="password" type="password" name="password" className="input" />
                            <ErrorMessage name="password" component="div" className='input-error' />
                        </div>

                        <div className="flex flex-col mt-4">
                            <label htmlFor="confirmPassword" className="text-sm text-gray-500">
                                Confirm Password
                            </label>
                            <Field id="confirmPassword" type="password" name="confirmPassword" className="input" />
                            <ErrorMessage name="confirmPassword" component="div" className='input-error' />
                        </div>

                        <div className="flex flex-col mt-8">
                            <button type="submit" className="auth-submit-button">
                                Sign Up
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignUp;