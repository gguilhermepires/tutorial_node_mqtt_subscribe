var mqtt = require('mqtt')
var Temperatura= require('./models/temperatura');

var mqtt_url = process.env.CLOUDMQTT_URL || 'mqtt://localhost:1883';
var topic = process.env.CLOUDMQTT_TOPIC || 'sensor/temperature';
var client = mqtt.connect(mqtt_url);
const sequelize = require('./util/database');

sequelize
    .sync()
    .then(result => {

        console.log('banco conectado');

        client.subscribe(topic, function() {
            client.on('message', function(topic, msg, pkt) { //      

                console.log("data: " + msg + "\n\n");

                Temperatura.create({
                        menssagem: msg
                    })
                    .then(result => {
                        console.log('leitura armazenada com sucesso');
                    })
                    .catch(err => {
                        console.log(err);
                    });

            });
        });
    })
    .catch(err => {
        console.log(err);
    });