export class Husher {
    private separator: string;
    public constructor(public options?: Partial<ModuleOptions>) {
        this.options = { ...new ModuleOptions(), ...options };

        this.setSeparator();
    }

    public setSeparator() {
        this.separator = String.fromCharCode(this.options.sepCode + this.options.lowSMPA + this.options.highSurrogateOffset);
    }

    public hush(clearTest: string) {
        let ret = this.separator;
        ret += clearTest.split('').map(i => {
            const tmp = i.charCodeAt(0) + this.options.lowSMPA + this.options.highSurrogateOffset;
            return String.fromCharCode(tmp);
        }).join(this.separator);

        return ret;
    }

    public dehush(encodedText: string, skipSeparator = false) {
        const chars = Array.from(encodedText);

        const ret = chars.map(char => {
            let part = char.charCodeAt(0);
            if (part >= this.options.lowSurrogateBase) { // has surrogate in SMPA
                const payload = char.charCodeAt(1);
                const deciphered = payload - this.options.highSurrogateOffset;
                if (skipSeparator) char = String.fromCharCode(deciphered);
                else char = String.fromCharCode(this.options.sepCode, deciphered);
            }

            if (skipSeparator && part == this.options.sepCode) return '';
            return char;
        });
        return ret;
    }

    public sanitize(encodedText: string) {
        return this.dehush(encodedText, true).join('');
    }

    private isSMPA(char) {
        const codePoint = char.codePointAt(0);
        return codePoint >= this.options.lowSMPA && codePoint <= this.options.highSMPA;
    }
}

export class ModuleOptions {
    lowSurrogateBase = 0xDB40; // 56128
    highSurrogateOffset = 0xDC00; // 56320
    lowSMPA = 0xE0000; // 917504
    highSMPA = 0xE0FFF; // 921599
    sepCode = 0xff40; // 65344
}

export const husher = new Husher();