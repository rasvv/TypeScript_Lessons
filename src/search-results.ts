import { FlatRentPlace } from 'flat-rent-sdk'
import { renderBlock } from './lib.js'
import { localStorage, getUserData, toggleFavorite } from './index.js'
import { renderUserBlock } from './user.js'

export function renderSearchStubBlock () {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  )
}

export function renderEmptyOrErrorSearchBlock (reasonMessage) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  )
}

export function renderCurrentSearchBlock (city: string, inDate: string, outDate: string, maxPrice: number) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>Город: ${city}</p>
      <p>Дата заезда: ${inDate}</p>
      <p>Дата выезда: ${outDate}</p>
      <p>Максимальная стоимость номера: ${maxPrice} рублей</p>
    </div>
    `
  )
}

export function renderSearchResultsBlock (): void {
  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites active"></div>
            <img class="result-img" src="./img/result-1.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>YARD Residence Apart-hotel</p>
              <p class="price">13000&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 2.5км от вас</div>
            <div class="result-info--descr">Комфортный апарт-отель в самом сердце Санкт-Петербрга. К услугам гостей номера с видом на город и бесплатный Wi-Fi.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites"></div>
            <img class="result-img" src="./img/result-2.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>Akyan St.Petersburg</p>
              <p class="price">13000&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 1.1км от вас</div>
            <div class="result-info--descr">Отель Akyan St-Petersburg с бесплатным Wi-Fi на всей территории расположен в историческом здании Санкт-Петербурга.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    `
  )
}

export function renderSearchResultsJSONBlock () {
  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites active"></div>
            <img class="result-img" src="./img/result-1.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>YARD Residence Apart-hotel</p>
              <p class="price">13000&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 2.5км от вас</div>
            <div class="result-info--descr">Комфортный апарт-отель в самом сердце Санкт-Петербрга. К услугам гостей номера с видом на город и бесплатный Wi-Fi.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites"></div>
            <img class="result-img" src="./img/result-2.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>Akyan St.Petersburg</p>
              <p class="price">13000&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 1.1км от вас</div>
            <div class="result-info--descr">Отель Akyan St-Petersburg с бесплатным Wi-Fi на всей территории расположен в историческом здании Санкт-Петербурга.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites active"></div>
            <img class="result-img" src="./img/result-3.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>Solo Sokos Hotel Palace Bridge</p>
              <p class="price">10500&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 5.0км от вас</div>
            <div class="result-info--descr">Отель с wellness-центром расположен на Васильевском острове. Отель отличает наличие спа-центра и центральное местоположение.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites"></div>
            <img class="result-img" src="./img/result-4.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>Park Inn by Radisson Pulkovskaya Hotel</p>
              <p class="price">6600&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 15.3км от вас</div>
            <div class="result-info--descr">Отель оборудован бизнес-центром, залами для совещаний и конференц-центром находится рядом с площадью Победы и парком Городов-Героев.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    `
  )

  const favoritesImg = document.getElementsByClassName('favorites')
  Array.from(favoritesImg).forEach(element => {
    element.addEventListener('click', () => {
      element.classList.toggle('active')
    })
  })
}

export function renderSearchResultsTemplateBlock (liTemplate: any): void {
  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
      ${liTemplate}
    </ul>
    `
  )

  const favoritesImg = document.getElementsByClassName('favorites')
  Array.from(favoritesImg).forEach((element, id) => {
    element.addEventListener('click', () => {
      element.classList.toggle('active')
      toggleFavorite(element, id)
      renderUserBlock(getUserData().username, getUserData().avatarUrl, localStorage.favoritesAmount)
    })
  })
}

export function renderSearchSDKResultsBlock (places: FlatRentPlace[]) {
  let resultList: string = ''
  // const favoriteItems: favoriteItem[] = JSON.parse(localStorage.getItem('favoriteItems'))
  
  places.forEach(place => {
    // let photosHtml = ''
    // place.photos.forEach(photo => {
    //   photosHtml += `<img class="result-img" src="${photo}" alt="">`
    // })
    resultList += `<li class="result">
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
  </li>`
  })
  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
      ${resultList}
    </ul>
    `
  )

  const favorites = document.getElementsByClassName("favorites")
  for(let i = 0; i < favorites.length; i++) {
    favorites[i].addEventListener('click', (e) => {
      const current = places.find(place => place.id == e.target.id)
      const isFavorite = Boolean(favoriteItems.find(item => item.id == current.id))
      
      if (!isFavorite) {
        favoriteItems.push({id: current.id, name: current.title, image: current.photos[0]})
      } else {
        favoriteItems.splice(favoriteItems.indexOf(favoriteItems.find(item => item.id == e.target.id)), 1)
      }
      
      localStorage.removeItem('favoriteItems')
      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
      renderSearchResultsBlock(places)
      const user = getUserData()
      const quantFavorites = getFavoritesAmount()
      renderUserBlock(user.userName, user.avatarUrl, quantFavorites)
      
    })
  }
}