import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getGames } from '../../util/http';
import SearchResult from './SearchResult';
import { SearchBarIcon } from '../icons/icons';

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
            }, 800); // delay of 800 milliseconds
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
                <div
                    className='fixed inset-0 z-10'
                    onClick={() => setIsOverlayVisible(false)}>
                    <div className='absolute inset-0 bg-black opacity-50' />
                </div>
            )}

            <div className="relative">
                <input
                    type="text"
                    placeholder='Search Game'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className='search-bar-input'
                />
                <SearchBarIcon />
            </div>

            {results.isLoading && <div className='text-gray-400'>Loading...</div>}
            {isOverlayVisible &&
                <div className='z-20 absolute left-0 mt-2 w-96 bg-gray-200 rounded shadow-lg overflow-hidden'>
                    <div>
                        <div className='flex justify-between items-center px-2 py-2'>
                            <h2 className='text-gray-800 font-semibold'>
                                Best matches
                            </h2>
                            <button
                                className='text-black font-semibold'
                                onClick={() => setIsOverlayVisible(false)}>
                                &#x2715;
                            </button>
                        </div>
                        <div className='border-b border-gray-400' />
                    </div>

                    <div>
                        {results.data?.data.map(result => {
                            return <SearchResult
                                key={result.id}
                                id={result.id}
                                image={result.coverImageUrl}
                                name={result.name}
                                year={result.releaseYear}
                                onClick={setIsOverlayVisible} />
                        }
                        )}
                    </div>

                    <div className='border-b border-gray-400' />
                    <div className='text-gray-800 font-semibold p-3 hover:text-red-800'>
                        <Link
                            to={`/search?q=${search}`}
                            onClick={() => setIsOverlayVisible(false)}>
                            Sea all results
                        </Link>
                    </div>
                </div>}
        </div>
    );
};

export default SearchBar;