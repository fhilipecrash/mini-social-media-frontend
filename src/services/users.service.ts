import http from '@utils/http-common'
import type { User } from '@models/User'

class UsersService {
  getAll() {
    return http.get<User>('/users')
  }

  get(id: number) {
    return http.get<User>(`/users/${id}`)
  }

  create(data: any) {
    return http.post<User>('/users/create', data)
  }

  update(id: number, data: any) {
    return http.put<User>(`/users/${id}`, data)
  }

  delete(id: number) {
    return http.delete<User>(`/users/${id}`)
  }
}

export default new UsersService()
