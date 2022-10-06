import http from '@utils/http-common'
import type { User } from '@models/User'
import { AxiosResponse } from 'axios'

export class UsersService {
  getAll(): Promise<AxiosResponse<User[]>> {
    return http.get<User[]>('/users')
  }

  get(id: number, showPosts: boolean = false): Promise<AxiosResponse<User>> {
    return http.get<User>(`/users/${id}?showPosts=${showPosts}`)
  }

  create(data: any) {
    return http.post('/users/create', data)
  }

  update(id: number, data: any) {
    return http.put(`/users/${id}`, data)
  }

  delete(id: number) {
    return http.delete(`/users/${id}`)
  }
}
