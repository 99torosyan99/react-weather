import { fetchFilter } from "./fetchFilter"

const KEY_START = process.env.REACT_APP_SECRET_KEY_START
const KEY_END = process.env.REACT_APP_SECRET_KEY_END
console.log(process.env)
export function searchForecast(city,setValue) {
 fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=VRWUGLQ3HGNPHGAX8NF4HEWMX`)
 .then(response => response.json())
 .then(data => setValue(fetchFilter(data)))
 .catch(err => setValue({show:false,err:'City not found'}))
}

