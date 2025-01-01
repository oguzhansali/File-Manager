import React from "react";
import "./Toolbar.Style.css"
import { useViewContext } from "../../context/view-context/view-context";
import { IconTrash3 } from "../../assets/icons/IconTrash";
import { useParams } from "react-router-dom";
import { useFolderQuery } from "../../queries/useFolderQuery";
import CreateFolderModal from "../../modals/CreateFolderModal/CreateFolderModal";
import { useModal } from "../../context/modal-context/modal-context";
import CreateFileModal from "../../modals/CreateFileModal/CreateFileModal";

const Toolbar = () =>{
    const viewContext = useViewContext();
    const params = useParams();
    const folder = useFolderQuery(params.id);
    const modal = useModal();


    const handleClickCreate = () => {
        modal.appear({
            title:"Yeni Klasör",
            children:(props)=>
            <CreateFolderModal {...props} parentFolderId={parent.id}/>,
        });
    }

    const handleClickCreateFile = () => {
        modal.appear({
            title:"Yeni Klasör",
            children:(props)=>
            <CreateFileModal {...props} parentFolderId={parent.id}/>,
        });
    }

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
            <button onClick={viewContext.toggleType}>Toggle View Type</button>
            <button onClick={handleClickCreate}>Create Folder</button>
            <button onClick={handleClickCreateFile}>Create File</button>

            {isSelected && <button onClick={handleRemoveSelect}><IconTrash3/></button>}
        </div>
    )
}

export default Toolbar