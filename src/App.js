import { lazy , Suspense, useState, useEffect, useCallback } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthContext } from "./store/auth-ctx";
import { queryClient } from "./util/http";
// import HomePage from "./pages/Home";
// import GamePage, { loader } from "./pages/GamePage";
import BrowseGames from "./pages/BrowseGames";
import RootLayout from "./pages/Root";
import CategoryPage from "./pages/CategoryPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import NewList from "./pages/NewList";
import UserLists from "./pages/UserLists";
import ListGames from "./pages/ListGames";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";

//lazy loading pages
const HomePage = lazy(() => import('./pages/Home'));
const GamePage = lazy(() => import('./pages/GamePage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Suspense fallback={<p>Loading...</p>}> <HomePage /> </Suspense>  },
      { path: "error", element: <ErrorPage /> },
      {
        path: "/games",
        children: [
          { index: true, element: <Suspense fallback={<p>Loading...</p>}> <HomePage /> </Suspense> },
          { path: ":id", element: <Suspense fallback={<p>Loading...</p>}> <GamePage /> </Suspense>, loader: () => import('./pages/GamePage').then(module => module.loader)}, //lazy loading the gamepage loader

        ]
      },
      {
        path: "/categories",
        children: [
          { index: true, element: <BrowseGames /> },
          { path: ":type/:slug", element: <CategoryPage /> },
        ]
      },
      {
        path: "/search",
        children: [
          { index: true, element: <SearchResultsPage /> },
        ]
      },
      {
        path: "/users",
        children: [
          {
            path: "lists", element: <UserLists />,
          },
          { path: "lists/:id", element: <ListGames /> },
          { path: "newlist", element: <NewList /> },
        ]
      },
    ]
  },
]);


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [showAuthentication, setShowAuthentication] = useState(false);

  const signIn = (token, userId, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);

    const remainingMilliseconds = 60 * 60 * 1000;
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
    localStorage.setItem('expiryDate', expiryDate.toISOString());

    setIsLoggedIn(true);
    setUsername(username);
    autoSignOut(remainingMilliseconds);
  };

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('username');

    setIsLoggedIn(false);
    setUsername(null);
  };

  const autoSignOut = useCallback((milliseconds) => {
    setTimeout(() => {
      signOut();
    }, milliseconds);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    const username = localStorage.getItem('username');
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      signOut();
      return;
    }
    const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();

    setIsLoggedIn(true);
    setUsername(username);
    autoSignOut(remainingMilliseconds);
  }, [autoSignOut]);


  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      showAuthentication: showAuthentication,
      setShowAuthentication: setShowAuthentication,
      username: username,
      signIn, signOut
    }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}

export default App;
