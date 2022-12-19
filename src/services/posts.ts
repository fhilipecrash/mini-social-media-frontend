import http from '@/utils/http-common'
import { Post } from '@/models/Post'
import { PostCreateUpdate } from '@/models/PostCreateUpdate'
import { AxiosResponse } from 'axios'

class PostsServices {
  getAll(): Promise<AxiosResponse<Post[]>> {
    return http.get<Post[]>('/posts')
  }

  get(postId: number): Promise<AxiosResponse<Post>> {
    return http.get<Post>(`/posts/${postId}`)
  }

  create(data: PostCreateUpdate) {
    return http.post('/posts', data)
  }

  update(postId: number, data: PostCreateUpdate) {
    return http.put(`/posts/${postId}`, data)
  }

  delete(postId: number) {
    return http.delete(`/posts/${postId}`)
  }
}

export const postsService = new PostsServices()
