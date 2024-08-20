import React, { createContext, useState, useEffect, useContext } from 'react';
import { makeApi } from '../api/callApi.tsx';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const res = await makeApi('/api/my-profile', 'GET');
            setUserData(res.data.user);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ userData, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};