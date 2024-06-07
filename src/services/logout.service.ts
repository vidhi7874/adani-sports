import { localStorageService } from "./localStorge.service";

export const unauthorizedUser = {
  logout: (): void => {
    localStorageService.remove("ADANI_SPORTS_LINE_USER_DETAILS");
    localStorageService.remove("ADANI_MY_CART_DETAILS");

    localStorage.removeItem("ADANI_SPORTS_LINE");
    window.location.href = "/signin";
  },
};
