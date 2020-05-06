const rootEl = document.getElementById('root')

class Clock {
    constructor(id, firstArrow = 0, secondArrow = 90) {
        this.id = id
        this.firstArrowPosition = firstArrow
        this.secondArrowPosition = secondArrow
    }

    changePosition(firstArrow = this.firstArrowPosition, secondArrow = this.secondArrowPosition) {
        let firstArrowEl = document.getElementById(this.id + 'ArrowFirst'),
            secondArrowEl = document.getElementById(this.id + 'ArrowSecond')
        
        firstArrowEl.style.transform = `rotate(${firstArrow}deg)`
        secondArrowEl.style.transform = `rotate(${secondArrow}deg)`
    }

    render(parentEl) {
        const clockHTML =
            `<div id="${this.id}" class="clock">
                <div class="clock__circle"></div>
                <div id="${this.id + 'ArrowFirst'}" class="clock__arrow first-arrow" style="transform: rotate(${this.firstArrowPosition}deg)"></div>
                <div id="${this.id + 'ArrowSecond'}" class="clock__arrow second-arrow" style="transform: rotate(${this.secondArrowPosition}deg)"></div>
            </div>`;

        parentEl.innerHTML += clockHTML
    }
}

const empty = [45, 45]
const numberPaterns = [
    // 0
    [
        [
            [0, 90], [0, 180], [0, 180], [90, 180]
        ],
        [
            [90, -90], [0, 90], [180, 90], [90, -90]
        ],
        [
            [90, -90], [-90, 90], [-90, 90], [90, -90]
        ],
        [
            [90, -90], [-90, 90], [-90, 90], [90, -90]
        ],
        [
            [90, -90], [-90, 0], [-90, 180], [90, -90]
        ],
        [
            [-90, 0], [0, 180], [0, 180], [-90, 180]
        ],
    ],

    // 1
    [
        [
            [0, 90], [0, 180], [90, 180], empty
        ],
        [
            [-90, 0], [90, 180], [-90, 90], empty
        ],
        [
            empty, [-90, 90], [-90, 90], empty
        ],
        [
            empty, [-90, 90], [-90, 90], empty
        ],
        [
            empty, [-90, 90], [-90, 90], empty
        ],
        [
            empty, [-90, 0], [-90, 180], empty
        ],
    ],

    // 2
    [
        [
            [0, 90], [0, 180], [90, 180], empty
        ],
        [
            [-90, 0], [90, 180], [-90, 90], empty
        ],
        [
            empty, [-90, 90], [-90, 90], empty
        ],
        [
            empty, [-90, 90], [-90, 90], empty
        ],
        [
            empty, [-90, 90], [-90, 0], [90, 180]
        ],
        [
            empty, [-90, 0], [0, 180], [-90, 180]
        ]
    ],

    // 3
    [
        [
            [0, 90], [0, 180], [0, 180], [180, 90]
        ],
        [
            [-90, 0], [0, 180], [90, 180], [-90, 90]
        ],
        [
            [0, 90], [0, 180], [-90, 180], [-90, 90]
        ],
        [
            [-90, 0], [0, 180], [90, 180], [-90, 90]
        ],
        [
            [0, 90], [0, 180], [-90, 180], [-90, 90]
        ],
        [
            [-90, 0], [0, 180], [0, 180], [-90, 180]
        ]
    ],

    // 4
    [
        [
            [0, 90], [90, 180], [0, 90], [90, 180]
        ],
        [
            [90, -90], [90, -90], [-90, 90], [90, -90]
        ],
        [
            [90, -90], [-90, 0], [-90, 180], [90, -90]
        ],
        [
            [0, -90], [-180, 0], [-180, 90], [90, -90]
        ],
        [
            empty, empty, [-90, 90], [90, -90]
        ],
        [
            empty, empty, [0, -90], [-90, 180]
        ],
    ],

    // 5
    [
        [
            [0, 90], [0, 180], [0, 180], [90, 180]
        ],
        [
            [90, -90], [0, 90], [0, 180], [180, -90]
        ],
        [
            [90, -90], [-90, 0], [0, 180], [90, 180]
        ],
        [
            [0, -90], [-180, 0], [-180, 90], [90, -90]
        ],
        [
            [0, 90], [0, 180], [-90, 180], [90, -90]
        ],
        [
            [0, -90], [0, 180], [0, 180], [-90, 180]
        ],
    ],
]

class Counter {
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

const counterEl = new Counter()
counterEl.render(rootEl)

counterEl.start(5)
