import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryGameCard from "../components/category/CategoryGameCard";
import { useQuery } from "@tanstack/react-query";
import { getGames } from "../util/http";
import { useState } from "react";
const CategoryPage = (props) => {
    const params = useParams();
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('rating-desc'); // default sort option
    const limit = 15;
    const query = `categories/${params.type}/${params.slug}?page=${page}&limit=${limit}&sort=${sort}`;

    useEffect(() => {
        document.title = `GameMania | ${capitalize(params.slug)} games`;
    }, [params.slug]);

    const games = useQuery({
        queryKey: [query],
        queryFn: () => getGames(query),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });

    function handleSortChange(event) {
        const sortOption = event.target.value;
        setSort(sortOption); // update sort state
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    return (
        <>
            <div className="mx-10 md:ml-44 md:mr-48 text-5xl mt-10 mb-8">
                <h1 className="">
                    Explore {capitalize(params.slug)} games
                </h1>
                <div className={`border-b-2 border-sky-500 w-52 py-1 font-bold mt-2`} />
            </div>

            <div className="mx-auto max-w-6xl">
                <div className="mx-auto max-w-6xl -400">
                    <div className="flex justify-between border-b-2 space-x-8 border-gray-500">
                        <h3 className="text-xl">Sort results by:</h3>
                        <div className="flex justify-end space-x-10">
                            <div>
                                <select id="sort"
                                    className="px-4 py-2 border rounded-md mx-4 mb-1"
                                    value={sort}
                                    onChange={handleSortChange}>
                                    <option value="rating">Top Rated</option>
                                    <option value="title-asc">Title (A-Z)</option>
                                    <option value="title-desc">Title (Z-A)</option>
                                    <option value="newest">Newest</option>
                                    <option value="oldest">Oldest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-2 mt-8">
                    {games.isLoading ? <div className="text-lg text-center mx-auto mt-10">
                        Loading...
                    </div> :
                        games.data.data.map((game) => {
                            return (
                                <CategoryGameCard
                                    key={game.id}
                                    id={game.id}
                                    image={game.coverImageUrl} title={game.name}
                                    date={game.releaseDate} rating={game.gameRating} />
                            );
                        })}
                </div>
                <div className="flex justify-center space-x-4">
                    {page > 2 && (
                        <>
                            <button
                                className=" hover:bg-gray-700 text-black hover:text-white font-bold py-2 px-4 rounded"
                                onClick={() => setPage(1)}>1
                            </button>
                            <span className="mt-2">
                                ...
                            </span>
                        </>
                    )}
                    {[page - 1, page, page + 1].map((pageNumber, index) => {
                        if (pageNumber < 1) return null; // don't render buttons for non-existing pages
                        return (
                            <button
                                key={index}
                                className={`hover:bg-gray-700 text-black hover:text-white font-bold py-2 px-4 rounded
                                 ${pageNumber === page ? 'bg-red-700 text-white' : ''}`}
                                onClick={() => setPage(pageNumber)}>
                                {pageNumber}
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default CategoryPage;