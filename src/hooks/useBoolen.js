import React, { useCallback, useMemo, useState } from "react";

const useBoolean = (initial) => {

    const [value,setValue] = useState(initial);

    const toggle = useCallback(()=>{
        setValue((value)=> !value);
    },[]);

    const setTrue = useCallback(()=>{
        setValue(true);
    },[]);

    const setFalse = useCallback(()=>{
        setValue(false);
    },[]);

    const returnValue=useMemo(()=>({
        value,
        toggle,
        setTrue,
        setFalse
    }),[value])
   
    return returnValue;
};

export default useBoolean;