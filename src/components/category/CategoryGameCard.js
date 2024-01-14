import { Link } from "react-router-dom";
const CategoryGameCard = (props) => {
  const noCoverUrl = "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png";
    return(
        <>
        <Link to={`/games/${props.id}`}>
        <div className="max-w-xs rounded-xl border border-gray-100 hover:border-gray-200
         overflow-hidden shadow-md hover:shadow-2xl 
         flex cursor-pointer pl-2 mb-8">
          <img className="w-1/3 h-36 my-2 object-cover rounded-xl" src={props.image? props.image: noCoverUrl} alt="Game" />
          <div className="px-4 w-2/3">
            <div className="font-bold text-xl mb-2 text-gray-600 line-clamp-3">{props.title}</div>
            <p className="text-gray-700 mb-4 capitalize">{props.date}</p>
            <p className="text-gray-700">Rated: {props.rating}/100</p>
          </div>
        </div>
        </Link>
        </>
    );
};
export default CategoryGameCard;