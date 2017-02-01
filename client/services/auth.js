const CLIENT_ID = process.env.AUTH0_CLIENT_ID
const DOMAIN = process.env.AUTH0_DOMAIN


export const auth = new Auth0Lock(CLIENT_ID, DOMAIN);

class Auth {
  constructor() {
    this.callbacks = new Set()
    auth.on('authenticated', result => {
      this.session = result
      localStorage.ftToken = result.idToken
      localStorage.accessToken = result.accessToken
      this.loadUser(localStorage.accessToken).then(::this.setUser)
    })
    if(localStorage.ftToken) {
      this.loadUser(localStorage.accessToken).then(::this.setUser)
    }
  }
  subscribe(callback) {
    this.callbacks.add(callback)
    return noop => this.callbacks.delete(callback)
  }
  loadUser(token) {
    return new Promise((resolve, reject) => {
      auth.getUserInfo(token, (error, profile) => {
        if(error) return reject(error)
        else return resolve(profile)
      })
    })
  }
  setUser(user) {
    this.user = user
    for(var callback of this.callbacks) {
      callback(user)
    }
    return user
  }
  login() {
    auth.show({
      auth: {
        params: {
          scope: 'openid roles'
        }
      }
    })
  }
  logout() {
    delete localStorage.ftToken
    delete localStorage.accessToken
    this.session = null
    this.setUser(null)
    return auth.logout()
  }
}

export default new Auth()
