import type { Post } from "./post.dto"

export type Category = {
  id: string
  label: string
  gradient: string
  posts: Post[]
}
