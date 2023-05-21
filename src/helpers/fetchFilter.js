export function fetchFilter(obj) {
  const {
    humidity,
    windspeed,
    icon,
    conditions,
    datetime,
    sunset,
    sunrise,
    temp,
  } = obj.currentConditions;
  
  const { address, days } = obj;

  const time = datetime.slice(0, datetime.length - 3);
  const f = Math.trunc(temp);
  const c = Math.trunc(((f - 32) * 5) / 9);

  const weatherFiltered = {
    show: true,
    name: address,
    humidity: humidity,
    speed: windspeed,
    icon: icon,
    img: icon,
    main: conditions,
    time,
    tempF: f,
    tempC: c,
    list: days[0].hours,
    sunrise: sunrise.slice(0, 5),
    sunset: sunset.slice(0, 5),
    days: days,
  };

  weatherFiltered.now = { ...weatherFiltered };

  const img = weatherFiltered.img;
  const now = datetime.slice(0, 2);
  const set = sunset.slice(0, 2);
  const rise = sunrise.slice(0, 2);

  if (img.slice(-5) !== "night" && (now > set || now < rise)) {
    weatherFiltered.img = weatherFiltered.img.concat("-night");
  }

  return weatherFiltered;
}
