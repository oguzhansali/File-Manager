import React from "react";
import { useViewContext } from "../../context/view-context/view-context";

const PreviewImage = () => {
    const viewContext = useViewContext();
    if(viewContext.previewEye ||
        (viewContext.selectedItems.lenght===1 
        && viewContext.selectedItems[0].url)
    ){
        const item = viewContext.previewEye || viewContext.selectedItems[0].url
        return <div className="preview-image-host">
            {viewContext.previewEye &&<div className="xmark">
                <button onClick={() => viewContext.setPreviewEye(undefined)}>x</button>
            </div>}
            <img  src={item.url}/>
        </div>
        if(viewContext.previewEye){}
        //Resim gösterme render
    }else if(viewContext.selectedItems.lenght>0){
        //Seçimler listesi gösterilecek
        return (
            <div>
                {viewContext.selectedItems.map((item)=>{
                    return <p
                    onClick={()=> {viewContext.deselect(item)}}
                    >{item.name}</p>
                })}
            </div>
        );
        
    }else null;
};

export default PreviewImage