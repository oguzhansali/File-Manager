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

    const itemIsSelected = (item) => {
        return selectedItems.find((i) => i.id === item.id)
    }

    const setSelection = (items) => {
        setSelectedItems(items);
    }

    return(
        <Context.Provider value={{selectedItems,select,dselect,clear,itemIsSelected,setSelection}}>
            {children}
        </Context.Provider>
    )  
}
 
export const useViewContext = () =>{
    const value = useContext(Context)
    if(!value) throw new Error("you can not use useViewContext here")
    
    return value;
};