import { Link } from "react-router-dom";
import { AuthContext } from "../../../store/auth-ctx";
import { useContext, useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getLists } from "../../../util/http";
import { useParams } from 'react-router-dom';
import { addGame, deleteGame } from "../../../util/http";

const ListTab = (props) => {
    const queryClient = useQueryClient();
    const params = useParams();
    const gameId = params.id;

    const { isLoggedIn, setShowAuthentication } = useContext(AuthContext);
    console.log("user is authenticated for listtab?: " + isLoggedIn);

    const [gameLists, setGameLists] = useState([]);

    const addGameMutation = useMutation({
        mutationFn: addGame,
        onSuccess: (data) => {
            console.log(data);
            queryClient.invalidateQueries(["lists"]);
        },
        onError: (error) => {
            console.log(error.message);
        }
    });

    const deleteGameMutation = useMutation({
        mutationFn: deleteGame,
        onSuccess: (data) => {
            console.log(data);
            queryClient.invalidateQueries(["lists"]);
        },
        onError: (error) => {
            console.log(error.message);
        }
    });

    const lists = useQuery({
        queryKey: ["lists"],
        queryFn: () => getLists(),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        enabled: isLoggedIn
    });
    if(lists.isSuccess){
        console.log(lists.data); 
    }

    useEffect(() => {
        if (lists.isSuccess) {
            const newGameLists = lists.data.map(list => ({
                ...list,
                hasGame: list.games.includes(gameId),
            }));
            setGameLists(newGameLists);
        }
    }, [lists.isSuccess, lists.data, gameId]);

    const checkAuth = (event) => {
        if (!isLoggedIn) {
            event.preventDefault();
            setShowAuthentication(true);
        }
    };

    const handleCheckboxChange = (listId) => {
        const updatedGameLists = gameLists.map(list => {
            if (list._id === listId) {
                const hasGame = !list.hasGame;
                if (hasGame) {
                    addGameMutation.mutate({ listId, gameId });
                } else {
                    deleteGameMutation.mutate({ listId, gameId });
                }
                return { ...list, hasGame };
            }
            return list;
        });
        setGameLists(updatedGameLists);
    };


    return (
        <>
            {(isLoggedIn && lists.isSuccess && gameLists.length > 0) ? (
                gameLists.map((list) => (
                    <div key={list._id} className="mx-16 my-6 flex space-x-2 items-center">
                        <input
                            type="checkbox"
                            id={`list-${list._id}`}
                            onChange={() => handleCheckboxChange(list._id)}
                            className="form-checkbox h-5 w-5 text-red-800"
                            checked={list.hasGame}
                        />
                        <label htmlFor={`list-${list._id}`} className="text-2xl font-semibold">{list.name}</label>
                    </div>
                ))
            ) :
                <div>
                    <p className='text-xl mt-6 mx-6'>You have no lists</p>
                    <Link onClick={checkAuth}
                        to='/users/newlist'
                        className='inline-block red-button
                        my-6 mx-6'>Create new list</Link>
                </div>}
        </>
    );
};

export default ListTab;