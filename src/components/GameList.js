import blackImage from "../images/black-screen.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteList } from "../util/http";
import Modal from "./UI/Modal";

const GameList = (props) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const coverImage = props.coverImage;

    const mutation = useMutation({
        mutationFn: deleteList,
        onSuccess: (data) => {
            queryClient.invalidateQueries(['list', props.listId]);
            setIsModalOpen(false);
        },
        onError: (error) => {
            console.log(error.message);
        }
    });

    const handleDeleteClick = () => {
        setIsModalOpen(true);
    };
    const handleDeleteList = () => {
        mutation.mutate({ listId: props.id })
    }

    return (
        <div className="flex flex-row space-x-4 px-4 py-2 border-b">
            <Link to={`/users/lists/${props.id}`}>
                <img
                    src={coverImage ? coverImage : blackImage}
                    alt="game"
                    className="w-24 h-36 md:w-32 md:h-44" />
            </Link>
            <div className="flex flex-col">
                <Link to={`/users/lists/${props.id}`}
                    className="text-lg font-bold text-red-800 hover:text-red-600">
                    {props.name}
                </Link>
                <div className="flex space-x-4 my-2">
                    <p className="text-sm">
                        {props.numOfGames ? `${props.numOfGames} games` : "Empty"}
                    </p>
                    <button
                        className="flex text-sm font-bold hover:underline text-red-700"
                        onClick={() => {
                            navigate(`/users/newlist`, {
                                state: {
                                    list: {
                                        listName: props.name,
                                        description: props.description,
                                        id: props.id
                                    }
                                }
                            });
                        }}>
                        <svg className="feather feather-edit-3" fill="none" height="18" width="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                        </svg>
                        Edit
                    </button>

                    <button className="flex text-sm font-bold hover:underline text-red-700"
                        onClick={handleDeleteClick}>
                        Delete List
                    </button>

                    {isModalOpen && (
                        <Modal
                            show={isModalOpen}
                            onClose={() => setIsModalOpen(false)}>
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg font-semibold">
                                    Are you sure you want to delete this list?
                                </h2>
                                <div className="flex space-x-4 mt-4">
                                    <button className="red-button-2 w-20" onClick={handleDeleteList}>
                                        Yes
                                    </button>
                                    <button
                                        className="red-button-2 w-20"
                                        onClick={() => { setIsModalOpen(false); }}>
                                        No
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>
                <p className="text-sm">{props.description}</p>
            </div>
        </div>
    );
};
export default GameList;
