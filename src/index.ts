export { run } from './runner.js'

function getApi() { fetch('http://localhost:3000/places')
  .then(res => res.json())
  .then((out) => {
    console.log('Output: ', out);
    // const places = out
    run(out)
  })
  .catch(err => console.error(err))
}

window.addEventListener('DOMContentLoaded', () => {
  getApi()
  // renderUserBlock(username, avatarUrl, favoritesAmount())
  // renderSearchFormBlock(inDate, outDate, maxPrice)
  // // renderSearchStubBlock()
  // renderSearchResultsTemplateBlock(liTemplate)  
  // if (searchString) {
  //   renderToast(
  //     {text: `${city}, ${inDate}, ${outDate}, ${maxPrice}`, type: 'success'},
  //     {name: 'Ясно', handler: () => {console.log('Уведомление закрыто')}}
  //   )
  // }
  // console.log('запуск')
})	


// getApi()