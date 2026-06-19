export const apiRoutes = {
  user: {
    profile: "/user/profile",
    newUser: "/user/newUser",
    getAllUsers: "/user/getAllUsers",
    getUserById: "/user/getUserById",
    updateUserById: "/user/updateUserById",
    deleteUserById: "/user/deleteUserById",
    editProfile: "/user/editProfile",
  },
  auth: {
    signIn: "/auth/sign-in",
    profile: "/auth/profile",
    logOut: "/auth/log-out",
  },
  blog: {
    create: "/blog",
    findAll: "/blog",
    findBySlug: (slug: string) => `/blog/slug/${slug}`,
    findOne: (id: number) => `/blog/${id}`,
    update: (id: number) => `/blog/${id}`,
    remove: (id: number) => `/blog/${id}`,
  },
  media: {
    upload: "/media/upload",
    findAll: "/media",
    findOne: (id: number) => `/media/${id}`,
    update: (id: number) => `/media/${id}`,
    remove: (id: number) => `/media/${id}`,
  },
  content: {
    create: "/content",
    findAll: "/content",
    uploadImage: "/content/upload-image",
    assignFooterLogo: (id: number, mediaId: number) =>
      `/content/${id}/footer/logo/${mediaId}`,
    assignHeaderAvatarImage: (id: number, mediaId: number) =>
      `/content/${id}/header/avatar-image/${mediaId}`,
    addHeaderSliderImage: (id: number, mediaId: number) =>
      `/content/${id}/header/slider-images/${mediaId}`,
    removeHeaderSliderImage: (id: number, mediaId: number) =>
      `/content/${id}/header/slider-images/${mediaId}`,
    removeMedia: (mediaId: number) => `/content/media/${mediaId}`,
    findOne: (id: number) => `/content/${id}`,
    update: (id: number) => `/content/${id}`,
    remove: (id: number) => `/content/${id}`,
  },
}
