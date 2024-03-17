import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserFurniture } from "../service/dataService.js";
import { getUserData, myRender } from "../utility/util.js";

export async function showMyFurnitureView() {
    const userData = getUserData()
    const id = userData._id
    const items = await getUserFurniture(id)
    
    myRender(myFurnitureTemplate(items))
}

function myFurnitureTemplate(items) {
    return html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${items.map((item) => furnitureTemplate(item))}
        </div>
    `
}

function furnitureTemplate(item) {
    return html`
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${item.img}" />
                    <p>${item.description}</p>
                    <footer>
                        <p>Price: <span>${item.price}$</span></p>
                    </footer>
                    <div>
                        <a href="/details/${item._id}" class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}