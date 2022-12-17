import type { User } from '@/models/User'

export type Auth = {
  user: User
  token: string
}
