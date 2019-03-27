const express = require("express");

const Students = require("./dbConfig.js");

const router = express.Router();

// #### students

// - `id`: primary key, auto-increments.
// - `name`: text, required.

// #### students

// - `id`: primary key, auto-increments.
// - `name`: text, required.
// - `cohort_id`: references the `id` in the students table.


// [POST] /api/students This route should save a new cohort to the database.
// [GET] /api/students This route will return an array of all students.
// [GET] /api/students/:id This route will return the cohort with the matching id.
// [GET] /api/students/:id/students returns all students for the cohort with the specified id.
// [PUT] /api/students/:id This route will update the cohort with the matching id using information sent in the body of the request.
// [DELETE] /api/students/:id This route should delete the specified cohort.

// - `[POST] /students` This route should save a new student to the database.
// - `[GET] /students` This route will return an array of all students.
// - `[GET] /students/:id` This route will return the student with the matching `id`.
// - `[PUT] /students/:id` This route will update the student with the matching `id` using information sent in the body of the request.
// - `[DELETE] /students/:id` This route should delete the specified student.

// Have the student returned by the `[GET] /students/:id` endpoint include the cohort name and remove the `cohort_id` fields. The returned object should look like this:

router.post('/', async (req,res) => {
  const { name, cohort_id } = req.body;
  const student = { name, cohort_id }

  if (!name) {
    res.status(400).json({ error: "Not enough nomenclature."})
  } else {

    try { 
      let reply = await Students("students").insert(student);

      res.status(201).json(reply);
    } catch(error) {
      res.status(500).json({ error: "The DB lost your request while it went gambling." });
    }

  }
})

router.get('/', async (req,res) => {
  try { 
    let reply = await Students.from("students");

    res.status(200).json(reply);
  } catch(error) {
    res.status(500).json(error); 
  }
})

router.get('/api/students/:id', async (req,res) => {
  const {id} = req.params;

  try { 
    let reply = await Students.from("students").where('id', id);
    
    res.status(200).json(reply);
  } catch(error) {
    res.status(500).json(error);
  }
})

router.put('/api/students/:id', async (req,res) => {
  const { id } = req.params;
  const { name, cohort_id } = req.body;
  const changes = { name, cohort_id }

  if (!name) {
    res.status(400).json({ error: "Not enough nomenclature."})
  } else {

    try { 
      let reply = await Students("students").where('id', id).update(changes);

      res.status(202).json(reply);
    } catch(error) {
      res.status(500).json({ error: "The DB got drunk and forgot your name." });
    }

  }
})


router.delete('/api/students/:id', async (req,res) => {
  const {id} = req.params;

 try { 
    let reply = await Students("students").where('id', id).del();

    res.status(202).json(reply);
  } catch(error) {
    res.status(500).json({ error: "The DB broke everything EXCEPT the record you wanted gone." });
  }
})



module.exports = router;