import { get } from "../../api/instance";
const router = {
  TEST: "/api/todos/1"
}

export const apiTest = () => {
  // return router.TEST;
  return get(router.TEST);
}