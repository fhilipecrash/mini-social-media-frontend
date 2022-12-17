import http from '@/utils/http-common'
import { Auth } from '@/models/Auth'
import { AxiosResponse } from 'axios'

export class AuthService {
  login(email: string, password: string): Promise<AxiosResponse<Auth>> {
    return http.post<Auth>('/auth', { email: email, password: password })
  }
}
