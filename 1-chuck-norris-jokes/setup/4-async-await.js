import get from "./get-element(s).mjs"

const url = "https://api.chucknorris.io/jokes/random"
const btn = get(".btn")
const text = get(".content")
const img = get(".container img")
let icon = ""

btn.addEventListener("click", async() => {
    try {
        const data = await fetch(url)
        const response = await data.json()
        displayData(response)

    } catch (error) {
        console.log(error)
    }
})

function displayData(/*data*/{value: joke, icon_url}) {
    // get data
    // const {value: joke, icon_url} = data
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
        //insert icon after the paragraph
        text.insertAdjacentHTML("afterend", icon)
    }
}