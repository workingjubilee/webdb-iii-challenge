const express = require("express");

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



module.exports = router;