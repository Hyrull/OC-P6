export interface Host {
  name: string;
  picture: string;
}

export interface LocationProps {
  title: string
  cover: string
  pictures: string[]
  description: string
  host: Host
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

export interface LocationListProps {
  title: string;
  id: string;
  cover: string;
}


export interface LocationBoxProps {
  titre: string
  id: string
  cover: string
}

export interface DropdownProps {
  title: string
  content: string  | JSX.Element
}


export interface BannerProps {
  image: string
  hideTitle: boolean
  hideOverlay: boolean
}