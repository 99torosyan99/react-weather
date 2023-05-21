import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { searchForecast } from "../helpers/searchForecast";

import './../style/form.css'

export default function Form({ setInfo }) {

  function handleSubmit(e) {
    e.preventDefault();
    const city = e.target[0].value;
    searchForecast(city,setInfo)
  } 

  return (
    <form onSubmit={handleSubmit}  className="form">
      <input type="text" className="form__text" />
      <button type="submit" className="form__button">
        <FontAwesomeIcon icon={faMagnifyingGlass}  fontSize={20} />
      </button>
    </form>
  );
}
