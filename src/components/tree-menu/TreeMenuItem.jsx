import React, { useCallback } from "react";
import useBoolen from "../../hooks/useBoolen";
import IconChevronRight from "../../assets/icons/IconChevronRight"
import IconChevronDown from "../../assets/icons/IconChevronDown"
import IconFolder from "../../assets/icons/IconFolder"
import IconFolderOpen from "../../assets/icons/IconFolderOpen"
import TreeMenu from "./TreeMenu";
import { useNavigate, useParams } from "react-router-dom";
import { useViewContext } from "../../context/view-context/view-context";


const TreeMenuItem = ({name,id,parentId,defaultExpanded}) => {
    const expanded = useBoolen(defaultExpanded || false);
    const navigate = useNavigate();
    const params = useParams()
    const {clear} = useViewContext();
    

    const handleClick= useCallback(()=>{
        console.log(id);
        clear();
        navigate("/folder/"+id)
    },[])

    const isCurrent = params.id ===id;
    const Icon = isCurrent ? IconFolderOpen : IconFolder;
    const fontWeight = isCurrent ? "bold" : "normal";


    return ( 
        <div className="tree-menu-item">
            {/* Eğer 'expanded.value' false ise */}
            {!expanded.value && (
                <div className="tree-menu-item-row">
                    <button onClick={expanded.setTrue}>
                        <IconChevronRight />
                    </button>
                    <span className="tree-menu-row-title" style={{fontWeight}} onClick={handleClick}>
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
                     <span  className="tree-menu-row-title" style={{fontWeight}}>
                        <Icon className="folder-icon" />
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