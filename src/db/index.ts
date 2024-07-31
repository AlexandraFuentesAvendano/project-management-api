import { Client, Pool } from "pg";

export const client = new Client({
  host: "localhost",
  port: 5432,
  user: "Alexa",
  password: "",
  database: "project_management"
});

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "Alexa",
  password: "",
  database: "project_management"
});
