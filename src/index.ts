import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock, renderSearchResultsTemplateBlock } from './search-results.js'
import { renderUserBlock, getUserData, favoritesAmount } from './user.js'
import { renderToast } from './lib.js'
import { getPlaces, getLiTemplate, loadPlaces } from './findplaces.js'

// import { places } from './db.js'

// let places



const renderer = () => {
	const { username, avatarUrl } = getUserData()
	const { city, inDate, outDate, maxPrice } = getPlaces()
	const { liTemplate } = getLiTemplate()

	renderUserBlock(username, avatarUrl, favoritesAmount())
  renderSearchFormBlock(inDate, outDate, maxPrice)
  // renderSearchStubBlock()
	renderSearchResultsTemplateBlock(liTemplate)  
  // if (searchString) {
  //   renderToast(
  //     {text: `${city}, ${inDate}, ${outDate}, ${maxPrice}`, type: 'success'},
  //     {name: 'Ясно', handler: () => {console.log('Уведомление закрыто')}}
  //   )
  // }
}

const listener = async () => {
	await loadPlaces()

  await renderer()
  console.log('запуск')
}	

window.addEventListener('DOMContentLoaded', listener)	
