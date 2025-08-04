import { valid, maskCardNumber } from '@malga/card-validator'

console.log(valid.number('6274160007029307'))
console.log(maskCardNumber('0000000000000000'))
