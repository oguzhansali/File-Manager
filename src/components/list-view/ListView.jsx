import React, { useState } from "react";
import "./ListView.Style.css"
import {useViewContext} from "./../../context/view-context/view-context"
import { useNavigate, useParams } from "react-router-dom";
import { useFolderQuery } from "../../queries/useFolderQuery";
import ListViewItem from "./ListViewItem"; 

const ListView = ({files,folders}) => {
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
    <div className="list-view">
        <div className="list-view-title list-view-item">
            <input type="checkbox" onChange={bulk}/>
            <span>Name</span>
        </div>
        <div 
                key="parent folder" 
                className="list-view-item" 
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
                    <ListViewItem item={f}/>
                );
            }})
        }
    </div>
    )
    
    
}

export default ListView