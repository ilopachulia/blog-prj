import {Dispatch, ReactNode, SetStateAction, createContext, useState, useEffect} from 'react';

interface UserContextValue {
    user: string
    setUser: Dispatch<SetStateAction<string>>
}

export const UserContext = createContext<UserContextValue>({
    user: "",
    setUser: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<string>("");
    if(user) {
        localStorage.setItem('userToken', user);
    }
    const token= localStorage.getItem("userToken");

   useEffect(()=>{
       if(token) {
           setUser(token)
       }
       }, [token]);

    return (
        <UserContext.Provider
            value={{ user, setUser }}
        >
            {children}
        </UserContext.Provider>
    );
}