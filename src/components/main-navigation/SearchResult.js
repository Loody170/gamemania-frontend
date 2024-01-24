import { Link } from "react-router-dom";
const SearchResult = (props) => {
    const noCoverUrl = "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png";
    return (
        <>
            <Link
                to={`/games/${props.id}`}
                onClick={() => props.onClick(false)}>
                <div className="flex items-center mb-2">
                    <div className="min-w-[5rem]">
                        <img src={props.image ? props.image : noCoverUrl}
                            alt={props.image}
                            className="w-16 h-16 ml-1 mr-4 rounded-md mt-2" />
                    </div>
                    <div className="hover:text-red-800 text-gray-600">
                        <h2 className="text-lg ">
                            {props.name}
                        </h2>
                        <p className="text-sm">
                            {props.year}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    );
};
export default SearchResult;