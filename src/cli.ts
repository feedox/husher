import { husher } from "./Husher";

const args = process.argv.slice(2); // Slice off the first two elements
const params: any = {};

args.forEach(arg => {
    // Check if argument includes an '='
    const index = arg.indexOf('=');
    if (index > -1) {
        const key = arg.substring(0, index);
        let value = arg.substring(index + 1);

        // Handle case where value is wrapped in quotes
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.substring(1, value.length - 1);
        }

        params[key] = value;
    }
});


function copyToClipboard(data: any) {
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(data); proc.stdin.end();
}

if (params.hush) {
    console.log(`performing hush, arguments: `, params.hush)
    const ret = husher.hush(params.hush);
    copyToClipboard(ret);
    console.log(`successfully copied to clipboard ${ret.length} characters`);
    process.exit(0)
} else if (params.sanitize) {
    console.log(`performing hush, arguments length`, params.sanitize.length)
    const ret = husher.sanitize(params.sanitize);
    console.log(`output length: ${ret.length}. output:`);
    console.log(ret);
} else {
    console.error('unrecognized command!', params);
}

// console.log('params: ', params);