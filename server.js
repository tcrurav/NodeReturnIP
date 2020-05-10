const { exec } = require("child_process");
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

function executeCommandAsynchronously() {
    const cmd = "ip addr";

    return new Promise(function (resolve, reject) {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                reject("error");
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                reject("error");
            }
            console.log(`stdout: ${stdout}`);

            resolve(stdout);
        })
    })
}

app.get('/', function (req, res) {
    return executeCommandAsynchronously()
        .then(function(data) { 
            console.log(data);
            //return res.status(200).send(data); 
            return res.render("pages/index", {
                title: "Here is the response:",
                response: data
            })    
        })
        .catch(function(err) { 
            //return res.status(500).send(err); 
            return res.render("pages/index", {
                title: "There was an error:",
                response: err
            }) 
        });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

