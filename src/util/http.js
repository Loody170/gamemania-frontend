import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

export const getGames = async (q) => {
    // console.log("q is " + q);
    const response = await fetch('http://localhost:8080/' + q);
    if (!response.ok) {
        const error = new Error('An error occurred while fetching the games');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const data = await response.json();
    return data;
};

export const signup = async (authData) => {
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
        const errorData = await response.json();
        const error = errorData;
        error.code = response.status;
        throw error;
    }
    const data = await response.json();
    return data;
};

export const signIn = async(authData)=>{
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
    return data;
};

export const addList = async(list) => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch('http://localhost:8080/users/lists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                 name: list.listName,
                 description: list.description })
        });
        if (!response.ok) {
            const errorData = await response.json();
            const error = new Error(errorData.message);
            error.code = response.status;
            throw error;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export const editList = async(list) => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`http://localhost:8080/users/lists/${list.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                 name: list.listName,
                 description: list.description })
        });
        if (!response.ok) {
            const errorData = await response.json();
            const error = new Error(errorData.message);
            error.code = response.status;
            throw error;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getLists() {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`http://localhost:8080/users/lists`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            const error = new Error(errorData.message);
            error.code = response.status;
            throw error;
        }
        const data = await response.json();
        return data.lists;
    } catch (error) {
        throw error;
    }
}
export async function getList(listId) {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`http://localhost:8080/users/lists/${listId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            const error = new Error(errorData.message);
            error.code = response.status;
            throw error;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export async function deleteList({listId}) {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`http://localhost:8080/users/lists/${listId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            const error = new Error(errorData.message);
            error.code = response.status;
            throw error;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export async function addGame({ listId, gameId }) {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`http://localhost:8080/users/lists/${listId}/games`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ game: gameId }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            const error = new Error(errorData.message);
            error.code = response.status;
            throw error;
        }
        const data = await response.json();
        return data.message;
    } catch (error) {
        throw error;
    }
}

export async function deleteGame({listId, gameId}) {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`http://localhost:8080/users/lists/${listId}/games/${gameId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            const error = new Error(errorData.message);
            error.code = response.status;
            throw error;
        }
        const data = await response.json();
        return data.message;
    } catch (error) {
        throw error;
    }
}