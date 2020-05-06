import Clock from './Clock.js'
import { numberPaterns } from './paterns.js'

export default class Counter {
    constructor() {
        this.size = {
            x: 4,
            y: 6
        }

        this.clocks = []
    }

    showDigit(digit) {
        if (this.clocks) {
            for (let i = 0; i < this.size.y; i++) {
                for (let j = 0; j < this.size.x; j++) {
                    this.clocks[i][j].changePosition(
                        numberPaterns[digit][i][j][0],
                        numberPaterns[digit][i][j][1]
                    )
                }
            }
        }
    }

    start(from) {
        let i = from
        setInterval(() => {
            this.showDigit(i)
            i--
        }, 1000)
    }

    render(parentEl) {
        let counterEl = document.createElement('div')
        counterEl.className = 'counter'

        parentEl.append(counterEl)

        for (let i = 0; i < this.size.y; i++) {
            let row = []
            for (let j = 0; j < this.size.x; j++) {
                let clock = new Clock('clock' + i + '' + j)
                clock.render(counterEl)
                row.push(clock)
            }
            this.clocks.push(row)
        }
    }
}