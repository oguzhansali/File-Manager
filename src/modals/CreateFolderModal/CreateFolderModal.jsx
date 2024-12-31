import { useFormik } from "formik";
import React from "react";
import { useModal } from "../../context/modal-context/modal-context";
import * as yup from "yup"
import { useParams } from "react-router-dom";
import { useFolderQuery } from "../../queries/useFolderQuery";

const  validationSchema = yup.object({
    name:yup.string().required("Lütfen dosta adı giriniz.")
})

const CreateFolderModal = ({modalId,parentFolderId}) => {

    const modal = useModal();
    const folder = useFolderQuery(parentFolderId);

    const form = useFormik({
        initialValues:{
            name:""
        },
        validationSchema,
        //onSubmit:(values) => console.log(values),

    });

    const parentId = parentFolderId === "null" ? null : parentFolderId || "null";//dosya yaratırken dosya bir dosyanın altınamı yoksa 0 danmı oluşturuluyor kontrolu sağlandı parentId için.

    const handleOk = () => {
        form.validateForm().then((response)=>{
            if(Object.keys(response).length) return;
            folder.addSubfolder
            .mutateAsync({...form.values, parentId})
            .then(()=>{
                modal.disappear(modalId);
            })
            .catch((error)=>{
                console.error("Error during folder creation:", error);
                modal.disappear(modalId);
            });
        });
    };
    

    return (
        <>
            <div className="modal-body">
                <form onSubmit={form.handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">New Folder</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={form.handleChange} 
                            value={form.values.name}
                            placeholder="Klasör adı"
                        />
                        <span className="input-error">{form.errors.name}</span>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button onClick={handleOk} type="button" >Ok</button>
            </div>
        </>
    );
};

export default CreateFolderModal;