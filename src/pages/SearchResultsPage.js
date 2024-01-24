import CategoryGameCard from "../components/category/CategoryGameCard";
import { useQuery } from "@tanstack/react-query";
import { getGames } from "../util/http";
import { useSearchParams } from "react-router-dom";
const SearchResultsPage = (props) => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q');
    const query = `games/results?query=${q}`

    const games = useQuery({
        queryKey: [query],
        queryFn: () => getGames(query),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    
    return (
        <>
            <div className="mx-10 md:ml-44 md:mr-48 text-3xl mt-10 mb-8">
                <h1>
                    Search Results for "{q}"
                </h1>
            </div>

            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-2 mt-8">
                    {games.isLoading ? <div className="text-lg text-center mx-auto mt-10">
                        Loading...
                    </div> :
                        games.data.data.map((game) => {
                            return (
                                <CategoryGameCard
                                    key={game.id}
                                    id={game.id}
                                    image={game.coverImageUrl}
                                    title={game.name}
                                    date={game.releaseDate}
                                    rating={game.gameRating} />
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default SearchResultsPage;