import { checkDate } from './dates.js'


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



export const toggleFavorite = (element, id) => {
  
  if (element.classList[1] === 'active') {
    ++localStorage.favoritesAmount
    places[id+1].favorite = 'active'
  } else {
    --localStorage.favoritesAmount
    places[id+1].favorite = ''
  }    
}


export const getPlaces = () => {
	const searchString = new URLSearchParams(window.location.search)
	const place: Place {
		city = searchString.get('city') || 'Санкт_Петербург',
		inDate = checkDate(searchString.get('checkin'), 2),
		outDate = checkDate(searchString.get('checkout'), 4),
		maxPrice = +searchString.get('price') || 0	
	}

	return place
}


// if (!city) city = 'Санкт_Петербург'

// if (!maxPrice) {maxPrice = 0}

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



export const getLiTemplate = () => {
	return liTemplate
}

export const loadPlaces = async () => {
	const response = await fetch("http://localhost:4200/places")
	places = await response.json()

	await console.log(places)

	// await Array.from(places).forEach((place, id, places) => {
		for (let i =1; i<5; i++) {
			let place = places[i] 
			liTemplate += buildLiTemplate(place)

			if (place.favorite === 'active') {++localStorage.favoritesAmount}
		}	

}