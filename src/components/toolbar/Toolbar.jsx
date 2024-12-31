import React from "react";
import "./Toolbar.Style.css"
import { useViewContext } from "../../context/view-context/view-context";
import { IconTrash3 } from "../../assets/icons/IconTrash";

const Toolbar = () =>{
    const viewContext = useViewContext();

    const isSelected = Boolean(viewContext.selectedItems.length);
    return(
        <div className="toolbar">
            {isSelected && <button><IconTrash3/></button>}
        </div>
    )
}

export default Toolbar