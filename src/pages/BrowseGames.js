import { useState } from 'react';
import image from '../images/rpg.jpg';
import CategoriesList from '../components/category/CategoriesList';
const gameGenres = [
    { id: "1", name: "Shooter", slug: "shooter" },
    { id: "2", name: "Hack and slash/Beat 'em up", slug: "hack-and-slash-beat-em-up" },
    { id: "3", name: "Role Playing (RPG)", slug: "role-playing-rpg" },
    { id: "4", name: "Adventure", slug: "adventure" },
    { id: "5", name: "Sport", slug: "sport" },
    { id: "6", name: "Fighting", slug: "fighting" },
    { id: "7", name: "Racing", slug: "racing" },
    { id: "8", name: "Indie", slug: "indie" },
    { id: "9", name: "MOBA", slug: "moba" },
    { id: "10", name: "Strategy", slug: "strategy" },
    { id: "11", name: "Simulator", slug: "simulator" },
    { id: "12", name: "Puzzle", slug: "puzzle" },
];
const gameThemes = [
    { id: 1, name: "Action", slug: "action" },
    { id: 2, name: "Fantasy", slug: "fantasy" },
    { id: 3, name: "Science fiction", slug: "science-fiction" },
    { id: 4, name: "Open world", slug: "open-world" },
    { id: 5, name: "Warfare", slug: "warfare" },
    { id: 6, name: "Survival", slug: "survival" },
    { id: 7, name: "Stealth", slug: "stealth" },
    { id: 8, name: "Horror", slug: "horror" },
    { id: 9, name: "Thriller", slug: "thriller" },
    { id: 10, name: "Comedy", slug: "comedy" },
    { id: 11, name: "Sandbox", slug: "sandbox" },
    { id: 12, name: "Mystery", slug: "mystery" },
    { id: 13, name: "Party", slug: "party" }
];

const gamePlatforms = [
    { id: 1, name: "PC (Microsoft Windows)", slug: "win" },
    { id: 2, name: "Mac", slug: "mac" },
    { id: 3, name: "PlayStation 5", slug: "ps5" },
    { id: 4, name: "PlayStation 4", slug: "ps4--1" },
    // { id: 5, name: "PlayStation 3", slug: "ps3" },
    { id: 6, name: "Xbox Series X|S", slug: "series-x" },
    { id: 7, name: "Xbox One", slug: "xboxone" },
    // { id: 8, name: "Xbox 360", slug: "xbox360" },
    { id: 9, name: "Nintendo Switch", slug: "switch" },
    { id: 10, name: "Mobile (IOS - Android)", slug: "mobile" },
];

function BrowseGames() {
    const [selectedTab, setSelectedTab] = useState('genres');
    const renderContent = () => {
        console.log("selected tab: " + selectedTab);
        switch (selectedTab) {
            case 'genres':
                return <>
                    {/* <h2 className="mb-8 text-2xl text-center md:-ml-12 md:text-left md:text-4xl">
                        Genres
                    </h2> */}
                    <CategoriesList items={gameGenres.slice(0, 4)} type="genres" />
                    <CategoriesList items={gameGenres.slice(4, 8)} type="genres" />
                    <CategoriesList items={gameGenres.slice(8, 12)} type="genres" />
                </>;
            case 'themes':
                return <>
                    <CategoriesList items={gameThemes.slice(0, 4)} type="themes" />
                    <CategoriesList items={gameThemes.slice(4, 8)} type="themes" />
                    <CategoriesList items={gameThemes.slice(8, 12)} type="themes" />
                    <CategoriesList items={gameThemes.slice(12, gameThemes.length)} type="themes" />
                </>;
            case 'platforms':
                return <>
                    <CategoriesList items={gamePlatforms.slice(0, 4)} type="platforms" />
                    <CategoriesList items={gamePlatforms.slice(4, 8)} type="platforms" />
                    <CategoriesList items={gamePlatforms.slice(8, 10)} type="platforms" />

                </>;
            default:
                return null;
        }
    };
    return (
        <>
            {/* <button className="mx-10 md:mx-28 my-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    See All
                </button> */}

            <div className='my-12 container mx-auto max-w-7xl px-6 text-gray-900 md:px-0'>
                {/* <div className='flex space-x-4 items-center'>
                    <button
                        className={`px-4 py-2 rounded ${selectedTab === 'genres' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                        onClick={() => setSelectedTab('genres')}>
                        Genres
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${selectedTab === 'themes' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                        onClick={() => setSelectedTab('themes')}>
                        Themes
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${selectedTab === 'platforms' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                        onClick={() => setSelectedTab('platforms')}>
                        Platforms
                    </button>
                </div> */}
                <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li className="w-full">
                        <button className={`tab ${selectedTab === 'genres' ? 'bg-red-900 text-white' : 'bg-gray-100 text-gray-900'}`}
                            onClick={() => setSelectedTab('genres')}>
                            Genres
                        </button>
                    </li>
                    <li className="w-full">
                        <button className={`tab ${selectedTab === 'themes' ? 'bg-red-900 text-white' : 'bg-gray-100 text-gray-900'}`} onClick={() => setSelectedTab('themes')}>
                            Themes
                        </button>
                    </li>
                    <li className="w-full">
                        <button className={`tab ${selectedTab === 'platforms' ? 'bg-red-900 text-white' : 'bg-gray-100 text-gray-900'}`} onClick={() => setSelectedTab('platforms')}>
                            Platforms
                        </button>
                    </li>
                </ul>

                {renderContent()}

                {/* <h2 className="mt-20 mb-12 text-2xl text-center md:-ml-12  md:text-left md:text-4xl">
                    Themes
                </h2> */}

                <div className='item-container'>
                    {/* <CategoryCard image={image} title="RPG" />
                    <CategoryCard image={image} title="RPG" />
                    <CategoryCard image={image} title="RPG" /> */}
                </div>
            </div>






        </>
    );
}

export default BrowseGames;


<div className="group item">
    <img
        src={image}
        alt=""
        className="hidden w-full duration-200 md:block group-hover:scale-110"
    />
    <div className="item-gradiant" />
    <h5>RPG</h5>
</div>