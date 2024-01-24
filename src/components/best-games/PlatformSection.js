import { useQuery } from '@tanstack/react-query';
import { getGames } from '../../util/http';
import SmallGameCard from './SmallGameCard';

const PlatformSection = (props) => {
    const query = `bestgames?platform=${props.platform}`;
    const games = useQuery({
        queryKey: [props.platform],
        queryFn: () => getGames(query),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });

    return (
        <>
            <h3 className='text-4xl capitalize -ml-4'>
                {props.platform}
            </h3>
            {games.isLoading ? <div className="text-lg text-center mx-auto mt-10">
                Loading...
            </div> :
                games.data.data.map(game =>
                    <SmallGameCard
                        key={game.id} id={game.id}
                        name={game.name} imageId={game.cover.image_id}
                        rating={game.rating} />
                )}
        </>
    );
}

export default PlatformSection;