import { Post } from '@models/Post'

export type User = {
  id: number
  name: string
  email: string
  posts?: Post[]
}
