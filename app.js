
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var AWS = require('aws-sdk');
var fs = require('fs');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//Read config values from a JSON file.
var config = fs.readFileSync('./app_config.json', 'utf8');
config = JSON.parse(config);

//Create DynamoDB client and pass in region.
var db = new AWS.DynamoDB({ region: config.AWS_REGION });
//Create SNS client and pass in region.
var sns = new AWS.SNS({ region: config.AWS_REGION });

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/game', routes.game);
app.get('/signup', routes.signup);

//POST signup form.
app.post('/signupp', function (req, res) {
    var nameField = req.body.name,
        emailField = req.body.email,
        previewBool = req.body.previewAccess;
    photoField = req.body.photoUrl;
    res.send(200);
    signup(nameField, emailField, previewBool, photoField);
});

//Add signup form data to database.
var signup = function(nameSubmitted, emailSubmitted, previewPreference, photoUrlSubmitted) {
    var formData = {
        TableName: config.STARTUP_SIGNUP_TABLE,
        Item: {
            email: { 'S': emailSubmitted }, 
            name: { 'S': nameSubmitted },
            preview: { 'S': previewPreference },
            photo: { 'S': photoUrlSubmitted }
        }
    };
    db.putItem(formData, function (err, data) {
        if (err) {
            console.log('Error adding item to database: ', err);
        } else {
            console.log('Form data added to database.');
            var snsMessage = 'New signup: %EMAIL%'; //Send SNS notification containing email from form.
            snsMessage = snsMessage.replace('%EMAIL%', formData.Item.email['S']);
            sns.publish({ TopicArn: config.NEW_SIGNUP_TOPIC, Message: snsMessage }, function (err, data) {
                if (err) {
                    console.log('Error publishing SNS message: ' + err);
                } else {
                    console.log('SNS message sent.');
                }
            });
        }
    });
};

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
