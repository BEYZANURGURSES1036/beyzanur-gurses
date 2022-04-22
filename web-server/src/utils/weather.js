const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=........&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Hava Durumu Açıklaması: ' + body.current.weather_descriptions[0] + ',\nHava Sıcaklığı : ' 
            + body.current.temperature + ' derece' + ',\nHissedilen sıcaklık: ' + body.current.pressure + ' derece')
        }
    })
}

module.exports = forecast