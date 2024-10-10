import { PositiveArray } from './models/PositiveArray'

const array = new PositiveArray()
array.add(1)
array.add(10)
array.add(-7)
array.add(56)
console.log(array.remove(1))
console.log(array.values)
