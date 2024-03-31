export function formatUnixDate(unix) {
  const date = new Date(unix * 1000); //

  return date;
}
export function formatSunDate(unix) {
  const tarih = new Date(unix * 1000); //

  const saat = tarih.getHours();
  const dakika = tarih.getMinutes();

  return `${saat}:${dakika}`;
}

export function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

export function kelvinToCelsius(kelvin) {
  if (kelvin < 0) {
    throw new Error("Kelvin değeri 0'dan küçük olamaz.");
  }
  return (kelvin - 273.15).toFixed(0);
}
