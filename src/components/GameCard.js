import React from "react";
import { Link } from "react-router-dom";

function GameCard(props) {
    let dynamicContent = "";
    if (props.flag === "Recently Released") {
        if (props.releaseDate) {
            dynamicContent =
                <p className="mt-1 text-xs text-gray-500">
                    {props.releaseDate}
                </p>
        }
    }
    return (
        <div className="flex-shrink-0">
            <div className="game-card">
                <Link to={`/games/${props.id}`}>
                    <img src={props.image} alt="game" className="w-full max-h-76 rounded-t-lg" />
                    <div className="bg-white pl-2 md:pl-6 pr-2 md:pr-4 pt-2 rounded-b-lg">
                        <h3 className="text-md lg:text-lg xl:text-xl font-bold text-gray-800 mb-2 line-clamp-3">
                            {props.name}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-700 ">
                            {props.type}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500 mt-2 line-clamp-2">
                            Platforms: {""}
                            <span className="text-xs ">
                                {props.platforms.map(platform => platform).join(', ')}
                            </span>
                        </p>
                        {dynamicContent}
                    </div>
                </Link>
            </div >
        </div >
    );
}

export default React.memo(GameCard);