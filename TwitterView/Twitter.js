/**
 * Created by cynthia on 6/05/2016.
 */
var express = require("express");

var app = express();

app.engine('.html', require('ejs').__express);

app.set('view engine', 'html');


/**
 * Direct to Homepage
 */
app.set('views', __dirname);

app.get("/", function(req, res) {
    res.render('Homepage');
});
app.use(express.static(__dirname));



/**
 * Direct to 1st Scenario
 */
app.get('/1Scenario', function(req, res) {

    var nano = require('nano')('http://115.146.92.238:5984');
    var tweet_frequency = nano.use('tweet_frequency');
    tweet_frequency.get('1', function(err, body) {      
        var t1 = body.t1;
        var t2 = body.t2;
        var t3 = body.t3;
        var t4 = body.t4;
        var t5 = body.t5;
        var t6 = body.t6;
        var t7 = body.t7;
        var t8 = body.t8;
        var t9 = body.t9;
        var t10 = body.t10;
        var t11 = body.t11;
        var t12 = body.t12;
        var t13 = body.t13;
        var t14 = body.t14;
        var t15 = body.t15;
        var t16 = body.t16;
        var t17 = body.t17;
        var t18 = body.t18;
        var t19 = body.t19;
        var t20 = body.t20;
        var t21 = body.t21;
        var t22 = body.t22;
        var t23 = body.t23;
        var t24 = body.t24;
        var h1 = body.h1;
        var h2 = body.h2;
        var h3 = body.h3;
        var h4 = body.h4;
        var h5 = body.h5;
        var h6 = body.h6;
        var h7 = body.h7;
        var h8 = body.h8;
        var h9 = body.h9;
        var h10 = body.h10;
        var h11 = body.h11;
        var h12 = body.h12;
        var h13 = body.h13;
        var h14 = body.h14;
        var h15 = body.h15;
        var h16 = body.h16;
        var h17 = body.h17;
        var h18 = body.h18;
        var h19 = body.h19;
        var h20 = body.h20;
        var h21 = body.h21;
        var h22 = body.h22;
        var h23 = body.h23;
        var h24 = body.h24;

        res.render('1Scenario', {
            't1': t1,
            't2': t2,
            't3': t3,
            't4': t4,
            't5': t5,
            't6': t6,
            't7': t7,
            't8': t8,
            't9': t9,
            't10': t10,
            't11': t11,
            't12': t12,
            't13': t13,
            't14': t14,
            't15': t15,
            't16': t16,
            't17': t17,
            't18': t18,
            't19': t19,
            't20': t20,
            't21': t21,
            't22': t22,
            't23': t23,
            't24': t24,
            'h1': h1,
            'h2': h2,
            'h3': h3,
            'h4': h4,
            'h5': h5,
            'h6': h6,
            'h7': h7,
            'h8': h8,
            'h9': h9,
            'h10': h10,
            'h11': h11,
            'h12': h12,
            'h13': h13,
            'h14': h14,
            'h15': h15,
            'h16': h16,
            'h17': h17,
            'h18': h18,
            'h19': h19,
            'h20': h20,
            'h21': h21,
            'h22': h22,
            'h23': h23,
            'h24': h24
        });
    });
});


/**
 * Direct to 1st Scenario's Heatmap
 */
app.get('/1Heatmap', function(req, res) {

    var nano = require('nano')('http://115.146.92.238:5984');//http://115.146.92.238:5984/_utils/index.html
    var suburb_happiness_distribution = nano.use('suburb_happiness_distribution');
    suburb_happiness_distribution.get('1', function(err, body) {
        if (!err) {
            var coordinate = body.coordinate;
            res.render('1Heatmap', {
                'coordinate': coordinate
            }); 
        }

    });
});


/**
 * Direct to 2nd Scenario
 */
app.get('/2Scenario', function(req, res) {
    var nano = require('nano')('http://115.146.92.238:5984');
    var hillarytrumpanalysis = nano.use('hillarytrumpanalysis');
    hillarytrumpanalysis.get('1', function(err, body) {
        if (!err) {
            var hillary = body.Hillary;
            var trump = body.Trump;
            res.render('2Scenario', {
                'hillary': hillary,
                'trump':trump
            }); 
        }
    });
});


/**
 * Direct to 3rd Scenario
 */
app.get('/3Scenario', function(req, res) {

    var nano = require('nano')('http://115.146.92.238:5984');
    var cities_pressure = nano.use('cities_pressure');
    cities_pressure.get('1', function(err, body) {   
            var Adelaide = body.Adelaide;
            var Adelaide_Alcohol = body.Adelaide_Alcohol;
            var Adelaide_Mental = body.Adelaide_Mental;
            var Adelaide_Smoker = body.Adelaide_Smoker;
            var Brisbane = body.Brisbane;
            var Brisbane_Alcohol = body.Brisbane_Alcohol;
            var Brisbane_Mental = body.Brisbane_Mental;
            var Brisbane_Smoker = body.Brisbane_Smoker;
            var Melbourne = body.Melbourne;
            var Melbourne_Alcohol = body.Melbourne_Alcohol;
            var Melbourne_Mental = body.Melbourne_Mental;
            var Melbourne_Smoker = body.Melbourne_Smoker;
            var Perth = body.Perth;
            var Perth_Alcohol = body.Perth_Alcohol;
            var Perth_Mental = body.Perth_Mental;
            var Perth_Smoker = body.Perth_Smoker;
            var Sydney = body.Sydney;
            var Sydney_Alcohol = body.Sydney_Alcohol;
            var Sydney_Mental = body.Sydney_Mental;
            var Sydney_Smoker = body.Sydney_Smoker;

            res.render('3Scenario', {
            'Adelaide' :Adelaide,
            'Adelaide_Alcohol' :Adelaide_Alcohol,
            'Adelaide_Mental' :Adelaide_Mental,
            'Adelaide_Smoker' : Adelaide_Smoker,
            'Brisbane' : Brisbane,
            'Brisbane_Alcohol' :Brisbane_Alcohol,
            'Brisbane_Mental' :Brisbane_Mental,
            'Brisbane_Smoker' : Brisbane_Smoker,
            'Melbourne' : Melbourne,
            'Melbourne_Alcohol' : Melbourne_Alcohol,
            'Melbourne_Mental' : Melbourne_Mental,
            'Melbourne_Smoker' : Melbourne_Smoker,
            'Perth' : Perth,
            'Perth_Alcohol' : Perth_Alcohol,
            'Perth_Mental' : Perth_Mental,
            'Perth_Smoker' : Perth_Smoker,
            'Sydney' : Sydney,
            'Sydney_Alcohol' : Sydney_Alcohol,
            'Sydney_Mental' : Sydney_Mental,
            'Sydney_Smoker' : Sydney_Smoker              
            });
    });
});       


/**
 * Set up server
 */
var server = app.listen(8000, '0.0.0.0', function() {
    console.log("listening on port %d", server.address().port);
});


