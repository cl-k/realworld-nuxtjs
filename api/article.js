import request from '@/utils/request'

// 获取公共文章列表
export const getArticles = params => {
  return request({
    method: 'get',
    url: '/api/articles',
    params
  })
}

// 获取关注的用户文章列表
export const getFeedArticles = params => {
  return request({
    method: 'get',
    url: '/api/articles/feed',
    headers: {
      Authorization: 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTIyODYwLCJ1c2VybmFtZSI6InRlc3QtayIsImV4cCI6MTYwOTc0MzU0NH0.Ob6klskPbBWg_cvoWiNjYmnN1cG44tbyJW0VT1JxjRk'
    },
    params
  })
}