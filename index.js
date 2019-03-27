const express = require("express");
const helmet = require("helmet");

const knex = require("knex");
const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const cohortsRouter = require("./routers/cohortsRouter.js");
const studentsRouter = require("./routers/studentsRouter.js");


const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/cohorts", cohortsRouter);
server.use("/api/students", studentsRouter);


server.listen(7777, () =>
  console.log(`\n** It's alive! **\n`)
);