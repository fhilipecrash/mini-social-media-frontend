import http from '@/utils/http-common'
import type { User } from '@/models/User'
import { UserCreateUpdate } from '@/models/UserCreateUpdate'
import { AxiosResponse } from 'axios'

export class UsersService {
  getAll(): Promise<AxiosResponse<User[]>> {
    return http.get<User[]>('/users')
  }

  get(userId: number): Promise<AxiosResponse<User>> {
    return http.get<User>(`/users/${userId}`)
  }

  create(data: UserCreateUpdate) {
    return http.post('/users', data)
  }

  update(userId: number, data: UserCreateUpdate) {
    return http.put(`/users/${userId}`, data)
  }

  delete(userId: number) {
    return http.delete(`/users/${userId}`)
  }

  getUsersPosts(userId: number) {
    return http.get(`/users/${userId}/posts`)
  }
}
