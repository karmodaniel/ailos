import { environment } from "@env/environment";


export class API {
  static readonly BASE_URL = environment.baseURL;

  //USERS
  static readonly USERS = `${this.BASE_URL}users`;
}