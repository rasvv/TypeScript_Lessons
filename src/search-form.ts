import { renderBlock, renderToast } from './lib.js'

export interface SearchFormData {
  city: string;
  inDate: string;
  outDate: string;
  maxPrice: number;
} 


// let formData
export function renderSearchFormBlock (inDate: Date, outDate: Date, maxPrice: number) {
  const nowDate = new Date()
  const minDate = nowDate.toISOString().slice(0,10)
  const maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 2, 0).toISOString().slice(0,10)
  // let maxPriceValue = 0

  renderBlock(
    'search-form-block',
    `
    <form id="search-form">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${inDate} min=${minDate} max=${maxDate} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${outDate} min=${minDate} max=${maxDate} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value=${maxPrice} name="price" class="max-price" />
          </div>
          <div>
            <div><button id="findbutton" >Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
	const searchForm = document.querySelector("#search-form")

	function onFormValue(cb) {
	const listener = (evt) => {
		evt.preventDefault()
		const formData = new FormData(searchForm as HTMLFormElement)
		// const formData = new FormData()
		cb({
			city: formData.get('city'),
			inDate: formData.get('checkin'),
			outDate: formData.get('checkout'),
			maxPrice: +formData.get('price')
		})
	}

		searchForm.addEventListener('submit', listener)

		return () => searchForm.removeEventListener('submit', listener)
	}

	onFormValue(console.log)
}


