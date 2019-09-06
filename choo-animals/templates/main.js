// import libraries
const html = require('choo/html')

// import component
const animal = require('./animal.js')

// export component
module.exports = function (state, emit) {

    return html `
        <div class="container">
            <div class="grass">
                <img src="../assets/bg.gif" onclick=${add}/>
                ${state.animals.map(animal)}
            </div>
        </div>
    `

    // add new animal to state
    function add(e) {
        let x = e.offsetX - 20
        let y = e.offsetY - 10

        let obj = {
            x: x,
            y: y
        }
        emit('addAnimal', obj)
    }
}