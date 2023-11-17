import * as valid from 'card-validator'

const cardValidator = valid

cardValidator.creditCardType.addCard({
  niceType: 'VR',
  type: 'vr',
  patterns: [627416, 637036],
  gaps: [],
  lengths: [16],
  code: {
    name: 'CVV',
    size: 3,
  },
})

//@see: https://www.sodexobeneficios.com.br/estabelecimentos/treinamentos/como-aceitar-sodexo-na-sua-maquininha-ou-tef/configuracao-de-maquinas-tef.htm
cardValidator.creditCardType.addCard({
  niceType: 'Sodexo',
  type: 'sodexo',
  patterns: [606071, 603389, 606070, 606069, 606068, 600818],
  gaps: [],
  lengths: [16],
  code: {
    name: 'CVV',
    size: 3,
  },
})

export default cardValidator
