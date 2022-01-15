const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// app.use('/', express.static('/bbc'));
// app.use('/aa', express.static('/'));
// app.use('/bb', express.static('/'));
// app.use('/', express.static('/'));
app.use(express.static('public'));
app.use(bodyParser.json());
// app.use(cookieParser);

app.get('/a', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    res.send('asdfds');

});
// app.get('/', (req, res) => {
//     console.log(req.params);
//     console.log(req.body);
//     res.send('asdfds');

// });

app.get('/b/:b', (req, res) => {
    res.send(req.params.b);

});

app.get('/bab', (req, res) => {
    res.send(req.query.b);

});

app.get('/ba/:b/:a', (req, res) => {
    res.send(req.params)//b + ' ' + req.a);
});
app.post('/post', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    res.send(req.params)//b + ' ' + req.a);
});

app.listen(1111, function (e, er) {
    console.log(e, er);
});