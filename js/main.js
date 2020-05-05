const rootEl = document.getElementById('root')

class Clock {
    constructor(id, arrowsPosition = [0, 100]) {
        this.id = id
        this.arrowsPosition = arrowsPosition
    }

    render(parentEl) {
        const clockHTML =
            `<div id="${this.id}" class="clock">
                <div class="clock__circle"></div>
                <div id="${this.id + 'ArrowFirst'}" class="clock__arrow first-arrow" style="transform: rotate(${this.arrowsPosition[0]}deg)"></div>
                <div id="${this.id + 'ArrowSecond'}" class="clock__arrow second-arrow" style="transform: rotate(${this.arrowsPosition[1]}deg)"></div>
            </div>`;

        parentEl.innerHTML += clockHTML
    }
}

class Counter {
    constructor() {
        this.size = {
            x: 4,
            y: 6
        }
    }

    render(parentEl) {
        let counterEl = document.createElement('div')
        counterEl.className = 'counter'

        parentEl.append(counterEl)
        console.log(this)

        for (let i = 0; i < this.size.x; i++) {
            for (let j = 0; j < this.size.y; j++) {
                new Clock('clock' + i + '' + j).render(counterEl)
            }
        }
    }
}

const counterEl = new Counter()
counterEl.render(rootEl)