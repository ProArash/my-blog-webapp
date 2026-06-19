import { apiRoutes } from "@/lib/api-routes"
import axiosClient from "@/lib/axios-client"
import { CreateContentDto, Content, UpdateContentDto } from "@/lib/dto/content.dto"
import { ApiResponse } from "@/lib/dto/response.dto"


export const contentService = {
  create: (data: CreateContentDto) =>
    axiosClient.post<ApiResponse<unknown>>(apiRoutes.content.create, data),

  findAll: () =>
    axiosClient.get<ApiResponse<Content[]>>(apiRoutes.content.findAll),

  uploadImage: (file: File) => {
    const formData = new FormData()
    formData.append("file", file)
    return axiosClient.post<ApiResponse<unknown>>(apiRoutes.content.uploadImage, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  },

  assignFooterLogo: (id: number, mediaId: number) =>
    axiosClient.patch<ApiResponse<unknown>>(apiRoutes.content.assignFooterLogo(id, mediaId)),

  assignHeaderAvatarImage: (id: number, mediaId: number) =>
    axiosClient.patch<ApiResponse<unknown>>(apiRoutes.content.assignHeaderAvatarImage(id, mediaId)),

  addHeaderSliderImage: (id: number, mediaId: number) =>
    axiosClient.patch<ApiResponse<unknown>>(apiRoutes.content.addHeaderSliderImage(id, mediaId)),

  removeHeaderSliderImage: (id: number, mediaId: number) =>
    axiosClient.delete<ApiResponse<unknown>>(apiRoutes.content.removeHeaderSliderImage(id, mediaId)),

  removeMedia: (mediaId: number) =>
    axiosClient.delete<ApiResponse<unknown>>(apiRoutes.content.removeMedia(mediaId)),

  findOne: (id: number) =>
    axiosClient.get<ApiResponse<Content>>(apiRoutes.content.findOne(id)),

  update: (id: number, data: UpdateContentDto) =>
    axiosClient.patch<ApiResponse<unknown>>(apiRoutes.content.update(id), data),

  remove: (id: number) =>
    axiosClient.delete<ApiResponse<unknown>>(apiRoutes.content.remove(id)),
}
