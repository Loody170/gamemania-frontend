import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGame } from "../../util/http";

const CategoryGameCard = (props) => {
  const noCoverUrl = "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png";

  const queryClient = useQueryClient();
  const deleteGameMutation = useMutation({
    mutationFn: deleteGame,
    onSuccess: (data) => {
      // console.log(data);
      queryClient.invalidateQueries("listgames");
    },
    onError: (error) => {
      // console.log(error.message);
    }
  });

  const removeHandler = (event) => {
    event.preventDefault();
    deleteGameMutation.mutate({ listId: props.listId, gameId: props.id });
  };

  return (
    <>
      <Link to={`/games/${props.id}`}>
        <div className="category-game-card">
          <img className="w-1/3 h-36 my-2 object-cover rounded-xl"
            src={props.image ? props.image : noCoverUrl}
            alt="Game" />
          <div className="px-4 w-2/3">
            <h2 className="font-bold text-xl mb-2 text-gray-600 line-clamp-3">{
              props.title}
            </h2>
            <p className="text-gray-700 mb-4 capitalize">
              {props.date}
            </p>
            <p className="text-gray-700 mb-8">
              Rated: {props.rating}/100
            </p>
          </div>

          {props.isList && <button
            className="remove-game-button"
            onClick={removeHandler}>
            Remove
          </button>}
        </div>
      </Link>
    </>
  );
};

export default CategoryGameCard;