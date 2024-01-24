import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getGames } from '../util/http';
import GameCard from './GameCard';

function HomeSection(props) {
    const games = useQuery({
        queryKey: [props.queryKey],
        queryFn: () => getGames(props.query),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });

    const noCoverUrl = "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png";
    const scrollContainer = useRef(null);
    const scrollLeft = () => {
        scrollContainer.current.scrollTo({
            left: scrollContainer.current.scrollLeft - 400,
            behavior: 'smooth'
        });
    };
    const scrollRight = () => {
        scrollContainer.current.scrollTo({
            left: scrollContainer.current.scrollLeft + 400,
            behavior: 'smooth'
        });
    };
    let dynamicContent = "";
    if (games.isLoading) {
        dynamicContent = <div className="text-lg text-center mx-auto mt-10">Loading...</div>
    }
    else {
        if (!games.data.data || games.data.data.length === 0) {
            console.log("no data found to load home section");
            dynamicContent = ""
        }
        else {
            dynamicContent = <>
                <div className="mx-10 md:ml-28 md:mr-48 flex justify-between items-center">
                    <div>
                        <h2 className="text-3xl">{props.title}</h2>
                        <div className={`border-b-2 ${props.color} w-20 py-1 font-bold`} />
                    </div>

                    <div>
                        <button className='scroll-arrow mx-2' onClick={scrollLeft}>&lt;</button>
                        <button className='scroll-arrow' onClick={scrollRight}>&gt;</button>
                    </div>
                </div>

                <section className='mb-16'>
                    <div ref={scrollContainer}
                        className="mx-10 md:mx-48 flex overflow-x-scroll hide-scrollbar space-x-4 py-4">
                        {/* game cards */}
                        {games.data.data.map(game => {
                            return (
                                <GameCard
                                    key={game.id} id={game.id}
                                    flag={props.title} name={game.name}
                                    type={game.genres[0]} image={game.coverImageUrl ? game.coverImageUrl : noCoverUrl}
                                    platforms={game.platforms}
                                    releaseDate={props.title === "Recently Released" ? game.date : "undefined"} />
                            );
                        })}
                    </div>
                </section>
            </>;
        }
    }

    return (
        dynamicContent
    );
}

export default HomeSection;