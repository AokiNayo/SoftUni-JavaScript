import { post, get} from "../data/api.js";
import { clearUserData, setUserData } from "../utility/util.js";

export async function registerUser({ email, password, rePass }, ctx) {
    if (!email || !password || password != rePass) {
        return alert("Fields must not be empty");
    }

    try {
        const resData = await post("/users/register", { email, password });
        setUserData(resData);
        ctx.updateNav()
        ctx.redirect('/')
    } catch (err) {
        throw err;
    }
}
export async function loginUser({ email, password }, ctx) {
    try {
        const resData = await post("/users/login", { email, password });
        setUserData(resData);
        ctx.updateNav()
        ctx.redirect('/')
    } catch (err) {
        throw err;
    }
}
export async function logoutUser(ctx) {
    const response = await get("/users/logout");
    clearUserData();
    ctx.updateNav()
    ctx.redirect('/login')
}
