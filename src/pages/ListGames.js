import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getList } from "../util/http";
import CategoryGameCard from "../components/category/CategoryGameCard";

const ListGames = (props) => {
    const params = useParams();
    const games = useQuery({
        queryKey: ["list", params.id,],
        queryFn: () => getList(params.id),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });

    let dynamicContent;
    if (games.isLoading) {
        dynamicContent =
            <div className="text-lg text-center mx-auto mt-10">
                Loading...
            </div>;
    }
    else if (games.data.data.length === 0) {
        dynamicContent =
            <p className="text-lg text-center mx-auto mt-10">
                No games in this list
            </p>;
    }
    else {
        dynamicContent = games.data.data.map((game) => (
            <CategoryGameCard listId={params.id}
                key={game.id} id={game.id}
                image={game.coverImageUrl} title={game.name}
                date={game.releaseDate} rating={game.gameRating} isList={true} />
        ));
    }

    return (
        <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-2 mt-8">
                {dynamicContent}
            </div>
        </div>
    );
};

export default ListGames; 