function GameRating(props) {
    var ratingWord = "";
    const getColor = (rating) => {
        if(!rating){
            ratingWord = "No rating";
            return "bg-gray-400"
        }
        if (rating >= 80) {
            ratingWord = "Great";
            return "bg-green-600"
        }
         else if (rating >= 60) {
            ratingWord = "Good";
             return "bg-yellow-500"
    }
          else if (rating <= 60) {
            ratingWord = "Bad";
             return "bg-red-600";
    };
};
const ratingClass = `w-16 h-16 ${getColor(props.rating)} flex items-center justify-center rounded-lg `;

return (
    <div className="w-auto flex items-center space-x-4">
        <div className={ratingClass}>
            <span className="text-white text-2xl font-bold">{props.rating ? props.rating : "-"}</span>
        </div>
        <div >
            <p className="text-xl font-bold ">{ratingWord}</p>
            {ratingWord === "No rating"? "": <p className=" text-gray-500 ">Based on {props.ratingCount} users reviews</p>}
        </div>
    </div>
);
}

export default GameRating;