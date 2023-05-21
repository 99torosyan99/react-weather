export function itemFilter(obj, info) {
  const { name, now, days } = info;
  const { hours, icon, sunrise, sunset, humidity, windgust } = obj;

  const f = Math.trunc(obj.temp);
  const c = Math.trunc(((f - 32) * 5) / 9);

  const weatherFiltered = {
    show: true,
    name: name,
    list: hours,
    tempF: f,
    tempC: c,
    img: icon,
    icon: icon,
    days: days,
    sunrise: sunrise.slice(0, 5),
    sunset: sunset.slice(0, 5),
    humidity: humidity,
    speed: windgust,
    now: now,
  };

  return weatherFiltered;
}
