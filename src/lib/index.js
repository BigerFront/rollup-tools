// import '@babel/polyfill'

const BASEURL = 'http://127.0.0.1:54321/api/'

export const fectch = async function (api, params) {
  const url = new URL(BASEURL + api + '?ts=' + new Date().getTime())
  return axios.get(url, params || {})
}
