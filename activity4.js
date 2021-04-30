console.log("index.js");
var client = mqtt.connect('wss://mqtt.eclipseprojects.io:443/mqtt')
var publishTopic = document.getElementById('topic')
var message = document.getElementById('payload')
var d = new Date();
var Topic = document.getElementById('topic').value;
var Payload = document.getElementById('payload').value;

client.on('message', function(Topic, Payload) {
    $("#tMessage tbody").prepend("<tr><td>" + Topic + "</td><td>" + Payload + "</td><td>" + d.toUTCString() + "</td></tr>")

})
$(document).ready(function() {
    $('#connect').click(function() {
        $('#status').val("Connecting...").css("color", "blue")
        client.on('connect', function() {
            $('#status').val("Connected!").css("color", "green")
        })
        $('#published').click(function() {
            client.publish(publishTopic.value, message.value)
            $("#publishedTable tbody").prepend("<tr><td>" + publishTopic.value + "</td><td>" + message.value + "</td><td>" + d.toUTCString() + "</td></tr>")
        })

        $('#subscribe').click(function() {
            client.subscribe(subtopic.value)
            $("#subscribeTable tbody").prepend("<tr><td>" + subtopic.value + "</td><td>" + d.toUTCString() + "</td></tr>")
        })

    })

})


var pub_button = document.getElementById('pub-button');
var pub_input = document.getElementById('pub-input');