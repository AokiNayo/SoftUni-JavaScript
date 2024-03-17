import { html } from "../../node_modules/lit-html/lit-html.js";
import { createFurniture } from "../service/dataService.js";
import { formValues, myRender } from "../utility/util.js";

let context = ''
export function showCreateView(ctx, next, error) {
    context = ctx
    myRender(createFurnitureTemplate(error))
}

function onCreateSubmit({make, model, price, year, img, description, material}) {
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
        return showCreateView(null, null, error)
    }

    createFurniture({make, model, price, year, img, description, material})
    context.redirect('/')
}
function createFurnitureTemplate(error) {
    return html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${(event) => {formValues(event, onCreateSubmit)}}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control ${!error ? '' : error.make ? 'is-invalid' : 'is-valid'}" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control ${!error ? '' : error.model ? 'is-invalid' : 'is-valid'}" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control ${!error ? '' : error.year ? 'is-invalid' : 'is-valid'}" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control ${!error ? '' : error.description ? 'is-invalid' : 'is-valid'}" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control ${!error ? '' : error.price ? 'is-invalid' : 'is-valid'}" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control ${!error ? '' : error.img ? 'is-invalid' : 'is-valid'}" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
    `
}