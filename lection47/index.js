console.log('///////////////////////////////////////////ASYNC AWAIT////////////////////////////////////////////////');

async function foo() {
    return 10;
}
console.log(foo());
console.log(foo().then(alert));
foo().then(alert);

console.log('///////////////////////////////////////////////////////////////////////////////////////')

async function foo1() {
    let promise = new Promise((resolve, reject) => {
        
        setTimeout(() => () => resolve(15), 2000);
    })
    
    let result = await promise * 2;
    console.log(result)
}
foo1()

console.log('///////////////////////////////////////////////////////////////////////////////////////')

async function foo2() {
    let promise = new Promise((resolve, reject) => {
        console.log('inside promise');
        setTimeout(() => resolve(20), 3000);
    })
    console.log('before promise');
    let result = await promise * 2;
    console.log('after promise');
    console.log(result)
}
foo2()

console.log('/////////////////////////////PROMISE ALL//////////////////////////////////////////////////////////')

let promises = Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(10), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(20), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(30), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(40), 4000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(50), 5000)),
])
console.log(promises)

console.log('///////////////////////////////////////////////////////////////////////////////////////')

let promises1 = Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(10), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(20), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(30), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(40), 4000)),
    new Promise((resolve, reject) => setTimeout(() => reject(50), 5000)),
])
console.log(promises1)

console.log('///////////////////////////////////////////////////////////////////////////////////////')

/**
 * Promise.allSettled
 */

 let promises2 = Promise.allSettled([
     new Promise((resolve, reject) => setTimeout(() => resolve(10), 1000)),
     new Promise((resolve, reject) => setTimeout(() => reject(20), 2000)),
     new Promise((resolve, reject) => setTimeout(() => resolve(30), 4000)),
     new Promise((resolve, reject) => setTimeout(() => resolve(40), 3000)),
 ])

 promises2.then(result => console.log(result));

/**
 * Promise.race
 */

 let promises3 = Promise.race([
     new Promise((resolve, reject) => setTimeout(() => reject(10), 1000)),
     new Promise((resolve, reject) => setTimeout(() => resolve(20), 2000)),
     new Promise((resolve, reject) => setTimeout(() => reject(30), 3000)),
     new Promise((resolve, reject) => setTimeout(() => resolve(40), 4000)),
 ])

 promises3.then(result => console.log(result));

/**
 * Promise.any
 */

 let promises4 = Promise.any([
     new Promise((resolve, reject) => setTimeout(() => reject(10), 1000)),
     new Promise((resolve, reject) => setTimeout(() => reject(20), 2000)),
     new Promise((resolve, reject) => setTimeout(() => reject(30), 3000)),
     new Promise((resolve, reject) => setTimeout(() => reject(40), 4000)),
 ])

 promises4
     .then(result => console.log(result))
     .catch(err => console.log({err}));