import React from "react";
import {useFoldersQuery,useFolderQuery} from "../queries/useFolderQuery";
import { useParams } from "react-router-dom";
import TreeMenu from "../components/tree-menu/TreeMenu";
import Main from "../layouts/Main";


const FolderView = () => {

    const params = useParams();

    const folder = useFolderQuery(params.id);

    const name = folder.find.data?.name
    
    const subFolders = useFoldersQuery({
        parentId: params.id || "null",
    });

    return (    
        <Main
            folderName={params.id? name : "Kök Klasör"}
            sidebar={
                <TreeMenu parentId={null}/>
            }
        />
    )
}

export default FolderView;