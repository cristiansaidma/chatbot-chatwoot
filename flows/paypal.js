const {addKeyword} = require('@bot-whatsapp/bot')

module.exports = addKeyword(['Paypal']).addAnswer(
    [
'📣 *¡Inicia ahora!*',
'Para realiza tu pago seguro con PayPal da clic en:','',
'1️⃣ Para tu curso: $2,950',
'👉🏼 https://www.paypal.com/ncp/payment/TF74VM6TN23WA','',

'2️⃣ Para tu *Prepa en un examen*: $6,500',
'👉🏼 https://www.paypal.com/ncp/payment/E3Y9VK93GJ6YN','',
'*Tu pago seguro a través de PayPal te permite hacerlo con *targeta de credito*',
'_*Una vez realizado tu pago, debes confirmar tus datos dando clic aquí_ 👉🏼 https://wa.link/ah1yrp'
]
)