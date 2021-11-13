import { renderBlock } from './lib.js'

window.localStorage.setItem('username', 'RVV')
window.localStorage.setItem('avatarUrl', '/img/avatar.png')
window.localStorage.setItem('favoritesAmount', '0')
// export const localStorage = {
//   user: {
//     'username': 'RVV',
//     'avatarUrl': '/img/avatar.png'
//   },
//   'favoritesAmount': 0
// }

export const getUserData = () => {
	const user = {
		username: window.localStorage.getItem('username'),
		avatarUrl: window.localStorage.getItem('avatarUrl')
	}
  return (user)
}



export const favoritesAmount = () => {
  return +window.localStorage.getItem('favoritesAmount')
}

export function renderUserBlock (userName: string, avatar: string, favoriteItemsAmount?: number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${avatar} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}


