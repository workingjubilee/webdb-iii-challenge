const express = require("express");

const Cohorts = require("./dbConfig.js");

const router = express.Router();

// #### cohorts

// - `id`: primary key, auto-increments.
// - `name`: text, required.

// #### students

// - `id`: primary key, auto-increments.
// - `name`: text, required.
// - `cohort_id`: references the `id` in the cohorts table.

// [POST] /api/cohorts This route should save a new cohort to the database.
// [GET] /api/cohorts This route will return an array of all cohorts.
// [GET] /api/cohorts/:id This route will return the cohort with the matching id.
// [GET] /api/cohorts/:id/students returns all students for the cohort with the specified id.
// [PUT] /api/cohorts/:id This route will update the cohort with the matching id using information sent in the body of the request.
// [DELETE] /api/cohorts/:id This route should delete the specified cohort.

router.post('/', async (req,res) => {
  const {name} = req.body;

  if (!name) {
    res.status(400).json({ error: "Not enough nomenclature."})
  } else {

    try { 
      let reply = await Cohorts("cohorts").insert({ name });

      res.status(201).json(reply);
    } catch(error) {
      res.status(500).json({ error: "The DB lost your request while it went gambling." });
    }

  }
})

router.get('/', async (req,res) => {
  try { 
    let reply = await Cohorts.from("cohorts");

    res.status(200).json(reply);
  } catch(error) {
    res.status(500).json(error);
  }
})



module.exports = router;