import { apiRoutes } from "@/lib/api-routes";
import axiosClient from "@/lib/axios-client";
import { ApiResponse } from "@/lib/dto/response.dto";
import { CreateUserDto, UpdateUserDto } from "@/lib/dto/user.dto";


export const userService = {
  getProfile: () =>
    axiosClient.get<ApiResponse<unknown>>(apiRoutes.user.profile),

  create: (data: CreateUserDto) =>
    axiosClient.post<ApiResponse<unknown>>(apiRoutes.user.newUser, data),

  getAllUsers: (pageNumber: string) =>
    axiosClient.get<ApiResponse<unknown>>(apiRoutes.user.getAllUsers, {
      params: { pageNumber },
    }),

  getUserById: (userId: string) =>
    axiosClient.get<ApiResponse<unknown>>(apiRoutes.user.getUserById, {
      params: { userId },
    }),

  updateUserById: (userId: string, data: UpdateUserDto) =>
    axiosClient.patch<ApiResponse<unknown>>(apiRoutes.user.updateUserById, data, {
      params: { userId },
    }),

  deleteUserById: (userId: string) =>
    axiosClient.delete<ApiResponse<unknown>>(apiRoutes.user.deleteUserById, {
      params: { userId },
    }),

  editProfile: (data: UpdateUserDto) =>
    axiosClient.patch<ApiResponse<unknown>>(apiRoutes.user.editProfile, data),
}
