const mongoose = require("mongoose");
const fastify = require("fastify")({ logger: true });
const path = require("path");
require("dotenv").config();
const routes = require("./routes");

fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "dist")
});

const url = process.env.DATABASE_URL;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(
    () => console.log("Database successfully connected!"),
    error => console.log("Unable to connect to database: " + error)
  );

// fastify.get("/", (req, reply) => {
//   reply.send("hey fastify server");
// });

fastify.get("/", async (req, reply) => {
  try {
    reply.sendFile("index.html");
  } catch (e) {
    console.log(e);
  }
});

routes.forEach(route => fastify.route(route));

fastify.listen(process.env.PORT || 4500, "0.0.0.0", (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
