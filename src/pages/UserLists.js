import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getLists } from "../util/http";
import GameList from "../components/GameList";
import { LoadingIcon } from "../components/icons/icons";

const UserLists = () => {
    useEffect(() => {
        document.title = 'GameMania | My Lists';
    }, []);

    const lists = useQuery({
        queryKey: ["lists"],
        queryFn: () => getLists(),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });

    return (
        <div className="container mx-auto max-w-5xl my-10 flex flex-col space-y-5 md:flex-row md:space-y-0">
            <div className="mx-4 md:mx-16 flex flex-col items-start">
                <h2 className="text-2xl font-semibold">
                    My Lists
                </h2>
                <Link
                    to="/users/newlist"
                    className="red-button-2 w-40 md:w-56 mt-4">
                    Create New List
                </Link>
            </div>
            <div className="flex flex-col w-full mr-4">
                <h2 className="text-black bg-gray-200 py-1.5 px-4 bg-opacity-50">
                    Loody's Lists
                </h2>
                {lists.isLoading ? <LoadingIcon /> :
                    lists.data.map((list) => (
                        <GameList
                            key={list._id}
                            id={list._id}
                            name={list.name}
                            numOfGames={list.games.length}
                            description={list.description}
                            coverImage={list.latestCoverImage} />
                    ))
                }
            </div>
        </div>
    );
};

export default UserLists;