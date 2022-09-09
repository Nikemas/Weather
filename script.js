const textInp = document.querySelector('.form__text')
const btnInp = document.querySelector('.form__button')

const cardCity = document.querySelector('.card__city')
const carddTemp = document.querySelector('.card__temp')
const cardIcon = document.querySelector('.card__item img')
const cardDesc = document.querySelector('.card__desc')

const API_KEY = 'c9fb6f4dbcf4df12e20f3206cbe95a34'

async function getWeather(city){

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    return await res.json()
}

btnInp.addEventListener('click', () => {
    getWeather(textInp.value)
        .then((data) => {
            console.log(data)
            cardCity.innerHTML = `${data.name} <span>${data.sys.country}</span>`
            carddTemp.innerHTML = `${Math.round(data.main.temp - 273.15)}<span>°C</span>`
            cardIcon.src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`
            cardDesc.innerHTML = `${data.weather[0].description}`
        })
})

console.log(cardIcon   )