import { deleteFurniture } from "../service/dataService.js"

export function deleteView(ctx) {
    const id = ctx.params.id
    deleteFurniture(id)
    ctx.redirect('/')
}