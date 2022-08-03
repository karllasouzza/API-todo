/*  After installing the "express", we import it so
    that we can use it in this file */
import express from "express";

/* After importing, we use the "express" to initialize the instance */
const app = express();

// Middleware
/*  In this case the "express.json()" will convert the request
    from "Plain Text" to "Json".  */
app.use(express.json());

// Routes
import Tasks  from "./Routes/Tasks.js";
// import Users from "./Routes/Users.js";

// Database
import { userTable, taskTable } from "./database/bd.js";

Tasks(app, taskTable);
// Users(app, userTable);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app listen: http://localhost:${port}`);
});
