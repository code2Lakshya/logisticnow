import { useState } from "react";
import { createContext } from "react";


export const AppContext=createContext();

const AppContextProvider=({children})=>{

const [showQuote,setShowQuote]=useState(false);

const value={showQuote,setShowQuote};
return(
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
);
}

export default AppContextProvider;