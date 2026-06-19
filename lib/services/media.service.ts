import { apiRoutes } from "@/lib/api-routes"
import axiosClient from "@/lib/axios-client"
import { Media, UpdateMediaDto } from "@/lib/dto/media.dto"
import { ApiResponse } from "@/lib/dto/response.dto"


export const mediaService = {
  upload: (file: File) => {
    const formData = new FormData()
    formData.append("file", file)
    return axiosClient.post<ApiResponse<unknown>>(apiRoutes.media.upload, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  },

  findAll: () =>
    axiosClient.get<ApiResponse<Media[]>>(apiRoutes.media.findAll),

  findOne: (id: number) =>
    axiosClient.get<ApiResponse<Media>>(apiRoutes.media.findOne(id)),

  update: (id: number, data: UpdateMediaDto) =>
    axiosClient.patch<ApiResponse<unknown>>(apiRoutes.media.update(id), data),

  remove: (id: number) =>
    axiosClient.delete<ApiResponse<unknown>>(apiRoutes.media.remove(id)),
}
