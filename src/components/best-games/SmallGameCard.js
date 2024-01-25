import { Link } from "react-router-dom";
import {StarIcon} from "../icons/icons"

const SmallGameCard = (props) => {
    const imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_small/${props.imageId}.jpg`;
    const rating = Math.floor(props.rating);
    const starColor = rating >= 90 ? "gold" : "green"

    return (
        <>
            <Link to={`/games/${props.id}`}>
                <div className="flex space-x-2">
                    <img src={imageUrl} alt="game" className="" />
                    <div className="flex flex-col space-y-4">
                        <p className="text-lg font-bold mt-4">
                            {props.name}
                        </p>
                        <div className="flex items-center">
                            <StarIcon starColor={starColor} />
                            <span className="ml-2 text-2xl font-semibold">
                                {rating}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default SmallGameCard;