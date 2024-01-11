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

// Post to database from create form
router.post('/', (req, res) => {
  // POST route code here
  console.log("req.body is: ", req.body);
  const animalData = req.body;

  const sqlText = `
    INSERT INTO "animals" ("animal", "image", "description")
    VALUES
    ($1, $2, $3)
  `

  const sqlValues = [animalData.name, animalData.imgUrl, animalData.description];

  pool.query(sqlText, sqlValues)
      .then((dbResult) => {
        console.log("dbresult is: ", dbResult);
        res.sendStatus(201);
      }).catch((dbError) => {
        console.log("Error in POST: ", dbError);
        res.sendStatus(500);
      })
});

module.exports = router;
