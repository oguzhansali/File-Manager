import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import backend from "../services/backend";

export const useFoldersQuery = (_query) => {
    const queryClient = useQueryClient()

    const list = useQuery({
        queryKey: ["folders",_query],
        queryFn: () => backend.folderService.list(_query).then((res) => res.data.result),

    });

    return{list};
    
}

export const useFolderQuery = (id)=> {
    const find = useQuery({
        queryKey: ["folder",id],
        queryFn: () => backend.folderService.find(id).then((res) => res.data.result),
        enabled:Boolean(id),
    
    
    })

    return{find};
}