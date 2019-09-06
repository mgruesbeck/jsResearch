// import libraries
const html = require('choo/html')

// export component
module.exports = function (animal) {
    const type = animal.type
    const x = animal.x
    const y = animal.y

    return html `
        <img src="../assets/${type}.gif" style="left: ${x}px; top: ${y}px;">
    `
}