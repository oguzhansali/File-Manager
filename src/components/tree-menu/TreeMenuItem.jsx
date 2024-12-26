import React, { useCallback } from "react";
import useBoolen from "../../hooks/useBoolen";
import IconChevronRight from "../../assets/icons/IconChevronRight"
import IconChevronDown from "../../assets/icons/IconChevronDown"
import IconFolder from "../../assets/icons/IconFolder"
import IconFolderOpen from "../../assets/icons/IconFolderOpen"
import TreeMenu from "./TreeMenu";
import { useNavigate } from "react-router-dom";



const TreeMenuItem = ({name,id,parentId}) => {
    const expanded = useBoolen(false);
    const navigate = useNavigate();
    const handleClick= useCallback(()=>{
        console.log(id);

        navigate("/folder/"+id)
    },[])

    return ( 
        <div className="tree-menu-item">
            {/* Eğer 'expanded.value' false ise */}
            {!expanded.value && (
                <div className="tree-menu-item-row" onClick={handleClick}>
                    <button onClick={expanded.setTrue}>
                        <IconChevronRight />
                    </button>
                    <span className="tree-menu-row-title">
                        <IconFolder className="folder-icon" />
                        
                        {name}
                    </span> 
                </div>
            )}
    
            {/* Eğer 'expanded.value' true ise */}
            {expanded.value && (
                <>
                    <div className="tree-menu-item-row" onClick={handleClick}>
                        <button onClick={expanded.setFalse}>
                            <IconChevronDown />
                        </button>
                        <IconFolderOpen  className="folder-icon"/>
                        {name}
                    </div>
                     <span className="tree-menu-row-title">
                        <IconFolderOpen className="folder-icon" />
                        
                        {name}
                    </span> 
                    {/* Alt dosyaları göster */}
                    <div className="tree-menu-sub">
                        <TreeMenu parentId={id} />
                    </div>
                </>
            )}
        </div>
    );
};

export default TreeMenuItem;