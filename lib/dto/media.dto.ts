export type UpdateMediaDto = Record<string, never>

export type Media = {
  id: number
  url: string
  filename: string
  mimetype: string
  size: number
  created_at: string
  updated_at: string
}
