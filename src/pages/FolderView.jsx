import React from "react";
import {useFolderQuery} from "../queries/useFolderQuery";
import { useParams } from "react-router-dom";
import TreeMenu from "../components/tree-menu/TreeMenu";
import Main from "../layouts/Main";
import TreeMenuItem from "../components/tree-menu/TreeMenuItem";
import {useModal} from "../context/modal-context/modal-context"
import CreateFolderModal from "../modals/CreateFolderModal/CreateFolderModal";

const FolderView = () => {
    const modal = useModal();

    const params = useParams();

    const folder = useFolderQuery(params.id);

    const name = !params.id || params.id==="null" ? "Kök Klasör" : folder.find.data?.name ;
    
    const subFolders = useFolderQuery({
        parentId: params.id || "null",
    });

    const handleClickCreateModal = () => {
        modal.appear({
            title:"Yeni Klasör",
            children: CreateFolderModal,
        });
    }

    return (    
        <Main
            folderName={name}
            sidebar={
                <>
                    <button onClick={handleClickCreateModal} className="create-buttom">Create</button>
                    <TreeMenuItem name="Kök Klasör" id="null" defaultExpanded={true}/>
                </>
            }
        />
    )
}

export default FolderView;