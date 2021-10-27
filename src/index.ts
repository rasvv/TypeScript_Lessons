import { renderSearchFormBlock, getSearchFormData } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

const localStorage = {
  user: {
    'username': 'RVV',
    'avatarUrl': '/img/avatar.png'
  },
  'favoritesAmount': 5
}

// let {city, inDate, outDate, maxPrice} = getSearchFormData();

const city = 'Санкт_Петербург'
// if (!maxPrice) {maxPrice = 0}

const searchString = new URLSearchParams(window.location.search);

let inDate = searchString.get('checkin');
let outDate = searchString.get('checkout');
let maxPrice = +searchString.get('price');

if (!maxPrice) {maxPrice = 0}

const nowDate = new Date()

if (!inDate) {
  inDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 2).toISOString().slice(0,10)
} 

if (!outDate) {
  outDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 4).toISOString().slice(0,10)
} 

const getUserData = () => {
  return (localStorage.user)
}

const { username, avatarUrl } = getUserData()

const favoritesAmount = () => {
  return (localStorage['favoritesAmount'])
}



window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(username, avatarUrl, favoritesAmount())
  renderSearchFormBlock(inDate, outDate, maxPrice)
  renderSearchStubBlock()
  if (getSearchFormData()) {
    renderToast(
      {text: `${city}, ${inDate}, ${outDate}, ${maxPrice}`, type: 'success'},
      {name: 'Ясно', handler: () => {console.log('Уведомление закрыто')}}
    )
  }
  console.log('запуск')
})	




