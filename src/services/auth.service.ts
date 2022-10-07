import http from '@utils/http-common'
import type { Auth } from '@models/Auth'
import { AxiosResponse } from 'axios'

export class AuthService {
  login(email: string, password: string): Promise<AxiosResponse<Auth>> {
    return http.post<Auth>('/auth/login', { email: email, password: password })
  }
}
