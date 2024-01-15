export class Husher {
    private separator: string;
    public constructor(public options?: Partial<ModuleOptions>) {
        this.options = { ...new ModuleOptions(), ...options };

        this.setSeparator();
    }

    public setSeparator() {
        this.separator = String.fromCharCode(this.options.sepCode + this.options.offset + this.options.lowSurrogateOffset);
    }

    public hush(clearTest: string) {
        let ret = this.separator;
        ret += clearTest.split('').map(i => {
            const tmp = i.charCodeAt(0) + this.options.offset + this.options.lowSurrogateOffset;
            return String.fromCharCode(tmp);
        }).join(this.separator);

        return ret;
    }

    public dehush(encodedText: string, skipSeparator = false) {
        const charCodes = encodedText.split('').map(i => i.charCodeAt(0));
        const ret = charCodes.map(x => {
            let c = x - this.options.offset - this.options.lowSurrogateOffset;
            if (x < this.options.highSurrogateBase) c = x; // don't offset normal chars
            const ret = String.fromCharCode(c);
            if (skipSeparator && ret.charCodeAt(0) == this.options.sepCode) return '';
            return ret;
        }); //.join('');
        return ret;
    }
}

export class ModuleOptions {
    highSurrogateBase = 0xDB40;
    lowSurrogateOffset = 0xDC00; // 56320
    offset = 0xE0000; // 917504
    sepCode = 0xff40; //65344
}

export const husher = new Husher();