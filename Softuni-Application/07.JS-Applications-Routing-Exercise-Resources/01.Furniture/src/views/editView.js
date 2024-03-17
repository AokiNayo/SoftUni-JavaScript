import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFurnitureDetails, updateFurniture } from "../service/dataService.js";
import { myRender, formValues } from "../utility/util.js";

let id = ''
let context = ''
export async function showEditView(ctx, next, error) {
    id = ctx.params.id
    context = ctx
    const item = await getFurnitureDetails(id)

    myRender(editFurnitureTemplate(item))
}
function onEditSubmit({make, model, price, year, img, description, material}) {
    let error = {}
    
    if (make.length < 4){
        error.make = true
    }
    if (model.length < 4) {
        error.model = true
    }
    if (year.length == 0) {
        error.year = true
    } else if (Number(year) < 1950 || Number(year) > 2050) {
        error.year = true
    }
    if (description.length < 10) {
        error.description = true
    }
    if (price.length == 0) {
        error.price = true
    } else if (Number(price) < 0) {
        error.price = true
    }
    if (!img) {
        error.img = true
    }

    if (Object.keys(error).length) {
        return myRender(editFurnitureTemplate({make, model, price, year, img, description, material} ,error))
    }

    updateFurniture(id, {make, model, price, year, img, description, material})
    context.redirect('/')
}
function editFurnitureTemplate({make, model, price, year, img, description, material}, error) {
    return html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${(event) => {formValues(event, onEditSubmit)}}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control ${!error ? '' : error.make ? 'is-invalid' : 'is-valid'}" id="new-make" type="text" name="make" value="${make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control ${!error ? '' : error.model ? 'is-invalid' : 'is-valid'}" id="new-model" type="text" name="model" value="${model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control ${!error ? '' : error.year ? 'is-invalid' : 'is-valid'}" id="new-year" type="number" name="year" value="${year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control ${!error ? '' : error.description ? 'is-invalid' : 'is-valid'}" id="new-description" type="text" name="description" value="${description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control ${!error ? '' : error.price ? 'is-invalid' : 'is-valid'}" id="new-price" type="number" name="price" value="${price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control ${!error ? '' : error.img ? 'is-invalid' : 'is-valid'}" id="new-image" type="text" name="img" value="${img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${material}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
    `
}