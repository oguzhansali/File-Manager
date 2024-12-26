import instance from "./instance";


export  const list = (query) => instance.get("/folder",{params:query});

export  const create = (data) => instance.post("/folder",{data});

export  const find = (id) => instance.get(`/folder/${id}`);

export  const update = (id,data) => instance.put(`/folder/${id}`,data);

export const patch =(id,data) => instance.patch(`/folder/${id}`,data);

export  const remove = (id) => instance.delete(`/folder/${id}`);
