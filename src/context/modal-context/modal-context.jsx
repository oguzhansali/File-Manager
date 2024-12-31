import React, { useCallback, useRef, useState } from "react";
import { v4 } from "uuid";
import Modal from "./Modal";
import "./Modal.styles.css"

const Context = React.createContext(undefined);


export const ModalProvider =({children}) =>{
    const [modals, setModals] = useState([])
    const backdropRef = useRef(null);
    const appear = (modal) => {
        const id = v4();
        setModals([...modals, {...modal, id}])
    }

    const disappear = (modalId) =>{
        setModals(modals.filter((m) => m.id !== modalId))
    };

    const handleBackdropClick = useCallback((e) => {
        if(e.target !== backdropRef.current) return;
        setModals((prev)=> {
            const newModals = [...prev]
            newModals.pop()
            return newModals;
        })
    },[])
    
    return (
        <Context.Provider value={{appear,disappear}}>
            {children}
            {/*modals.length bir boolen oluşturuldu.*/}
            {Boolean(modals.length) && (<div backdropRef id="modals-portal" onClick={handleBackdropClick}>
                {modals.map ((modal)=>{
                    return <Modal 
                        onClose={()=> disappear(modal.id)}
                        key = {modal.id}
                        style={modal.style}
                        className={modal.className}
                        id={modal.id} 
                        title = {modal.title}
                        children = {modal.children}
                    />

                })}
            </div> )}
        </Context.Provider>
    );
};

export const useModal = () => {
    const value = React.useContext(Context);
    if(!value){
        throw new Error("useModal must be used within a ModalProvider");
    }
    return value;
};