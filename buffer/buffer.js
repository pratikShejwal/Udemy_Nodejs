const {Buffer} = require('buffer')

//const buf = Buffer.alloc(4)

// const buf = Buffer.from("pratiek")
// console.log(buf);
// console.log(buf.toString());


// const bufTwo = Buffer.allocUnsafe(10)
// console.log(bufTwo);

// const buf = Buffer.alloc(20)

// buf.write('pratiek')
// console.log(buf.toString());

// const buf = Buffer.from('pratiek s')

// console.log(buf.toString());
// console.log(buf.toString('utf8',0,4));

// const buf = Buffer.from('pratiek s')
// buf[0] = 0x4A
// console.log(buf);
// console.log(buf.toString());

const buf = Buffer.from('pratiek s')
const buf1 = Buffer.from('pratiek s')

const merged = Buffer.concat([buf1,buf])
console.log(merged.toString());
console.log(merged.length);


