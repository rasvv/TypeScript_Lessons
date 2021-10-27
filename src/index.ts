import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock, renderSearchResultsTemplateBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
// import JSON from '../db.json'

// import { readFile } from 'fs'
import { places } from './db.js'
// const fs = require('fs');
// import * as dataJSON from '../db.json';
// const places =  resolveJsonModule('../db.json')


export interface resultPlaces {
  id: number
  name: string
  description: string
  image: string
  remoteness: number
  bookedDates: [
    
  ],
  price: number 
  favorite: boolean 
}

// export const readerJSON = () => {
//   readFile('../db.json', 'utf-8', (err, data) => {
//     if (data) { return data }
//   })
// }

let liTemplate = ''

const buildLiTemplate = (place: resultPlaces) => {
  return `
  <li class="result">
  <div class="result-container">
  	<div class="result-img-container">
  		<div class="favorites"></div>
  		<img class="result-img" src=${place.image} alt="">
  	</div>	
  	<div class="result-info">
  		<div class="result-info--header">
  			<p>${place.name}</p>
  			<p class="price">${place.price}&#8381;</p>
  		</div>
  		<div class="result-info--map"><i class="map-icon"></i> ${place.remoteness}км от вас</div>
  		<div class="result-info--descr">${place.description}</div>
  		<div class="result-info--footer">
  			<div>
  				<button>Забронировать</button>
  			</div>
  		</div>
  	</div>
  </div>
  </li>
  `
}

places.forEach((place:resultPlaces) => {
  liTemplate +=buildLiTemplate(place)
  // place.
})


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
  // renderSearchStubBlock()
  renderSearchResultsTemplateBlock(liTemplate)  
  if (searchString) {
    renderToast(
      {text: `${city}, ${inDate}, ${outDate}, ${maxPrice}`, type: 'success'},
      {name: 'Ясно', handler: () => {console.log('Уведомление закрыто')}}
    )
  }
  console.log('запуск')
})	




