import { RouteRecordRaw } from "vue-router";

export const vueRouters = function (): Array<RouteRecordRaw> {
  let routerList: Array<RouteRecordRaw> = [];
  const modules = import.meta.glob('../views/**/*.vue')
  Object.keys(modules).forEach(key => {
    const nameMatch = key.match(/^\.\.\/views\/(.+)\.vue/)
    if(!nameMatch) return
    const indexMatch = nameMatch[1].match(/(.*)\/Index$/i)
    let name = indexMatch ? indexMatch[1] : nameMatch[1];
    routerList.push({
      path: `/${(name).toLowerCase()}`,
      name: `${(name).toLowerCase()}`,
      component: modules[key]
    });
  })
  console.log(routerList);
  return routerList
};