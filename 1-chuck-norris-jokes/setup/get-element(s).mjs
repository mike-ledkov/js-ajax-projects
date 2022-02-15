function getElements(element, all = false, scope = document) {
    let result = ""
    // if (!scope) {scope = document}
    if (all) {
        result = scope.querySelectorAll(element)
    }
    else {
        result = scope.querySelector(element)
    }
    if (!result) {
        throw Error (`Please check if element “${element}” exists.`)
    }
    return result
}

export default getElements
