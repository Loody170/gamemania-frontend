import { Link } from "react-router-dom";
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
                        <p className="text-lg font-bold mt-4">{props.name}</p>

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill={starColor} width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 8 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span className="ml-2 text-2xl font-semibold">{rating}</span>
                        </div>
                    </div>
                </div>
            </Link>


        </>
    );
};

export default SmallGameCard;