import axios from 'axios'
import NProgress from 'nprogress'
import Vue from 'vue'
const client = axios.create()

const Http = function (options) {
  options.url = 'http://localhost:8888' + options.url
  NProgress.start()
  const onSuccess = (response) => {
    NProgress.done()
    return response.data
  }
  const onError = (error) => {
    NProgress.done()
    Vue.$message.error('出错了！ 请稍后再试')
    return Promise.reject(error.response || error.message)
  }
  if (options.methods === 'GET') {
    options.params = {
      _t: Date.parse(new Date() / 1000),
      ...options.params
    }
  }
  return client(options)
    .then(onSuccess)
    .catch(onError)
}

export default Http
