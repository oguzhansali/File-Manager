import instance from "./instance";


export  const list = (query) => instance.get("/file",{params:query});

export  const create = (data) => instance.post("/file",{data});

export  const find = (id) => instance.get(`/file/${id}`);

export  const update = (id,data) => instance.put(`/file/${id}`,data);

export const patch =(id,data) => instance.patch(`/file/${id}`,data);

export  const remove = (id) => instance.delete(`/file/${id}`);
