import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { queryClient, getGames } from "../util/http";
import HomeSection from "../components/HomeSection";
import GameItem from "../components/Game/GameItem";
import GameInformation from "../components/Game/GameInformation";
import GameGallery from "../components/Game/GameGallery";
import blackScreen from "../images/black-screen.jpg";
import { LoadingIcon } from "../components/icons/icons";

function GamePage() {
    const navigate = useNavigate();
    const params = useParams();
    const passedQueryKey = `similarGamesTo${params.id}`;
    const similarGamesQuery = `games/similargames?id=${params.id}`

    const gameDetails = useQuery({
        queryKey: ["game", params.id],
        queryFn: () => getGames("games/" + params.id),
    });
    if (gameDetails.isError) {
        navigate("/error", { state: { message: "Error loading game page" } });
    }
    let gameName = "";
    if (!gameDetails.isLoading) {
        gameName = gameDetails.data.data.mainDetails.name;
    }
    useEffect(() => {
        document.title = "GameMania | " + gameName;
        window.scrollTo(0, 0);
    }, [passedQueryKey, gameName]);

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
            <div className="relative w-full h-60 md:h-48 lg:h-72 -z-10">
                <img src={randomImageUrl !== "" ? randomImageUrl : blackScreen} alt="cover-art"
                    className="w-full h-full object-cover filter blur-sm" />
                <div className="image-gradiant" />
            </div>

            {gameDetails.isLoading ? <LoadingIcon /> :
                <GameItem image={gameDetails.data.data.imageUrl ? gameDetails.data.data.imageUrl : noCoverUrl}
                    gameDetails={gameDetails.data.data.mainDetails} />}

            {isGallery && <div className="mt-20 mx-10 md:ml-28 md:mr-48 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl">Gallery</h2>
                    <div className="border-b-2 border-fuchsia-500 w-24 py-1 font-bold" />
                </div>
            </div>}

            {isGallery && <div className="mx-2 mt-2 mb-10">
                {gameDetails.isLoading ?
                    <LoadingIcon /> :
                    <GameGallery videos={gameDetails.data.data.videosIds}
                        screenshots={gameDetails.data.data.screenshotsUrls} />}
            </div>}

            {gameDetails.isLoading ? <LoadingIcon /> : <GameInformation
                releaseDate={gameDetails.data.data.mainDetails.releaseDate}
                developer={gameDetails.data.data.mainDetails.developer}
                genres={gameDetails.data.data.mainDetails.genresNames}
                extraDetails={gameDetails.data.data.extraDetails} />
            }
            <HomeSection
                query={similarGamesQuery}
                queryKey={passedQueryKey}
                title="Similar Games" color="border-teal-400" />
        </>
    );
}

export default GamePage;

export function loader({ params }) {
    queryClient.fetchQuery({
        queryKey: ["game", params.id],
        queryFn: () => getGames("games/" + params.id),
    });
    return null;
}