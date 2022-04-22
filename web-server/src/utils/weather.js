const request = require('request')

const weather = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=........&query=' + latitude + ',' + longitude + '&units=m'

    request( (error, { body }) => {
            callback(undefined, 'Hava Durumu Açıklaması: ' + body.current.weather_descriptions[0] + ',\n Sıcaklığı : ' 
            + body.current.temperature + ' derece' + ',\nBasınç ' + body.current.pressure + '\n Nem '+ body.current.humidity )
      
    })
}

module.exports = weather