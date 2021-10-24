import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock, renderSearchResultsBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

const localStorage = {
  user: {
    'username': 'RVV',
    'avatarUrl': '/img/avatar.png'
  },
  'favoritesAmount': 5
}

const nowDate = new Date()
const inDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 2).toISOString().slice(0,10)
const outDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 4).toISOString().slice(0,10)

const getUserData = () => {
  return (localStorage.user)
}

const { username, avatarUrl } = getUserData()

const favoritesAmount = () => {
  return (localStorage['favoritesAmount'])
}

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(username, avatarUrl, favoritesAmount())
  renderSearchFormBlock(inDate, outDate)
  renderSearchResultsBlock()
  // renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})

