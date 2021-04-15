const numberImput = Number(process.argv[2]);

const java = numberImput % 3;
const script = numberImput % 5;

let output = ''

if (java == 0){output += 'Java'}
if (script == 0){output += 'Script'}
if (java != 0 && script != 0) {output = String(numberImput)}


console.log(output);