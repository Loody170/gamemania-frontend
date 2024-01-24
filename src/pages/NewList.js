import { Formik, Field, Form, ErrorMessage } from 'formik';
import { EditListSchema } from '../util/validation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addList, editList } from "../util/http";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NewList = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const location = useLocation();
    const listToEdit = location.state?.list;
    console.log(listToEdit);
    const [formValues, setFormValues] = useState(listToEdit || { listName: '', description: '' });

    useEffect(() => {
        if (listToEdit) {
            setFormValues(listToEdit);
        }
    }, [listToEdit]);

    const [errorMessage, setErrorMessage] = useState("");
    const [message, setMessage] = useState("");


    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: listToEdit ? editList : addList,
        onSuccess: (data) => {
            console.log(data.message);
            setMessage(data.message);
            console.log(message);

            queryClient.invalidateQueries('lists');
            setShowMessage(true);
            setTimeout(() => {
                navigate(-1);
            }, 2000);
        },
        onError: (error) => {
            console.log(error.message);
            setErrorMessage(error.message);
            setShowErrorMessage(true);
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
    });

    const onSubmit = (values) => {
        console.log(values);
        if (listToEdit) {
            mutation.mutate({ ...values, id: listToEdit.id });
        } else {
            mutation.mutate(values);
        }
    }

    return (
        <div className="border-4 mx-auto max-w-6xl mt-16 mb-40">
            <h1 className="bg-gray-200 p-3 pl-1 text-lg font-semibold">Edit List</h1>
            <div>
                <Formik
                    initialValues={formValues}
                    validationSchema={EditListSchema}
                    onSubmit={onSubmit}>
                    <Form>
                        <div className="my-4 max-w-5xl mx-2 md:mx-0 flex flex-col space-y-0 md:flex-row md:space-x-24 md:space-y-0 ">
                            <label htmlFor="listName" className="text-sm font-semibold w-28 mx-2">Name your List</label>
                            <Field id="listName" name="listName" placeholder="List Name" className="border-2 w-3/4 px-1 rounded-md " />
                        </div>
                        <ErrorMessage name="listName" component="div" className="mx-2 text-red-500 text-sm font-semibold" />

                        <div className="my-4 max-w-5xl mx-2 md:mx-0 flex flex-col space-y-0 md:flex-row md:space-x-24 md:space-y-0 ">
                            <label htmlFor="description" className="text-sm font-semibold w-28 mx-2">Description</label>
                            <Field as="textarea" id="description" name="description" placeholder="Description" className="border-2 w-3/4 px-1 rounded-md " />
                        </div>

                        <ErrorMessage name="description" component="div" className="mx-2 text-red-500 text-sm font-semibold" />

                        {showMessage && <div className='flex justify-center'>
                            <h2 className="text-center text-md font-semibold mt-4 mb-4 bg-green-500 text-white p-2 rounded-lg">{message}</h2>
                        </div>}

                        {showErrorMessage && <div className='flex justify-center'>
                            <h2 className="text-center text-md font-semibold mt-4 mb-4 bg-red-500 text-white p-2 rounded-lg">{errorMessage}</h2>
                        </div>}

                        <div className="flex justify-end my-8">
                            {/* <button className="my-2 gray-button ">Delete List</button> */}
                            <button type="submit" className=" ml-10 mr-4 my-2 red-button">Save List</button>
                        </div>
                    </Form>
                </Formik>

            </div>
        </div>
    );
};

export default NewList;
// <ul>
//         {list.map((item, index) => (
//         <li key={index}>{item}</li>
//         ))}
//     </ul>