import { apiRoutes } from "@/lib/api-routes";
import axiosClient from "@/lib/axios-client";
import { CreateBlogDto, Blog, UpdateBlogDto } from "@/lib/dto/blog.dto";
import { ApiResponse } from "@/lib/dto/response.dto";


export const blogService = {
  create: (data: CreateBlogDto) =>
    axiosClient.post<ApiResponse<unknown>>(apiRoutes.blog.create, data),

  findAll: (page?: number, pageSize?: number) =>
    axiosClient.get<ApiResponse<Blog[]>>(apiRoutes.blog.findAll, {
      params: { page, pageSize },
    }),

  findBySlug: (slug: string) =>
    axiosClient.get<ApiResponse<Blog>>(apiRoutes.blog.findBySlug(slug)),

  findOne: (id: number) =>
    axiosClient.get<ApiResponse<Blog>>(apiRoutes.blog.findOne(id)),

  update: (id: number, data: UpdateBlogDto) =>
    axiosClient.patch<ApiResponse<unknown>>(apiRoutes.blog.update(id), data),

  remove: (id: number) =>
    axiosClient.delete<ApiResponse<unknown>>(apiRoutes.blog.remove(id)),
}
