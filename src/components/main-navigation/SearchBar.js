// import { useState, useEffect, useRef, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { getGames } from '../util/http';
// const SearchBar = () => {
//     // const [search, setSearch] = useState('');
//     // const [results, setResults] = useState([]);
//     // const [timer, setTimer] = useState(null);
//     // useEffect(() => {t
//     //     if (timer) {
//     //         clearTimeout(timer);
//     //     }
//     //     if (search !== '') {
//     //         setTimer(setTimeout(() => {
//     //             // Replace this with your actual search function
//     //             const searchResults = performSearch(search);
//     //             console.log(searchResults);
//     //             setResults(searchResults);
//     //         }, 2000)); // delay of 500ms
//     //     } else {
//     //         setResults([]);
//     //     }
//     // }, [search]);

//     // const games = useQuery({
//     //     queryKey: [search],
//     //     queryFn: () => getGames(`games/search?query=${search}`),
//     //     staleTime: 1000 * 60 * 5,
//     //     refetchOnWindowFocus: false,
//     //     refetchOnReconnect: false,
//     //     enabled: false,
//     // });

//     // const performSearch = (query) => {
//     //     games.refetch();
//     //    return games.data;
//     // }

//     const [search, setSearch] = useState('');
//     // const [timer, setTimer] = useState(null);
//     const timer = useRef(null);
//     const [results, setResults] = useState([]);

//      const games = useQuery({
//         queryKey: [search],
//         queryFn: () => getGames(`games/search?query=${search}`),
//         staleTime: 1000 * 60 * 5,
//         refetchOnWindowFocus: false,
//         refetchOnReconnect: false,
//         enabled: false,
//     });

//     // const refetchGames = useCallback(() => games.refetch(), [games]);

//     // useEffect(() => {
//     //   if (timer.current) {
//     //     clearTimeout(timer.current);
//     //   }
//     //   if (search !== '') {
//     //     timer.current = setTimeout(async () => {
//     //       const {data} =  await refetchGames();
//     //       console.log("printing data");
//     //       console.log(data);
//     //       setResults(data);
//     //     }, 2000); // delay of 2 seconds
//     //   }
//     // }, [search, refetchGames]);

//     return (
//         <>
//             <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
//             {/* {results.length > 0 && (
//                 <div>
//                     {results.map(game => (
//                         <Link to={`/games/${game.id}`}>{game.title}</Link>
//                     ))}
//                     <Link to={`/search?query=${search}`}>See all results</Link>
//                 </div>
//             )} */}
//         </>
//     );
// }

// export default SearchBar;

import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getGames } from '../../util/http';
import SearchResult from './SearchResult';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const timer = useRef(null);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);


    const results = useQuery({
        queryKey: [search],
        queryFn: () => getGames(`games/search?query=${search}`),
        enabled: false,
    });

    useEffect(() => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        if (search !== '') {
            timer.current = setTimeout(async () => {
                await results.refetch();
                if (!results.isLoading) {
                    console.log(results.data);
                }
            }, 800); // delay of 1 seconds
        }
    }, [search, results]);

    useEffect(() => {
        if (results.data?.data.length > 0) {
            setIsOverlayVisible(true);
        } else {
            setIsOverlayVisible(false);
        }
    }, [results.data]);

    return (
        <div className='relative'>
            {isOverlayVisible && (
                <div className='fixed inset-0 z-10' onClick={() => setIsOverlayVisible(false)}>
                    <div className='absolute inset-0 bg-black opacity-50' />
                </div>
            )}

            <div className="relative">
                <input
                    type="text"
                    placeholder='Search Game'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className='text-gray-800 w-80 placeholder:text-gray-400 px-2 py-1 rounded-lg bg-gray-100 font-normal'
                />

                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500" fill="none" stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
            </div>

            {results.isLoading && <div className='text-gray-400'>Loading...</div>}
            {isOverlayVisible && <div className='z-20 absolute left-0 mt-2 w-96 bg-gray-200 rounded shadow-lg overflow-hidden'>
                <div>
                    <div className='flex justify-between items-center px-2 py-2'>
                        <div className='text-gray-800 font-semibold'>Best matches</div>
                        <button className='text-black font-semibold' onClick={() => setIsOverlayVisible(false)}>&#x2715;</button>
                    </div>
                    <div className='border-b border-gray-400' />
                </div>
                <div>
                    {
                        results.data?.data.map(result => {
                            // console.log(result);
                            return <SearchResult key={result.id} id={result.id} image={result.coverImageUrl} name={result.name} year={result.releaseYear} onClick={setIsOverlayVisible} />
                            // <div className='border border-red-500' key={result.id}>{result.name}</div>
                        }
                        )}
                </div>
                <div className='border-b border-gray-400'></div>
                <div className='text-gray-800 font-semibold p-3 hover:text-red-800'>
                <Link to={`/search?q=${search}`} onClick={() => setIsOverlayVisible(false)}>Sea all results</Link>
                </div>
                {/* <Link className='text-gray-800 font-semibold p-2' to={`/search?q=${search}`} onClick={() => setIsOverlayVisible(false)}>Sea all results</Link> */}


            </div>}


            {/* {results.data.data.map(result => (
        <div key={result.id}>{result.name}</div>
      ))} */}
        </div>
    );
};

export default SearchBar;