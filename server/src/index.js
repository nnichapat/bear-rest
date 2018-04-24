var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var bears = [
    {id: 1, name: 'Ple'},
    {id: 2, name: 'Tum'}
];
router.route('/bears')
.post(function(req, res) {
var bear = {};
bear.name = req.body.name;
bears.push(bear);
res.json({ message: 'Bear created!' });
});
// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);
app.listen(8000);