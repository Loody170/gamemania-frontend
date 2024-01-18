import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import BrowseGames from "./pages/BrowseGames";
import RootLayout from "./pages/Root";
import GamePage, { loader } from "./pages/GamePage";
import CategoryPage from "./pages/CategoryPage";
import { queryClient } from "./util/http";
import { QueryClientProvider } from "@tanstack/react-query";
import SearchResultsPage from "./pages/SearchResultsPage";
import { useState, useEffect, useCallback } from "react";
import { AuthContext } from "./store/auth-ctx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/games",
        children: [
          { index: true, element: <HomePage /> },
          { path: ":id", element: <GamePage />, loader: loader },
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
    ]
  },
]);


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);


  const signIn = (token, userId, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);

    const remainingMilliseconds = 60 * 60 * 1000;
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
    localStorage.setItem('expiryDate', expiryDate.toISOString());

    setIsLoggedIn(true);
    setUsername(username);
    // console.log("user name after setting is " + username);

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

    // const userId = localStorage.getItem('userId');
    const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();

    setIsLoggedIn(true);
    setUsername(username);
    autoSignOut(remainingMilliseconds);
  }, [autoSignOut]);


  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, username: username, signIn, signOut }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}

export default App;
