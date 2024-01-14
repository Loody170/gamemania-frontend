function GameDescription(props) {
    return (
        <div className="border-2 border-green-600 min-w-sm  max-w-2xl overflow-auto">
            <h1 className="text-3xl">
                About
            </h1>
            <div className="my-2">
                <span className="font-bold">Genre: </span>
                <span>{props.genres.map(genre=>genre).join(", ")}</span>
            </div>
            <div className="my-2">
                <span className="font-bold">Platforms: </span>
                <span>{props.platforms.map(platform=>platform).join("- ")}</span>
            </div>

            <p className="my-2 text-md">
                {props.summary}
            </p>
        </div>
    );
}

export default GameDescription;