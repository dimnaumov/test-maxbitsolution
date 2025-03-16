import { cocktails } from "~/constants/cocktails";

export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/') {
    return navigateTo(`/${cocktails[0]}`, { replace: true })
  }
})
