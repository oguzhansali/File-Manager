import React from "react";
import TreeMenuItem from "./TreeMenuItem";
import './TreeMenu.style.css'
import {useFoldersQuery} from "./../../queries/useFolderQuery";

const TreeMenu = ({parentId}) => {
    const folder = useFoldersQuery({
        parentId,
    });
    const items = folder.list.data;


    return( 
        <div className="tree-menu">
            {items?.map((item)=>(
                <TreeMenuItem key={item.id} name={item.name} id={item.id} parentId={item.parentId}/>
            ))}
        </div>
    );
}

export default TreeMenu;