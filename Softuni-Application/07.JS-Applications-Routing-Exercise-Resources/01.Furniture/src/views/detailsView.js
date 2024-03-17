import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFurnitureDetails } from "../service/dataService.js";
import { getUserData, myRender } from "../utility/util.js";

export async function showDetailsView(ctx) {
    const itemID = ctx.params.id
    const item = await getFurnitureDetails(itemID)
    const userData = getUserData()
    const isOwner = userData?._id == item._ownerId

    myRender(detailsTemplate(item, isOwner))
}

function detailsTemplate(item, isOwner) {
    return html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="${item.img}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${item.make}</span></p>
                <p>Model: <span>${item.model}</span></p>
                <p>Year: <span>${item.year}</span></p>
                <p>Description: <span>${item.description}</span></p>
                <p>Price: <span>${item.price}</span></p>
                <p>Material: <span>${item.material}</span></p>
                ${isOwner ? createButtons(item._id) : ''}
            </div>
        </div>
    `
}

function createButtons(id) {
    return html`
        <div>
            <a href="/details/edit/${id}" class="btn btn-info">Edit</a>
            <a href="/details/delete/${id}" class="btn btn-red">Delete</a>
        </div>
    `
}