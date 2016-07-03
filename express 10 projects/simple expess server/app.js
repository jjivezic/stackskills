var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.get('/', function(req,res){
//     res.sendFile(path.join(__dirname,'index.html'));
// });
// app.get('/about', function(req,res){
//     res.sendFile(path.join(__dirname,'about.html'));
// });

// app.get('/services', function(req,res){
//     res.sendFile(path.join(__dirname,'services.html'));
// }); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', function(req,res){
    var people = [
        {
            first_name:"Jelena",
            last_name:"Ivezic",
            age: 11,
            gender: "female"
        },
          {
            first_name:"Jovane",
            last_name:"Ivezic2",
            age: 30,
            gender: "male"
        },
          {
            first_name:"Jelena3",
            last_name:"Ivezic3",
            age: 11,
            gender: "female"
        }
    ];

    res.json(people);
});

app.get('/download',function(req,res){
    res.download(path.join(__dirname,'/downloads/pdf.pdf'));
});
app.get('/about2',function(req,res){
    res.redirect('/about.html');
});

app.post('/subscribe', function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    console.log(name + ' has subscribed with ' + email);

});

app.listen(3000, function (){
    console.log('sevice running on port 3000');
});

