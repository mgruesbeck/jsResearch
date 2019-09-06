// import libraries and initialize choo
const choo = require('choo')
const html = require('choo/html')
const app = choo()

// home
const main = require('./templates/main.js')
app.route('/', main)

// state
app.use(function (state, emitter) {
    // initial state
    state.animals = [{
            type: 'lion',
            x: 200,
            y: 100
        },
        {
            type: 'crocodile',
            x: 50,
            y: 300
        }
    ]
    // modify state
    emitter.on('addAnimal', function (data) {
        let animals = ['crocodile', 'koala', 'lion', 'tiger', 'walrus']

        let type = Math.floor(Math.random() * 5)
        let x = data.x
        let y = data.y

        let obj = {
            type: animals[type],
            x: x,
            y: y
        }
        state.animals.push(obj)

        emitter.emit('render')
    })
})

// start app
app.mount('div')