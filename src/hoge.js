export function hoge(number) {
  console.log('hoge3')
  const numbers = [1, 2, 3]
  console.log(...numbers)
  const square = num => num ** 2
  console.log(square(number))
}