<div align="center">
  <img src="docs/assets/card.png" width="130" />
  <h1>Card Validator</h1>
</div>

![CI](https://github.com/plughacker/card-validator/actions/workflows/release.yml/badge.svg)

A simple card validator based on the Braintree validator

## Getting Started

1. Install the `card-validator` 💳

```bash
yarn add @malga/card-validator
# or
npm install @malga/card-validator
# or
pnpm add @malga/card-validator
```

2. Now just validate your cards

```ts
import { valid } from '@malga/card-validator'

valid.number('6274160007029307')
/*
{
  card: {
    niceType: 'VR',
    type: 'vr',
    patterns: [ 627416, 637036 ],
    gaps: [],
    lengths: [ 16 ],
    code: { name: 'CVV', size: 3 },
    matchStrength: 6
  },
  isPotentiallyValid: true,
  isValid: true
}
*/
```

3. Mask a card number

```ts
import { maskCardNumber } from '@malga/card-validator'

maskCardNumber('visa')
// 0000 0000 0000 0000
```

## Contributing

Feel free to contribute to this project by submitting pull requests, creating documentation, or bringing ideas to make the project even better!
