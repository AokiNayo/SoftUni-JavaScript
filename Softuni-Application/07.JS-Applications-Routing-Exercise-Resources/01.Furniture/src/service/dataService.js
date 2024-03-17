import { del, get, post, put } from "../data/api.js";

export async function getFurniture() {
    return await get("/data/catalog");
}

export async function createFurniture(data) {
    await post('/data/catalog', data)
}

export async function getFurnitureDetails(id) {
    return await get('/data/catalog/' + id);
}

export async function updateFurniture(id, data) {
    await put('/data/catalog/' + id , data)
}

export async function deleteFurniture(id) {
    await del('/data/catalog/' + id);
}

export async function getUserFurniture(id) {
    return await get(`/data/catalog?where=_ownerId%3D%22${id}%22`)
}
