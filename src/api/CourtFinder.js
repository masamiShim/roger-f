import client from './client'

export default {
  fetch: () => {
    return new Promise((resolve, reject) => {
      client.get('/lists')
        .then(res => resolve(res.data.list))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
