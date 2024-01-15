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
    INSERT INTO "animals" ("animal", "user_id", "image", "description")
    VALUES
    ($1, $2, $3, $4);
  `

  const sqlValues = [animalData.name, req.user.id, animalData.imgUrl, animalData.description];

  pool.query(sqlText, sqlValues)
      .then((dbResult) => {
        console.log("dbresult is: ", dbResult);
        res.sendStatus(201);
      }).catch((dbError) => {
        console.log("Error in POST: ", dbError);
        res.sendStatus(500);
      })
});

router.delete('/:id', (req, res) => {
  console.log("req.body is:", req.params.id); // Since we're deleting, use req.params instead of req.body
  const sqlText = `
  DELETE FROM "animals" WHERE "id" = $1;
  `

  const values = [req.params.id];
  pool.query(sqlText, values)
      .then((result) => {
        console.log("dbResult is:", result);
        res.sendStatus(201);
      }).catch((err) => {
        console.log('Error somethin', err);
        res.sendStatus(500);
      })

})

router.put('/:id', (req, res) => {
  console.log("PUT data:", req.body);

  const sqlText = `
  UPDATE "animals"
  SET
    "animal" = $1,
    "image" = $2,
    "description" = $3
  WHERE
    "id" = $4;
  `

  const sqlValues = [req.body.animal, req.body.image, req.body.description, req.body.id];
  
  pool.query(sqlText, sqlValues)
      .then((result) => {
        res.sendStatus(200);
      }).catch((error) => {
        console.log('ERROR in PUT request', error);
        res.sendStatus(error);
      })
})

module.exports = router;
