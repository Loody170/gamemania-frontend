import { useQuery } from '@tanstack/react-query';
import { getGames } from '../../util/http';
import SmallGameCard from './SmallGameCard';
import { LoadingIcon } from '../icons/icons';

const PlatformSection = (props) => {
    const query = `bestgames?platform=${props.platform}`;
    const games = useQuery({
        queryKey: [props.platform],
        queryFn: () => getGames(query),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    let dynamicContent = "";
    if (games.isError) {
        dynamicContent = <div className="text-lg text-center mx-auto mt-10">Error fetching Games</div>
    }
    else if (games.isLoading) {
        dynamicContent = <LoadingIcon />
    }
    else if (games.data.data.length > 0) {
        dynamicContent = games.data.data.map(game =>
            <SmallGameCard
                key={game.id} id={game.id}
                name={game.name} imageId={game.cover.image_id}
                rating={game.rating} />
        )
    }
    else {
        dynamicContent = <div className="text-lg text-center mx-auto mt-10">Could not get games</div>
    }

    return (
        <>
            <h3 className='text-4xl capitalize -ml-4'>
                {props.platform}
            </h3>
            {dynamicContent}
        </>
    );
}

export default PlatformSection;