import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGame } from "../../util/http";
const CategoryGameCard = (props) => {
  const queryClient = useQueryClient();
  const deleteGameMutation = useMutation({
    mutationFn: deleteGame,
    onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries("listgames");
    },
    onError: (error) => {
        console.log(error.message);
    }
});

const removeHandler = (event) => {
  event.preventDefault();
    deleteGameMutation.mutate({ listId: props.listId, gameId: props.id });
};

  const noCoverUrl = "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png";
    return(
        <>
        <Link to={`/games/${props.id}`}>
        <div className="relative max-w-xs rounded-xl border border-gray-100 hover:border-gray-200
         overflow-hidden shadow-md hover:shadow-2xl 
         flex cursor-pointer pl-2 mb-8">
          <img className="w-1/3 h-36 my-2 object-cover rounded-xl" src={props.image? props.image: noCoverUrl} alt="Game" />
          <div className="px-4 w-2/3">
            <div className="font-bold text-xl mb-2 text-gray-600 line-clamp-3">{props.title}</div>
            <p className="text-gray-700 mb-4 capitalize">{props.date}</p>
            <p className="text-gray-700 mb-8">Rated: {props.rating}/100</p>
          </div>
          
          {props.isList && <button className="absolute bottom-0 left-32 mb-1 mr-1 text-md md:text-[0.850rem]
           font-semibold text-red-800 hover:text-red-600 hover:scale-110 duration-200" onClick={removeHandler}>Remove</button>}
        </div>
        </Link>
        </>
    );
};
export default CategoryGameCard;