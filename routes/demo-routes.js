var express = require('express');
var router = express.Router();

router.get('/demo', function(req, res, next) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('You have successfully loaded the demo route!\nurl:' + req.url);
});

module.exports = router;