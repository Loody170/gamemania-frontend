import GameRating from "./GameRating";
import GameDescription from "./GameDescription";


function GameItem(props) {
    // const { id } = useParams();
    // console.log("id is " + id);
    console.log(props.image);
    return (
        <div className="flex relative mx-auto max-w-7xl border-2 border-red-400 ">

            <div>
                <div className="border text-black md:text-white z-20 absolute left-[14.6rem] md:left-64 top-2 md:-top-40 lg:-top-44">
                    <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">{props.gameDetails.name}</h1>
                </div>

                <div className="text-black md:text-white mt-4 absolute left-[14.6rem] top-28 md:-top-24 md:left-64 z-20">
                    <h2 className="text-xl md:text-2xl mb-2 opacity-60">{props.gameDetails.releaseDate}</h2>
                    <h2 className="text-xl md:text-2xl opacity-60">{props.gameDetails.developer}</h2>
                </div>
            </div>


            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <img src={props.image} alt="Game" className="w-56 md:w-60 h-80 -mt-24 ml-2 md:ml-0 md:-mt-40 z-10 max-w-full" />
                <GameDescription
                    genres={props.gameDetails.genresNames}
                    platforms={props.gameDetails.platformsNames}
                    summary={props.gameDetails.summary} />
                <GameRating rating={props.gameDetails.rating} ratingCount={props.gameDetails.rating_count} />
            </div>
        </div>
    );
}

export default GameItem;