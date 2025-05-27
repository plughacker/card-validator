import * as valid from 'card-validator'



valid.creditCardType.addCard({
  niceType: 'VR',
  type: 'vr',
  patterns: [
    // VR Refeição
    627416, 637202, 637200, 639834,

    // VR Benefícios
    637036, 637201, 637200, 639833,

    // VR Auto
    637037, 637200,

    // VR Cultura
    636350, 637200
  ],
  gaps: [4, 8, 12],
  lengths: [16],
  code: {
    name: 'CVV',
    size: 3,
  },
})

//@see: https://docs.adyen.com/development-resources/testing/test-other-payment-methods/#brazil-vouchers
valid.creditCardType.addCard({
  niceType: 'Ticket',
  type: 'ticket',
  patterns: [

    // Ticket VR
    603342,
    603340,

    // Ticket VA
    602651
  ],
  gaps: [4, 8, 12],
  lengths: [16],
  code: {
    name: 'CVV',
    size: 3,
  },
})

//@see: https://www.sodexobeneficios.com.br/estabelecimentos/treinamentos/como-aceitar-sodexo-na-sua-maquininha-ou-tef/configuracao-de-maquinas-tef.htm
valid.creditCardType.addCard({
  niceType: 'Sodexo',
  type: 'sodexo',
  patterns: [606071, 603389, 606070, 606069, 606068, 600818],
  gaps: [4, 8, 12],
  lengths: [16],
  code: {
    name: 'CVV',
    size: 3,
  },
})

valid.creditCardType.addCard({
  niceType: 'Hipercard',
  type: 'hipercard',
  patterns: [384100, 384140, 384160, 606282],
  gaps: [4, 8, 12],
  lengths: [16],
  code: {
    name: 'CVV',
    size: 3,
  },
})

function maskCardNumber(type: string) {
  const infos = valid.creditCardType.getTypeInfo(type)

  const biggestCardNumber = Math.max(...infos.lengths)

  let mask = ''
  for (let i = 0; i < biggestCardNumber; i++) {
    if (infos.gaps.includes(i)) {
      mask += ' '
    }
    mask += '0'
  }

  return mask
}



export { valid, maskCardNumber }
