import { fetchFilter } from "./fetchFilter"

export function searchForecast(city,setValue) {
 fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=VRWUGLQ3HGNPHGAX8NF4HEWMX`)
 .then(response => response.json())
 .then(data => setValue(fetchFilter(data)))
 .catch(err => setValue({show:false,err:'City not found'}))
}

