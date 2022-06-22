let obj = {one : 'mansur', two : 'humera'};

obj[Object.keys(obj).length] = 'munavar';

console.log(Object.keys(obj).length);
console.log(obj);