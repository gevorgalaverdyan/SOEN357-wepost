import http from "../http-common";
import { IAuthData } from "../types/auth.type";
import { ICreateUserData, ILoginUserData } from "../types/user.type";

class UserDataService {
  get(data: ILoginUserData) {
    return http.post<IAuthData>('auth/login', data);
  }

  create(data: ICreateUserData) {
    return http.post('user/customer', data);
  }
}

export default new UserDataService();
