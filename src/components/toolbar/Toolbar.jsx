import React from "react";
import "./Toolbar.Style.css"
import { useViewContext } from "../../context/view-context/view-context";
import { IconTrash3 } from "../../assets/icons/IconTrash";
import { useParams } from "react-router-dom";
import { useFolderQuery } from "../../queries/useFolderQuery";

const Toolbar = () =>{
    const viewContext = useViewContext();
    const params = useParams();
    const folder = useFolderQuery(params.id);

    const handleRemoveSelect = () => {
        const files  = viewContext.selectedItems.filter((i)=>  Boolean(i.url) );
        const folders  = viewContext.selectedItems.filter((i)=>  !Boolean(i.url) )
        files.forEach((file)=> {
            folder.removeFile.mutateAsync(file.id)
        });
        folders.forEach((f)=> {
            folder.removeFolder.mutateAsync(f.id)
        });
    };

    const isSelected = Boolean(viewContext.selectedItems.length);
    return(
        <div className="toolbar">
            {isSelected && <button onClick={handleRemoveSelect}><IconTrash3/></button>}
        </div>
    )
}

export default Toolbar