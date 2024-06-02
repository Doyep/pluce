import type { ImageCard, TextCard } from "./card"

export interface Service {
  title: string
  description: string
}

export interface Content {
  description: string
  notes?: string
  services: Service[]
  photos: number
}

export interface Page {
  title: string
  menuLabel: string
  ressource: string
  content: Content
}

export const getPhotoCards = (page: Page): ImageCard[] => {
  const number = page.content.photos
  return [...Array(number).keys()].map((_i, index) => {
    const path = `/img/${page.ressource}-${leadingZero(index + 1, 2)}.jpg`
    return { type: 'image', path }
  })
}

export const getServiceCards = (page: Page): TextCard[] => {
  return page.content.services.map(service => ({
    type: 'text',
    title: service.title,
    description: service.description
  }))
}
