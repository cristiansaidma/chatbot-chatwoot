const { addKeyword } = require('@bot-whatsapp/bot')

module.exports = addKeyword(['fechas']).addAnswer(
    [
        'Una vez que realices tu inscripción y selecciones la *Prepa en un Examen*, podrás consultar las fechas disponibles para aplicar la prueba',
        '_Si te urge tu certificado, debes seleccionar la próxima fecha disponible y cargar tus documentos', '',
        '👉🏼* Inscipción: https://prepaen4meses.com/signup/?next=/pago', '',

        '_El proceso completo te lleva apróximadamente 4 meses, y depende del proceso de certificación ante la SEP._',
        '_La aplicación del examen se realiza gracias al *Acuerdo 286* de la SEP. La evaluación y emisión del *Dictamen Individual de Resultados* es responsabilidad de la Institución Evaluadora correspondiente y el *Certificado Oficial* lo emite la *DGB*.'
    ]
)