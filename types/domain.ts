export interface DomainType {
  name: string
  group: string
  price: string | number | "negotiable" | "not-for-sale"
  registrationDate: string // ISO date string format
  shortMeaning?: string
  longMeaning?: string
  groupIcon?: string // FontAwesome icon class
}
