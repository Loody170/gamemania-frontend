import GameRating from "./GameRating";
import GameTabs from "./game-tabs/GameTabs";

function GameItem(props) {
    return (
        <div className="flex relative mx-auto max-w-7xl">
            <div>
                <div className="hidden md:block text-white z-20 absolute left-64 -top-40 lg:-top-44">
                    <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
                        {props.gameDetails.name}
                    </h1>
                </div>
                <div className="hidden md:block md:text-white mt-4 absolute -top-24 left-64 z-20">
                    <h2 className="text-xl md:text-2xl mb-2 opacity-60">
                        {props.gameDetails.releaseDate}
                    </h2>
                    <h2 className="text-xl md:text-2xl opacity-60">
                        {props.gameDetails.developer}
                    </h2>
                </div>
            </div>

            <div className="w-full flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <div className="flex flex-row md:flex-none">
                    <img src={props.image} alt="Game"
                        className="w-44 md:w-60 h-72 md:h-80 -mt-24 ml-2 md:ml-0 md:-mt-40 z-10 max-w-full" />
                    <div className="flex flex-col space-y-10 md:hidden ml-2">
                        <h2 className="mt-2 text-xl font-bold">
                            {props.gameDetails.name}
                        </h2>
                        <div>
                            <h2 className="text-lg mb-2 opacity-60">
                                {props.gameDetails.releaseDate}
                            </h2>
                            <h2 className="text-lg opacity-60">
                                {props.gameDetails.developer}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full space-y-2 blg:flex-row blg:space-y-0">
                    <GameTabs
                        genres={props.gameDetails.genresNames}
                        platforms={props.gameDetails.platformsNames}
                        summary={props.gameDetails.summary}
                        websites={props.gameDetails.gameWebsites} />
                    <GameRating
                        rating={props.gameDetails.rating}
                        ratingCount={props.gameDetails.rating_count} />
                </div>
            </div>
        </div>
    );
}

export default GameItem;