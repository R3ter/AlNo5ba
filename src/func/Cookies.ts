import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setCookie = (key: string, value: any) => {
  cookies.set(key, value, { path: "/", httpOnly: true });
};
export const setLoginCredentials = (value: Object) => {
  cookies.set("credentials", value, { path: "/" });
};
export const getLoginCredentials = () => {
  return cookies.get("credentials") || null;
};
export const getCookie = (key: string) => {
  return cookies.get(key);
};
