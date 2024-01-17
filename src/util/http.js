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

export const signup = async (authData) => {
    console.log("inside signup");
    console.log(authData.username);
    const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: authData.username,
            email: authData.email,
            password: authData.password,
            confirmPassword: authData.confirmPassword
        })
    });

    if (!response.ok) {
        // const error = 
        // new Error('An error occurred while signing up');
        // error.code = response.status;
        // error.info = await response.json();
        // throw error;
        const errorData = await response.json();
        const error = errorData;
        error.code = response.status;
        // error.info = await response.json();
        throw error;
    }

    const data = await response.json();
    return data;
};

export const signIn = async(authData)=>{
    console.log("inside sign in");
    console.log(authData);

    const response = await fetch('http://localhost:8080/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: authData.email,
            password: authData.password,
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        const error = new Error(errorData.message);
        error.code = response.status;
        throw error;
    }
    const data = await response.json();
    // localStorage.setItem('token', token);

    return data;

};
