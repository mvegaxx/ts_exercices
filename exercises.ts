const make_adder = (x: any) => ((n: any) => n+x)

const add1 = make_adder(1)

console.log(make_adder)

const mul3 = (n :any) => n*3
const compose = (f: Function, g: Function) =>  (n: any) => {
  return f(g(n))
}

//console.log(  mul3(add1(10)))