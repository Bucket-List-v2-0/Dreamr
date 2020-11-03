const app = require("./app");
const { sequelize } = require("../db/models");

const { PORT } = process.env;

async function verifiedConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conntected succesfully");
  } catch (err) {
    console.log("Can't connect");
    console.log(err.message);
    process.exit(1);
  }
}

async function init() {
  await verifiedConnection();
  console.log(`Starting server on port:${PORT}`);
  app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`);
  });
}

init();
