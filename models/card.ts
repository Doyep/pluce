export interface ImageCard {
  type: 'image'
  path: string
}

export interface TextCard {
  type: 'text'
  title: string
  description: string
}

export const checkTextCard = (value: TextCard): value is TextCard => !!value?.title
