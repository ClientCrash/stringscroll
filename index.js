export default class ScrollableString {
    constructor(string) {
        this.stringArray = [...string];
        this.phase = "build";
        this.index = 0;
    }

    getCurrent() {
        return this.stringArray.slice(0, this.index).join('');
    }

    next() {
        if (this.index === this.stringArray.length) {
            if (this.phase === "build") {
                this.phase = "destroy";
                this.index -= 1;
                return;
            }
        }
        if (this.index === 0) {
            if (this.phase === "destroy") {
                this.phase = "build";
                this.index += 1;
                return;
            }
        }
        if (this.phase === "build") {
            this.index += 1;
        }
        if (this.phase === "destroy") {
            this.index -= 1;
        }
    }
}