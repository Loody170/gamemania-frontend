import HomeSection from '../components/HomeSection';
// import { useQuery } from '@tanstack/react-query';
// import { getGames } from '../util/http';
import PlatformSection from '../components/best-games/PlatformSection';
// import { useState } from 'react';
// import Modal from '../components/UI/Modal';
function HomePage() {
  // const [showModal, setShowModal] = useState(false);

  console.log("home page renderes");
  return (
    <>
          {/* <button onClick={() => setShowModal(true)}>Open Modal</button>

    <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h1>Hello, world!</h1>
        <p>Welcome to your new modal!</p>
      </Modal> */}
      <h1 className="mx-10 md:mx-28 py-2">Welcome to GameMania, your destination for video games knowledge!</h1>
      <HomeSection query="anticipatedgames" queryKey={"anticipatedGames"} title="Anticipated Games" color="border-cyan-600" />
      <HomeSection query="recenttopgames" queryKey={"recentTopGames"} title="Top Recent Games" color="border-pink-600" />
      <HomeSection query="upcominggames" queryKey={"comingSoon"} title="Coming Soon" color="border-green-600" />

      <div>
        <h2 className='mx-10 md:ml-28 md:mr-48 text-5xl mb-8'>Best Games on</h2>
        {/* main container */}
        <div className='mx-8 lg:mx-36 flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-12 justify-between lg:items-center'>
          {/* container 1 */}
          <div className='flex flex-col space-y-8'>
            <PlatformSection platform="playstation" />
          </div>
          {/* container 2 */}
          <div className=' flex flex-col space-y-8'>
            <PlatformSection platform="xbox" />
          </div>
          {/* container 3 */}
          <div className='flex flex-col space-y-8'>
            <PlatformSection platform="switch" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

// const {data,
//   isLoading,
//  //  isError, error
//  } = useQuery({
//  queryKey: ['newReleases'],
//  queryFn: ({signal, queryKey}) => getGames("newgames", {signal: signal, queryKey: queryKey}),
//  staleTime: 1000 * 60 * 5,
// });



// const newReleases = useQuery({
//   queryKey: ['newReleases'],
//   queryFn: ({ signal, queryKey }) => getGames("newgames"),
//   staleTime: 1000 * 60 * 5,
//   refetchOnWindowFocus: false,
// refetchOnReconnect: false
// });

// const upcomingGames = useQuery({
//   queryKey: ['upcomingGames'],
//   queryFn: ({ signal, queryKey }) => getGames("upcominggames"),
//   staleTime: 1000 * 60 * 5,
//   refetchOnWindowFocus: false,
//   refetchOnReconnect: false
// });

// console.log(data.data);



// <section className='mx-auto'>
//   <div className="flex overflow-x-scroll hide-scrollbar space-x-8 py-4">
//     <GameCard />
//     <GameCard />
//     <GameCard />
//     <GameCard />
//     <GameCard />
//     <GameCard />
//     <GameCard />
//     <GameCard />
//     <GameCard />
//     <GameCard />
//     <GameCard />
//     <GameCard />
//     <div className="min-w-max">
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         See All
//       </button>
//     </div>
//   </div>
// </section>

// <section className='mx-auto'>
// <div className="py-4 flex flex-col justify-center items-center w-full space-y-6 text-2x md:flex-row md:space-y-0 md:space-x-8">
//   {/* game card */}
//   <GameCard />
//   <GameCard />
//   <GameCard />
//   <GameCard />
// </div>
// <div className="py-4 flex flex-col justify-center items-center w-full space-y-6 text-2x md:flex-row md:space-y-0 md:space-x-8">
//   {/* game card */}
//   <GameCard />
//   <GameCard />
//   <GameCard />
//   <GameCard />
// </div>
// </section>


// <div className="mt-16 mx-10 md:mx-28">
// {/* trending now section */}
// <h2 className="text-3xl">New Releases {">"} </h2>
// <div className="border-b-2 border-pink-600 w-20 py-1 font-bold" />
// </div>

// <section>
// <div className="py-4 flex flex-col justify-center items-center w-full space-y-6 text-2x md:flex-row md:space-y-0 md:space-x-8">
//   {/* game card */}
//   <GameCard />
//   <GameCard />
//   <GameCard />
//   <GameCard />
// </div>
// </section>

// <div className="mt-16 mx-10 md:mx-28">
// {/* trending now section */}
// <h2 className="text-3xl">Anticipated Games {">"} </h2>
// <div className="border-b-2 border-green-600 w-20 py-1 font-bold" />
// </div>

// <section>
// <div className="py-4 flex flex-col justify-center items-center w-full space-y-6 text-2x md:flex-row md:space-y-0 md:space-x-8">
//   {/* game card */}
//   <GameCard />
//   <GameCard />
//   <GameCard />
//   <GameCard />
// </div>
// </section>
