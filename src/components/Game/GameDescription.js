import { useState } from "react";
function GameDescription(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100;
     
    const handleShowMore = () => {
        setIsExpanded(!isExpanded);
      };
  
    return (
        <div className="border-2 border-green-600  max-w-2xl overflow-auto">
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