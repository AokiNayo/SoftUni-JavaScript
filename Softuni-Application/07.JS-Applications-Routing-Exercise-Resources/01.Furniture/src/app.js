import { getUserData } from './utility/util.js';
import { showCatalog } from './views/catalogView.js';
import { showCreateView } from './views/createFurnitureView.js';
import { deleteView } from './views/deleteView.js';
import { showDetailsView } from './views/detailsView.js';
import { showEditView } from './views/editView.js';
import { showLoginView } from './views/loginView.js';
import { showLogoutView } from './views/logoutView.js';
import { showMyFurnitureView } from './views/myFurnitureView.js';
import { showRegisterView } from './views/registerView.js';
import page from "//unpkg.com/page/page.mjs";

page(updateContext)

page('/', showCatalog)
page('/catalog', showCatalog)
page('/register', showRegisterView)
page('/login', showLoginView)
page('/logout', showLogoutView)
page('/create', showCreateView)
page('/details/:id', showDetailsView);
page('/details/edit/:id', showEditView)
page('/details/delete/:id', deleteView)
page('/my-furniture', showMyFurnitureView)

page()
updateNav()


// TODO Nav Middleware page(middleware)

function updateContext(ctx, next) {
    ctx.updateNav = updateNav;
    ctx.redirect = page.redirect;
    next()
}

function updateNav() {
    const userData = getUserData()

    if (userData) {
        document.querySelector('#guest').style.display = 'none'
        document.querySelector('#user').style.display = 'inline-block'
    } else {
        document.querySelector('#user').style.display = 'none'
        document.querySelector('#guest').style.display = 'inline-block'
    }
}