import React, { useState } from "react";
import "./GridView.Style.css"
import {useViewContext} from "../../context/view-context/view-context"
import { useNavigate, useParams } from "react-router-dom";
import { useFolderQuery } from "../../queries/useFolderQuery";
import GridViewItem from "./GridViewItem"; 

const GridView = ({files,folders}) => {
    const navigate=useNavigate();//DoubleClick için bir route işleminde  kullanılır.
    const params = useParams();
    const folder = useFolderQuery(params.id);
    const {setSelection,clear,itemIsSelected} = useViewContext()
    
    
    const bulk = (e) => {
        const val = e.currentTarget.checked;
        if(val){
            setSelection([...(folders || []),...(files || [])])  
        }else{
            clear();
        }
    }

    return(
    <div className="grid-view">

        <div 
                key="parent folder" 
                className="grid-view-item" 
                onDoubleClick={()=>{
                    clear(); 
                    navigate("/folder/"+folder.find.data.parentId || "null")
                    }}
                >
                    <img src="/folder.png" style={{marginLeft:"30px"}}/>
                    <span>..</span>
                </div>      
        {
            [...(folders ||[]),...(files || [])].map((f)=>{{
                return(
                    <GridViewItem item={f}/>
                );
            }})
        }
    </div>
    )
    
    
}

export default GridView