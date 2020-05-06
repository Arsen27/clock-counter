export default class Clock {
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