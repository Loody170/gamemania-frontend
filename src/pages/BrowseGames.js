import { useState, useEffect } from 'react';
import CategoriesList from '../components/category/CategoriesList';
import { gameGenres, gameThemes, gamePlatforms } from '../data/game-data';

function BrowseGames() {
    useEffect(() => {
        document.title = 'GameMania | Browse Games';
    }, []);

    const [selectedTab, setSelectedTab] = useState('genres');
    const tabs = ['genres', 'themes', 'platforms'];

    const renderContent = () => {
        switch (selectedTab) {
            case 'genres':
                return <>
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
            <div className='my-12 container mx-auto max-w-7xl px-6 text-gray-900 md:px-0'>
                <ul className="flex tabs-ul rounded-lg shadow ">
                    {tabs.map((tab) => (
                        <li className="w-full" key={tab}>
                            <button
                                className={`tab ${selectedTab === tab ? 'bg-red-900 text-white' : 'bg-gray-100 text-gray-900'}`}
                                onClick={() => setSelectedTab(tab)}>
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        </li>
                    ))}
                </ul>

                {renderContent()}
            </div>
        </>
    );
}

export default BrowseGames;

//alt approach for tabs clasnames
// flex flex-col space-y-1 sm:flex-row sm:space-y-0


//alt approach for rednering categories

// const renderCategories = (items, type) => {
//     const chunks = [];
//     for (let i = 0; i < items.length; i += 4) {
//       chunks.push(items.slice(i, i + 4));
//     }
//     return chunks.map((chunk, index) => <CategoriesList key={index} items={chunk} type={type} />);
//   };

// switch (selectedTab) {
//     case 'genres':
//       return renderCategories(gameGenres, 'genres');
//     case 'themes':
//       return renderCategories(gameThemes, 'themes');
//     case 'platforms':
//       return renderCategories(gamePlatforms, 'platforms');
//     default:
//       return null;
//   }