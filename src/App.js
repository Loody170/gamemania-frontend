import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import BrowseGames from "./pages/BrowseGames";
import RootLayout from "./pages/Root";
import GamePage, { loader } from "./pages/GamePage";
import CategoryPage from "./pages/CategoryPage";
import { queryClient } from "./util/http";
import { QueryClientProvider } from "@tanstack/react-query";
import SearchResultsPage from "./pages/SearchResultsPage";
import { useState } from "react";
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

  const signIn = () => {
    // Perform sign in operation here
    setIsLoggedIn(true);
  };

  const signOut = () => {
    // Perform sign out operation here
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, signIn, signOut }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContext.Provider>

    // <RouterProvider router={router} />
  );
}

export default App;
