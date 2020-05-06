import Counter from './Counter.js'

const rootEl = document.getElementById('root')

const counterEl = new Counter()
counterEl.render(rootEl)

counterEl.start(5)
