import blackScreen from "../images/black-screen.jpg";
import HomeSection from "../components/HomeSection";
import GameItem from "../components/Game/GameItem";
import GameInformation from "../components/Game/GameInformation";
import { queryClient, getGames } from "../util/http";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import GameScreenshots from "../components/Game/GameGallery";
import GameGallery from "../components/Game/GameGallery";
function GamePage() {

    const params = useParams();
    const passedQueryKey = `similarGamesTo${params.id}`;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [passedQueryKey]);

    const gameDetails = useQuery({
        queryKey: ["game", params.id],
        queryFn: () => getGames("games/" + params.id),
    });
    //   console.log(gameDetails.data.data.imageUrl);
    const similarGamesQuery = `games/similargames?id=${params.id}`

    let randomImageUrl = "";
    if (!gameDetails.isLoading) {
        if (gameDetails.data.data.screenshotsUrls && gameDetails.data.data.screenshotsUrls.length > 0) {
            const screenshotsUrls = gameDetails.data.data.screenshotsUrls;
            const randomIndex = Math.floor(Math.random() * screenshotsUrls.length);
            randomImageUrl = screenshotsUrls[randomIndex];
        }
    }
    const noCoverUrl = "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png";
    let isGallery;
    if (!gameDetails.isLoading) {
        if (gameDetails.data.data.videosIds.length > 0 || gameDetails.data.data.screenshotsUrls.length > 0) {
            isGallery = true;
        }
    }
    return (
        <>
            <div className="relative w-full h-44 md:h-48 lg:h-72 -z-10">
                <img src={randomImageUrl !== "" ? randomImageUrl : blackScreen} alt="cover-art"
                    className="w-full h-full object-cover filter blur-sm" />
                <div className="image-gradiant" />
            </div>

            {gameDetails.isLoading ? <div className="text-lg text-center mx-auto mt-10">Loading...</div> :
                <GameItem image={gameDetails.data.data.imageUrl ? gameDetails.data.data.imageUrl : noCoverUrl}
                 gameDetails={gameDetails.data.data.mainDetails} />}

            {
                isGallery &&
                <div className="mt-20 mx-10 md:ml-28 md:mr-48  flex justify-between items-center">
                    <div>
                        <h2 className="text-3xl">Gallery</h2>
                        <div className="border-b-2 border-fuchsia-500 w-24 py-1 font-bold" />
                    </div>
                </div>
            }

            {isGallery && <div className="mx-2 mt-2 mb-10">
                {gameDetails.isLoading ? <div className="text-lg text-center mx-auto mt-10">Loading</div> :
                    <GameGallery videos={gameDetails.data.data.videosIds} screenshots={gameDetails.data.data.screenshotsUrls} />}
            </div>}

            {gameDetails.isLoading ? <div className="text-lg text-center mx-auto mt-10">Loading...</div>
                : <GameInformation
                    releaseDate={gameDetails.data.data.mainDetails.releaseDate}
                    developer={gameDetails.data.data.mainDetails.developer}
                    genres={gameDetails.data.data.mainDetails.genresNames}
                    extraDetails={gameDetails.data.data.extraDetails} />}

            <HomeSection query={similarGamesQuery} queryKey={passedQueryKey} title="Similar Games" color="border-teal-400" />
        </>
    );
}

export default GamePage;

export function loader({ params }) {
    console.log("game page loader");
    queryClient.fetchQuery({
        queryKey: ["game", params.id],
        queryFn: () => getGames("games/" + params.id),
    });
    return null;
}

//   const { id } = useParams();
//   const { data, error, isLoading } = useFetch(`https://api.rawg.io/api/games/${id}`);

//   if (isLoading) return <Spinner />;
//   if (error) return <h1>Error</h1>;

// <div>
//     <h1>{data.name}</h1>
//     <img src={data.background_image} alt={data.name} />
//     <p>{data.description_raw}</p>
// </div>