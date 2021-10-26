import { renderBlock,  SearchFormData, search} from './lib.js'

export function renderSearchFormBlock (inDate: string, outDate: string) {
  const nowDate = new Date()
  const minDate = nowDate.toISOString().slice(0,10)
  const maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 2, 0).toISOString().slice(0,10)
  let maxPriceValue = 0

  renderBlock(
    'search-form-block',
    `

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
            <input id="max-price" type="text" value=${maxPriceValue} name="price" class="max-price" />
          </div>
          <div>
            <div><button id="findbutton" >Найти</button></div>
          </div>
        </div>

    `
  )


  const findbutton = document.getElementById('findbutton')

  findbutton.onclick = () => {
    const cityInput = (document.getElementById('city') as HTMLInputElement).value
    const inDateInput = new Date((document.getElementById('check-in-date') as HTMLInputElement).value).toISOString().slice(0,10)
    const outDateInput =  new Date((document.getElementById('check-out-date') as HTMLInputElement).value).toISOString().slice(0,10)
    const maxPriceInput = (document.getElementById('max-price') as HTMLInputElement).value
    
    const searchData: SearchFormData = {
      city: cityInput,
      inDate: inDateInput,
      outDate: outDateInput,
      maxPrice: +maxPriceInput
    }
    
    search(searchData)      
  }

}

