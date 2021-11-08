import { checkDate } from './dates.js'
import { FlatRentSdk } from './flat-rent-sdk.js'
import { FlatRentPlace } from 'flat-rent-sdk'

interface Action {
  name: string
  handler: () => void
}

interface Notice {
  text: string
  type: string
}

export interface SearchFormData {
  city: string,
  checkInDate: Date,
  checkOutDate: Date,
  priceLimit: number,
}

type User = {
  userName: string
  avatarUrl: string
}

export async function search(data: SearchFormData): Promise<FlatRentPlace[]> {
  const url = 'http://localhost:3000/places'
  const form = new FormData(document.forms.search)
  const optionDB = form.get('db')
  const optionSDK = form.get('sdk')
  
  let places: FlatRentPlace[] = []
  if (optionDB) {
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      const keys:string[] = Object.keys(data)
      keys.forEach(key => {
        places.push(data[key])
      })
      
    })
      .catch(err => {
        console.log(err);
        
      })
    }
    
    if (optionSDK) {
      const sdk = new FlatRentSdk()      
      places = [...places, ...sdk.database]
    }

  const result = places.filter(place => place.price <= data.priceLimit)

  return result;
}

export function collectSearchFormData() {
  const searchString = new URLSearchParams(window.location.search)
  const searchData: SearchFormData = {
    city: searchString.get('city') || 'Санкт_Петербург',
    checkInDate: checkDate(searchString.get('checkin'), 2),
    checkOutDate: checkDate(searchString.get('checkout'), 4),
    priceLimit: +searchString.get('price') || 0	
  }
  return searchData
}


export function renderBlock(elementId, html) {
  const element = document.getElementById(elementId)
  element.innerHTML = html
}

export function renderToast(message: Notice, action?: Action) {
  let messageText = ''

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }

  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null)
    }
  }
}


// Для обеих функций применить подход с unknown, чтобы валидировать содержимое localStorage. ????
export function getUserData() {
  const user: User = JSON.parse(localStorage.getItem('user'))
  return user

}
export function getFavoritesAmount(): number {
  
  const favoritesAmount = JSON.parse(localStorage.getItem('favoriteItems'))

  return Object.keys(favoritesAmount).length
  
}