import { logoutUser } from "../service/userService.js";

export function showLogoutView(ctx) {
    logoutUser(ctx)
}