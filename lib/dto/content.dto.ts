export type CreateContentFooterDto = {
  links: string[]
  caption: string
  mobile: string
  email: string
  telegram: string
  whatsapp: string
}

export type CreateContentHeaderDto = {
  h1_title: string
  caption: string
}

export type CreateContentSkillDto = {
  title: string
  proficiency: number
}

export type CreateContentDto = {
  footer: CreateContentFooterDto
  header: CreateContentHeaderDto
  skills?: CreateContentSkillDto[]
}

export type UpdateContentFooterDto = {
  links?: string[]
  caption?: string
  mobile?: string
  email?: string
  telegram?: string
  whatsapp?: string
}

export type UpdateContentHeaderDto = {
  h1_title?: string
  caption?: string
}

export type UpdateContentSkillDto = {
  title: string
  proficiency: number
}

export type UpdateContentDto = {
  footer?: UpdateContentFooterDto
  header?: UpdateContentHeaderDto
  skills?: UpdateContentSkillDto[]
}

export type Content = {
  id: number
  footer: CreateContentFooterDto
  header: CreateContentHeaderDto
  skills: CreateContentSkillDto[]
  created_at: string
  updated_at: string
}
