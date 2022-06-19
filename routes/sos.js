var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  // this worked --1
  // res.json({ user: 'geek' });

  // this worked --2
  /*
  res.json([
        {
          "userId": 1,
          "title": "delectus aut autem"
        },
        {
          "userId": 2,
          "title": "quis ut nam facilis et officia qui"
        },
        {
          "userId": 3,
          "title": "fugiat veniam minus"
        },
        {
          "userId": 4,
          "title": "et porro tempora"
        },
        {
          "userId": 5,
          "title": "laboriosam mollitia et enim quasi adipisci"
        }
      ]
  )
  */

  // this worked --3

  res.json([
        0,
        1,
        2,
        3,
        4,
        5
      ]
  )
});

module.exports = router;
