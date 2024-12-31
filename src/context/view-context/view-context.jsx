import { useContext,useState } from "react";
import React from "react";
const Context = React.createContext(undefined);

export const ViewProvider = ({children}) => {  
    const [selectedItems, setSelectedItems] = useState([]);
    
    const select = (item) => {
        setSelectedItems((prev)=> {
            if(prev.findIndex((i)=>i.id === item.id)) return prev;
            return [...prev,item];
        })
    }

    const dselect = (item) => {
        setSelectedItems((prev)=> prev.filter((i)=> i.id !== item.id))
    };

    const clear = () => {
        setSelectedItems([])
    }
    return(
        <Context.Provider value={{selectedItems,select,dselect,clear}}>
            {children}
        </Context.Provider>
    )  
}
 
export const useViewContext = () =>{
    const value = useContext(Context)
    if(!value) throw new Error("you can not use useViewContext here")
    
    return value;
};