import { useState } from "react";

function GameDescription(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 360;

  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };
  const renderSummary = () => {
    if (props.summary.length <= maxLength) {
      return props.summary;
    }
    if (isExpanded) {
      return (
        <span>
          {props.summary} --
          <button onClick={handleShowMore} className="text-blue-500">
            Show less
          </button>
        </span>
      );
    }

    return (
      <span>
        {props.summary.substring(0, maxLength)}... -
        <button onClick={handleShowMore} className="text-blue-500">
          - Show more
        </button>
      </span>
    );
  };

  return (
    <div className="mt-4  w-full h-full ">
      <div className="my-2">
        <span className="font-bold">
          Genre:{" "}
        </span>
        <span>
          {props.genres.map(genre => genre).join(", ")}
        </span>
      </div>

      <div className="my-2">
        <span className="font-bold">Platforms: </span>
        <span>{props.platforms.map(platform => platform).join("- ")}</span>
      </div>

      <p className="my-2 text-md">
        {renderSummary()}
      </p>
    </div>
  );
}

export default GameDescription;