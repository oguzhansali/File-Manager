import React from "react";
import {useFolderQuery} from "../queries/useFolderQuery";
import { useParams } from "react-router-dom";
import TreeMenu from "../components/tree-menu/TreeMenu";
import Main from "../layouts/Main";
import TreeMenuItem from "../components/tree-menu/TreeMenuItem";
import {useModal} from "../context/modal-context/modal-context"
import CreateFolderModal from "../modals/CreateFolderModal/CreateFolderModal";
import ListView from "../components/list-view/ListView";
import GridView from "../components/grid-view/GridView";
import Toolbar from "../components/toolbar/Toolbar";
import PreviewImage from "../components/pre-view-img/PreviewImage";
import { useViewContext } from "../context/view-context/view-context";

const FolderView = () => {
    const viewContext = useViewContext();
    const modal = useModal();
    const params = useParams();
    const folder = useFolderQuery(params.id);

    const name = !params.id || params.id==="null" ? "Kök Klasör" : folder.find.data?.name ;
    
    const subFolders = useFolderQuery({
        parentId: params.id || "null",
    });

    const handleClickCreate = () => {
        modal.appear({
            title:"Yeni Klasör",
            children:(props)=>
            <CreateFolderModal {...props} parentFolderId={parent.id}/>,
        });
    }

    return (    
        <Main
            preview={<PreviewImage/>}
            toolbar={<Toolbar/>}
            folderName={name}
            sidebar={
                <>
                    <button onClick={handleClickCreate} className="create-buttom">Create</button>
                    <TreeMenuItem name="Kök Klasör" id="null" defaultExpanded={true}/>
                </>
            }
            content={
            viewContext.type === "list"? (<ListView files={folder.files.data} folder={folder.list.data}/>
            ): <GridView files={folder.files.data} folder={folder.list.data}/>
            }
        />
    )
}

export default FolderView;