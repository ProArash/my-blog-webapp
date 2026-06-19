import { apiRoutes } from "@/lib/api-routes";
import axiosClient from "@/lib/axios-client";
import { SignInDto } from "@/lib/dto/auth.dto";
import { ApiResponse } from "@/lib/dto/response.dto";


export const authService = {
  signIn: (data: SignInDto) =>
    axiosClient.post<ApiResponse<unknown>>(apiRoutes.auth.signIn, data),

  getProfile: () =>
    axiosClient.get<ApiResponse<unknown>>(apiRoutes.auth.profile),

  logOut: () =>
    axiosClient.post<ApiResponse<unknown>>(apiRoutes.auth.logOut),
}
