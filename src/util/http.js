import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

export const getGames = async (q) => {
    console.log("q is " + q);
    const response = await fetch('http://localhost:8080/' + q);
    if (!response.ok) {
        const error = new Error('An error occurred while fetching the games');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const data = await response.json();
    // console.log(data);
    return data;
};

