import md5 from 'crypto-js/md5';

const x = '17.11.1989';
const y = md5(x);
console.log(y);