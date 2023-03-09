import user from './modules/user.js'
import news from './modules/news.js'

export default function useStore() {
  return {
    userStore: user(),
    newsStore: news()
  }
}
