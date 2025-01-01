import React from "react";
import { useViewContext } from "../../context/view-context/view-context";
import { useNavigate } from "react-router-dom";
import IconEye from "./../../assets/icons/IconEye"

const ListViewItem=({item}) => {
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
        <div key={item.id} className="list-view-item"
        onDoubleClick={!(item.url)?()=>{
            clear(); 
            navigate("/folder/"+item.id);
            }: undefined}
        >
            <input 
            type="checkbox" 
            checked={Boolean(itemIsSelected(f))}
            onChange={(e)=> handleSelectionChange(e,item)} />
            <img src={item.url || "/folder.png"}/>
            <span>{item.name}</span>
            <div className="actions">
                {Boolean(item.url) &&  (
                <IconEye
                onClick={()=> {setPreviewEye(item)}}/>)}
            </div>
        </div>      
    )

}

export default ListViewItem