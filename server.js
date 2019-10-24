var express = require("express"), http = require('http');
var port = 8000;
var app = express()
app.use(express.static('public'))
app.post('/apply', function(req, res) {
    if(req.method == "POST") {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            res.end('ok');
            var options = {
                host:'localhost',
                port: 8001,
                path: '/',
                method: 'POST',
                timeout: 500,
                headers: {
                    'Content-Type': 'text/html; charset=us-ascii',
                    'Content-Length': 24
                }
            };

            // body = "ABCDEFABCDEF"
            var my_req = http.request(options)
            my_req.write(body)
            my_req.end();
        });
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))