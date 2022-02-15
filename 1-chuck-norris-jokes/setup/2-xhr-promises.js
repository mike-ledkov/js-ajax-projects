import get from "./get-element(s).mjs"

const url = "https://api.chucknorris.io/jokes/random"
const btn = get(".btn")
const text = get(".content")
const img = get(".container img")
let icon = ""

btn.addEventListener("click", () => {
    getData(url)
    .then((fulfill) => displayData(fulfill))
    .catch(error => console.log(error))
})

const getData = address => {
    // Return promise
    return new Promise((fulfill, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", address)
        xhr.send()
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return
            if (xhr.status !== 200) {
                reject({
                    status: xhr.status,
                    text: xhr.statusText
                })
            }
            //* Status 200
            fulfill(xhr.responseText)
            // displayData()
        }
    })
}

function displayData(data) {
    // get data
    const {value: joke, icon_url} = JSON.parse(data)
    // display the joke
    text.textContent = joke
    // add the icon at the bottom
    addIcon(icon_url)
    // shake Chuck
    img.classList.add("shake-img")
    const randomTime = Math.random() * 1000
    setTimeout(() => {
        img.classList.remove("shake-img")
    }, randomTime)
}

const addIcon = (url) => {
    if (!icon) {
        icon = `
        <a href="https://api.chucknorris.io/" target="_blank">
        <img src=${url} alt="Chuck Norris logo">
        </a>`
        text.insertAdjacentHTML("afterend", icon)
    }
}