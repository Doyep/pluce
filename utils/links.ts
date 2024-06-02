export type Link = {
  label: string
  title: string
  path: string
}

export const links: Link[] = [
  { label: 'Pluce', title: 'PLUCE', path: "/" },
  { label: 'Mariages', title: 'PLUCE MARIAGES', path: "/mariages" },
  { label: 'Événements', title: 'PLUCE ÉVÉNEMENTS', path: "/evenements" },
  { label: 'Créations', title: 'PLUCE CRÉATIONS', path: "/creations" },
  { label: 'On discute ?', title: 'ON DISCUTE ?', path: "/contact" },
]
