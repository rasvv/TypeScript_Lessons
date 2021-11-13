import { checkDate } from './dates.js'
import { FlatRentPlace } from  'flat-rent-sdk'


let liTemplate: any = ``

export interface Place {
	city: string
	inDate: Date
	outDate: Date
	maxPrice: number
}

export interface resultPlaces {
  id: number
  name: string
  description: string
  image: string
  remoteness: number
  bookedDates: [
    
  ],
  price: number 
  favorite: string 
}


let places = []

const changeFavoritesAmount = (sign: number) => {
	const tempFavorites = +window.localStorage.getItem('favoritesAmount') + sign
	console.log(tempFavorites);
	
	window.localStorage.setItem('favoritesAmount', tempFavorites.toString()) 
}



export const toggleFavorite = (element: any, id: number) => {
  
  if (element.classList.contains('active')) {
    changeFavoritesAmount(1)
    places[id+1].favorite = 'active'
  } else {
    changeFavoritesAmount(-1)
    places[id+1].favorite = ''
  }    
}


export const getFilter = () => {
	const searchString = new URLSearchParams(window.location.search)
	// const searchString = document.forms.search // .querySelector("#search-form")
	const place: Place = {
		city: searchString.get('city') || 'Санкт_Петербург',
		inDate: checkDate(searchString.get('checkin'), 2),
		outDate: checkDate(searchString.get('checkout'), 4),
		maxPrice: +searchString.get('price') || 0	
	}
	return place
}

export const getFlat = () => {

}


const buildLiTemplate = (place: resultPlaces) => {
  return `
  <li class="result">
  <div class="result-container">
  	<div class="result-img-container">
  		<div class="favorites ${place.favorite}"></div>
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

const buildSDKTemplate = (place: FlatRentPlace) => {
	return `
	<li class="result">
	<div class="result-container">
		<div class="result-img-container">
			<img class="result-img" src="${place.photos[0]}" alt="">
		</div>	
		<div class="result-info">
			<div class="result-info--header">
				<p>${place.title}</p>
				<p class="price">${place.price}&#8381;</p>
			</div>
			<div class="result-info--map"><i class="map-icon"></i> ${place.remoteness} км от вас</div>
			<div class="result-info--descr">${place.details}</div>
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

// <div id=${place.id} class="favorites ${Boolean(favoriteItems.find(item => item.id == place.id)) ? 'active' : ''}"></div>

export const getLiTemplate = () => {
	// console.log('getLiTemplate' + liTemplate);
	return liTemplate
}

export const loadPlaces = async () => {
	const response = await fetch("http://localhost:4200/places")
	places = await response.json()

	// await console.log(places)

	// await Array.from(places).forEach((place, id, places) => {
	
		for (let i =1; i<5; i++) {
			let place = places[i] 
			liTemplate += buildLiTemplate(place)
			if (place.favorite === 'active') {changeFavoritesAmount(1)}
		}	

}

