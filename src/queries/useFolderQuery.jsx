import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import backend from "../services/backend";

export const useFolderQuery = (id)=> {
    const queryClient = useQueryClient()
    const find = useQuery({
        queryKey: ["folder",id],
        queryFn: () => backend.folderService.find(id).then((res) => res.data.result),
        enabled:Boolean(id) && id!=="null",
    })

    const _query ={
        parentId:id ||"null",
    };

    const list = useQuery({
        queryKey: ["folders",{_query}],
        queryFn: () => backend.folderService.list(_query).then((res) => res.data.result),

    });

    const files = useQuery({
        queryKey: ["filesn",{_query}],
        queryFn: () => backend.fileService.list(_query).then((res) => res.data.result),

    });

    const addSubfolder = useMutation({
        mutationFn: (values) => backend.folderService.create(values),
        onSuccess: ({data},values,unknown2) => {
            queryClient.invalidateQueries({
                queryKey: ["folders",{_query}],
            })
            console.log(data,values,unknown2)
        },
    });

    const addFile = useMutation({
        mutationFn: (values) => backend.fileService.create(values),
        onSuccess: ({data},values,unknown2) => {
            queryClient.invalidateQueries({
                queryKey: ["files",{_query}],
            })
            console.log(data,values,unknown2)
        },
    });

    const removeFolder = useMutation({
        mutationn: (id) => backend.folderService.remove(id),
        onSuccess: ({data},values,unknown2) => {
            queryClient.invalidateQueries({
                queryKey: ["folders",{_query}],
            })
            console.log(data,values,unknown2)
        },
    });

    const removeFile = useMutation({
        mutationn: (id) => backend.fileService.remove(id),
        onSuccess: ({data},values,unknown2) => {
            queryClient.invalidateQueries({
                queryKey: ["files",{_query}],
            })
            console.log(data,values,unknown2)
        },
    })

    return{files,find,list,addSubfolder,removeFolder,removeFile,addFile};
}