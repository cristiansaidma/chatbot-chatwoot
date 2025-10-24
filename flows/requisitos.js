const {addKeyword} = require('@bot-whatsapp/bot')

module.exports = addKeyword(['requisitos'])
    .addAnswer([
'Los documentos requeridos son:','',

'- Identificación oficial (INE o Pasaporte)',
'- CURP',
'- Acta de nacimiento','',

'*Menores de edad con 15 años cumplidos:*',
'La identificación será del Padre o Tutor y se firma Carta compromiso.','',

'*Una vez realizada tu inscripción, llevarás asesoramiento personalizado.',
'*Para extranjeros o si tienes dudas, escribe la palabra "*Asesor*"'
    ])