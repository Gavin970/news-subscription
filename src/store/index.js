import user from './modules/user.js'

export function useStore() {
  return {
    user: user()
  }
}
