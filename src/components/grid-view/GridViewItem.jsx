import React from "react";
import { useViewContext } from "../../context/view-context/view-context";
import { useNavigate } from "react-router-dom";
import IconEye from "../../assets/icons/IconEye"

const GridViewItem=({item}) => {
    const {setPreviewEye,clear,select,dselect,itemIsSelected} = useViewContext()
    const navigate = useNavigate();

    const handleSelectionChange = (e,_item) =>{
        const val = e.currentTarget.checked;
        if(val){
            select(_item);
        }else{
            dselect(_item);
        }
    };

    return(
        <div 
        onClick={
            item.url 
            ? ()=> {
                    setPreviewEye(item)
                }
            :undefined
        }
        key={item.id} 
        className="grid-view-item"
        onDoubleClick={!(item.url)?()=>{
            clear(); 
            navigate("/folder/"+item.id);
            }: undefined}
        >
            <input 
            type="checkbox" 
            checked={Boolean(itemIsSelected(f))}
            onClick={(e)=> {stopPropagation()}}
            onChange={(e)=>{
                e.stopPropagation();
                handleSelectionChange(e,item)
            }} 
            />
            <img src={item.url || "/folder.png"}/>
            <span>{item.name}</span>
        </div>      
    )

}

export default GridViewItem