const make_adder = (x) => {

  return  (v) => {
    let func2  = (n) => {
      return  n+x
    }
    return func2(v)
  }
} 



const add1 = make_adder(1)


const mul3 = (n) => {
  let lambda = (z) => n*3
  return lambda()
  
}

const compose = (f, g) =>  (n) => {
  
  return f(g(n))
}

const mulaadd1 = compose(mul3, add1)

console.log(mulaadd1(10) )