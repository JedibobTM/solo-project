const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  // console.log('req.body is (get request): ', req.body);
  const query = `
    SELECT * FROM "animals"
      ORDER BY "animal" ASC;
  `

  pool.query(query)
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('Error in getting all animals: ', err);
        res.sendStatus(500);
      })
});


router.post('/', (req, res) => {
  // POST route code here
  // console.log("req.body is: ", req.body);
});

module.exports = router;
