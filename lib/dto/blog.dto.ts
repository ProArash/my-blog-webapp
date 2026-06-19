export type CreateBlogDto = {
  title: string
  slug: string
  description: string
  canonical_url?: string
  noindex?: boolean
  nofollow?: boolean
  status?: "draft" | "published" | "archived"
  published_at?: string
  featured_image_id?: number
  mediaIds?: string[]
}

export type UpdateBlogDto = {
  title?: string
  slug?: string
  description?: string
  canonical_url?: string
  noindex?: boolean
  nofollow?: boolean
  status?: "draft" | "published" | "archived"
  published_at?: string
  featured_image_id?: number
  mediaIds?: string[]
}

export type Blog = {
  id: number
  title: string
  slug: string
  description: string
  canonical_url?: string
  noindex?: boolean
  nofollow?: boolean
  status: "draft" | "published" | "archived"
  published_at?: string
  featured_image_id?: number
  mediaIds?: string[]
  created_at: string
  updated_at: string
}
