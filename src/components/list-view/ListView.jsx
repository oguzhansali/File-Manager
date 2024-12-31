import React, { useState } from "react";
import "./ListView.Style.css"
import {useViewContext} from "./../../context/view-context/view-context"

const ListView = ({files,folders}) => {
    const {setSelection,select,dselect,clear,itemIsSelected} = useViewContext()
    const handleSelectionChange = (e,item) =>{
        const val = e.currentTarget.checked;
        if(val){
            select(item);
        }else{
            dselect(item);
        }
    };

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

        {folders?.map((f)=>{
            return(
                <div key={f.id} className="list-view-item">
                    <input 
                    type="checkbox"  
                    checked={Boolean(itemIsSelected(f))}
                    onChange={(e)=> handleSelectionChange(e,f)}
                    />
                    <img src="/folder.png"/>
                    <span>{f.name}</span>
                </div>      
            );
        })}

        {files?.map((f)=>{
            return(
                <div key={f.id} className="list-view-item">
                    <input 
                    type="checkbox" 
                    checked={Boolean(itemIsSelected(f))}
                    onChange={(e)=> handleSelectionChange(e,f)} />
                    <img src={f.url}/>
                    <span>{f.name}</span>
                </div>      
            );
        })}
    </div>
    )
    
    
}

export default ListView