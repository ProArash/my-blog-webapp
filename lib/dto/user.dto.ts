export type CreateUserDto = {
  name: string
  mobile: string
  password: string
  roles: string[]
}

export type UpdateUserDto = {
  name?: object
  mobile?: string
  password?: string
  roles?: object
}
