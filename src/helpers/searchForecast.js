import { fetchFilter } from "./fetchFilter"

const KEY_START = process.env.REACT_APP_SECRET_KEY_START
const KEY_END = process.env.REACT_APP_SECRET_KEY_END

export function searchForecast(city,setValue) {
 fetch(`${KEY_START}${city}${KEY_END}`)
 .then(response => response.json())
 .then(data => setValue(fetchFilter(data)))
 .catch(err => setValue({show:false,err:'City not found'}))
}

