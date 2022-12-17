import { useState, useEffect } from 'react'
import type { User } from '@/models/User'

export function useFetch(url: string) {
  const [data, setData] = useState<User[]>([])

  useEffect(() => {}, [])
}
