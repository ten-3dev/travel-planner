import React, { createContext, useState } from 'react'

export const UserContext = createContext();

function UserStore (props) {
    const [layoutOpen, setLayoutOpen] = useState(true);

      
    return (
        <UserContext.Provider value={{
            layoutOpen,
            setLayoutOpen
        }}
        > 
        {props.children}
        </UserContext.Provider>
    )
}


export default UserStore