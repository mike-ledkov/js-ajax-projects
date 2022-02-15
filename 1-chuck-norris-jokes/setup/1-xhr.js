import get from "./get-element(s).mjs"

const url = "https://api.chucknorris.io/jokes/random?category=dev"
const btn = get(".btn")
const text = get(".content")
const img = get(".container img")
let icon = ""

btn.addEventListener("click", () => {
    getData(url)
})

const getData = address => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", address)
    xhr.send()
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return
        if (xhr.status !== 200) {
            console.log({
                status: xhr.status,
                text: xhr.statusText
            })
            return
        }
        //* Status 200
        // console.log(JSON.parse(xhr.responseText))
        img.classList.add("shake-img")
        // get data
        const {value: joke, icon_url} = JSON.parse(xhr.responseText)
        // display the joke
        text.textContent = joke
        // shake Chuck
        const randomTime = Math.random() * 1000
        setTimeout(() => {
            img.classList.remove("shake-img")
        }, randomTime)
        // add the icon at the bottom
        addIcon(icon_url)
    }
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